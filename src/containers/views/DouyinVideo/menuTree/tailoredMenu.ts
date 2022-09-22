export default {
    parentId: null,
    id: '-1',
    children: [
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
            code: 'CUSTOMER',
            children: []
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
            },
            children: [
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
                }
            ]
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
            },
            children: [
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
                }
            ]
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
            pathRegex: {},
            children: [
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
                    id: '7-3',
                    content: '名单管理',
                    path: '/trade/edm/address',
                    pathRegex: {},
                    code: 'EDM_CONTACT_MANAGE'
                }
            ]
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
            pathRegex: {},
            children: [
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
                }
            ]
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
            },
            children: [
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
                    id: '9-3',
                    content: '企业设置',
                    children: [
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
                        }
                    ]
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
        }
    ]
}
