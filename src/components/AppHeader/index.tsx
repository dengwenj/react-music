import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from 'common'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './styled'

const WJAppHeather = memo(() => {
  // 展示 headerLinks 数据，导航菜单
  const showHeaderLinks = () => {
    return headerLinks.map((item, index) => {
      if (index < 3) {
        return <NavLink to={item.link} key={item.title}>{item.title}<i></i></NavLink>
      }
      if (index === headerLinks.length - 1) {
        return <a href={`#${item.link}`} key={item.title}>{item.title}<i></i></a>
      }
      return <a href={`#${item.link}`}  key={item.title}>{item.title}</a>
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
        <HeaderRight>
          <Input placeholder='音乐/视频/电台/用户' className='input' prefix={<SearchOutlined />} />
          <button className='creator'>创作者中心</button>
          <div className='login'>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default WJAppHeather