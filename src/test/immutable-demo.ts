import IM from 'immutable'

/**
 * ImmutableJS：节省性能、内存空间
 *    当数据修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费
 */

const info = {
  name: 'dwj',
  age: 22,
  friend: {
    name: 'lilei',
    age: 20
  }
}

// Map 只会对浅层的转换
const infoIM = IM.Map(info)
const infoIM2 = infoIM.set('name', 'zww')
console.log(infoIM.get('name')) // dwj
console.log(infoIM2.get('name')) // zww
const infoIM3 = infoIM.set('friend', 11)
console.log(infoIM3)
console.log(infoIM)



// List 的使用
const names = ['hh', 'zz', 'dd']
const namesIM = IM.List(names)
const namesIM2 = namesIM.set(0, 'xxxxxx')
console.log(namesIM.get(0)) // hh
console.log(namesIM2.get(0)) // xxxxxx

// fromJS 会进行深层的转化
const infoFromJS = IM.fromJS(info)
console.log(infoFromJS)







