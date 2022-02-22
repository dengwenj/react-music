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
  }, shallowEqual) // shallowEqual 比较的是依赖的数据发生变化没有， shallowEqual 会对 对象里面的属性进行浅比较，没有变就不会重新渲染，性能优化。不加的话，组件依赖了这个数据每次都会重新渲染

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <>{banners?.length}</>
  )
}

/**
 * 浅比较概念：浅比较也称引用相等，在js中===是做浅比较，只检查左右两边是否是同一个对象的引用；
 * {如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。 
 * 修改其中一个变量，会影响到其他所有变量。 这种引用只局限于对象，如果两个变量指向同一个原始类型的值。 那么，变量这时都是值的拷贝。
 */