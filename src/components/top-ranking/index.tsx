import React from 'react'
import { useDispatch } from 'react-redux'

import { getSongDetailAction } from 'pages/player/store/actions'

import { PlayCircleOutlined, FolderAddOutlined, PlusOutlined } from '@ant-design/icons'
import { TopRankingWrapper, TopRankingHeader, TopRankingContent, TopRankingFooter } from './styled'

import type { ITopRankingProps } from './types'

export default function TopRanking({ item }: ITopRankingProps) {
  const tracks: any[] = item.tracks?.slice(0, 10) || []

  // redux hook
  const dispatch = useDispatch()

  // handle function
  const handlePlayClick = (item: Record<string, any>) => {
    return () => dispatch(getSongDetailAction(item.id))
  }

  return (
    <TopRankingWrapper>
      <TopRankingHeader>
        <img title={item.name} src={item.coverImgUrl} alt="" />
        <div className='right'>
          <strong title={item.name}>{item.name}</strong>
          <span>
            <i title='播放'><PlayCircleOutlined /></i>
            <em title='收藏'><FolderAddOutlined /></em>
          </span>          
        </div>
      </TopRankingHeader>
      <TopRankingContent>
        {
          tracks.map((item, index) => {
            return (
              <div className='list-item' key={item.id}>
                <div className='index' style={index >= 3 ? {} : { color: '#b1281e' }}>{index + 1}</div>
                <div className='name-icon'>
                  <span className='name' title={item.name}>{item.name}</span>
                  <span className='icon'>
                    <i title='播放' onClick={handlePlayClick(item)}><PlayCircleOutlined /></i>
                    <strong title='添加到播放列表'><PlusOutlined /></strong>
                    <em title='收藏'><FolderAddOutlined /></em>
                  </span>
                </div>
              </div>
            )
          })
        }
      </TopRankingContent>
      <TopRankingFooter>
        <span>查看全部 &gt;</span>
      </TopRankingFooter>
    </TopRankingWrapper>
  )
}
