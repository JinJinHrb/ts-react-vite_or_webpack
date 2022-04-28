class ListNode {
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
