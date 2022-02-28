import styled from "styled-components"

export const ShowPlayListWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 46px;
  width: 984px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const ShowPlayListTop = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
  padding-left: 20px;
  background-color: #1a1a1a;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 2px solid #070807;
  .top-left {
    width: 553px;
    display: flex;
    justify-content: space-between;
    border-right: 1px solid #333;
    strong {
      color: #f3f3f3;
      font-size: 14px;
    }
    .fd {
      margin-right: 20px;
      i {
        margin-right: 15px;
      }
      i, em {
        color: #cccdcc;
        span {
          font-size: 17px;
          color: #989898;
          margin-right: 3px;
        }
      }
    }
  }
  .top-right {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    span {
      color: #f3f3f3;
      font-size: 14px;
    }
    i {
      position: absolute;
      top: -7px;
      right: 15px;
      font-size: 24px;
      color: #545353;
      cursor: pointer;
    }
  }
`


export const ShowPlayListContent = styled.div`
  height: 260px;
  display: flex;
  text-align: center;
  .content-left {
    width: 553px;
    padding-left: 20px;
    background-color: #231819;
    height: 100%;
    overflow-y: scroll;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        color: #c5c4c3;
        padding-top: 12px;
        .song-name {
          cursor: pointer;
        }
        .info {
          display: flex;
          align-items: center;
          margin-right: 10px;
          em {
            display: inline-block;
            width: 70px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
            padding-right: 5px;
          }
          i {
            color: #666666;
            margin-right: 20px;
          }
          strong {
            color: #8b8989;
          }
        }
      }
    }
  }
  .content-right {
    flex: 1;
    background-color: #321f1e;
    height: 100%;
    padding: 15px 0;
    ul {
      height: 100%;
      overflow-y: scroll;
      li {
        color: #999899;
        padding: 10px 0;
      }
    }
  }
`