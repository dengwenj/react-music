import { combineReducers } from 'redux'

import { topBannerReducer } from 'pages/discover/children-pages/recommend/store'

const cReducers = combineReducers({
  // 里面写的 reducer
  recommend: topBannerReducer
})

export default cReducers