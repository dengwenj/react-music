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
        background-color: #000000;
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
  display: flex;
  align-items: center;
  .input {
    width: 160px;
    padding: 3px;
    border-radius: 50px;
    .ant-input-prefix {
      padding-left: 4px;
      color: #717171;
    }
    .ant-input {
      font-size: 12px;
    }
  }
  .creator {
    margin-left: 10px;
    width: 120px;
    height: 30px;
    border-radius: 30px;
    color: #cbcbcb;
    border: 1px solid #4f4f4f;
    background-color: #232424;
    cursor: pointer;
    :hover {
      border: 1px solid #fff;
      color: #fff;
    }
  }
  .login {
    margin-left: 10px;
    color: #ccc;
    font-size: 14px;
    :hover {
      cursor: pointer;
      color: #fff;
    }
  }
`