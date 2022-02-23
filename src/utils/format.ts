export function playCount(count: number) {
  if (count < 100000) return count
  if (count >= 100000 && count < 100000000) return Math.floor(count / 1000) / 10 + '万'
  if (count >= 100000000) return Math.floor(count / 10000000) / 10 + '亿'
}
