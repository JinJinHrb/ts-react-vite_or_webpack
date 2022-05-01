import _ from 'lodash'

export const convOldToNew = () => {
    const oldData = {
        customerId: '19990100323000022041900013061',
        customerName: 'bbbbdww',
        customerType: '- -',
        customerRegion: '- -',
        customerGeoCode: 'ALB',
        address: '- -',
        addressGeoCode: '- -',
        addressGeoAddress: '- -',
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
                birthday: '2022-04-06',
                gender: '男',
                remark: 'dwdwdww'
            },
            {
                customerId: null,
                contactName: 'test',
                contactEmail: 'test@test.com',
                contactPhone: ['111'],
                contactFax: '111',
                contactId: '19990100324000022042800010889',
                socialMediaModels: [
                    {
                        socialMediaType: 'FACEBOOK',
                        accountNumber: '111',
                        socialMediaId: '19990100325000022042800010435'
                    }
                ],
                position: 'test',
                birthday: '2022-04-30',
                gender: '男',
                remark: '111'
            }
        ],
        status: '- -',
        createdTime: '2022-04-19 16:00:40',
        createdUserName: '- -',
        customerNo: 'C000000008',
        customerAbbreviation: 'bbbbdww',
        customerFax: '22222',
        customerPhone: '11111111111',
        customerSource: '- -',
        customerLevel: '- -',
        responsibleUserId: '00990100001000018030101000073',
        responsibleUserName: '113',
        responsibleStatus: 'FOLLOWING',
        attachmentVOS: '- -',
        customerLabel: '- -',
        tags: [
            {
                name: 'pp',
                color: '#52c41a',
                code: '2104'
            },
            {
                name: 'xx',
                color: '#fa541c',
                code: '2103'
            }
        ],
        lockingStatus: 'LOCKING',
        ocrId: '- -',
        userId: '- -',
        customizeAddress: 'wwwefwef'
    }
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

/*
 * replaceKeyHandler(path, val)
 */
const iterateObject2ReplaceKey = props => {
    function getNewKey(paths) {
        const path = paths.join('.')
        if (path === 'contactProfileVOS') {
            return 'contactModels'
        }
        if (/contactProfileVOS\.\d+\.socialMediaProfileVOList/.test(path)) {
            debugger
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
    const recur = (obj, nextObj, parents) => {
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
