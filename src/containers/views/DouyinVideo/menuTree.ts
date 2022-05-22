import _ from 'lodash'

export interface InfMenuData {
    id: number
    parentId: number
    children?: InfMenuData[]
}

export interface InfIdMapping {
    [key: string]: number
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

export const demoAuthList = [63, 87]

export const getIdMapping = (data: InfMenuData[]) =>
    data.reduce((acc, el, i) => {
        acc[el.id] = i
        return acc
    }, {})

export const getTree = (rawData: InfMenuData[], idMapping: InfIdMapping) => {
    const data = _.clone(rawData)
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
    return [root, data]
}

export const tailorTree = (tree: InfMenuData, data: InfIdMapping[], authList: number[]) => {
    const authIds = []
    const setAuthIds = (id: number) => {
        if (authIds.includes(id)) {
            return
        }
        authIds.push(id)
        const elem = data.filter(el => el.id === id)[0]
        if (!elem) {
            return
        }
        const recur = parentEl => {
            const parentId = parentEl.parentId
            if (_.isNil(parentId) || authIds.includes(parentId)) {
                return
            }
            authIds.push(parentId)
            const parent = data.filter(el => el.id === parentId)[0]
            if (!parent) {
                return
            }
            recur(parent)
        }
        recur(elem)
    }
    authList.forEach(id => {
        setAuthIds(id)
    })
    // console.log('authIds:', authIds)
    const recurTree = tr => {
        const { children: trChildren } = tr
        if (_.isEmpty(trChildren)) {
            return
        }
        tr.children = trChildren.filter(child => authIds.includes(child.id))
        /* .map(child => {
                const { children: trChildChildren, ...otherChildProps } = child
                return otherChildProps
            }) */
        tr.children.forEach(recurTree)
    }
    recurTree(tree)
    console.log('tailoredTree:', tree)
}
