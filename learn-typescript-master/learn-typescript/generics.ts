function echo<T>(arg: T): T {
  return arg
}

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
  length: number
}

// 用extends 约束泛型必须含有length属性，
function echoWithLength<T extends IWithLength>(arg: T): T {

  // 这样就不会ts报没有length的错了
  console.log(arg.length)
  return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3])

// 用在类中使用泛型约束

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

// 约束前
const queue = new Queue()
queue.push(1)
queue.push('str')

// new出来的的对象中可能推入任何值，如手动设定成any或者允许自动定义any类型，使用方法，在运行中会产生ts检查不到
console.log(queue.pop().toFixed()) // 手动或自动设为any，能消除ts报错，但运行时会产生错误
console.log(queue.pop().length)

/*
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}*/

const queue2 = new Queue<number>()
queue2.push(1)
console.log(queue2.pop().toFixed()) // 使用数字有字符串没有的toFixed
// console.log(queue2.pop().length) // ts报错，没有length，能很好约束。保证在ts不报错的情况下，运行也不报错

const queue3 = new Queue<string>()
queue3.push('str')
console.log(queue3.pop().length) // 使用字符串有数字没有的length
// console.log(queue2.pop().toFixed()) // ts报错，没有toFixed，能很好约束。保证在ts不报错的情况下，运行也不报错

// 用在interface中使用泛型约束
interface KeyPair<T, U> {
  key: T;
  value: U;
}

// 使用的时候灵活地传入使用时需要的泛型
let kp1: KeyPair<number, string> = { key: 123, value: "str" }
let kp2: KeyPair<string, number> = { key: 'test', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

// 在函数中使用泛型约束

// 未用泛型时,函数定义适用局限性大
interface IPlusOrg {
  (a: number, b: number) : number
}

// 圆括号中的是入参,冒号后的是返回值
interface IPlus<T> {
  (a: T, b: T) : T
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b
}

// 函数定义加入了泛型更灵活,一个IPlus接口可以满足以下两个函数的需求
const a: IPlus<number> = plus
const b: IPlus<string> = connect