import _ from 'lodash'
import numeral from 'numeral'

/** 不带小数位的货币代码 */
export const ZERO_DECIMAL_CURRENCY = ['KWA', 'JPY', 'KRW']

/** 保留三位小数的货币代码 */
export const THREE_DECIMAL_CURRENCY = ['KWD']

/*
 * 单价: unitPrice
 * 总价: settlementAmount
 * 数量: quantity
 * 重量: weight
 * 尺寸: size
 * 体积: volume
 * 汇率: exchangeRate
 */
export enum ThousandthFormatTypes {
    unitPrice = 'unitPrice', // 默认：整数最大12位，小数最多4位；无小数位货币：整数最大16位
    settlementAmount = 'settlementAmount',
    quantity = 'quantity',
    weight = 'weight',
    size = 'size',
    volume = 'volume',
    exchangeRate = 'exchangeRate'
}

export interface IThousandthFormatter {
    currency?: string | null | undefined
    precision?: number
    decimalPlaces?: number
    roundUp?: boolean
    formatType?: ThousandthFormatTypes
}

export interface IThousandthFormat extends IThousandthFormatter {
    amount: string | number | null | undefined
}

// 12位整数+4位小数的最大值
const Nine12_Nine4 = numeral(_.repeat('9', 12) + '.' + _.repeat('9', 4)).value()

// 16位整数的最大值
const Nine16 = numeral(_.repeat('9', 16)).value()

// 10位整数+6位小数的最大值
const Nine10_Nine6 = numeral(_.repeat('9', 10) + '.' + _.repeat('9', 6)).value()

const Nine7_Nine9 = numeral(_.repeat('9', 7) + '.' + _.repeat('9', 9)).value()

const Nine8_Nine8 = numeral(_.repeat('9', 8) + '.' + _.repeat('9', 8)).value()

const getParamByThousandthFormatType = ({
    formatType,
    currency
}: {
    formatType: ThousandthFormatTypes
    currency?: string
}) => {
    const params = {
        [ThousandthFormatTypes.unitPrice]: {
            // - 默认：整数最大12位，小数最多4位；- 无小数位货币：整数最大16位
            decimalPlaces: ZERO_DECIMAL_CURRENCY.includes(currency) ? 0 : 4,
            max: ZERO_DECIMAL_CURRENCY.includes(currency) ? Nine16 : Nine12_Nine4,
            min: 0
        },
        [ThousandthFormatTypes.settlementAmount]: {
            // - 默认：整数最大16位，小数最大2位 - 无小数位货币：整数最大16位
            precision: ZERO_DECIMAL_CURRENCY.includes(currency) ? 0 : THREE_DECIMAL_CURRENCY.includes(currency) ? 3 : 2,
            max: Nine16,
            min: 0
        },
        [ThousandthFormatTypes.quantity]: {
            // - 整数最大16位
            decimalPlaces: 0,
            max: Nine16,
            min: 0
        },
        [ThousandthFormatTypes.weight]: {
            // - 整数最大10位，小数最大6位，
            decimalPlaces: 6,
            max: Nine10_Nine6,
            min: 0
        },
        [ThousandthFormatTypes.size]: {
            // - 整数最大10位，小数最大6位，
            decimalPlaces: 6,
            max: Nine10_Nine6,
            min: 0
        },
        [ThousandthFormatTypes.volume]: {
            // - 整数最大7位，小数最大9位
            decimalPlaces: 9,
            max: Nine7_Nine9,
            min: 0
        },
        [ThousandthFormatTypes.exchangeRate]: {
            // 整数最大8位，小数最大8位  (同收款的要求)
            decimalPlaces: 8,
            max: Nine8_Nine8,
            min: 0
        }
    }
    return params[formatType]
}

/**
 *
 * @param amount 金额/数值
 * @param currency 货币单位的英文缩写，如果有了货币精度以货币对应精度为准，precision 不起作用；小数位不足会自动补零
 * @param precision 固定小数位；小数位不足会自动补零
 * @param decimalPlaces 最大小数位，超出简单截断，小数位不足不补零，仅当 currency 及 precision 不存在时有效
 * @param roundUp true 四舍五入，否则截断多余小数位
 * @param formatType 如果提供枚举类型之内的参数，会覆盖 precision, decimalPlaces；在 formily-xtd 数字相关栏位还会覆盖 max 或 min
 * @returns
 */
export const thousandthFormat = (props: IThousandthFormat): string => {
    const { amount: inputAmount, roundUp, formatType } = props
    let { currency, precision, decimalPlaces } = props
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
    if (oddParams.includes(amount)) {
        return ''
    }
    const overrideParam =
        formatType in ThousandthFormatTypes ? getParamByThousandthFormatType({ formatType, currency }) : undefined
    if (!_.isEmpty(overrideParam)) {
        precision = (
            overrideParam as {
                precision: number
                max: any
                min: number
            }
        ).precision
        decimalPlaces = (
            overrideParam as {
                decimalPlaces: number
                max: any
                min: number
            }
        ).decimalPlaces
        currency = undefined
    }

    let generalDecimalPlaces: number | undefined

    if (ZERO_DECIMAL_CURRENCY.includes(currency as string)) {
        generalDecimalPlaces = 0
    } else if (THREE_DECIMAL_CURRENCY.includes(currency as string)) {
        generalDecimalPlaces = 3
    } else if (currency?.length === 3) {
        generalDecimalPlaces = 2
    } else if (_.isNumber(precision)) {
        generalDecimalPlaces = precision
    } else if (_.isNumber(decimalPlaces)) {
        generalDecimalPlaces = decimalPlaces
    }

    // 只传入currency的情况
    let splitAmount = []
    if (_.isNumber(generalDecimalPlaces) && roundUp) {
        // 如果选择四舍五入，在截取前预先计算新的 amount
        const roundUpAmount = Number(amount).toFixed(generalDecimalPlaces)
        splitAmount = roundUpAmount.split('.')
    } else {
        splitAmount = amount.split('.')
    }
    let fraction = splitAmount[1]
    if (!_.isEmpty(fraction)) {
        fraction = fraction.replace(/0+$/g, '')
        if (_.isNumber(generalDecimalPlaces)) {
            fraction = fraction.slice(0, generalDecimalPlaces)
        }
        if (
            (currency?.length === 3 || _.isNumber(precision)) &&
            _.isNumber(generalDecimalPlaces) &&
            fraction.length < generalDecimalPlaces
        ) {
            fraction += _.repeat('0', generalDecimalPlaces - fraction.length)
        }
        return splitDecimal(splitAmount[0]) + (_.isEmpty(fraction) ? '' : '.' + fraction)
    } else if (currency?.length === 3 || _.isNumber(precision)) {
        if (generalDecimalPlaces === 0) {
            return splitDecimal(splitAmount[0])
        }
        return splitDecimal(amount) + '.' + _.repeat('0', generalDecimalPlaces)
    } else if (generalDecimalPlaces === 0) {
        return splitDecimal(splitAmount[0])
    }
    return splitDecimal(amount)
}

/**
 * 为整数分割千分位
 * */
const splitDecimal = (amount: string): string => {
    if (amount.includes('.')) {
        const parsedArr = amount.split('.')
        parsedArr[0] = parsedArr[0].replace(/\B(?=(\d{3})+\b)/g, ',')
        parsedArr[1] = parsedArr[1].replace(/0+$/g, '')
        return parsedArr.join('.').replace(/\.$/, '')
    } else {
        return amount.replace(/\B(?=(\d{3})+\b)/g, ',')
    }
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

export const thousandthParser = (value: string | number) => {
    if (_.isNumber(value)) {
        return value
    }
    if (!/^-?\d[,0-9.]+(\d|.)$/.test(_.trim(value))) {
        return value
    }
    if ((value as string).indexOf('.') === 0) {
        return value
    }
    // if ((value as string).indexOf('.') === (value as string).length - 1) {
    //     return value
    // }
    // return value.replace(/(\s|,)/g, '').replace(/(?<=\.[^.]*)\./g, '') // Safari 回顾零宽断言不兼容
    let newValue: string = (value as string).replace(/(\s|,)/g, '')
    while (newValue.indexOf('.') !== newValue.lastIndexOf('.')) {
        newValue = newValue.replace('.', '')
    }
    if (/\.$/.test(newValue)) {
        newValue = newValue.slice(0, newValue.length - 1)
    }
    return newValue
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

/** 原地修改 */
export const __iterateObject4DecimalParse = function (obj: unknown, currency?: string) {
    if (!_.isObject(obj)) {
        return
    }
    Object.keys(obj).forEach(function (key) {
        const elem = obj[key]
        if ((_.isString(elem) || _.isNumber(elem)) && /\d/.test(String(elem))) {
            obj[key] = thousandthParser(String(elem))
            if (ZERO_DECIMAL_CURRENCY.includes(currency as string)) {
                obj[key] = obj[key].split('.')[0]
            }
        } else {
            __iterateObject4DecimalParse(elem, currency)
        }
    })
}

/** 原地修改 */
export const iterateObject4DecimalParse = function (obj: unknown) {
    const currency = (obj as { currency?: string })?.currency
    __iterateObject4DecimalParse(obj, currency)
    return obj
}
