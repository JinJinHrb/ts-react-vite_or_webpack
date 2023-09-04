import wcmatch from 'wildcard-match'

function isUrlMatchWildCard(url: string, patterns: string[]) {
    let isMatch = false
    for (const pattern of patterns) {
        const matchFun = wcmatch(pattern)
        if (matchFun(url)) {
            isMatch = true
            break
        }
    }
    return isMatch
}

export default () => {
    const requestUrl = 'https://example.cn/api/2/envelope/?sentry_key=6e4d89dd2ccb4dce8c789a543d219a54&sentry_version=7'
    let matchFun = wcmatch('/example.cn/api/2/envelope')
    console.log('isMatch #1:', matchFun(requestUrl))
    matchFun = wcmatch('**/example.cn/api/2/envelope/*')
    console.log('isMatch #2:', matchFun(requestUrl))
    matchFun = wcmatch('*/example.cn/api/2/envelope/*')
    console.log('isMatch #3:', matchFun(requestUrl))
    matchFun = wcmatch('**/example.cn/**/envelope/*')
    console.log('isMatch #4:', matchFun(requestUrl))

    // const hijackUrls = ['*/example.cn/api/2/envelope/*']
    const hijackUrls = ['**/example.cn/**/envelope/*']
    const isMatch = isUrlMatchWildCard(requestUrl, hijackUrls)
    console.log('hijackUrls isMatch:', isMatch)
}
