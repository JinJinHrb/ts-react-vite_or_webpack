// 这是需要校验的数据
export default {
    string: '123456', // 超过5个字
    // number 字段不存在
    url: 'xxxxx', // 不合法的url
    arr: [
        {
            string: '1'
        },
        {
            string: '2'
        },
        {
            // 数组超出2项
            string: '' // 没有填
        }
    ]
}
