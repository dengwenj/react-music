import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { headerLinks } from 'common'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './styled'

const WJAppHeather = memo(() => {
  // 展示 headerLinks 数据
  const showHeaderLinks = () => {
    return headerLinks.map((item, index) => {
      if (index < 3) {
        return <NavLink to={item.link}>{item.title}<i></i></NavLink>
      }
      if (index === headerLinks.length - 1) {
        return <a href={`#${item.link}`}>{item.title}<i></i></a>
      }
      return <a href={`#${item.link}`}>{item.title}</a>
    })
  }
 
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <Link to={'/'} className='logo sprite_01' />
          <div className='show-header-links'>
            {showHeaderLinks()}
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default WJAppHeather