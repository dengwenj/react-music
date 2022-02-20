import React from 'react'
import { NavLink, Outlet } from 'react-router-dom' 

import { dicoverMenu } from 'common' 
import { DiscoverWrapper, TopMenu } from './styled'
import request from 'services'

import type { IBannersAPI } from 'services/types'

export default function Discover() {
  // /banner
  const res = request<IBannersAPI>({
    method: 'GET',
    url: '/banner'
  })
  res.then((res) => {

  })

  const showDicoverMenu = () => {
    return (
      <ul className='content'>
        {
          dicoverMenu.map((item) => {
            return <li key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          })
        }
      </ul>
    )
  }
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {showDicoverMenu()}
        </TopMenu>
      </div>
      
      {/* 路由中的 占个位 子路由会在这里显示 */}
      <Outlet />
    </DiscoverWrapper>
  )
}
