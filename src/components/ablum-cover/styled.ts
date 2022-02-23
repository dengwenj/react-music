import styled from "styled-components"

import type { IAblumCoverWrapper } from './types'
import type { IAblumCoverImg } from './types'

export const AblumCoverWrapper = styled.div<IAblumCoverWrapper>`
  display: inline-block;
  width: ${(props) => props.wWidth + 'px'};
`

export const AblumCoverImg = styled.div<IAblumCoverImg>`
  position: relative;
  img {
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
  }
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.mskWidth + 'px'};
    height: ${props => props.height + 'px'};
    background: url(${require('assets/img/sprite_cover.png')});
    background-position: 0 ${props => props.bgp + 'px'};
  }
  i {
    display: none;
  }
  :hover {
    cursor: pointer;
    i {
      position: absolute;
      bottom: 5px;
      left: 75px;
      font-size: 20px;
      color: #ece6cc;
      display: block;
    }
  }
`

export const AblumCoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    overflow:hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    color: #000;
    font-size: 12px;
  }
  i {
    color: #9c9c9c;
    font-size: 12px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
`