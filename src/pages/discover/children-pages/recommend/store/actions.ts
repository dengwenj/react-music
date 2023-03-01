import {
  getHotRecommends,
  getNewAlbums,
  getTopBanners,
  getTopList
} from 'services/api/recommend'

import { RecommendActionType } from './constants'

import type { Dispatch } from 'redux'
import type { IBannersAPI, IHotRecommendsAPI, INewAlbumAPI, ITopListAPI } from 'services/types'

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

const upRanking = (res: ITopListAPI) => ({
  type: RecommendActionType.UP_RANKING,
  data: res
})

const newRanking = (res: ITopListAPI) => ({
  type: RecommendActionType.NEW_RANKING,
  data: res
})

const originRanking = (res: ITopListAPI) => ({
  type: RecommendActionType.ORIGIN_RANKING,
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

export const getTopListAction = (idx: number) => {
  return async (dispatch: Dispatch) => {
    switch (idx) {
      // 飙升榜
      case 2884035:
        try {
          const res = await getTopList(idx)
          dispatch(upRanking(res))
        } catch (error) {
          console.log(error)
        }
        break;
      // 新歌榜
      case 19723756:
        try {
          const res = await getTopList(idx)
          dispatch(newRanking(res))
        } catch (error) {
          console.log(error)
        }
        break;
      // 原创榜
      case 3779629:
        try {
          const res = await getTopList(idx)
          dispatch(originRanking(res))
        } catch (error) {
          console.log(error)
        }
        break
      default:
        break;
    }
  }
}