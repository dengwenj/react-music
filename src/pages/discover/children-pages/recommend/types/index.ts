export interface IRecommendState {
  topBanners: any[] | null
  hotRecommends: any[] | null
}

// useSelector 的第二个类型 就是 useSelector 的返回值
export interface IUseSelectorBannersReturn {
  banners: any[] | null
}

export interface IUseSelectorHotRecommendsReturn {
  hotRecommends: any[] | null
}