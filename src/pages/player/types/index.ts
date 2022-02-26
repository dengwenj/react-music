import type { ICombineReducers } from "store/types";

export type Obj = Record<string, any> | null
export interface IPlayerState {
  playList: Obj[]
  currentSongIndex: number
  currentSong: Obj,
  sequence: Sequence
}

export interface IUseSelectorCurrentSongReturn {
  currentSong: Obj,
  sequence: Sequence
}

export interface IGetState {
  (): ICombineReducers
}

export enum Sequence {
  cycle = 0, // 循环
  random = 1, // 随机
  singleCycle = 2 // 单曲循环
}