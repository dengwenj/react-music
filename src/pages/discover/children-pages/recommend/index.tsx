import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from './store/actions'

import type { ICombineReducers } from 'store/types'
import type { IUseSelectorReturn } from './types'

// 推荐模块
export default function Recommend() {
  const dispatch = useDispatch()

  /**
   * 第一个泛型是参数，第二个泛型是返回值 。state这个参数是返回的全部的 state 就是 combineReducers 参数里面传的对象
   * return 的值就是 useSelect 的返回值
   */
  const { banners } = useSelector<ICombineReducers, IUseSelectorReturn>((state) => {
    return { banners: state.recommend.topBanners }
  }, shallowEqual) // shallowEqual 会对 对象里面的属性进行浅比较，没有变就不会重新渲染。性能优化

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <div>{banners?.length}</div>
  )
}
