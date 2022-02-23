import styled from "styled-components"

export const NewAlbumWrapper = styled.div`

`

export const NewAlbumContent = styled.div`
  height: 186px;
  position: relative;
  margin: 20px 0 30px 0;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  .left-click {
    position: absolute;
    top: 40%;
    left: 10px;
    font-size: 16px;
    cursor: pointer;
    color: #888889;
    z-index: 99999;
  }
  .right-click {
    position: absolute;
    top: 40%;
    right: 10px;
    font-size: 16px;
    cursor: pointer;
    color: #888889;
    z-index: 99999;
  }
  .carousel {
    width: 625px;
    margin-left: 30px;
    .page {
      display: flex !important;
      justify-content: center;
      align-items: center;
      height: 186px;
      margin-top: 10px;
      margin-left: 7px;
    }
  }
  
`