import React, { FC } from 'react'

interface DemoProps {
  message?: string
}
const Demo: FC<DemoProps> = (props) => {
  return (
    <h1>{props.message}</h1>
  )
}
Demo.defaultProps = {
  message: 'hello react'
}
export default Demo
