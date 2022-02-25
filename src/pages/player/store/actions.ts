import { PlayerActionType } from './constants'

import { getSongDetail } from 'services/api/player'

import type { Dispatch } from "redux"
import type { IGetState, Obj } from '../types'

const changePlayList = (playList: Obj[]) => ({
  type: PlayerActionType.CHANGE_PLAY_LIST,
  data: playList
})

const changeCurrentSongIndex = (index: number) => ({
  type: PlayerActionType.CHANGE_CURRENT_SONG_INDEX,
  data: index
})

const changeCurrentSong = (song: Obj) => ({
  type: PlayerActionType.CHANGE_CURRENT_SONG,
  data: song
})
 
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
