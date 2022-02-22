import request from "services"

import type { IBannersAPI, IHotRecommendsAPI } from "services/types"

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