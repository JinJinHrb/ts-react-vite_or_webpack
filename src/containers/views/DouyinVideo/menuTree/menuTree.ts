import _ from 'lodash'

export interface InfMenuData {
    id: number | string
    parentId: number | string
    code?: string
    children?: InfMenuData[]
}

export interface InfIdMapping {
    [key: string]: number
}

export const rawCrmMenu = [
    {
        parentId: null,
        id: '-1'
    },
    {
        parentId: '-1',
        id: '0',
        content: '工作台',
        code: 'HOME_PAGE',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        path: '/trade/home',
        pathRegex: {}
    },
    {
        parentId: '-1',
        id: '2',
        content: '邮件',
        code: 'EMAIL',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        path: '/trade/email',
        pathRegex: {}
    },
    {
        parentId: '-1',
        id: '3',
        content: '客户',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        pathRegex: {},
        code: 'CUSTOMER'
    },
    {
        parentId: '3',
        id: '3-2',
        content: '客户列表',
        path: '/trade/customer/home/all',
        pathRegex: {}
    },
    {
        parentId: '3',
        id: '3-1',
        content: '公海客户',
        path: '/trade/customer/home/public',
        pathRegex: {}
    },
    {
        parentId: '3',
        id: '3-3',
        content: '客户设置',
        path: '/trade/customer/home/setting',
        pathRegex: {},
        code: 'CRM_CUSTOM_RULE'
    },
    {
        parentId: '-1',
        id: '4',
        content: '商机',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        path: '/trade/business/home',
        pathRegex: {},
        code: 'OPPORTUNITY'
    },
    {
        parentId: '-1',
        id: '5',
        content: '交易',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        }
    },
    {
        parentId: '5',
        id: '5-1',
        content: '产品',
        path: '/trade/product/all',
        pathRegex: {},
        code: 'PRODUCT'
    },
    {
        parentId: '5',
        id: '5-2',
        content: '报价单',
        path: '/trade/quotation/index',
        pathRegex: {},
        code: 'QUOTATION'
    },
    {
        parentId: '5',
        id: '5-3',
        content: '订单',
        path: '/trade/order/index',
        pathRegex: {},
        code: 'ORDER'
    },
    {
        parentId: '-1',
        id: '6',
        content: '待办事项',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        }
    },
    {
        parentId: '6',
        id: '6-1',
        content: '日历',
        path: '/trade/agenda/schedule',
        pathRegex: {},
        code: 'AGENDA'
    },
    {
        parentId: '6',
        id: '6-2',
        content: '跟进',
        path: '/trade/agenda/home',
        pathRegex: {},
        code: 'FOLLOW'
    },
    {
        parentId: '-1',
        id: '7',
        content: '邮件营销',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        pathRegex: {}
    },
    {
        parentId: '7',
        id: '7-1',
        content: '任务管理',
        path: '/trade/edm/activity',
        pathRegex: {},
        code: 'EDM_TASK_MANAGE'
    },
    {
        parentId: '7',
        id: '7-2',
        content: '域名管理',
        path: '/trade/edm/domain',
        pathRegex: {},
        code: 'EDM_DOMAIN_MANAGE'
    },
    {
        parentId: '7',
        id: '7-3',
        content: '名单管理',
        path: '/trade/edm/address',
        pathRegex: {},
        code: 'EDM_CONTACT_MANAGE'
    },
    {
        parentId: '-1',
        id: '8',
        content: '商城',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        code: 'CRM_MALL',
        pathRegex: {}
    },
    {
        parentId: '8',
        id: '8-1',
        content: '商城',
        path: '/trade/mall/purchase/home',
        pathRegex: {},
        code: 'CRM_MALL'
    },
    {
        parentId: '8',
        id: '8-2',
        content: '我的订单',
        path: '/trade/mall/order/list',
        pathRegex: {},
        code: 'CRM_MALL'
    },
    {
        parentId: '8',
        id: '8-3',
        content: '我的优惠券',
        path: '/trade/mall/tickets',
        pathRegex: {},
        code: 'CRM_MALL'
    },
    {
        parentId: '-1',
        id: '9',
        content: '设置',
        icon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        }
    },
    {
        parentId: '9',
        id: '9-1',
        content: '个人中心',
        code: 'CRM_PERSONAL_CENTER',
        path: '/trade/setting/user-center/home',
        pathRegex: {}
    },
    {
        parentId: '9',
        id: '9-2',
        content: '账号与安全',
        path: '/account/security',
        pathRegex: {},
        rightExtraIcon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        newTab: true
    },
    {
        parentId: '9',
        id: '9-3',
        content: '企业设置'
    },
    {
        parentId: '9-3',
        id: '9-3-0',
        content: '对外信息',
        path: '/trade/setting/public-info/home',
        pathRegex: {},
        code: 'CRM_RELEASE_INFO'
    },
    {
        parentId: '9-3',
        id: '9-3-1',
        content: '企业抬头',
        path: '/trade/setting/firm/all',
        pathRegex: {},
        code: 'CRM_FIRM_PROFILE'
    },
    {
        parentId: '9-3',
        id: '9-3-2',
        content: '收款账户',
        path: '/trade/setting/bank/account/home',
        pathRegex: {},
        code: 'CRM_BANK_ACCOUNT'
    },
    {
        parentId: '9',
        id: '9-4',
        content: '员工管理',
        path: '/account/staff/all',
        pathRegex: {},
        code: 'ACCOUNT_MANAGEMENT',
        rightExtraIcon: {
            key: null,
            ref: null,
            props: {},
            _owner: null,
            _store: {}
        },
        newTab: true
    },
    {
        parentId: '9',
        id: '9-5',
        content: '回收站',
        path: '/trade/setting/trash/all',
        pathRegex: {},
        code: 'CRM_RECYCLE'
    },
    {
        parentId: '9',
        id: '9-6',
        content: '自定义设置',
        path: '/trade/customer/fieldConfig',
        pathRegex: {},
        code: 'CRM_CUSTOM_TEMPLATE'
    }
]

export const demoAuthList = [63, 87]

export const authCodes = [
    'FOLLOW',
    'CRM_MALL',
    'FIRM_PROFILE',
    'TRANSACTION',
    'DEPOSIT',
    'EMAIL',
    'ACCOUNT_MANAGEMENT',
    'WITHDRAW',
    'BENEFIT_ORDER',
    'ORDER',
    'PRODUCT',
    'CRM_CUSTOM_TEMPLATE',
    'USER_PROFILE',
    'CRM_SUB_ACCT_MANAGE',
    'CUSTOMER',
    'SPOT_FOREIGN_EXCHANGE',
    'PARTNER',
    'MY_ASSET',
    'CRM_PERSONAL_CENTER',
    'QUOTATION',
    'EDM_TASK_MANAGE',
    'CRM_RELEASE_INFO',
    'FORWARD_FOREIGN_EXCHANGE',
    'CRM_BANK_ACCOUNT',
    'CRM_RECYCLE',
    'CRM_FIRM_PROFILE',
    'VIRTUAL_ACCOUNT',
    'CONTRACT_MORTGAGE_LOAN',
    'BENEFIT_DETAIL',
    'BANK_ACCOUNT',
    'COUPON',
    'EDM_CONTACT_MANAGE',
    'HOME_PAGE',
    'AGENDA',
    'BENEFIT_PKG',
    'OPPORTUNITY',
    'XT_MEMBER_CONTRACT'
]

export const getIdMapping = (data: InfMenuData[]) =>
    data.reduce((acc, el, i) => {
        acc[el.id] = i
        return acc
    }, {})

export const getTree = (rawData: InfMenuData[], idMapping: InfIdMapping) => {
    const data = _.clone(rawData)
    let root
    data.forEach((el, idx) => {
        // 判断根节点
        if (!el) {
            throw new Error(`#368 null element: idx: ${idx}`)
        }
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

export const tailorTree = (tree: InfMenuData, data: InfIdMapping[], authList: (number | string)[]) => {
    const authIds = []
    const setAuthIds = (id: number | string) => {
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
    return tree
}

export const getAuthMenu = (menu: InfMenuData[], codes: string[]) => {
    const idMapping = getIdMapping(menu)
    const [tree, data] = getTree(menu, idMapping)
    const authList = menu.filter(a => codes.includes(a.code)).map(a => a.id)
    return tailorTree(tree, data, authList)
}
