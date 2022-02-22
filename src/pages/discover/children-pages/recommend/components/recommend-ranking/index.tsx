// 库
import React from 'react'
// 组件
import ThemeHeaderRecommend from 'components/theme-header-recommend'
import { RecommendRankingWrapper } from './styled'

export default function RecommendRanking() {
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRecommend title='榜单' />
    </RecommendRankingWrapper>
  )
}
