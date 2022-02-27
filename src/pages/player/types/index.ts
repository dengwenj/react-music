import type { ICombineReducers } from "store/types";
import type { ItimeAndLyricObj } from "utils/parseLyric";

export type Obj = Record<string, any> | null
export interface IPlayerState {
  playList: Obj[]
  preSongIndexArr: number[]
  currentSongIndex: number
  currentSong: Obj,
  sequence: Sequence,
  timeAndLyricArr: ItimeAndLyricObj[]
  currentLyricIndex: number
}

export interface IUseSelectorCurrentSongReturn {
  currentSong: Obj,
  sequence: Sequence,
  playList: Obj[],
  timeAndLyricArr: ItimeAndLyricObj[],
  currentLyricIndex: number
}

export interface IGetState {
  (): ICombineReducers
}

export enum Sequence {
  cycle = 0, // 循环
  random = 1, // 随机
  singleCycle = 2 // 单曲循环
}

export enum PrevOrNext {
  prev = -1, // 上一首 -1
  next = 1 // 下一首 +1 
}