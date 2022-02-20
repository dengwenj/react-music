import React, { memo } from 'react'
import { Link } from 'react-router-dom' 

import { HeaderWrapper, HeaderLeft, HeaderRight } from './styled'

const WJAppHeather = memo(() => {
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <Link to={'/'} className='logo sprite_01' />
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default WJAppHeather