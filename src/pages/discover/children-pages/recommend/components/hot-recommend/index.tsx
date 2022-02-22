// 库
import React from 'react'
// 组件
import ThemeHeaderRecommend from 'components/theme-header-recommend' 
import { HotRecommendWrapper } from './styled'

export default function HotRecommend() {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title='热门推荐' keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
    </HotRecommendWrapper>
  )
}
