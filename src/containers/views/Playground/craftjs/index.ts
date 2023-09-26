import { deepClone } from '@utils/iterationUtil'
import nodes1 from './deserialize/deserializeNodes1'
import nodes2 from './keep/deserializeNodes1-2'
import template from './serialize/serializedData'
import _ from 'lodash'

// 用户自定义属性对应的 key
// system
export const USER_PROPERTY_KEYS = {
    /* needAdd: 是否叠加 */
    add: 'needAdd',
    allowNumberAndCode: 'allowNumberAndCode',
    /* default: 默认值 */
    default: 'default',
    max: 'max',
    maxCount: 'maxCount',
    /* maxLength: 最大长度 */
    maxLength: 'maxLength',
    min: 'min',
    /* required: 是否必填 */
    required: 'required',
    /* showColor: 是否显示颜色 */
    showColor: 'showColor',
    /* limit: 仅可输入英文字母和数字 */
    limit: 'limit',
    needCount: 'needCount',
    precision: 'precision'
}

export const sortNode = (obj: any) => deepClone(obj, { sortHandler: {} })

export const sortNodes = () => {
    const sortedNodes1 = sortNode(nodes1)
    const sortedNodes2 = sortNode(nodes2)
    console.log('sortedNodes1:', sortedNodes1)
    console.log('sortedNodes2:', sortedNodes2)
    alert('OK')
}

export const dealWithResolver = (
    resolverElements: any[],
    divElements: any,
    moduleElements: any[],
    rootElement: any[]
) => {
    const warnings: any[] = []
    const moduleKeyPriorities = rootElement[1].nodes
    // const resolverKeys = resolverElements.map(a => a[0])
    const moduleKeys = moduleElements.map(a => a[0])
    // const modulesWithProperties = moduleElements.filter(a => !_.isEmpty(a.props.field.properties))
    const divKeys = divElements.map(a => a[0])
    const resolversReferences = resolverElements
        .map(a => {
            const resolver = a[1]
            if (moduleKeys.includes(resolver.parent)) {
                return ['module', resolver.parent, a[0]]
            }
            if (divKeys.includes(resolver.parent)) {
                return ['div', resolver.parent, a[0]]
            }
            return ['', '', a[0]]
        })
        .map(arr => {
            const parentType = arr[0]
            const parentKey = arr[1]
            if (parentType === 'div') {
                const parent = divElements.filter(a => a[0] === parentKey)[0]
                const parentElement = parent[1]
                if (moduleKeys.includes(parentElement.parent)) {
                    arr.unshift('module', parentElement.parent)
                }
            }
            return arr
        })

    const models = resolversReferences.map((resolversReference, resolverIndex) => {
        const moduleKey = resolversReference[1]
        const modelIndex = moduleKeyPriorities.indexOf(moduleKey)
        const moduleElement = moduleElements.filter(arr => arr[0] === moduleKey)[0][1]
        const moduleName = moduleElement.props.field.title
        const { module_left: moduleLeftKey, module_right: moduleRightKey } = moduleElement.linkedNodes
        const divKey = resolversReference[3]
        const placement = moduleLeftKey === divKey ? 'left' : moduleRightKey === divKey ? 'right' : 'bizarre' // isDivLeftOrRight
        const divElement = divElements.filter(arr => arr[0] === divKey)[0][1]
        const resolverKeys = divElement.nodes
        const resolverKey = resolversReference[4]
        const resolverElement = resolverElements.filter(arr => arr[0] === resolverKey)[0][1]
        const name = resolverElement.props.field.name
        const title = resolverElement.props.field.title
        const component = resolverElement.props.field['x-component']
        const rawType = resolverElement.props.field.type
        const type = rawType === 'Array<object>' ? 'array' : rawType
        const index = resolverKeys.indexOf(resolverKey)

        const inserts: any = {}
        // 将用户设置的属性往后端数据模型里送
        Object.keys(USER_PROPERTY_KEYS).forEach(k => {
            const keyInModel = USER_PROPERTY_KEYS[k]
            if (!_.isNil(resolverElement.props.field[k])) {
                inserts[keyInModel] = resolverElement.props.field[k]
            }
        })

        if (type === 'array') {
            if (!_.isEmpty(resolverElement.props.field.items?.type)) {
                inserts.arrayItemType = resolverElement.props.field.items?.type
            }
            // items 结构存疑
            const itemsProperties = resolverElement.props.field.items?.properties
            // console.log('#86 array items:', name, '\n', itemsProperties)
            if (!_.isEmpty(itemsProperties)) {
                const childKeys = Object.keys(itemsProperties)
                childKeys.sort((a, b) => {
                    const elementA = itemsProperties[a]
                    const elementB = itemsProperties[b]
                    const componentA = elementA['x-component']
                    const componentB = elementB['x-component']
                    const indexA = componentA.indexOf('ArrayItems') === 0 ? 1 : 0
                    const indexB = componentB.indexOf('ArrayItems') === 0 ? 1 : 0
                    return indexA - indexB
                })
                inserts.children = childKeys.map((k, index) => {
                    const itemsProperty = itemsProperties[k]
                    const childAppends: any = {}
                    // 将用户设置的属性往后端数据模型里送
                    Object.keys(USER_PROPERTY_KEYS).forEach(k => {
                        const keyInModel = USER_PROPERTY_KEYS[k]
                        if (!_.isNil(itemsProperty[k])) {
                            childAppends[keyInModel] = itemsProperty[k]
                        }
                    })
                    return {
                        name: k,
                        component: itemsProperty['x-component'],
                        type: itemsProperty.type,
                        ...childAppends,
                        index
                    }
                })
                let isAbnormal = true // 记录 craftJs schema 中未考虑的场景
                if (inserts.children.length === 2 && inserts.children[1].component === 'ArrayItems.Remove') {
                    isAbnormal = false
                } else if (
                    inserts.children.length === 1 &&
                    _.endsWith(inserts.children[0].component, 'OverlayLayout')
                ) {
                    isAbnormal = false
                }
                if (isAbnormal) {
                    warnings.push({ name, resolverIndex })
                }
            }
        }

        return {
            moduleName,
            // ENModuleName
            modelIndex,
            placement,
            // system
            // needCount
            // needAdd
            // showColor
            // precision
            // min
            // max
            // maxCount
            // allowNumberAndCode
            type,
            title,
            // ENTitle
            name,
            ...inserts,
            component,
            index
        }
    })
    models.sort((a, b) => {
        const aModelIndex = a.modelIndex
        const bModelIndex = b.modelIndex
        const aPlacement = a.placement === 'left' ? 0 : 1
        const bPlacement = b.placement === 'left' ? 0 : 1
        const aIndex = a.index
        const bIndex = b.index
        return (
            (aModelIndex < bModelIndex ? -3 : aModelIndex === bModelIndex ? 0 : 3) +
            (aIndex < bIndex ? -2 : aIndex === bIndex ? 0 : 2) +
            (aPlacement < bPlacement ? -1 : aPlacement === bPlacement ? 0 : 1)
        )
    })
    console.log('#73 models:', models, '\nwarnings:', warnings)
    return warnings
}

export const extractFromCraftJsTemplate = () => {
    const resolverJudgement = (k: string) =>
        template[k]?.type?.resolvedName && template[k].type.resolvedName !== 'Module'
    const moduleJudgement = (k: string) => template[k]?.type?.resolvedName && template[k].type.resolvedName === 'Module'
    const divJudgement = (k: string) => !template[k]?.type?.resolvedName
    const resolverElements = Object.keys(template)
        .filter(resolverJudgement)
        .map(k => [k, template[k]])
    const moduleElements = Object.keys(template)
        .filter(moduleJudgement)
        .map(k => [k, template[k]])
    const divElements = Object.keys(template)
        .filter(divJudgement)
        .map(k => [k, template[k]])
    let rootIndex = -1
    const rootElement = divElements.filter((a, index) => {
        if (a[0] === 'ROOT') {
            rootIndex = index
            return true
        }
        return false
    })[0]
    divElements.splice(rootIndex, 1)
    console.log(
        '#30 resolverElements:',
        resolverElements,
        '\ndivElements:',
        divElements,
        '\nmoduleElements:',
        moduleElements,
        'rootElement:',
        rootElement
    )
    dealWithResolver(resolverElements, divElements, moduleElements, rootElement)
    alert('OK')
}
