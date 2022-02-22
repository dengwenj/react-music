// 库
import React from 'react'
// 组件
import ThemeHeaderRecommend from 'components/theme-header-recommend'
import { NewAlbumWrapper } from './styled'

export default function NewAlbum() {
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRecommend title='新碟上架' />
    </NewAlbumWrapper>
  )
}
