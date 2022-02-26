import { PlayerActionType } from './constants'

import { getSongDetail } from 'services/api/player'
import { Sequence, PrevOrNext } from '../types'

import type { Dispatch } from "redux"
import type { IGetState, Obj } from '../types'

const changePlayList = (playList: Obj[]) => ({
  type: PlayerActionType.CHANGE_PLAY_LIST,
  data: playList
})

const changePreSongIndexArr = (preSongIndexArr: number[]) => ({
  type: PlayerActionType.CHANGE_PRE_SONG_INDEX,
  data: preSongIndexArr
})

const changeCurrentSongIndex = (index: number) => ({
  type: PlayerActionType.CHANGE_CURRENT_SONG_INDEX,
  data: index
})

const changeCurrentSong = (song: Obj) => ({
  type: PlayerActionType.CHANGE_CURRENT_SONG,
  data: song
})

export const changeSequence = (sequence: Sequence) => ({
  type: PlayerActionType.CHANGE_SEQUENCE,
  data: sequence
})

function randomPlayHandleFunc(
  currentSongIndexNext1: number, 
  currentSongIndex: number, 
  currentSongNext1: Obj, 
  preSongIndexArr: number[], 
  playList: Obj[], 
  dispatch: Dispatch
) {
  currentSongIndexNext1 =  Math.floor(Math.random() * playList.length)
  while (currentSongIndexNext1 === currentSongIndex) { // 相等的话就一直循环
    currentSongIndexNext1 = Math.floor(Math.random() * playList.length)
  }
  currentSongNext1 = playList[currentSongIndexNext1]  
  dispatch(changePreSongIndexArr([...preSongIndexArr, currentSongIndex]))
  dispatch(changeCurrentSongIndex(currentSongIndexNext1))
  dispatch(changeCurrentSong(currentSongNext1))
}

export const changeCurrentSongAndCurrentIndex = (tag: PrevOrNext) => {
  return (dispatch: Dispatch, getState: IGetState) => {
    const { sequence, currentSongIndex, playList, preSongIndexArr } = getState().player
    // 下面的有些可以不放在 switch 里面 放在外面
    switch (sequence) {
      case Sequence.random: // 随机播放
        let currentSongIndexNext1: number
        let currentSongNext1: Obj
        if (tag === PrevOrNext.prev) { // 随机播放的话如果点击的上一首的话是播放上一次的不是随机的，只要点击下一首才是随机的
          if (preSongIndexArr.length === 0) {
            randomPlayHandleFunc(currentSongIndexNext1!, currentSongIndex, currentSongNext1!, preSongIndexArr, playList, dispatch)
            return
          }
          dispatch(changeCurrentSong(playList[preSongIndexArr[preSongIndexArr.length - 1]]))
          const newPreSongIndexArr = preSongIndexArr.slice(0, -1) // 返回一个新的数组
          dispatch(changePreSongIndexArr(newPreSongIndexArr))
          return
        }
        randomPlayHandleFunc(currentSongIndexNext1!, currentSongIndex, currentSongNext1!, preSongIndexArr, playList, dispatch)
        break
      default: // 顺序播放 单曲循环也是顺序播放 点击上一首或下一首
        let currentSongIndexNext: number
        let currentSongNext: Obj
        currentSongIndexNext = currentSongIndex + tag
        currentSongNext = playList[currentSongIndexNext]
        if (tag === PrevOrNext.next) { // 点的下一首
          if (currentSongIndex >= playList.length - 1) {
            currentSongIndexNext = 0
            currentSongNext = playList[currentSongIndexNext]
          }
        } else { // 点的上一首
          if (currentSongIndex === 0) {
            currentSongIndexNext = playList.length - 1
            currentSongNext = playList[currentSongIndexNext]
          }
        }
        dispatch(changeCurrentSongIndex(currentSongIndexNext))
        dispatch(changeCurrentSong(currentSongNext))
        break
    }
  }
}
 
export const getSongDetailAction = (ids: number) => {
  return async (dispatch: Dispatch, getState: IGetState) => {
    // 根据 id 查找 playList 中是否已经有了该歌曲
    const { playList } = getState().player
    const songIndex = playList.findIndex((song) => song?.id === ids)

    // itemSong 为 -1 说明没有该歌曲，不为 -1 说明有该歌曲
    if (songIndex !== -1) { // 说明找到了
      dispatch(changeCurrentSongIndex(songIndex))
      dispatch(changeCurrentSong(playList[songIndex]))
      return
    }
    // 没有找到，发送请求 拿到具体的这个歌曲的所有数据 detail
    try {
      const res = await getSongDetail(ids)
      const song = res?.songs?.[0]
      const newPlayList = [...playList, song]
      
      dispatch(changePlayList(newPlayList))
      dispatch(changeCurrentSongIndex(newPlayList.length - 1))
      dispatch(changeCurrentSong(res.songs?.[0]))
    } catch (error) {
      console.log(error)
    }
  }
}
