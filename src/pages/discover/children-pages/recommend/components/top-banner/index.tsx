// 第三方库
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

// 业务逻辑
import { getTopBannersAction } from '../../store/actions'

// 组件
import { BannerWrapper, BannerRight, BannerLift, BannerContent } from './styled'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

// 类型
import type { ICombineReducers } from 'store/types'
import type { IUseSelectorBannersReturn } from '../../types'
import type { CarouselRef } from 'antd/lib/carousel'

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()
  /**
   * 第一个泛型是参数，第二个泛型是返回值 。state这个参数是返回的全部的 state 就是 combineReducers 参数里面传的对象
   * return 的值就是 useSelect 的返回值
   */
  const { banners } = useSelector<ICombineReducers, IUseSelectorBannersReturn>((state) => {
    return { banners: state.recommend.topBanners }
  }, shallowEqual) // shallowEqual 比较的是依赖的数据发生变化没有， shallowEqual 会对 对象里面的属性进行浅比较，没有变就不会重新渲染，性能优化。不加的话，组件依赖了这个数据每次都会重新渲染

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  // 获取 Carousel 组件方法
  const carouselRef = useRef<CarouselRef>(null)
  const handleBeforeChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  const showBanners = () => {
    return banners?.map((item) => {
      return (
        <div className='div-img' key={item.imageUrl}>
          <img className='img' src={item.imageUrl} alt={item.typeTitle} />
        </div>
      )
    })
  }

  return (
    <BannerWrapper bgImgs={banners?.[currentIndex]?.imageUrl + '?imageView&blur=40x20'}>
      <div className='center wrap-v2'>
        <BannerLift>
          {/* 轮播图 */}
          <Carousel effect="fade" autoplay ref={carouselRef} beforeChange={handleBeforeChange}>
            {showBanners()}
          </Carousel>
        </BannerLift>
        <BannerRight />
        <BannerContent>
          <span className='left' onClick={() => carouselRef.current?.prev()}><LeftOutlined /></span>
          <span className='right' onClick={() => carouselRef.current?.next()}><RightOutlined /></span>
        </BannerContent>
      </div>
    </BannerWrapper>
  )
}
