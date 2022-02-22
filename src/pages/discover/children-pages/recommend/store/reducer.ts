import { RecommendActionType } from './constants'

import type { ITopBannersState } from '../types'
import type { IAction } from 'store/types'
import type { IBannersAPI } from 'services/types'

// 初始值 返回的要是这个类型
const initState: ITopBannersState = {
  topBanners: []
}

export default function reducer(state: ITopBannersState = initState, action: IAction<IBannersAPI>) {
  const { type, data } = action
  switch (type) {
    case RecommendActionType.TOP_BANNERS:
      return { ...state, topBanners: data.banners }
    default:
      return state
  }
}
