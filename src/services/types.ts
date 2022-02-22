interface ICommon {
  code: number
}

export interface IBannersAPI extends ICommon {
  banners: any[] | null
}

export interface IHotRecommendsAPI extends ICommon {
  category: number
  hasTaste: boolean
  result: any[]
}