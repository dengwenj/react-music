import styled from 'styled-components'

export interface IBgImgs {
  bgImgs: string
}

export const BannerWrapper = styled.div<IBgImgs>`
  height: 285px;
  width: 100%;
  position: relative;
  background: url(${(props) => props.bgImgs}) center center/6000px;

  .center {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
`

export const BannerLift = styled.div`
  width: 730px;
  height: 100%;

  .div-img {
    width: 100%;
    height: 285px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  background: url(${require('assets/img/download.png')});
`

export const BannerContent = styled.div`
  .left {
    position: absolute;
    top: 35%;
    left: 200px;
    width: 40px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    color: #ddd;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .right {
    position: absolute;
    top: 35%;
    right: 200px;
    width: 40px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    color: #ddd;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`