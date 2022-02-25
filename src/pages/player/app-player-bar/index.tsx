import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import dayjs from 'dayjs'

import { getSongDetailAction } from '../store/actions'
import getPlaySong from 'utils/getPlaySong'

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
import type { IUseSelectorCurrentSongReturn } from '../types'

export default function AppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0) // 毫秒
  const [sliderValue, setSliderValue] = useState(0) // 滑动条滑动
  const [isChanging, setChanging] = useState(false) // 判断正在 change 拖动不

  const { currentSong } = useSelector<ICombineReducers, IUseSelectorCurrentSongReturn>((state) => ({
    currentSong: state.player.currentSong
  }), shallowEqual)
  const dispatch = useDispatch()
  console.log(currentSong);
  
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  const handlePlaySong = () => {
    if (audioRef.current) {
      audioRef.current.src = getPlaySong(currentSong?.id)
      // play 播放
      audioRef.current.play()
    }
  }
  const handleTimeUpdate = (e: any) => {
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
    // 拿到当前的时间
    const currentTime = (currentSong?.dt / 1000) * value / 100
    audioRef.current!.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setChanging(false)
  }, [currentSong?.dt])

  return (
    <AppPlayerBarWrapper>
      <AppPlayerBarContent className='wrap-v2'>
        <div className='left'>
          <i><LeftCircleOutlined /></i>
          <strong onClick={handlePlaySong}><PlayCircleOutlined /></strong>
          <em><RightCircleOutlined /></em>
        </div>
        <div className='center'>
          <div className='image'>
            <img src={currentSong?.al?.picUrl} alt="" />
          </div>
          <div className='info'>
            <div className='top'>
              <span>{currentSong?.name}</span>
              <i><YoutubeOutlined /></i>
              <em>{currentSong?.ar?.[0]?.name}</em>
            </div>
            <div className='bottom'>
              <Slider 
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
            <span><MinusSquareOutlined /></span>
            <span><FolderAddOutlined /></span>
            <span><ShareAltOutlined /></span>
          </div>
          <div className='x'></div>
          <div className='other'>
            <span><SoundOutlined /></span>
          </div>
        </div>
      </AppPlayerBarContent>
      {/* 播放音乐 */}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </AppPlayerBarWrapper>
  )
}
