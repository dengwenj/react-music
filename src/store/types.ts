import type { IRecommendState } from "pages/discover/children-pages/recommend/types"
import type { IPlayerState } from "pages/player/types"

// CombineReducers 哪里的泛型
export interface ICombineReducers {
  // IRecommendState 这个写的就是 reducer 的返回值 和 reducer 的第一个参数
  recommend: IRecommendState
  player: IPlayerState
}

// action 的参数类型
type Common<T> = Record<string, T>
export type IAction<T> = {
  type: string
} & Common<T>
