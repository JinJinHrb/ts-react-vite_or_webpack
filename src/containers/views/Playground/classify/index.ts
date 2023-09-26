import _ from 'lodash'

import {
    getUserBankAccountInfo,
    getUserFirmInfo,
    getUserInfo,
    getUserProfile,
    getUserVirtualAccountInfo
} from './demoData'

export const classifyShallowKey = () => {
    const userProfile = getUserProfile()
    const userInfo = getUserInfo()
    const firmInfo = getUserFirmInfo()
    const virtualAccountInfo = getUserVirtualAccountInfo()
    const bankAccountInfo = getUserBankAccountInfo()
    const domainKeysMap = {
        userInfo,
        firmInfo,
        virtualAccountInfo,
        bankAccountInfo
    }
    const domainKeysMap2 = {} // 仅存各个domainKey 对应的 keys
    const allDks = Object.keys(domainKeysMap)
    const duplicateKeys = []
    const onlyInProfileKeys = Object.keys(userProfile)
    for (let i = 0; i < allDks.length; i++) {
        const obi = domainKeysMap[allDks[i]]
        const obiKeys = Object.keys(obi)
        domainKeysMap2[allDks[i]] = obiKeys
        obiKeys.forEach(k => {
            const idxK = onlyInProfileKeys.indexOf(k)
            if (idxK > -1) {
                onlyInProfileKeys.splice(idxK, 1)
            }
        })

        for (let j = 0; j < allDks.length; j++) {
            if (i == j) {
                continue
            }
            const obj = domainKeysMap[allDks[j]]
            const objKeys = Object.keys(obj)
            for (const ik of obiKeys) {
                for (const jk of objKeys) {
                    if (!duplicateKeys.includes(ik) && ik === jk) {
                        duplicateKeys.push(ik)
                        break
                    }
                }
            }
        }
    }

    const notInProfileKeysMap = {
        userInfo,
        firmInfo,
        virtualAccountInfo,
        bankAccountInfo
    }
    for (const dk of allDks) {
        const obks = Object.keys(notInProfileKeysMap[dk])
        for (const obk of obks) {
            if (userProfile[obk]) {
                delete notInProfileKeysMap[dk][obk]
            }
        }
    }

    return { duplicateKeys, onlyInProfileKeys, notInProfileKeysMap, domainKeysMap2 }
}
