import xss from 'xss'

export const testEscapeAndUnescape = () => {
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
    return arr
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
