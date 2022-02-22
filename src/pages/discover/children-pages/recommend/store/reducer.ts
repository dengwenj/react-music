import { RecommendActionType } from './constants'

import type { IRecommendState } from '../types'
import type { IAction } from 'store/types'

// 初始值 返回的要是这个类型
const initState: IRecommendState = {
  topBanners: [],
  hotRecommends: []
}

export default function reducer(state: IRecommendState = initState, action: IAction<any>) {
  const { type, data } = action
  switch (type) {
    case RecommendActionType.TOP_BANNERS:
      return { ...state, topBanners: data.banners }
    case RecommendActionType.HOT_RECOMMEND:
      return { ...state, hotRecommends: data.result }
    default:
      return state
  }
}
