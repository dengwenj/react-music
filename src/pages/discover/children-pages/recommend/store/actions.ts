import { getHotRecommends, getNewAlbums, getTopBanners } from 'services/api/recommend'

import { RecommendActionType } from './constants'

import type { Dispatch } from 'redux'
import type { IBannersAPI, IHotRecommendsAPI, INewAlbumAPI } from 'services/types'

const topBanners = (res: IBannersAPI) => ({
  type: RecommendActionType.TOP_BANNERS,
  data: res
})

const hotRecommends = (res: IHotRecommendsAPI) => ({
  type: RecommendActionType.HOT_RECOMMEND,
  data: res
})

const newAlbums = (res: INewAlbumAPI) => ({
  type: RecommendActionType.NEW_ALBUM,
  data: res
})

// 异步 action
export const getTopBannersAction = () => {
  return async (dispatch: Dispatch) => {
    const res = await getTopBanners()
    dispatch(topBanners(res))
  }
}

export const getHotRecommendAction = (limit: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await getHotRecommends(limit)
      dispatch(hotRecommends(res))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getNewAlbumAction = (limit: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await getNewAlbums(limit)
      dispatch(newAlbums(res))
    } catch (error) {
      console.log(error)
    }
  }
}