import type { ICombineReducers } from "store/types";

export type Obj = Record<string, any> | null
export interface IPlayerState {
  playList: Obj[]
  currentSongIndex: number
  currentSong: Obj
}

export interface IUseSelectorCurrentSongReturn {
  currentSong: Obj
}

export interface IGetState {
  (): ICombineReducers
}