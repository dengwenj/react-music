import styled from "styled-components"

export const ThemeHeaderRecommendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  padding-right: 10px;
  padding-bottom: 3px;
`

export const ThemeHeaderRecommendLift = styled.div`
  display: flex;
  align-items: center;
  .title {
    margin-left: 35px;
    margin-right: 20px;
    font-size: 20px;
  }
  .keywords-item {
    span {
      cursor: pointer;
      color: #666666;
    }
    i { 
      margin: 0 12px;
      color: #ccc;
    }
  }
`

export const ThemeHeaderRecommendRight = styled.div`
display: flex;
align-items: center;
  span {
    margin-right: 5px;
    color: #666;
    cursor: pointer;
  }
  i {
    background-position: 0 -240px;
    width: 10px;
    height: 10px;
  }
`