import React from 'react'

import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import { WJBackTopWrapper } from './styled'

export default function WJBackTop() {
  return (
    <WJBackTopWrapper>
      <BackTop>
        <div className='back-top'>
          <UpOutlined />
          顶部
        </div>
      </BackTop>
    </WJBackTopWrapper>
  )
}
