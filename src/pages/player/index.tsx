import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './styled'

import type { ICombineReducers } from 'store/types'
import type { IUseSelectorCurrentSongReturn } from './types'

export default function Player() {
  const location = useLocation()
  const id = Number(location.search.split('=')[1])

  const { currentSong } = useSelector<ICombineReducers, IUseSelectorCurrentSongReturn>((state) => ({
    currentSong: state.player.currentSong
  }), shallowEqual)
  // console.log(currentSong)
  
  return (
    <PlayerWrapper className='wrap-v2'>
      <PlayerLeft>
        <h1>info</h1>
        <h1>content</h1>
      </PlayerLeft>
      <PlayerRight>
        <h2>包含这首歌的歌单</h2>
        <h2>相似歌曲</h2>
        <h2>网易云多端下载</h2>
      </PlayerRight>
    </PlayerWrapper>
  )
}
