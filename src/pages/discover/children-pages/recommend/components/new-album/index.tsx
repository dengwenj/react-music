import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actions' 

import ThemeHeaderRecommend from 'components/theme-header-recommend'
import { NewAlbumWrapper } from './styled'

import type { IUseSelectorNewAlbumsReturn } from '../../types'
import { ICombineReducers } from 'store/types'

export default function NewAlbum() {
  const { newAlbums } = useSelector<ICombineReducers, IUseSelectorNewAlbumsReturn>((state) => {
    return { newAlbums: state.recommend.newAlbums }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRecommend title='新碟上架' />
      {
        newAlbums?.map((item) => {
          return <div key={item.name}>{item.name}</div>
        })
      }
    </NewAlbumWrapper>
  )
}
