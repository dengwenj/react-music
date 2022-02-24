import React from 'react'

import TopBanner from './components/top-banner'
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album'
import RecommendRanking from './components/recommend-ranking'
import UserLogin from './components/user-login'
import SettleSinger from './components/settle-singer'
import HotAnchor from './components/hot-anchor'
import { RecommendWrapper, RecommendRight, RecommendLeft, Content } from './styled' 

// 推荐模块
export default function Recommend() {

  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <TopBanner />
      {/* 内容 */}
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

/**
 * 浅比较概念：浅比较也称引用相等，在js中===是做浅比较，只检查左右两边是否是同一个对象的引用；
 * {如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。 
 * 修改其中一个变量，会影响到其他所有变量。 这种引用只局限于对象，如果两个变量指向同一个原始类型的值。 那么，变量这时都是值的拷贝。
 */