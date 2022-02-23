import request from "services"

import type {
  IBannersAPI,
  IHotRecommendsAPI,
  INewAlbumAPI,
  ITopListAPI
} from "services/types"

// 轮播图数据
export const getTopBanners = () => {
  return request<IBannersAPI>({
    method: 'GET',
    url: '/banner'
  })
}
// 热门推荐数据
export const getHotRecommends = (limit: number) => {
  return request<IHotRecommendsAPI>({
    method: 'GET',
    url: '/personalized',
    params: {
      limit
    }
  })
}
// 新碟上架
export const getNewAlbums = (limit: number) => {
  return request<INewAlbumAPI>({
    method: 'GET',
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 榜单
export const getTopList = (idx: number) => {
  return request<ITopListAPI>({
    method: 'GET',
    url: '/top/list',
    params: {
      idx
    }
  })
}