import { combineReducers } from 'redux'

import { topBannerReducer } from 'pages/discover/children-pages/recommend/store'
import playerReducer from 'pages/player/store'

import type { ICombineReducers } from './types'

// 这里写的泛型就是全部 reducer 的，就是参数对象要写一样的
const cReducers = combineReducers<ICombineReducers>({
  // 里面写的是每一个 reducer ！！
  recommend: topBannerReducer, // 这个就是其中的一个 reducer, 参数和返回值在 泛型里面写着的
  player: playerReducer
})

export default cReducers
