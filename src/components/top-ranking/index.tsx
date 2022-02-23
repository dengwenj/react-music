import React from 'react'

import { PlayCircleOutlined, FolderAddOutlined, PlusOutlined } from '@ant-design/icons'
import { TopRankingWrapper, TopRankingHeader, TopRankingContent, TopRankingFooter } from './styled'

import type { ITopRankingProps } from './types'

export default function TopRanking({ item }: ITopRankingProps) {
  const tracks: any[] = item.tracks?.slice(0, 10) || []
  console.log(tracks);
  
  return (
    <TopRankingWrapper>
      <TopRankingHeader>
        <img src={item.coverImgUrl} alt="" />
        <div className='right'>
          <strong>{item.name}</strong>
          <span>
            <i><PlayCircleOutlined /></i>
            <em><FolderAddOutlined /></em>
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
                    <i><PlayCircleOutlined /></i>
                    <strong><PlusOutlined /></strong>
                    <em><FolderAddOutlined /></em>
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
