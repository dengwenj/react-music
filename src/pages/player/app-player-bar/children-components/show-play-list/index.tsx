import React, { useRef, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import { scrollTo } from 'utils/ui-helper'
import { getSongDetailAction } from 'pages/player/store/actions'

import { FolderAddOutlined, DeleteOutlined, DisconnectOutlined } from '@ant-design/icons'
import { ShowPlayListWrapper, ShowPlayListTop, ShowPlayListContent } from './styled'

import type { ICombineReducers } from 'store/types'
import type { IUseSelectorPlayListReturn, Obj } from 'pages/player/types'
import type { IShowPlayListProps } from './types'

export default function ShowPlayList({ setIsShowPlayList }: IShowPlayListProps) {
  const { 
    playList, 
    currentSong,
    timeAndLyricArr,
    currentLyricIndex
  } = useSelector<ICombineReducers, IUseSelectorPlayListReturn>((state) => ({
    playList: state.player.playList,
    currentSong: state.player.currentSong,
    timeAndLyricArr: state.player.timeAndLyricArr,
    currentLyricIndex: state.player.currentLyricIndex
  }), shallowEqual)
  const dispatch = useDispatch()

  const ulRef = useRef<HTMLUListElement>(null)
  
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    const timer = scrollTo(ulRef.current!, (currentLyricIndex - 3) * 32, 300)
    return () => {
      clearTimeout(timer!)
    }
  }, [currentLyricIndex]);

  // handle fucntion
  const handlePlaySong = (item: Obj) => {
    return () => {
      dispatch(getSongDetailAction(item?.id))
    }
  }
  const handleClosure = () => {
    setIsShowPlayList(false)
  }

  return (
    <ShowPlayListWrapper>
      <ShowPlayListTop>
        <div className='top-left'>
          <strong>播放列表({playList.length})</strong>
          <span className='fd'>
            <i><FolderAddOutlined />收藏全部</i>
            <em><DeleteOutlined />清除</em>
          </span>
        </div>
        <div className='top-right'>
          <span>{currentSong?.name}</span>
          <i onClick={handleClosure}>×</i>
        </div>
      </ShowPlayListTop>
      <ShowPlayListContent>
        <div className='content-left'>
          <ul>
            {
              playList.map((item) => {
                return (
                  <li key={item?.id}>
                    <span
                      className='song-name' 
                      style={currentSong?.name === item?.name ? { color: '#ae271d' } : {}}
                      onClick={handlePlaySong(item)}
                    >
                      {item?.name}
                    </span>
                    <span className='info'>
                      <em title={item?.ar?.[0]?.name}>{item?.ar?.[0]?.name}</em>
                      <i>{dayjs(item?.dt).format('mm:ss')}</i>
                      <strong><DisconnectOutlined /></strong>
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='content-right'>
          <ul ref={ulRef}>
            {
              timeAndLyricArr.map((item, index) => {
                if (item.lyric) {
                  return <li key={index} style={currentLyricIndex === index ? { color: '#fff', fontSize: 14 }: {}}>{item.lyric}</li>
                }
                return <i key={index}></i>
              })
            }
          </ul>
        </div>
      </ShowPlayListContent>
    </ShowPlayListWrapper>
  )
}
