
import { PlayerActionType } from "./constants"

import type { IAction } from "store/types"
import type { IPlayerState } from "../types"


const initState: IPlayerState = {
  playList: [],
  currentSongIndex: 0,
  currentSong: {}
}

export default function reducer(state: IPlayerState = initState, action: IAction<any>) {
  const { type } = action
  switch (type) {
    case PlayerActionType.CHANGE_PLAY_LIST:
      return { ...state, playList: action.data }
    case PlayerActionType.CHANGE_CURRENT_SONG_INDEX:
      return { ...state, currentSongIndex: action.data }
    case PlayerActionType.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.data }
    default:
      return { ...state }
  }
}  