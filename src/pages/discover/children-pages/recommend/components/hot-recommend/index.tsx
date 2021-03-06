import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotRecommendAction } from '../../store/actions'

import ThemeHeaderRecommend from 'components/theme-header-recommend' 
import SongsCover from 'components/songs-cover'
import { HotRecommendWrapper, HotRecommendSongs } from './styled'

import type { ICombineReducers } from 'store/types'
import type { IUseSelectorHotRecommendsReturn } from '../../types'

export default function HotRecommend() {
  const { hotRecommends } = useSelector<ICombineReducers, IUseSelectorHotRecommendsReturn>((state) => {
    return { hotRecommends: state.recommend.hotRecommends }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title='热门推荐' keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <HotRecommendSongs>
        {/* 每一项歌曲框框 */}
        {hotRecommends?.map(item => <SongsCover key={item.id} item={item} />)}
      </HotRecommendSongs>
    </HotRecommendWrapper>
  )
}
