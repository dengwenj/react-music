import React, { useState, useEffect, useRef } from 'react'
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
  const [currentTime, setCurrentTime] = useState(0) // 秒

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
    setCurrentTime(e.target.currentTime * 1000) 
  }

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
              <Slider value={currentTime / currentSong?.dt * 100} />
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
