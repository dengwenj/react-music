export interface IRecommendState {
  topBanners: any[] | null
  hotRecommends: any[] | null
  newAlbums: any[] | null
  upRanking: Record<string, any> | null
  newRanking: Record<string, any> | null
  originRanking: Record<string, any> | null
}

// useSelector 的第二个类型 就是 useSelector 的返回值
export interface IUseSelectorBannersReturn {
  banners: any[] | null
}

export interface IUseSelectorHotRecommendsReturn {
  hotRecommends: any[] | null
}

export interface IUseSelectorNewAlbumsReturn {
  newAlbums: any[] | null
}

export interface IUseSelectorRecommendRankingReturn {
  upRanking: Record<string, any> | null
  newRanking: Record<string, any> | null
  originRanking: Record<string, any> | null
}