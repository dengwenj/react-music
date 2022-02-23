import styled from "styled-components"

export const SongsCoverWrapper = styled.div`
  width: 25%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SongsCoverTop = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  .mack {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${require('assets/img/sprite_cover.png')});
  }
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #eee;

  }
  .songs-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 27px;
    background-color: rgba(0, 0, 0, 0.4);
    bottom: 0;
    left: 0;
    .left {
      margin-left: 10px;
      color: #cbcbcb;
      i {
        font-size: 14px;
        margin-right: 5px;
      }
    }
    .right {
      cursor: pointer;
      margin-right: 10px;
      color: #cbcbcb;
      font-size: 16px;
    }
  }
`

export const SongsCoverBottom = styled.div`
  .name {
    margin-top: 5px;
    width: 140px;
    color: #000;
    font-size: 13px;
  }
`
