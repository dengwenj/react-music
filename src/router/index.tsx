/**
 * 这里面要写一个组件，不然的话 element: <WJAppFooter /> 这里会报错 说不能将值作为类型什么的
 */

import { useRoutes } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

import Discover from 'pages/discover'
import Mine from 'pages/mine'
import Friend from 'pages/friend'
import NotFount from 'pages/not-found'

export default function RoutesConfig() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Discover />,
      children: [
        {
          path: '/not',
          element: <NotFount />
        }
      ]
    },
    {
      path: '/mine',
      element: <Mine />
    },
    {
      path: '/friend',
      element: <Friend />
    },
    {
      path: '*', // 找不到
      element: <NotFount />
    }
  ]
  return useRoutes(routes)
}