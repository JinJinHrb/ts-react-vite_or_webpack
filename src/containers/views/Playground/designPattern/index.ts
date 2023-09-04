function Animal(name?: string) {
    this.name = name ?? 'animal'
}

function Coffee(name?: string) {
    this.name = name ?? 'coffee'
}

Animal.prototype.hello = function () {
    console.log('hello,', this.name)
}

Coffee.prototype.hello = function () {
    console.log('hello,', this.name)
}

const createSingleton = function (Constructor: any): (...arg: any) => void {
    let instance: any
    return function (...arg: any) {
        if (!instance) {
            Constructor.apply(this, arg)
            // 这个是把 this.__proto__ = Constructor.prototype,这个样子 就不会导致指向错误了
            Object.setPrototypeOf(this, Constructor.prototype)
            // 这个是把当前的 this原型赋值给他, 这个样子就可以判断,
            // 虽然是不同的种类 但是种类的实例都是指向自己的
            instance = this
        }
        return instance
    }
}

const weakMap = new WeakMap()

const createInstance = function (Constructor: any, ...arg: any) {
    const creator = weakMap.get(Constructor) || createSingleton(Constructor)
    weakMap.set(Constructor, creator)
    return new creator(arg)
}

export const testSingleton = () => {
    const createAnimal = createSingleton(Animal)
    const a1 = new createAnimal('cat')
    const a2 = new createAnimal('dog')
    a1.hello()
    a2.hello()
    console.log(a1 === a2, 'a') // true a

    const createCoffee = createSingleton(Coffee)
    const b1 = new createCoffee('Caputino')
    const b2 = new createCoffee('Latte')
    b1.hello()
    b2.hello()
    console.log(b1 == b2, 'b') // true b
    console.log(a1 == b1, 'c') // true c

    const animal1 = createInstance(Animal, 'tiger')
    const animal2 = createInstance(Animal, 'leopard')
    console.log('animal1 === animal2', animal1 === animal2)
    const coffee1 = createInstance(Coffee, 'yunnan')
    console.log('animal1 === coffee1', animal1 === coffee1)
    console.log('a1 === animal1', a1 === animal1)
}
