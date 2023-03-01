import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/actions'

import ThemeHeaderRecommend from 'components/theme-header-recommend'
import TopRanking from 'components/top-ranking'
import { RecommendRankingWrapper, RecommendRankingContent } from './styled'

import type { ICombineReducers } from 'store/types'
import type { IUseSelectorRecommendRankingReturn } from '../../types'

export default function RecommendRanking() {
  const rankingObj = useSelector<ICombineReducers, IUseSelectorRecommendRankingReturn>((state) => ({
    upRanking: state.recommend.upRanking,
    newRanking: state.recommend.newRanking,
    originRanking: state.recommend.originRanking
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])

  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRecommend title='榜单' />
      <RecommendRankingContent>
        {
          Object.keys(rankingObj).map((item) => {
            return <TopRanking item={(rankingObj as any)[item]} key={item} />
          })
        }
      </RecommendRankingContent>
    </RecommendRankingWrapper>
  )
}
