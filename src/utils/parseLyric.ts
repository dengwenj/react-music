export interface ItimeAndLyricObj {
  time: number
  lyric: string
}
export default function parseLyric(lineString: string) {
  const lyricArr = lineString.split('\n')
  const timeandlyricObjAndTimeArr: any[] = []
  lyricArr.forEach((item) => {
    if (item) {
      const timeAndLyricArr = item.slice(1).split(']')
      const timeAndLyricObj = {
        time: Number(timeAndLyricArr[0]),
        lyric: timeAndLyricArr[1]
      }
      
      const timeArr = timeAndLyricArr[0].split(':')
      timeAndLyricObj.lyric = timeAndLyricObj.lyric.trim()
      const time1 = Number(timeArr[0]) * 60 * 1000
      const time2 =  Number(timeArr[1]) * 1000
      timeAndLyricObj.time = time2 + time1
      
      timeandlyricObjAndTimeArr.push(timeAndLyricObj)
    }
  })

  return timeandlyricObjAndTimeArr!
}












// const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

// export default function parseLyric(lyricString: string) {
//   const lineStrings = lyricString.split("\n");

//   const lyrics = [];
//   for (let line of lineStrings) {
//     if (line) {
//       const result = parseExp.exec(line);
//       if (!result) continue;
//       const time1 = (result as any)[1] * 60 * 1000;
//       const time2 = (result as any)[2] * 1000;
//       const time3 = result[3].length === 3? (result as any)[3]*1: (result as any)[3]*10;
//       const time = time1 + time2 + time3;
//       const content = line.replace(parseExp, "").trim();
//       const lineObj = {time, content};
//       lyrics.push(lineObj);
//     }
//   }
//   return lyrics;
// }