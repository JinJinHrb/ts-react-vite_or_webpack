import _ from 'lodash'

/**
 *
 * @param amount 金额/数值
 * @param currency 货币单位的英文缩写
 * @param precision 处理货币小数点的精度位数,不需要处理货币小数点的，则不需要传
 * @returns
 */
export const thousandthFormat = (
    amount: string | number | null | undefined,
    currency?: string | null | undefined,
    precision?: number
): string => {
    if (amount === undefined) return '-'

    amount = String(amount)
    if (amount.includes(',')) {
        amount = amount.replace(/,/g, '')
    }

    const oddParams: Array<string> = ['', 'undefined', 'null']

    if (currency === undefined) {
        // 只传入currency的情况
        if (oddParams.includes(amount)) {
            return '-'
        }
        return formatNumber(amount)
    }

    // 传入currencyType 的情况, 即按货币方式处理
    let formatCurrency = '',
        showValue = ''
    if (currency !== null && !oddParams.includes(currency)) {
        // 判断币种类型，日元和韩元不展示小数点后位数，其他货币需要展示
        const filterTypeList = ['JPY', 'KRW']
        const type = currency.toUpperCase()
        if (filterTypeList.includes(type)) {
            formatCurrency = Number(amount).toFixed()
        } else if (precision || precision === 0) {
            formatCurrency = Number(amount).toFixed(precision)
        } else {
            formatCurrency = amount
        }
    }
    // 处理金额的展示
    if (oddParams.includes(amount)) {
        showValue = '-'
    } else {
        showValue = formatNumber(formatCurrency)
    }
    return `${showValue}`
}

const formatNumber = (amount: string): string => {
    if (amount.includes('.')) {
        const parsedArr = amount.split('.')
        parsedArr[0] = parsedArr[0].replace(/\B(?=(\d{3})+\b)/g, ',')
        return parsedArr.join('.')
    } else {
        return amount.replace(/\B(?=(\d{3})+\b)/g, ',')
    }
}

const _iterator = (includeKeys: string[], prefix: string, elem: unknown) => {
    if (!_.isObject(elem)) {
        return elem
    }
    const copyElem = _.isArray(elem) ? [] : {}
    Object.keys(elem).forEach(k => {
        let isIncluded = false
        if (_.isString(elem[k]) || _.isNumber(elem[k])) {
            const lowerK = _.lowerCase(k)
            for (const iKey of includeKeys) {
                if (lowerK.includes(_.lowerCase(iKey))) {
                    isIncluded = true
                    break
                }
            }
        }
        if (isIncluded) {
            copyElem[_.camelCase(`${prefix} ${k}`)] = thousandthFormat(elem[k] as string | number)
        }
        copyElem[k] = _iterator(includeKeys, prefix, elem[k])
    })
    return copyElem
}

/** 原地修改（key 值全转小写匹配） */
export const deepCloneThousandthFormat = function (includeKeys: string[], prefix: string, obj: unknown) {
    return _iterator(includeKeys, prefix, obj)
}
