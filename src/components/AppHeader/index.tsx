import React, { memo } from 'react'
import { Link } from 'react-router-dom' 

const WJAppHeather = memo(() => {
  return (
    <>
      <Link to={'/'}>发现音乐</Link>
      <Link to={'/mine'}>我的音乐</Link>
      <Link to={'/friend'}>朋友</Link>
    </>
  )
})

export default WJAppHeather