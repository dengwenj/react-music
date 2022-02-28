
import { PlayerActionType } from "./constants"
import { Sequence } from '../types'

import type { IAction } from "store/types"
import type { IPlayerState } from "../types"

const initState: IPlayerState = {
  playList: [
    {
        "name": "麻雀",
        "id": 1407551413,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 4292,
                "name": "李荣浩",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 7,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 83878976,
            "name": "麻雀",
            "picUrl": "https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg",
            "tns": [],
            "pic_str": "109951165182029540",
            "pic": 109951165182029540
        },
        "dt": 252757,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 10112685,
            "vd": -47447
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 6067629,
            "vd": -44879
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 4045101,
            "vd": -43278
        },
        "a": null,
        "cd": "01",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 7,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1416577,
        "mv": 10904989,
        "publishTime": 0
    },
    {
        "name": "有何不可",
        "id": 167876,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000007916021",
        "fee": 8,
        "v": 54,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 16953,
            "name": "自定义",
            "picUrl": "https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
            "tns": [],
            "pic_str": "109951166118671647",
            "pic": 109951166118671650
        },
        "dt": 241840,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9675799,
            "vd": -58026
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5805497,
            "vd": -55429
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3870346,
            "vd": -53748
        },
        "a": null,
        "cd": "1",
        "no": 3,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 54,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 22036,
        "mv": 0,
        "publishTime": 1231516800000
    },
    {
        "name": "成都",
        "id": 436514312,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": null,
        "fee": 8,
        "v": 46,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 34930257,
            "name": "成都",
            "picUrl": "https://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
            "tns": [],
            "pic": 2946691234868155
        },
        "dt": 328362,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 13137546,
            "vd": -49995
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 7882545,
            "vd": -47364
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 5255044,
            "vd": -45631
        },
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 0,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 46,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 1400821,
        "rtype": 0,
        "rurl": null,
        "mv": 5619601,
        "publishTime": 1477238400007
    },
    {
        "name": "南方姑娘",
        "id": 202373,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000007908509",
        "fee": 8,
        "v": 55,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 20339,
            "name": "赵小雷",
            "picUrl": "https://p2.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg",
            "tns": [],
            "pic_str": "18876415625841069",
            "pic": 18876415625841068
        },
        "dt": 332640,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 13307864,
            "vd": -37507
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 7984736,
            "vd": -34874
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 5323172,
            "vd": -33119
        },
        "a": null,
        "cd": "1",
        "no": 6,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 55,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mv": 455091,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1400821,
        "publishTime": 1312646400007
    },
    {
        "name": "鼓楼",
        "id": 447926067,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [
            "The Drum Tower"
        ],
        "pop": 100,
        "st": 0,
        "rt": null,
        "fee": 8,
        "v": 36,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 35069014,
            "name": "无法长大",
            "picUrl": "https://p1.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg",
            "tns": [],
            "pic_str": "18548761162235571",
            "pic": 18548761162235572
        },
        "dt": 281002,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 11243146,
            "vd": -2
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 6745905,
            "vd": -2
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 4497284,
            "vd": -2
        },
        "a": null,
        "cd": "1",
        "no": 4,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 36,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1400821,
        "mv": 0,
        "publishTime": 1482249600007,
        "tns": [
            "The Drum Tower"
        ]
    },
    {
        "name": "阿刁",
        "id": 447925059,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [
            "Diao"
        ],
        "pop": 100,
        "st": 0,
        "rt": null,
        "fee": 8,
        "v": 31,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 35069014,
            "name": "无法长大",
            "picUrl": "https://p2.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg",
            "tns": [],
            "pic_str": "18548761162235571",
            "pic": 18548761162235572
        },
        "dt": 374120,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 14967162,
            "vd": -2
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 8980315,
            "vd": -2
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 5986891,
            "vd": -2
        },
        "a": null,
        "cd": "1",
        "no": 3,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 31,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1400821,
        "mv": 0,
        "publishTime": 1482249600007,
        "tns": [
            "Diao"
        ]
    },
    {
        "name": "画",
        "id": 202369,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000007908521",
        "fee": 8,
        "v": 44,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 20339,
            "name": "赵小雷",
            "picUrl": "https://p2.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg",
            "tns": [],
            "pic_str": "18876415625841069",
            "pic": 18876415625841068
        },
        "dt": 228133,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9128272,
            "vd": -24200
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5476981,
            "vd": -21500
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3651335,
            "vd": -19800
        },
        "a": null,
        "cd": "1",
        "no": 3,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 44,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1400821,
        "mv": 0,
        "publishTime": 1312646400007
    },
    {
        "name": "我在人间凑数的日子",
        "id": 1417970889,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 1160100,
                "name": "王然",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 7,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 85088908,
            "name": "我在人间凑数的日子",
            "picUrl": "https://p1.music.126.net/J16NYHlbQSFOMNRuMzUZsg==/109951164641717133.jpg",
            "tns": [],
            "pic_str": "109951164641717133",
            "pic": 109951164641717140
        },
        "dt": 237888,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9517485,
            "vd": -14935
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5710509,
            "vd": -12305
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3807021,
            "vd": -10537
        },
        "a": null,
        "cd": "01",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 64,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 7,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "mv": 0,
        "cp": 0,
        "publishTime": 0
    },
    {
        "name": "有没有一首孤单的民谣",
        "id": 1463710434,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 1160100,
                "name": "王然",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 45,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 5,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 92147278,
            "name": "春风不解风情",
            "picUrl": "https://p2.music.126.net/wiFJpgbaVVOOUotwiGWaYQ==/109951165148206285.jpg",
            "tns": [],
            "pic_str": "109951165148206285",
            "pic": 109951165148206290
        },
        "dt": 281777,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 11273448,
            "vd": -53071
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 6764086,
            "vd": -50466
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 4509405,
            "vd": -48782
        },
        "a": null,
        "cd": "01",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 64,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 5,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 0,
        "mv": 0,
        "publishTime": 0
    },
    {
        "name": "小我DEMO",
        "id": 1443687224,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 1160100,
                "name": "王然",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 20,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 6,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 88543186,
            "name": "小我DEMO",
            "picUrl": "https://p2.music.126.net/QsNcrLbVvX7T3pzO1lPmOg==/109951164941092504.jpg",
            "tns": [],
            "pic_str": "109951164941092504",
            "pic": 109951164941092510
        },
        "dt": 187271,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 7493007,
            "vd": 56737
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 4495822,
            "vd": 59380
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 2997229,
            "vd": 61179
        },
        "a": null,
        "cd": "01",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 64,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 6,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 0,
        "rtype": 0,
        "rurl": null,
        "mv": 0,
        "publishTime": 0
    },
    {
        "name": "吉姆餐厅",
        "id": 29567187,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": null,
        "fee": 8,
        "v": 33,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 3048030,
            "name": "吉姆餐厅",
            "picUrl": "https://p2.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
            "tns": [],
            "pic_str": "18957779486268444",
            "pic": 18957779486268444
        },
        "dt": 354640,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 14188713,
            "vd": -2
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 8513245,
            "vd": -2
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 5675511,
            "vd": -2
        },
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 33,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1400821,
        "mv": 0,
        "publishTime": 1413648000007
    },
    {
        "name": "彩虹下面",
        "id": 1295824647,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 6731,
                "name": "赵雷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [
            "电影《西虹市首富》推广曲"
        ],
        "pop": 100,
        "st": 0,
        "rt": null,
        "fee": 8,
        "v": 20,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 71883100,
            "name": "彩虹下面",
            "picUrl": "https://p1.music.126.net/v3dWeCvmSOqPb4bzYCoA8w==/109951163425838987.jpg",
            "tns": [],
            "pic_str": "109951163425838987",
            "pic": 109951163425838990
        },
        "dt": 282880,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 11317333,
            "vd": -2
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 6790417,
            "vd": -2
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 4526959,
            "vd": -2
        },
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 73728,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 20,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1416303,
        "mv": 10739185,
        "publishTime": 1532275200000
    }
  ],
  preSongIndexArr: [0],
  currentSongIndex: 0,
  currentSong: {},
  sequence: Sequence.cycle,
  timeAndLyricArr: [],
  currentLyricIndex: 0
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
    case PlayerActionType.CHANGE_SEQUENCE:
      return { ...state, sequence: action.data }
    case PlayerActionType.CHANGE_PRE_SONG_INDEX: 
      return { ...state, preSongIndexArr: action.data }
    case PlayerActionType.CHANGE_LYRICS:
      return { ...state, timeAndLyricArr: action.data }
    case PlayerActionType.CHANGE_CURRENT_LYRIC_INDEX:
      return { ...state, currentLyricIndex: action.data }
    default:
      return { ...state }
  }
}  