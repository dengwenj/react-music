// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget === target);

const a1 = { a: '1' }
const b1 = { b: '2' }
function aaaa(a, b) {
  for (const key in b) {
    a[key] = b[key]
  }
  return a
}
const ab = aaaa(a1, b1)
console.log(ab === a1)
