import React, { FC, useEffect, useState } from 'react'

interface DemoProps {
  message?: string
}
const Demo: FC<DemoProps> = ({ message }) => {
  // const [count, setCount] = useState(0)
  const [obj, setObj] = useState({ name: 'dengwenjie' })

  useEffect(() => {
    // setInterval(() => {
    //   console.log(obj)
    // }, 1000)
    return () => {
      // 在更新和组件卸载的时候会执行
      // 里面的数据是上一次的
    }
  }, [])

  // const handleClick = () => {
  //   setInterval(() => {
  //     console.log(count)
  //   }, 2000)
  // }

  const handleObj = () => {
    setObj((pre) => {
      return { hh: 1 }
    })
  }

  return (
    <>
      <h1>{message}</h1>
      {/* <button onClick={() => setCount(count + 1)}>点击{count}</button> */}
      {/* <button onClick={handleClick}>log</button> */}
      <button onClick={handleObj}>obj</button>
    </>
  )
}
Demo.defaultProps = {
  message: 'hello react'
}
export default Demo
