import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getSongDetailAction } from '../store/actions'

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
  const { currentSong } = useSelector<ICombineReducers, IUseSelectorCurrentSongReturn>((state) => ({
    currentSong: state.player.currentSong
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  return (
    <AppPlayerBarWrapper>
      <AppPlayerBarContent className='wrap-v2'>
        <div className='left'>
          <i><LeftCircleOutlined /></i>
          <strong><PauseCircleOutlined /></strong>
          <em><RightCircleOutlined /></em>
        </div>
        <div className='center'>
          <div className='image'>
            <img src="http://p4.music.126.net/2CSVBewDknbP3c9m_G9Qeg==/112150186046323.jpg?param=34y34" alt="" />
          </div>
          <div className='info'>
            <div className='top'>
              <span>故乡</span>
              <i><YoutubeOutlined /></i>
              <em>许馨文</em>
            </div>
            <div className='bottom'>
              <Slider defaultValue={30} />
              <div className='time'>
                <i>02:40</i>
                <em>/</em>
                <span>02:40</span>
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
    </AppPlayerBarWrapper>
  )
}
