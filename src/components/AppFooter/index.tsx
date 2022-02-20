import React, { memo } from 'react'

import { footerLinks, footerImages } from 'common'
import { AppFooterWrapper, FooterLeft, FooterRight } from './styled'

export default memo(function WJAppFooter() {
  const showFooterLinks = () => {
    return footerLinks.map((item, index) => {
      let i = <i></i>
      if (index === footerLinks.length - 1) {
        i = <></> 
      }
      return <a href={item.link} key={item.title}>{item.title}{i}</a>
    })
  }

  return (
    <AppFooterWrapper>
      <div className='wrap-v2 content'>
        <FooterLeft>
          <div className='footer-links'>
            {showFooterLinks()}
          </div>
          <div className='text'>
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
          </div>
          <div className='text'>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：ncm5990@163.com</span>
          </div>
          <div className='text'>
            <span>粤B2-20090191-18  工业和信息化部备案管理系统网站</span>
            <span>浙公网安备 33010902002564号</span>
          </div>
        </FooterLeft>
         <FooterRight className="right">
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </AppFooterWrapper>
    
  )
})
