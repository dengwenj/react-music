import styled from "styled-components"

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background: url(${require('assets/img/playbar_sprite.png')}) repeat;
  z-index: 999999999999;
`

export const AppPlayerBarContent = styled.div`
  display: flex;
  margin-top: 10px;
  .left {
    display: flex;
    align-items: center;
    height: 40px;
    width: 125px;
    i, em {
      color: #c0c0c1;
      font-size: 22px;
      cursor: pointer;
      :hover {
        color: #eee;
      }
    }
    strong {
      color: #ccc;
      font-size: 30px;
      margin: 0 10px;
      cursor: pointer;
      :hover {
        color: #eee;
      }
    }
  }
  .center {
    display: flex;
    color: red;
    .image {
      cursor: pointer;
      img {
        width: 34px;
        height: 34px;
        border-radius: 3px;
      }
    }
    .info {
      margin-left: 10px;
      position: relative;
      top: -3px;
      .top {
        display: flex;
        align-items: center;
        span {
          color: #e6e6e5;
          cursor: pointer;
        }
        i {
          position: relative;
          top: -1px;
          font-size: 16px;
          margin: 0 15px 0 8px;
          .anticon {
            color: #9f9f9f;
          }
        }
        em {
          color: #9b9a9a;
          cursor: pointer;
        }
      }
      .bottom {
        display: flex;
        color: red;
        align-items: center;
        justify-content: space-between;
        .ant-slider {
          width: 466px;
          margin: 0;
          padding: 0;
          .ant-slider-track {
            background: #b7291f;
            z-index: 99999;
            height: 7px;
          }
          .ant-slider-step {
            height: 7px;
            background: #181818;
          }
          .ant-slider-handle {
            border: 2px solid #eee;
            z-index: 999999999;
            background: #eee;
            top: 1px;
            ::after {
              content: '';
              position: absolute;
              width: 5px;
              height: 5px;
              border-radius: 100%;
              background: red;
              top: 3px;
              left: 2.5px;
              color: #a83629;
            }
          }
        }
        .time {
          position: relative;
          top: -4px;
          margin-left: 10px;
          i {
            color: #a1a1a2;
          }
          em {
            margin: 0 4px;
            color: #797a79;
          }
          span {
            color: #797a79;
          }
        }
        
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    color: red;
    margin-left: 30px;
    .mfs {
      span {
        color: #898988;
        font-size: 20px;
        margin-right: 5px;
        cursor: pointer;
        :hover {
          color: #ccc;
        }
      }
    }
    .x {
      width: 1px;
      height: 18px;
      border-radius: 5px;
      background: #1a1b1b;
      margin-right: 5px;
    }
    .other {
      margin-left: 5px;
      span {
        color: #898988;
        font-size: 20px;
        margin-right: 5px;
        cursor: pointer;
        :hover {
          color: #ccc;
        }
      }
    }
  }
`