import React, { memo, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from 'store'

import RoutesConfig from 'router'
import WJAppHeather from 'components/AppHeader'
import WJAppFooter from 'components/AppFooter'
import WJBackTop from 'components/back-top'
import AppPlayerBar from 'pages/player/app-player-bar'

export default memo(function App() {
  
  return (
    <>
      <Provider store={store}>
        <Router>
          <WJAppHeather />
          <Suspense fallback={<div>正在加载中...</div>}>
            {/* 映射路由 是写的组件 这里也相当于占个位，然后匹配到路径就在这里展示。 一级路由*/}
            <RoutesConfig />
          </Suspense>
          <WJAppFooter />
          <WJBackTop />
          <AppPlayerBar />
        </Router>
      </Provider>
    </>
  )
})
