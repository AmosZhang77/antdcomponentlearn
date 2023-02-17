class Animal {
  name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

console.log(Animal.categoies)
const snake = new Animal('lily')
console.log(Animal.isAnimal(snake))

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run() 
  }
}

const maomao = new Cat('maomao')

// implements关键词+接口，可以用于约束类需要实现的功能
interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus();
}

// implements实现，用了此关键词，class内必须实现Radio接口的内容，此处是switchRadio
class Car implements Radio{
  switchRadio() {

  }
}

// 可用于提炼出都要实现的功能，至于怎么实现在class中分别定义
class Phone implements Radio{
  switchRadio() {

  }
}

// 可以约束需要同时实现的多个接口，用逗号隔开
class Cellphone2 implements Radio, Battery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}

// 接口继承接口之后也能实现上面的需要约束多个接口的需求
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Cellphone implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}