
import { PlayerActionType } from "./constants"

import type { IAction } from "store/types"
import type { IPlayerState } from "../types"


const initState: IPlayerState = {
  currentSong: {}
}

export default function reducer(state: IPlayerState = initState, action: IAction<any>) {
  const { type } = action
  switch (type) {
    case PlayerActionType.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.data.songs[0] }
    default:
      return { ...state }
  }
}