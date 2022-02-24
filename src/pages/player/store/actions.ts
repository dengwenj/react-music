import { PlayerActionType } from './constants'

import { getSongDetail } from 'services/api/player'

import type { Dispatch } from "redux"
import type { ISongDetailAPI } from 'services/types'

const changeCurrentSongAction = (res: ISongDetailAPI) => ({
  type: PlayerActionType.CHANGE_CURRENT_SONG,
  data: res
})

export const getSongDetailAction = (ids: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await getSongDetail(ids)
      dispatch(changeCurrentSongAction(res))
    } catch (error) {
      console.log(error)
    }
  }
}