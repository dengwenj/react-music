import React from 'react'

import { playCount } from 'utils/format'

import { PlayCircleOutlined } from '@ant-design/icons'
import { SongsCoverWrapper, SongsCoverTop, SongsCoverBottom } from './styled'

import type { ISongsCoverProps } from './types'

export default function SongsCover({ item }: ISongsCoverProps) {
  return (
    <SongsCoverWrapper>
      <SongsCoverTop>
        <div className='mack'></div>
        <img src={item.picUrl} alt="" />
        <div className='songs-bottom'>
          <div className='left'>
            <i>🎧</i>
            <span>{playCount(item.playCount)}</span>
          </div>
          <em className='right'><PlayCircleOutlined /></em>
        </div>
      </SongsCoverTop>
      <SongsCoverBottom>
        <div className='name'>{item.name}</div>
      </SongsCoverBottom>
    </SongsCoverWrapper>
  )
}
