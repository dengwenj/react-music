import request from "services"

import type { IBannersAPI } from "services/types"

// 轮播图数据
export const getTopBanners = () => {
  return request<IBannersAPI>({
    method: 'GET',
    url: '/banner'
  })
}