export interface IMenuData {
    id: number
    parentId: number
    children?: IMenuData[]
}

export const demoData = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 }
]

export const getIdMapping = (data: IMenuData[]) =>
    data.reduce((acc, el, i) => {
        acc[el.id] = i
        return acc
    }, {})

export const getTree = (data: IMenuData[], idMapping: { [key: string]: number }) => {
    let root
    data.forEach(el => {
        // 判断根节点
        if (el.parentId === null) {
            root = el
            return
        }
        // 用映射表找到父元素
        const parentEl = data[idMapping[el.parentId]]
        // 把当前元素添加到父元素的`children`数组中
        parentEl.children = [...(parentEl.children || []), el]
    })
    return root
}
