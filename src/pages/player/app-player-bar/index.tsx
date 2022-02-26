import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import dayjs from 'dayjs'

import { getSongDetailAction, changeSequence, changeCurrentSongAndCurrentIndex } from '../store/actions'
import getPlaySong from 'utils/getPlaySong'

import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { 
  LeftCircleOutlined, 
  RightCircleOutlined, 
  PlayCircleOutlined, 
  PauseCircleOutlined,
  YoutubeOutlined,
  MinusSquareOutlined,
  FolderAddOutlined,
  ShareAltOutlined,
  SoundOutlined
} from  '@ant-design/icons'
import { AppPlayerBarWrapper, AppPlayerBarContent } from './styled'

import type { ICombineReducers } from 'store/types'
import { IUseSelectorCurrentSongReturn, Sequence, PrevOrNext } from '../types'

export default function AppPlayerBar() {
  // react state
  const [currentTime, setCurrentTime] = useState(0) // 毫秒
  const [sliderValue, setSliderValue] = useState(0) // 滑动条滑动
  const [isChanging, setChanging] = useState(false) // 判断正在 change 拖动不
  const [isPlaying, setIsPlaying] = useState(false) // 暂停启动播放 默然是暂停

  // redux state
  const { currentSong, sequence, playList } = useSelector<ICombineReducers, IUseSelectorCurrentSongReturn>((state) => ({
    currentSong: state.player.currentSong,
    sequence: state.player.sequence,
    playList: state.player.playList
  }), shallowEqual)
  const dispatch = useDispatch()
  
  // react hooks
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    audioRef.current!.src = getPlaySong(currentSong?.id)
    // 刷新一上来是没有播放的 直接 audioRef.current!.play() 这样写会报错，他返回 promise
    audioRef.current!.play().then((res) => {
      // console.log(res)
    }).catch((error) => {
      // console.log(error)
    })
  }, [currentSong])

  // handle function
  const handlePlaySong = useCallback(() => {
    isPlaying ? audioRef.current!.pause() : audioRef.current!.play()
    // 写在下面。写在上面的话，因为修改 setIsPlaying 这个是异步的 不会立即拿到 isPlaying， 所以在这里拿到还是之前的isPlaying
    setIsPlaying(!isPlaying)
  }, [isPlaying])
  const handleTimeUpdate = (e: any) => {
    // console.log(e.target.currentTime);
    
    // 没有正在发生变化
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setSliderValue(currentTime / currentSong?.dt * 100)
    }
  }
  // 滑动条移动的时候
  const handleSliderChange = useCallback((value: number) => {
    // 发生变了，设置为 true，不让滑动条跳动到原来那里
    setChanging(true)
    setSliderValue(value)
    setCurrentTime((currentSong?.dt / 1000) * value / 100 * 1000)
  }, [currentSong?.dt])
  const handleAfterChange = useCallback((value: number) => {
    // 拿到当前的时间,当前时间变了就会触发 onTimeUpdate，当前时间是多少就会播放那个时间段
    const currentTime = (currentSong?.dt / 1000) * value / 100
    audioRef.current!.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setChanging(false)

    // 当松开 也播放
    if (!isPlaying) handlePlaySong()
  }, [currentSong?.dt, isPlaying, handlePlaySong])
  // 点击播放顺序 循环 随机 单曲循环
  const handleSequenceClick = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) currentSequence = 0
    dispatch(changeSequence(currentSequence))
  }
  // 点击上一首或者下一首  currentIndex 变化， currentSong 变化
  const handleChangeMusic = (tag: PrevOrNext) => {
    return () => {
      dispatch(changeCurrentSongAndCurrentIndex(tag))
      setIsPlaying(true)
    }
  }
  // 当当前歌曲播放完了时候
  const  handleEndMusic = () => {
    // 是单曲循环重新播放，循环就播放下一首，随机随机播放
    if (sequence === Sequence.cycle) {
      dispatch(changeCurrentSongAndCurrentIndex(PrevOrNext.next))
    } else if (sequence === Sequence.singleCycle) {
      audioRef.current!.currentTime = 0 // 重新播放
      audioRef.current!.play()
    } else {
      dispatch(changeCurrentSongAndCurrentIndex(PrevOrNext.next)) // 随机播放
    }
  }

  return (
    <AppPlayerBarWrapper>
      <AppPlayerBarContent className='wrap-v2' sequence={sequence}>
        <div className='left'>
          <i title='上一首⏮' onClick={handleChangeMusic(PrevOrNext.prev)}><LeftCircleOutlined /></i>
          <strong title='播放/暂停' onClick={handlePlaySong}>{!isPlaying ? <PlayCircleOutlined /> : <PauseCircleOutlined />}</strong>
          <em title='下一首⏭' onClick={handleChangeMusic(PrevOrNext.next)}><RightCircleOutlined /></em>
        </div>
        <div className='center'>
          <NavLink to={{ pathname: '/discover/player', search: `id=${currentSong?.id}` }} className='image'>
            <img src={currentSong?.al?.picUrl} alt="" />
          </NavLink>
          <div className='info'>
            <div className='top'>
              <span>{currentSong?.name}</span>
              <i><YoutubeOutlined /></i>
              <em>{currentSong?.ar?.[0]?.name}</em>
            </div>
            <div className='bottom'>
              <Slider
                tooltipVisible={false}
                value={sliderValue} 
                onChange={handleSliderChange}
                onAfterChange={handleAfterChange}
                />
              <div className='time'> 
                <i>{dayjs(currentTime).format('mm:ss')}</i>
                <em>/</em>
                <span>{dayjs(currentSong?.dt).format('mm:ss')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='mfs'>
            <span title='画中画歌词'><MinusSquareOutlined /></span>
            <span title='收藏'><FolderAddOutlined /></span>
            <span title='分享'><ShareAltOutlined /></span>
          </div>
          <div className='x'></div>
          <div className='other'>
            <span title='音量'><SoundOutlined /></span>
            <i 
              title={sequence === Sequence.cycle ? '循环' : (sequence === Sequence.random ? '随机' : '单曲循环')} 
              onClick={handleSequenceClick}
            />
            <em title='播放列表'>{playList.length}</em>
          </div>
        </div>
      </AppPlayerBarContent>
      {/* 播放音乐 播放就会一直触发 onTimeUpdate 这个钩子拿到当前的时间，当前的时间也是可以修改的有个 currentTime 属性，修改了当前时间就会播放当前的那个时间段 */}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleEndMusic} />
    </AppPlayerBarWrapper>
  )
}
