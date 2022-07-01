import _ from 'lodash'
import { traverseSchema } from './schema'
import schema2 from './mock/mock2'

// craft.js -> formily Start
// export const convertCraftjs2Formily = () => {

// }
// craft.js -> formily End

export const getBasicInfo = () => {
    const result = traverseSchema(schema2)
        .filter(props => {
            const { path, visible, hidden } = props || {}
            const pathSplit = _.trim(path).split('0.')
            if (pathSplit.length > 3) {
                // 数组里不能套数组
                console.log('pathSplit.length > 3', pathSplit)
                return false
            } else if (pathSplit.length === 3 && _.endsWith(pathSplit[pathSplit.length - 1], '0')) {
                // 数组里不能套数组
                console.log('pathSplit.length === 3', _.endsWith(pathSplit[pathSplit.length - 1], '0'))
                return false
            }
            return visible && !hidden && path?.indexOf('.') < 0
        })
        .map(props => {
            const { address } = props
            const addresses = address.split('.')
            const titles = []
            let subSchema = schema2
            addresses.forEach(el => {
                subSchema = subSchema.properties[el]
                titles.push(subSchema.title)
            })
            props.titles = titles.filter(a => a)
            return props
        })
    const rawBasicInfo = result.filter(a => '基本信息' === a.titles?.[0])
    const rawFeatInfo = result.filter(a => '特征信息' === a.titles?.[0])
    console.log('getBasicInfo #35', 'rawBasicInfo:', rawBasicInfo)
    console.log('getBasicInfo #36', 'rawFeatInfo:', rawFeatInfo)
    console.log('getBasicInfo #37', 'result:', result)
    const detail = {} // 模拟数据
    const basicInfo = rawBasicInfo.map(el => {
        const name = el.name
        const rtn = {
            name,
            title: el.fieldJson?.title,
            component: el.fieldJson['x-component'],
            dataSource: [],
            value: detail[name],
            label: ''
        }
        if (_.isArray(el.fieldJson.enum)) {
            rtn.dataSource = el.fieldJson.enum
            const label = (rtn.dataSource || []).find(el => el.value === rtn.value)
            if (label) {
                rtn.label = label
            }
        }
        return rtn
    })
    // .filter(a => _.isString(a.value))
    const featInfo = rawFeatInfo.map(el => {
        const name = el.name
        const rtn = {
            name,
            title: el.fieldJson?.title,
            component: el.fieldJson['x-component'],
            dataSource: [],
            value: detail[name],
            label: ''
        }
        if (_.isArray(el.fieldJson.enum)) {
            rtn.dataSource = el.fieldJson.enum
            const label = (rtn.dataSource || []).find(el => el.value === rtn.value)
            if (label) {
                rtn.label = label
            }
        }
        return rtn
    })
    const basicEditList = ['客户名称', '客户简称'].map(k => {
        const elem = featInfo.find(el => k === el.title) as any
        if (!elem || !_.isArray(elem.dataSource)) {
            return k
        }
        return {
            title: k,
            type: 'Select',
            enum: elem.dataSource,
            style: { width: 150 }
        }
    })
    // const featEditList = [
    //     {
    //         title: '客户状态',
    //         type: 'Select',
    //         /* enum: [
    // 			{ label: '潜在客户', value: '潜在客户' },
    // 			{ label: '成交客户', value: '成交客户' },
    // 			{ label: '无效客户', value: '无效客户' },
    // 			{ label: '持续跟进', value: '持续跟进' },
    // 			{ label: '忠诚客户', value: '忠诚客户' },
    // 			{ label: '初步接触', value: '初步接触' },
    // 		], */
    //         enum: [],
    //         style: { width: 150 }
    //     }
    // ]
    // .filter(a => _.isString(a.value))
    const featEditList = ['客户状态'].map(k => {
        const elem = featInfo.find(el => k === el.title) as any
        if (!elem || !_.isArray(elem.dataSource)) {
            return k
        }
        return {
            title: k,
            type: 'Select',
            enum: elem.dataSource,
            style: { width: 150 }
        }
    })
    console.log('getBasicInfo #47 basicInfo:', basicInfo)
    console.log('getBasicInfo #48 featInfo:', featInfo)
    console.log('getBasicInfo #121 basicEditList:', basicEditList)
    console.log('getBasicInfo #122 featEditList:', featEditList)
    alert('ok')
}
/*
 * replaceKeyHandler(path, val)
 */
const iterateObject2 = props => {
    const newObj = {}
    const recur = (obj, nextObj, parents) => {
        if (!_.isObject(obj)) {
            return
        }
        Object.keys(obj).forEach(function (key) {
            const elem = obj[key]
            const copyParent = _.clone(parents)
            copyParent.push(key)
            nextObj[key] = elem
            recur(elem, nextObj[key], copyParent)
        })
    }
    recur(props, newObj, [])
    return newObj
}

export const convOldToNew = () => {
    // GeneralInfo #1184 detail
    const detail = {
        customerId: '19990100323000022041900013061',
        customerName: 'bbbbdww',
        customerNo: 'C000000008',
        customerType: 'BUYERS',
        customerGeoCode: 'ALB',
        customizeAddress: 'wwwefwef',
        webAddress: 'www.baidu.com',
        memo: 'dwdwfe',
        contactModels: [
            {
                customerId: null,
                contactName: 'shuaife',
                contactEmail: 'w@qq.com',
                contactPhone: ['22333333333'],
                contactFax: '22222',
                contactId: '19990100324000022041900010735',
                socialMediaModels: [
                    {
                        socialMediaType: 'FACEBOOK',
                        accountNumber: 'wdhudw',
                        socialMediaId: '19990100325000022041900010336'
                    }
                ],
                position: 'jinli',
                birthday: 1649203200000,
                gender: true,
                remark: 'dwdwdww'
            }
        ],
        status: 'TRANSACTION_CUSTOMERS',
        customerAbbreviation: 'bbbbdww',
        customerFax: '22222',
        customerPhone: '11111111111',
        customerSource: 'OTHER',
        customerLevel: null,
        responsibleUserId: '00990100001000018030101000073',
        responsibleUserName: '主账号',
        responsibleStatus: 'FOLLOWING',
        attachmentVOS: [],
        customerLabel: null,
        tags: null,
        lockingStatus: 'LOCKING'
    }

    const detail2 = {}

    const detailKeys = Object.keys(detail).sort()
    detailKeys.forEach(k => {
        detail2[k] = detail[k]
    })

    // #1330 formValues
    const formValues = {
        contactModels: [
            {
                customerId: null,
                contactName: 'shuaife',
                contactEmail: 'w@qq.com',
                contactPhone: ['22333333333'],
                contactFax: '22222',
                contactId: '19990100324000022041900010735',
                socialMediaModels: [
                    {
                        socialMediaType: 'FACEBOOK',
                        accountNumber: 'wdhudw',
                        socialMediaId: '19990100325000022041900010336'
                    }
                ],
                position: 'jinli',
                birthday: 1649203200000,
                gender: true,
                remark: 'dwdwdww'
            }
        ],
        basicInfo: [
            {
                key: 1,
                leftLabel: '客户编号',
                leftValue: 'C000000008',
                rightLabel: '客户名称',
                rightValue: 'bbbbdww'
            },
            {
                key: 2,
                leftLabel: '客户简称',
                leftValue: 'bbbbdww',
                rightLabel: '客户网址',
                rightValue: 'www.baidu.com'
            },
            {
                key: 3,
                leftLabel: '贸易国家/地区',
                leftValue: 'ALB',
                rightLabel: '联系地址',
                rightValue: 'wwwefwef'
            },
            {
                key: 4,
                leftLabel: '固定电话',
                leftValue: '11111111111',
                rightLabel: '传真',
                rightValue: '22222'
            },
            {
                key: 5,
                leftLabel: '备注',
                leftValue: 'dwdwfe',
                rightLabel: '',
                rightValue: ''
            }
        ],
        featInfo: [
            {
                key: 1,
                leftLabel: '客户来源 ',
                leftValue: 'OTHER',
                rightLabel: '客户状态',
                rightValue: 'TRANSACTION_CUSTOMERS'
            },
            {
                key: 2,
                leftLabel: '客户类型',
                leftValue: 'BUYERS',
                rightLabel: '',
                rightValue: ''
            }
        ]
    }
    // #1333 basicInfo
    const basicInfo = [
        {
            name: 'customerNo',
            label: '客户编号',
            value: 'C000000008'
        },
        {
            name: 'customerName',
            label: '客户名称',
            value: 'bbbbdww'
        },
        {
            name: 'customerAbbreviation',
            label: '客户简称',
            value: 'bbbbdww'
        },
        {
            name: 'webAddress',
            label: '客户网址',
            value: 'www.baidu.com'
        },
        {
            name: 'customerGeoCode',
            label: '贸易国家/地区',
            value: 'ALB'
        },
        {
            name: 'customizeAddress',
            label: '联系地址',
            value: 'wwwefwef'
        },
        {
            name: 'customerPhone',
            label: '固定电话',
            value: '11111111111'
        },
        {
            name: 'customerFax',
            label: '传真',
            value: '22222'
        },
        {
            name: 'memo',
            label: '备注',
            value: 'dwdwfe'
        }
    ]

    // #1336 featInfo
    const featInfo = [
        {
            name: 'source',
            label: '客户来源 ',
            value: 'OTHER'
        },
        {
            name: 'status',
            label: '客户状态',
            value: 'TRANSACTION_CUSTOMERS'
        },
        {
            name: 'type',
            label: '客户类型',
            value: 'BUYERS'
        }
    ]

    const submitValues = {
        contactModels: formValues.contactModels
    }

    basicInfo.forEach(({ name, value }) => {
        submitValues[name] = value
    })

    featInfo.forEach(({ name, value }) => {
        submitValues[name] = value
    })

    const submitValues2 = {}
    const keys = Object.keys(submitValues).sort()
    keys.forEach(k => {
        submitValues2[k] = submitValues[k]
    })
    _.merge(detail2, submitValues2)
    console.log('convOldToNew #219', 'submitValues2:', submitValues2)
    console.log('convOldToNew #220', 'detail2:', detail2)

    alert('OK')
}

export const convNewToOld = () => {
    const newData = {
        status: 'success',
        isLoading: false,
        isSuccess: true,
        isError: false,
        isIdle: false,
        data: {
            data: {
                customizedAddress: 'wwwefwef',
                addressGeoCode: '',
                memo: 'dwdwfe',
                source: 'TRADE',
                responsibleStatus: 'FOLLOWING',
                customerPhone: '11111111111',
                customerType: 'BUYERS',
                customerGeoCode: 'ALB',
                attachmentVOS: [],
                customerId: '19990100323000022041900013061',
                address: '',
                customerAbbreviation: 'bbbbdww',
                webAddress: 'www.baidu.com',
                customerName: 'bbbbdww',
                firmId: '00990100002000018030101000037',
                contactProfileVOS: [
                    {
                        birthday: 1649203200000,
                        firmId: '00990100002000018030101000037',
                        gender: true,
                        contactEmail: 'w@qq.com',
                        contactId: '19990100324000022041900010735',
                        contactName: 'shuaife',
                        contactFax: '22222',
                        ownerUserId: '00990100001000018030101000073',
                        remark: 'dwdwdww',
                        position: 'jinli',
                        socialMediaProfileVOList: [
                            {
                                firmId: '00990100002000018030101000037',
                                ownerUserId: '00990100001000018030101000073',
                                socialMediaId: '19990100325000022041900010336',
                                accountNumber: 'wdhudw',
                                socialMediaType: 'FACEBOOK'
                            }
                        ],
                        contactPhone: ['22333333333']
                    }
                ],
                ownerUserId: '00990100001000018030101000073',
                customerLockingStatus: 'LOCKING',
                customerSource: 'OTHER',
                responsibleUserId: '00990100001000018030101000073',
                customerNo: 'C000000008',
                oldCrossBorderBuyer: false,
                customerFax: '22222',
                responsibleUserName: '主账号',
                status: 'TRANSACTION_CUSTOMERS'
            }
        },
        dataUpdatedAt: 1651406310383,
        error: null,
        errorUpdatedAt: 0,
        failureCount: 0,
        isFetched: true,
        isFetchedAfterMount: true,
        isFetching: false,
        isLoadingError: false,
        isPlaceholderData: false,
        isPreviousData: false,
        isRefetchError: false,
        isStale: true
    }
    const oldData = iterateObject2ReplaceKey(newData.data?.data)
    console.log(
        '#164',
        'isEqual:',
        _.isEqual(newData.data?.data, oldData),
        'oldData:',
        oldData,
        'newData:',
        newData.data?.data
    )
    alert('OK')
}

const iterateObject = function (props) {
    const newObj = {}
    const recur = (obj, nextObj, parents) => {
        if (parents.length > 0) {
            const path = parents.join('.')
            console.log('path:', path, 'newObj:', newObj)
        }
        if (!_.isObject(obj)) {
            return
        }
        Object.keys(obj).forEach(function (key) {
            const elem = obj[key]
            if (_.isArray(elem)) {
                nextObj[key] = []
                for (let i = 0; i < elem.length; i++) {
                    const copyParent = _.clone(parents)
                    copyParent.push(key, i)
                    const subElem = elem[i]
                    nextObj[key].push(subElem)
                    recur(subElem, nextObj[key], copyParent)
                }
            } else {
                const copyParent = _.clone(parents)
                copyParent.push(key)
                nextObj[key] = elem
                recur(elem, nextObj[key], copyParent)
            }
        })
    }
    recur(props, newObj, [])
    return newObj
}

/**
 * 修改映射的 key 值
 * @param props
 * @returns
 */
export const iterateObject2ReplaceKey = (props: any) => {
    function getNewKey(paths: string[]) {
        const path = paths.join('.')
        if (path === 'contactProfileVOS') {
            return 'contactModels'
        }
        if (/contactProfileVOS\.\d+\.socialMediaProfileVOList/.test(path)) {
            return 'socialMediaModels'
        }
        if (path === 'customerLockingStatus') {
            return 'lockingStatus'
        }
        if (path === 'customizedAddress') {
            return 'customizeAddress'
        }
        return paths.slice(-1)[0]
    }

    const newObj = {}
    const recur = (obj: any, nextObj: any, parents: string[]) => {
        if (!_.isObject(obj)) {
            return
        }
        Object.keys(obj).forEach(function (key) {
            const elem = obj[key]
            const copyParent = _.clone(parents)
            copyParent.push(key)
            const newKey = getNewKey(copyParent)
            nextObj[newKey] = elem
            recur(elem, nextObj[newKey], copyParent)
        })
    }
    recur(props, newObj, [])
    return newObj
}

/**
 * 过滤 enum 中的空值
 * @param props
 * @returns
 */
export const iterateObject2FilterEnum = (props: JSON) => {
    const newObj = {} as JSON
    const recur = (obj: any, nextObj: any, parents: string[]) => {
        if (!_.isObject(obj)) {
            return
        }
        Object.keys(obj).forEach(function (key) {
            const elem = obj[key]
            const copyParent = _.clone(parents)
            copyParent.push(key)
            if (_.isArray(elem)) {
                nextObj[key] = elem.filter(a => a)
            } else {
                nextObj[key] = elem
            }
            recur(elem, nextObj[key], copyParent)
        })
    }
    recur(props, newObj, [])
    return newObj
}
