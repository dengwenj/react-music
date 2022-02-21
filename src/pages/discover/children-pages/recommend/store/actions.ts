import { getTopBanners } from 'services/api/recommend'

import { TOP_BANNERS } from './constants'

import type { Dispatch } from 'redux'
import type { IBannersAPI } from 'services/types'

const topBanners = (res: IBannersAPI) => ({ type: TOP_BANNERS, data: res })

// 异步 action
export const getTopBannersAction = () => {
  return async (dispatch: Dispatch) => {
    const res = await getTopBanners()
    dispatch(topBanners(res))
  }
}
