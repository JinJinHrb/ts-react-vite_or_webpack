/* class ListNode {
    key
    value
    next = null
    prev = null
}

// 双向链表
class List {
    head
    tail

    constructor() {
        this.head = new ListNode()
        this.tail = new ListNode()

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    addToHead(node) {
        const next = this.head.next
        this.head.next = node
        node.prev = this.head

        node.next = next
        next.prev = node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    moveToHead(node) {
        this.remove(node)
        this.addToHead(node)
    }

    removeTail() {
        const node = this.tail.prev
        this.remove(node)
        return node
    }
}

export default class MyCache {
    limit
    list = new List()
    map = new Map()

    constructor(limit = 3) {
        this.limit = limit
    }

    get(key) {
        const node = this.map.get(key)
        if (node != null) {
            this.list.moveToHead(node)
            return node.value
        }
        return null
    }

    set(key, value) {
        let node = this.map.get(key)
        if (node != null) {
            node.value = value
            this.list.moveToHead(node)
        } else {
            node = new ListNode()
            node.key = key
            node.value = value
            this.map.set(key, node)
            if (this.map.size > this.limit) {
                const tail = this.list.removeTail()
                this.map.delete(tail.key)
            }
        }
    }
}

const add = (() => {
    const cache = new MyCache()
    return (...args) => {
        const key = args.sort((a, b) => a - b).join(',')
        let res = cache.get(key)
        if (res != null) {
            return res
        }
        res = args.reduce((a, b) => a + b)
        return res
    }
})()
 */
//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// 新添加的元素会被插入到map的末尾，整个栈倒序查看
export class LRUCache {
    secretKey
    capacity
    constructor(capacity) {
        this.secretKey = new Map()
        this.capacity = capacity
    }
    get(key) {
        if (this.secretKey.has(key)) {
            const tempValue = this.secretKey.get(key)
            this.secretKey.delete(key)
            this.secretKey.set(key, tempValue)
            return tempValue
        } else return -1
    }
    put(key, value) {
        // key存在，仅修改值
        if (this.secretKey.has(key)) {
            this.secretKey.delete(key)
            this.secretKey.set(key, value)
        }
        // key不存在，cache未满
        else if (this.secretKey.size < this.capacity) {
            this.secretKey.set(key, value)
        }
        // 添加新key，删除旧key
        else {
            this.secretKey.set(key, value)
            // 删除map的第一个元素，即为最长未使用的
            this.secretKey.delete(this.secretKey.keys().next().value)
        }
    }
}

/* 
const cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
console.log('cache.get(1)', cache.get(1)) // 返回  1
cache.put(3, 3) // 该操作会使得** 2 作废
console.log('cache.get(2)', cache.get(2)) // 返回 -1 (未找到)
cache.put(4, 4) // 该操作会使得** 1 作废
console.log('cache.get(1)', cache.get(1)) // 返回 -1 (未找到)
console.log('cache.get(3)', cache.get(3)) // 返回  3
console.log('cache.get(4)', cache.get(4)) // 返回  4 
*/
