import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top { 
    height: 30px;
    background-color: #c20c0c;
  }
`

export const TopMenu = styled.div`
  height: 100%;
  .content {
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 180px;
    li {
      padding: 0 20px;
      a {
        text-align: center;
        display: inline-block;
        width: 60px;
        color: #fff;
        text-decoration: none;
        :hover {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        } 
      }
      .active {
        background-color: rgba(0, 0, 0, 0.2);
        /* padding: 2px 12px; */
        border-radius: 10px;
      }
    }
  }
`