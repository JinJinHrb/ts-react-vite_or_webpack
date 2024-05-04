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
            // 使用 apply 方法调用 Constructor（传入的构造函数），
            // 并将 this 上下文和传入的参数应用于该构造函数。
            // 这意味着我们可以使用此函数来创建 Constructor 的新实例。

            Object.setPrototypeOf(this, Constructor.prototype)
            // 这里使用 Object.setPrototypeOf 方法将新创建的实例的原型设置为 Constructor 的原型。
            // 这是为了确保新实例能够访问 Constructor 中定义的所有方法和属性。

            // Object.setPrototypeOf 替代写法
            // this.__proto__ = Object.create(Constructor.prototype)
            // this.__proto__.constructor = Constructor

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

    alert('OK')
}

class Singleton {
    static _instance: Singleton
    someProperty: string
    constructor() {
        // 私有静态实例，防止直接引用，这里使用了一个闭包
        if (!Singleton._instance) {
            Singleton._instance = this
        }

        // 如果实例已经存在，则再次调用构造函数时返回已有的实例
        if (Singleton._instance !== this) {
            return Singleton._instance
        }

        // 初始化操作，只在第一次创建实例时执行
        this.init()
    }

    init() {
        // 在此处添加类的初始化代码
        this.someProperty = 'some value'
    }

    // 一个示例方法
    doSomething() {
        console.log('Doing something...')
    }

    // 静态方法，用于获取单例实例，而不通过 new 操作符
    static getInstance() {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton()
        }
        return Singleton._instance
    }
}

export const testSingleton2 = () => {
    // 使用 Singleton
    // const instance1 = Singleton.getInstance()
    // const instance2 = Singleton.getInstance()
    const instance3 = new Singleton()
    const instance4 = new Singleton()
    // console.log('instance1 === instance2', instance1 === instance2) // 输出: true，证明是同一个实例
    console.log('instance3 === instance4', instance3 === instance4)
    alert('OK')
}
