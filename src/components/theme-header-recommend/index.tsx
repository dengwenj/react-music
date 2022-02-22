// 库
import React from 'react'
// 组件
import { 
  ThemeHeaderRecommendWrapper, 
  ThemeHeaderRecommendLift,
  ThemeHeaderRecommendRight
} from './styled'
// 类型
import type { IThemeHeaderRecommendProps } from './types'

export default function ThemeHeaderRecommend({ title, keywords }: IThemeHeaderRecommendProps) {
  const showKeyWords = () => {
    return keywords?.map((item, index) => {
      return (
        <div className='keywords-item' key={item}>
          <span>{item}</span>
          { keywords.length - 1 === index ? <></> : <i>|</i> }
        </div>
      )
    })
  }

  return (
    <ThemeHeaderRecommendWrapper className='sprite_02'>
      <ThemeHeaderRecommendLift>
        <h3 className='title'>{title}</h3>
        {showKeyWords()}
      </ThemeHeaderRecommendLift>
      <ThemeHeaderRecommendRight>
        <span>更多</span>
        <i className='sprite_02'></i>
      </ThemeHeaderRecommendRight>
    </ThemeHeaderRecommendWrapper>
  )
}
