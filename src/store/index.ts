import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// store 是一个对象 里面有 {liftedStore: {…}, dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, …}
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// console.log(store.getState()) 是个对象

export default store