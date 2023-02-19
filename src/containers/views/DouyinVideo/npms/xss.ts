import _ from 'lodash'
import xss from 'xss'
// import

export const testEscapeAndUnescape = (data: unknown) => {
    const arr = []
    const str = '1 < 2'
    arr.push('原字符串：', str)
    arr.push('安全：' + safeUnescape(xss(str)))
    arr.push('不安全：' + unEscapeHtml(xss(str)))
    arr.push('')
    const str2 = '< img onerror = "function(){\\"I am a villain\\")}" >'
    arr.push('原字符串：', str2)
    arr.push('安全：' + safeUnescape(xss(str2)))
    arr.push('不安全：' + unEscapeHtml(xss(str2)))
    arr.push('')
    // const str3 = '<img onerror="function(){alert("I am a villain")})" />'
    // arr.push(xss(str3))
    // arr.push(testUnescape(xss(str3)))
    iterateObject4SafeUnescape(data)
    return arr
}

/** 原地修改 */
export const iterateObject4SafeUnescape = function (obj: unknown) {
    if (!_.isObject(obj)) {
        return
    }
    Object.keys(obj).forEach(function (key) {
        const elem = obj[key]
        if (_.isString(elem)) {
            obj[key] = safeUnescape(elem)
        } else {
            iterateObject4SafeUnescape(elem)
        }
    })
}

export const safeUnescape = (str: string) => {
    let balance = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '&') {
            const tmp = str.slice(i, i + 4)
            if (tmp === '&lt;') {
                balance++
            } else if (tmp === '&gt;') {
                balance--
            }
            i += 4
            continue
        }
    }
    if (balance !== 0) {
        return str.split('&lt;').join('<').split('&gt;').join('>')
    }
    return str
}

export const unEscapeHtml = (html: string) => {
    return html.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}
