import styled from 'styled-components'

// styled(Row)`` 组件
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .show-header-links {
    height: 100%;
    .active {
      background-color: #000;
      color: #fff;
      i {
        position: absolute;
        left: 45%;
        bottom: 0;
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: transparent transparent #b2281e;
      }
    }
    a {
      display: inline-block;
      position: relative;
      height: 100%;
      padding: 0 20px;
      text-align: center;
      line-height: 70px;
      font-size: 14px;
      color: #ccc;
      text-decoration: none; // 不要下划线
      :hover {
        color: #fff;
      }
      :last-child {
        i {
          position: absolute;
          top: 20px;
          right: -20px;
          width: 28px;
          height: 19px;
          background: url(${require('assets/img/sprite_01.png')});
          background-position: -190px 0;
        }
      }
    }
   
  }
`

export const HeaderRight = styled.div`

`