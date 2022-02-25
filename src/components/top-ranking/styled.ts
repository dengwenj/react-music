import styled from "styled-components"

export const TopRankingWrapper = styled.div`
  width: 33.33%;
`

export const TopRankingHeader = styled.div`
  display: flex;
  margin: 20px 0 0 21px;
  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
  .right {
    margin: 5px 0 0 10px;
    display: flex;
    flex-direction: column;
    strong {
      font-size: 14px;
      color: #000;
      cursor: pointer;
    }
    span {
      color: #aaa;
      font-size: 22px;
      margin-top: 3px;
      i {
        margin-right: 8px;
        cursor: pointer;
        .anticon {
          :hover {
            color: #666;
          }
        }
      }
      em {
        cursor: pointer;
        .anticon {
          :hover {
            color: #666;
          }
        }
      }
    }
  }
`

export const TopRankingContent = styled.div`
  margin-top: 20px;
  .list-item {
    height: 32px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    
    :hover {
      .name-icon {
        .icon {
          display: block;
          i, strong, em {
            :hover {
              color: #333;
            }
          }
        } 
      }
    }
    .index {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 100%;
      font-size: 15px;
    }
    .name-icon {
      width: 180px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      margin-right: 10px;
      align-items: center;
      .name {
        margin-left: 2px;
        color: #000;
        cursor: pointer;
        overflow:hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        :hover {
          width: 100px;
        }
      }
      .icon {
        width: 90px;
        text-align: right;
        i { 
          font-size: 16px;
          color: #797878;
          cursor: pointer;
        }
        strong {
          font-size: 16px;
          padding: 0 8px;
          color: #797878;
          cursor: pointer;
        }
        em {
          font-size: 16px;
          color: #797878;
          cursor: pointer;
        }
        display: none;
      }
    }
  }
`

export const TopRankingFooter = styled.div`
  text-align: right;
  margin: 6px 25px 0 0;
  cursor: pointer;
  color: #111;
`