import request from "services"

import type { ISongDetailAPI } from '../types'

export const getSongDetail = (ids: number) => {
  return request<ISongDetailAPI>({
    method: 'GET',
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export const getLyric = (id: number) => {
  return request({
    method: 'GET',
    url: '/lyric',
    params: {
      id
    }
  })
}