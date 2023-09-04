const queueList = []
const max = 2 // 并发数为 2
let count = 0

export const pLimit = {
    enqueue: (business, ...arg) => {
        return new Promise(resolve => {
            const Fn = async () => resolve(await business(...arg))
            count >= max ? queueList.push(Fn) : pLimit.run(Fn)
        })
    },
    enqueue1: (business, ...arg) => {
        return new Promise(resolve => {
            const Fn = () => business(...arg).then(a => resolve(a))
            count >= max ? queueList.push(Fn) : pLimit.run(Fn)
        })
    },
    run: Fn => {
        count++
        Fn().then(() => {
            count--
            if (queueList.length > 0) {
                const Task = queueList.shift()
                pLimit.run(Task)
            }
        })
    }
}
