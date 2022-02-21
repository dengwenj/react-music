import { TOP_BANNERS } from './constants'

import type { IAction } from 'global/global-types'
import type { ITopBannersState } from '../types'

// 初始值
const initState: ITopBannersState = {
  topBanners: []
}

export default function reducer(state: ITopBannersState = initState, action: IAction) {
  const { type, data } = action
  switch (type) {
    case TOP_BANNERS:
      return { ...state, data }
    default:
      return state
  }
}
