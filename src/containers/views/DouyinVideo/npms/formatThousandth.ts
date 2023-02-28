import _ from 'lodash'
import numeral from 'numeral'

/** 不带小数位的货币代码 */
export const ZERO_DECIMAL_CURRENCY = ['KWA', 'JPY', 'KRW']

/** 保留三位小数的货币代码 */
export const THREE_DECIMAL_CURRENCY = ['KWD']

/**
 *
 * @param amount 金额/数值
 * @param currency 货币单位的英文缩写，如果有了货币精度以货币对应精度为准，precision 不起作用
 * @param precision 处理货币小数点的精度位数,不需要处理货币小数点的，则不需要传
 * @returns
 */
export const thousandthFormat = (props: {
    amount: string | number | null | undefined
    currency?: string | null | undefined
    precision?: number
}): string => {
    const { amount: inputAmount, currency, precision } = props
    if (_.isNil(inputAmount)) return ''

    let amount = String(inputAmount)
    if (amount.includes(',')) {
        amount = amount.replace(/,/g, '')
    }
    amount = amount.replace(/\.$/, '')
    while (amount.indexOf('.') !== amount.lastIndexOf('.')) {
        amount = amount.replace('.', '')
    }

    const oddParams: Array<string> = ['', 'undefined', 'null']

    if (_.isNil(currency) && !_.isNumber(precision)) {
        // 只传入currency的情况
        if (oddParams.includes(amount)) {
            return ''
        }
        const splitAmount = amount.split('.')
        let fraction = splitAmount[1]
        if (!_.isEmpty(fraction)) {
            fraction = fraction.replace(/0+$/g, '')
            return splitDecimal(splitAmount[0]) + (_.isEmpty(fraction) ? '' : '.' + fraction)
        }
        return splitDecimal(amount)
    }

    // 传入currencyType 的情况, 即按货币方式处理
    let formatCurrency = '',
        showValue = ''
    if (!_.isNil(currency) || _.isNumber(precision)) {
        // 判断币种类型，日元和韩元不展示小数点后位数，其他货币需要展示
        if (_.isString(currency)) {
            const type = currency.toUpperCase() ?? ''
            if (ZERO_DECIMAL_CURRENCY.includes(type)) {
                formatCurrency = Number(amount).toFixed()
            } else if (THREE_DECIMAL_CURRENCY.includes(type)) {
                formatCurrency = Number(amount).toFixed(3)
            } else if (currency) {
                formatCurrency = Number(amount).toFixed(2)
            } else {
                formatCurrency = amount
            }
        } else if (precision || precision === 0) {
            formatCurrency = Number(amount).toFixed(precision)
        } else {
            formatCurrency = amount
        }
    }
    // 处理金额的展示
    if (oddParams.includes(amount)) {
        showValue = ''
    } else {
        showValue = splitDecimal(formatCurrency)
    }
    return `${showValue}`
}

/**
 * 为整数分割千分位
 * */
const splitDecimal = (currency: string): string => {
    if (currency.includes('.')) {
        const parsedArr = currency.split('.')
        parsedArr[0] = parsedArr[0].replace(/\B(?=(\d{3})+\b)/g, ',')
        return parsedArr.join('.')
    } else {
        return currency.replace(/\B(?=(\d{3})+\b)/g, ',')
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
            copyElem[_.camelCase(`${prefix} ${k}`)] = thousandthFormat({ amount: elem[k] as string | number })
        }
        copyElem[k] = _iterator(includeKeys, prefix, elem[k])
    })
    return copyElem
}

/** 深拷贝增加千分位（key 值全转小写匹配） */
export const deepCloneDecimalSeparator = function (includeKeys: string[], prefix: string, obj: unknown) {
    return _iterator(includeKeys, prefix, obj)
}

/**
 * 基于 numeral 的千分位处理
 * @param num
 * @param format
 * @returns
 */
export const formatNumber = (num: number, format?: string) => {
    if (num) {
        let defaultFormat = '0,0.'
        const decimalLength =
            parseFloat(num as unknown as string)
                ?.toString()
                ?.split('.')?.[1]?.length || 2
        for (let i = 0; i < decimalLength; i++) {
            defaultFormat += '0'
        }
        return numeral(num).format(format || defaultFormat)
    }
}
