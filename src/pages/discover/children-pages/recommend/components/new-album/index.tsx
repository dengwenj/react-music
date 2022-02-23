import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actions' 

import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import ThemeHeaderRecommend from 'components/theme-header-recommend'
import AblumCover from 'components/ablum-cover'
import { NewAlbumWrapper, NewAlbumContent } from './styled'

import type { IUseSelectorNewAlbumsReturn } from '../../types'
import type { ICombineReducers } from 'store/types'
import type { CarouselRef } from 'antd/lib/carousel'

export default function NewAlbum() {
  const { newAlbums } = useSelector<ICombineReducers, IUseSelectorNewAlbumsReturn>((state) => {
    return { newAlbums: state.recommend.newAlbums }
  }, shallowEqual)
  const dispatch = useDispatch()
  // splice 会修改数组， slice 不会修改原数组
  const allArr = [newAlbums?.slice(0, 5), newAlbums?.slice(5, 10)]

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  const carouselRef = useRef<CarouselRef>(null)

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRecommend title='新碟上架' />
      <NewAlbumContent>
        <div className='left-click' onClick={() => carouselRef.current?.prev()}><LeftOutlined /></div>
        <div className='right-click' onClick={() => carouselRef.current?.next()}><RightOutlined /></div>
        <Carousel className='carousel' dots={false} ref={carouselRef}>
          {
            allArr?.map((item, index) => {
              return (
                <div className='page' key={index}>
                  {
                    item?.map((iten) => {
                      return (
                        <AblumCover
                          wWidth={125}
                          key={iten.id}
                          iten={iten} 
                          width={100}
                          height={100} 
                          bgp={-570}
                          mskWidth={118}
                        />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </NewAlbumContent>
    </NewAlbumWrapper>
  )
}
