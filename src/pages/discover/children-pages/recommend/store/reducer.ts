import { RecommendActionType } from './constants'

import type { IRecommendState } from '../types'
import type { IAction } from 'store/types'

// 初始值 返回的要是这个类型
const initState: IRecommendState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
}

export default function reducer(state: IRecommendState = initState, action: IAction<any>) {
  const { type, data } = action
  switch (type) {
    case RecommendActionType.TOP_BANNERS:
      return { ...state, topBanners: data.banners }
    case RecommendActionType.HOT_RECOMMEND:
      return { ...state, hotRecommends: data.result }
    case RecommendActionType.NEW_ALBUM:
      return { ...state, newAlbums: data.albums }
    case RecommendActionType.UP_RANKING:
      return { ...state, upRanking: data.playlist }
    case RecommendActionType.NEW_RANKING:
      return { ...state, newRanking: data.playlist }
    case RecommendActionType.ORIGIN_RANKING:
      return { ...state, originRanking: data.playlist }
    default:
      return state
  }
}
