import React from 'react'

import { PlayCircleOutlined } from '@ant-design/icons'
import { AblumCoverWrapper, AblumCoverImg, AblumCoverInfo } from './styled'

import type { IAblumCoverProps } from './types'

export default function AblumCover({ 
  iten,
  width = 130,
  height = 130,
  bgp = -845,
  mskWidth = 153,
  wWidth = 153
}: IAblumCoverProps) {
  return (
    <AblumCoverWrapper wWidth={wWidth}>
      <AblumCoverImg width={width} height={height} bgp={bgp} mskWidth={mskWidth}>
        <img src={iten.picUrl} alt="" />
        <div className='msk'></div>
        <i><PlayCircleOutlined /></i>
      </AblumCoverImg>
      <AblumCoverInfo>
        <span>{iten?.name}</span>
        <i>{iten?.artist?.name}</i>
      </AblumCoverInfo>
    </AblumCoverWrapper>
  )
}
