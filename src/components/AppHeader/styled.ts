import styled from 'styled-components'

// styled(Row)`` 组件
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
    background-color: skyblue;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
`

export const HeaderRight = styled.div`

`