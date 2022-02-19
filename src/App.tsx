import React, { memo } from 'react'
import { HashRouter as Router } from 'react-router-dom'

import RoutesConfig from 'router'

import WJAppHeather from 'components/AppHeader'
import WJAppFooter from 'components/AppFooter'

export default memo(function App() {
  
  return (
    <>
      <WJAppHeather />
      <Router>
        {/* 映射路由 是写的组件 */}
        <RoutesConfig />
      </Router>
      <WJAppFooter />
    </>
  )
})
