/**
 * 这里面要写一个组件，不然的话 element: <WJAppFooter /> 这里会报错 说不能将值作为类型什么的
 */
import React, { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('pages/discover'))
const Mine = lazy(() => import('pages/mine'))
const Friend = lazy(() => import('pages/friend'))
const NotFount = lazy(() => import('pages/not-found'))

const Recommend = lazy(() => import('pages/discover/children-pages/recommend'))
const Ranking = lazy(() => import('pages/discover/children-pages/ranking'))
const Songs = lazy(() => import('pages/discover/children-pages/songs'))
const Djradio = lazy(() => import('pages/discover/children-pages/djradio'))
const Artist = lazy(() => import('pages/discover/children-pages/artist'))
const Album = lazy(() => import('pages/discover/children-pages/album'))
const Player = lazy(() => import('pages/player'))


// import Discover from 'pages/discover'
// import Mine from 'pages/mine'
// import Friend from 'pages/friend'
// import NotFount from 'pages/not-found'

// import Recommend from 'pages/discover/children-pages/recommend'
// import Ranking from 'pages/discover/children-pages/ranking'
// import Songs from 'pages/discover/children-pages/songs'
// import Djradio from 'pages/discover/children-pages/djradio'
// import Artist from 'pages/discover/children-pages/artist'
// import Album from 'pages/discover/children-pages/album'
// import Player from 'pages/player'

export default function RoutesConfig() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Navigate to={'/discover'} />
    },
    {
      path: '/discover',
      element: <Navigate to={'/discover/recommend'} /> // 当是这个 /discover 路径也要重定向
    }, 
    {
      path: '/discover',
      element: <Discover />,
      children: [
        {
          path: 'recommend',
          element: <Recommend />
        },
        {
          path: 'ranking',
          element: <Ranking />
        },
        {
          path: 'songs',
          element: <Songs />
        },
        {
          path: 'djradio',
          element: <Djradio />
        },
        {
          path: 'artist',
          element: <Artist />
        },
        {
          path: 'album',
          element: <Album />
        },
        {
          path: 'player',
          element: <Player />
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