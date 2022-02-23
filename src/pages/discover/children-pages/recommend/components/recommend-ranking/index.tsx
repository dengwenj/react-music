import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/actions'

import ThemeHeaderRecommend from 'components/theme-header-recommend'
import { RecommendRankingWrapper } from './styled'

import type { ICombineReducers } from 'store/types'
import type { IUseSelectorRecommendRankingReturn } from '../../types'

export default function RecommendRanking() {
  const { upRanking, newRanking, originRanking }
    = useSelector<ICombineReducers, IUseSelectorRecommendRankingReturn>((state) => ({
      upRanking: state.recommend.upRanking,
      newRanking: state.recommend.newRanking,
      originRanking: state.recommend.originRanking
    }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRecommend title='榜单' />
    </RecommendRankingWrapper>
  )
}
