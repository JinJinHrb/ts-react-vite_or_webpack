/* eslint-disable prettier/prettier */
import React, { ReactElement, useRef, useState } from 'react'
import { Input, Button, message } from 'antd'
const { TextArea } = Input
import axios from 'axios'
import numeral from 'numeral'

import styles from './index.module.scss'
import data from 'mock/mail/data'
import _ from 'lodash'
// import { testDemoFoo } from './interview'
import { DataResponse, IEspEntity, IParams } from './types.d'
// import { doBatch, doAction } from './reactive'
import { /* hideEmptyModules, parseData, */ parseData2, recurFieldId, submitFormily } from './schema'
import { convertCraftjs2Formily, convNewToOld, convOldToNew, getBasicInfo } from './converts'
import {
    rawCrmMenu,
    // demoAuthList,
    authCodes,
    getAuthMenu,
    getIdMapping,
    getTree,
    tailorTree
} from './menuTree/menuTree'
import demoData4Craftjs from './mock/mock4craftjs'
// import demoData4Formily from './mock/mock4formily'
// import formilySchema from './mock/formilySchema'
import bTree from './mock/mock4tree2'
import {
    inorderTraversal,
    inorderTraversal2,
    levelOrder,
    postorderTraversal,
    postorderTraversal2,
    preorderTraversal
} from './algo/traverseTree'
import mock4recur from './mock/mock4recur'
import { testDp } from './algo'
import { testConcat, testMergeAll, testPipeAndTap } from './rxjs'
import { testKmp } from './algo/kmp'
import { doesObjectHaveNestedPair, findNestedKey } from './algo/recur'
import schema4customer from './mock/createCustomer3.js'
import { testEscapeAndUnescape } from './npms/xss'
import { TextAreaProps, TextAreaRef } from 'antd/lib/input/TextArea'
import customerData from '@mock/trade/customer/customerDetail/customerData'
import boardData from '@mock/trade/business/board'
import submitOrder from '@mock/trade/order/submitOrder'
import {
    deepCloneDecimalSeparator,
    formatNumber,
    iterateObject4DecimalParse,
    thousandthFormat,
    ThousandthFormatTypes,
    thousandthParser
} from './npms/formatThousandth'
import { Map } from 'immutable'
import BigNumber from 'bignumber.js'
// import { pLimit } from './queue'
import { testSingleton, testSingleton2 } from './designPattern'
import { FirstParam, PascalCase, PascalCasedProps, Underscore2CamelCase, Underscore2CamelCaseProps } from './myType'
import { testImmer } from './immerDemo'
import { extractFromCraftJsTemplate, sortNodes } from './craftjs'
import template from 'containers/views/Playground/craftjs/serialize/serializedData'
import fastTemplate from 'containers/views/Playground/craftjs/serialize/fastSerializedData'
import { beSoldier, lengthOfLongestSubstring, myFlatten, testGetCookie } from './interview'
import { PLimit } from './queue'
import { testInterview } from './interviewHuawei'

// mock data start
const imapParams = {
    authenticateEntry: {
        username: 'xtUsername',
        password: 'xtPassword',
        ssl: 'xtSsl'
    },
    hostEntry: {
        hostname: 'xtimap.126.com',
        port: 993
    },
    protocol: 'IMAP'
}
const smtpParams = {
    authenticateEntry: {
        username: 'xtUsername',
        password: 'xtPassword',
        ssl: 'xtSsl'
    },
    hostEntry: {
        hostname: 'xtsmtp.126.com',
        port: 465
    },
    protocol: 'SMTP'
}

const emailDomain = {
    entityGroups: [
        [
            {
                hostEntry: {
                    hostname: 'xtsmtp.126.com',
                    port: 25,
                    sslPort: 465
                },
                protocol: 'SMTP'
            },
            {
                hostEntry: {
                    hostname: 'xtimap.126.com',
                    port: 143,
                    sslPort: 993
                },
                protocol: 'IMAP'
            }
        ],
        [
            {
                hostEntry: {
                    hostname: 'smtp.126.com',
                    port: 25,
                    sslPort: 465
                },
                protocol: 'SMTP'
            },
            {
                hostEntry: {
                    hostname: 'imap.126.com',
                    port: 143,
                    sslPort: 993
                },
                protocol: 'IMAP'
            }
        ]
    ],
    imapHostname: 'xtimap.126.com',
    imapInsecurePort: 143,
    imapPort: 993,
    imapSsl: true,
    imapSslPort: 993,
    imapUsername: 'testxtransfer@126.com',
    pop3Hostname: '',
    pop3InsecurePort: undefined,
    pop3Port: '',
    pop3Ssl: false,
    pop3SslPort: undefined,
    pop3Username: 'testxtransfer@126.com',
    smtpHostname: 'xtsmtp.126.com',
    smtpInsecurePort: 25,
    smtpPort: 465,
    smtpSsl: true,
    smtpSslPort: 465,
    smtpUsername: 'testxtransfer@126.com'
}

// mock data end

function Playground() {
    const [loading, setLoading] = React.useState(false)
    const [url, setUrl] = React.useState('')
    const [targetUrl, setTargetUrl] = React.useState('')
    const textAreaRef = useRef<TextAreaRef>()
    const [textAreaVal, setTextAreaVal] = useState('')

    async function submit() {
        setLoading(true)
        try {
            const { data } = await axios.get<string>('https://jackple.com/', { params: { url } })
            if (data.startsWith('http')) {
                return setTargetUrl(data)
            }
            throw new Error()
        } catch (err) {
            message.error('sth error, please check input')
        } finally {
            setLoading(false)
        }
    }

    function testIsConnect() {
        const hn4Imap = imapParams?.hostEntry?.hostname
        const pt4Imap = imapParams?.hostEntry?.port
        const ae4Imap = imapParams?.authenticateEntry
        const hn4Smtp = smtpParams?.hostEntry?.hostname
        const pt4Smtp = smtpParams?.hostEntry?.port
        const ae4Smtp = smtpParams?.authenticateEntry
        const imapParamsArray = []
        const smtpParamsArray = []
        ;(emailDomain?.entityGroups || []).forEach(arr => {
            arr.forEach(el => {
                const hostname = el?.hostEntry?.hostname
                const port = el?.hostEntry?.port
                const protocol = el?.protocol
                if (!hostname || !port || !protocol) {
                    return
                }
                if (protocol === 'IMAP') {
                    if (hn4Imap === hostname) {
                        imapParamsArray.push(imapParams)
                    } else {
                        const cpEl = _.clone(el) as any
                        cpEl.authenticateEntry = ae4Imap
                        if (pt4Imap === cpEl.hostEntry.port) {
                            delete cpEl.hostEntry.sslPort
                        } else {
                            cpEl.hostEntry.port = cpEl.hostEntry.sslPort
                            delete cpEl.hostEntry.sslPort
                        }
                        imapParamsArray.push(cpEl)
                    }
                } else if (protocol === 'SMTP') {
                    if (hn4Smtp === hostname) {
                        smtpParamsArray.push(smtpParams)
                    } else {
                        const cpEl = _.clone(el) as any
                        cpEl.authenticateEntry = ae4Smtp
                        if (pt4Smtp === cpEl.hostEntry.port) {
                            delete cpEl.hostEntry.sslPort
                        } else {
                            cpEl.hostEntry.port = cpEl.hostEntry.sslPort
                            delete cpEl.hostEntry.sslPort
                        }
                        smtpParamsArray.push(cpEl)
                    }
                }
            })
        })
        console.log('testIsConnect #163', 'imapParamsArray:', imapParamsArray, 'smtpParamsArray:', smtpParamsArray)
        alert('testIsConnect #163')
    }

    // 透明层 Start

    const [displayTransparencyLayer, setDisplayTransparencyLayer] = useState(false)
    const rect = {
        bottom: 415.34375,
        height: 32,
        left: 716.546875,
        right: 966,
        top: 383.34375,
        width: 249.453125,
        x: 716.546875,
        y: 383.34375
    }

    const transparencyLayer = [
        // 第一象限
        {
            left: rect.left + rect.width,
            top: rect.top,
            width: document.body.offsetWidth - rect.left - rect.width,
            height: rect.height,
            color: 'red',
            border: '1px solid red'
        },
        // 第二象限
        {
            left: 0,
            top: 0,
            width: document.body.offsetWidth,
            height: rect.top,
            color: 'blue',
            border: '1px solid blue'
        },
        // 第三象限
        {
            left: 0,
            top: rect.top,
            width: rect.left,
            height: rect.height,
            color: 'green',
            border: '1px solid green'
        },
        // 第四象限
        {
            left: 0,
            top: rect.top + rect.height,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight + rect.top,
            color: 'yellow',
            border: '1px solid yellow'
        }
    ].map((el, idx) => {
        const style = {
            position: 'fixed',
            ...el
        } as any
        return (
            <div key={idx} style={style}>
                demo
            </div>
        )
    })

    function testTransparencyLayer() {
        setDisplayTransparencyLayer(!displayTransparencyLayer)
    }

    // 透明层 End

    function test() {
        const newData = _.reduce(
            data,
            function (result, value, key) {
                const [type, pathname, params, dataResponse]: [string, string, object, DataResponse] = value
                const str = `${type}:${pathname}`
                if (!result[str]) {
                    result[str] = []
                }
                result[str].push({ params, dataResponse })
                return result
            },
            {}
        )
        console.log('newData:', newData)
        alert('OK')
    }

    // 多配置碰撞 Start

    /**
     * 多配置碰撞：通过已有的 imap/smtp 配置补全其他配置
     */
    function getMultipleConnectionParams(imapParams: IParams, smtpParams: IParams, entityGroups: IEspEntity[][]) {
        const pt4Imap = imapParams?.hostEntry?.port
        const ae4Imap = imapParams?.authenticateEntry
        const pt4Smtp = smtpParams?.hostEntry?.port
        const ae4Smtp = smtpParams?.authenticateEntry
        const imapParamsArray: IParams[] = []
        const smtpParamsArray: IParams[] = []
        if (!_.isEmpty(imapParams)) {
            imapParamsArray.push(imapParams)
        }
        if (!_.isEmpty(smtpParams)) {
            smtpParamsArray.push(smtpParams)
        }
        ;(entityGroups || []).forEach(arr => {
            arr.forEach(el => {
                const hostname = el?.hostEntry?.hostname
                const port = el?.hostEntry?.port
                const protocol = el?.protocol
                if (!hostname || !port || !protocol) {
                    return
                }
                if (protocol === 'IMAP') {
                    const cpEl = _.clone(el) as any
                    cpEl.authenticateEntry = ae4Imap
                    if (pt4Imap === cpEl.hostEntry.port) {
                        delete cpEl.hostEntry.sslPort
                    } else {
                        cpEl.hostEntry.port = cpEl.hostEntry.sslPort
                        delete cpEl.hostEntry.sslPort
                    }
                    imapParamsArray.push(cpEl)
                } else if (protocol === 'SMTP') {
                    const cpEl = _.clone(el) as any
                    cpEl.authenticateEntry = ae4Smtp
                    if (pt4Smtp === cpEl.hostEntry.port) {
                        delete cpEl.hostEntry.sslPort
                    } else {
                        cpEl.hostEntry.port = cpEl.hostEntry.sslPort
                        delete cpEl.hostEntry.sslPort
                    }
                    smtpParamsArray.push(cpEl)
                }
            })
        })
        // console.log('testIsConnect #163', 'imapParamsArray:', imapParamsArray, 'smtpParamsArray:', smtpParamsArray)
        const hostnameRegistry4Imap = {}
        const hostnameRegistry4Smtp = {}
        for (let i = 0; i < imapParamsArray.length; i++) {
            const imapElem = imapParamsArray[i]
            const smtpElem = smtpParamsArray[i]
            const imapHostname = imapElem?.hostEntry?.hostname
            const smtpHostname = smtpElem?.hostEntry?.hostname
            if (hostnameRegistry4Imap[imapHostname] || hostnameRegistry4Smtp[smtpHostname]) {
                imapParamsArray[i] = undefined
                smtpParamsArray[i] = undefined
            } else {
                hostnameRegistry4Imap[imapHostname] = true
                hostnameRegistry4Smtp[smtpHostname] = true
            }
        }
        return [imapParamsArray.filter(a => a), smtpParamsArray.filter(a => a)]
    }

    function testMultipleConnection() {
        const imapParams = {
            authenticateEntry: {
                username: '1197@xxyt.com',
                password:
                    'd1634e111f543b3d372adb66af0772610c152ba08b34aa37fed1b4dfd783399d4e90041f9f7f735455f039d823b6b507b375b8460942e6517bd130aaeb7e818447fd7fc5b6a9dc228cb589cdd9f1636b92d07634f992bb8e7676526062835499b3edeafc01d921275899828f177be4745617eeced76ac37bc9d341800ab26a525423a193ff2a5d7472503970b41999b82519c80a4712d6dab0de14792a5e7e439aaf975fb4e2aad151870f8ed23bf3e67aaa8cddc9d75e82abfbd98c7dda15e6a00669e35130869a2f64b29d2b73adb51f8e88831d7300ecd772b511f19e9961626c31b42618820a58d471d756752eea524adc38d029781ee04d111759692012',
                ssl: true
            },
            hostEntry: { hostname: 'imaphz.xtv.163.com', port: 993 },
            protocol: 'IMAP'
        }

        const smtpParams = {
            authenticateEntry: {
                password:
                    '9d0575567bd6e118b2e2ee4a68809f7bcfc1c9fb17f7dccf8fb5f614a325a20d29e3c79bbd2f72b0322b468476d3443b961b178d801ec617a06566e435a87e5124f6eb36861c7904b3dfaad93312d39ce63746b07f18fef21bc12d85c8d2552b8dd3eae47fc6b94905a0ff6cd3d2da46795695c7ecb70730a1607009608c8e40a6209b78e56484dd2751336cb73e3a350084ec3bac4854aa9a4fe1b8503e67fd3f8d98643c67a3341188755f968f0b008cd23f2e826722751eea528909c0c5ee9f6e7aea8661986a793ee0460670dfdeff5540d784d353aa67e5ebb67856fe06a443cd35f75cc7da88f75e80b5bd1823b94b5b99ab14f27cd20cfc07cbfed558',
                ssl: true,
                username: '1197@xxyt.com'
            },
            hostEntry: {
                // hostname: 'smtphz.xtv.163.com',
                hostname: 'smtphz.qiye.163.com',
                port: 465
            },
            protocol: 'SMTP'
        }

        const entityGroups = [
            [
                {
                    protocol: 'SMTP',
                    hostEntry: {
                        hostname: 'smtphz.qiye.163.com',
                        port: 25,
                        sslPort: 465
                    }
                },
                {
                    protocol: 'IMAP',
                    hostEntry: {
                        hostname: 'imaphz.qiye.163.com',
                        port: 143,
                        sslPort: 993
                    }
                }
            ],
            [
                {
                    protocol: 'SMTP',
                    hostEntry: {
                        hostname: 'smtp.qiye.163.com',
                        port: 25,
                        sslPort: 465
                    }
                },
                {
                    protocol: 'IMAP',
                    hostEntry: {
                        hostname: 'imap.qiye.163.com',
                        port: 143,
                        sslPort: 993
                    }
                }
            ]
        ]

        const [imapParamsArray, smtpParamsArray] = getMultipleConnectionParams(imapParams, smtpParams, entityGroups)
        console.log('#391', '[imapParamsArray, smtpParamsArray]', [imapParamsArray, smtpParamsArray])
        alert('OK')
    }

    // 多配置碰撞 End

    // 正则转义 Start

    const [escStr, setEscStr] = useState('')

    const escape4RegExp = function (str) {
        const hdlEscapeArray = {
            '*': 1,
            '.': 1,
            '?': 1,
            '+': 1,
            $: 1,
            '^': 1,
            '[': 1,
            ']': 1,
            '(': 1,
            ')': 1,
            '{': 1,
            '}': 1,
            '|': 1,
            '\\': 1,
            '/': 1
        }
        if (_.isEmpty(str)) {
            return ''
        }
        const rtnStrArray = []
        for (let i = 0, chr; i < str.length; i++) {
            chr = str[i]
            if (hdlEscapeArray[chr]) {
                rtnStrArray.push('\\' + chr)
            } else {
                rtnStrArray.push(chr)
            }
        }
        return rtnStrArray.join('')
    }

    function testEscRegExp() {
        console.log('"' + escStr + '"', '->', '"' + escape4RegExp(escStr) + '"')
        alert('OK')
    }

    // 正则转义 End

    // 树形结构遍历 Start

    function testTraverseTree() {
        const preOrderArr = preorderTraversal(bTree)
        console.log('前序遍历', preOrderArr)

        const inOrderArr = inorderTraversal(bTree)
        console.log('中序遍历', inOrderArr)

        const inOrderArr2 = inorderTraversal2(bTree)
        console.log('中序遍历2', inOrderArr2)

        const postOrderArr = postorderTraversal(bTree)
        console.log('后序遍历', postOrderArr)

        const postOrderArr2 = postorderTraversal2(_.cloneDeep(bTree))
        console.log('后序遍历2', postOrderArr2)

        const levels = levelOrder(bTree)
        console.log('层序遍历', levels)

        alert('OK')
    }

    // 树形结构遍历 End

    function testDemoTree() {
        const demoAuthList = [63, 87]
        const demoData = [
            { id: 56, parentId: 62 },
            { id: 81, parentId: 80 },
            { id: 74, parentId: null },
            { id: 76, parentId: 80 },
            { id: 63, parentId: 62 },
            { id: 80, parentId: 86 },
            { id: 87, parentId: 86 },
            { id: 62, parentId: 74 },
            { id: 86, parentId: 74 }
        ]
        const idMapping = getIdMapping(demoData)
        const [tree, data] = getTree(demoData, idMapping)
        tailorTree(tree, data, demoAuthList)
        console.log(tree)
    }

    function testDemoTree2() {
        const tailoredTree = getAuthMenu(rawCrmMenu, authCodes)
        console.log('testDemoTree #469 tailoredTree:', tailoredTree)
    }

    function testConvertCraftJs2Formily() {
        console.log('demoData4Craftjs:', demoData4Craftjs)
        // console.log('demoData4Formily:', demoData4Formily)
        const data4Formily = convertCraftjs2Formily(demoData4Craftjs)
        console.log('data4Formily:', data4Formily)
        alert('OK')
    }

    function factorial(n) {
        if (isFinite(n) && n >= 0 && n === Math.round(n)) {
            // 非负整数
            console.log('#498 typeof factorial', typeof factorial, 'typeof n:', typeof n)
            if (!(n in factorial)) {
                // 如果没有缓存结果
                factorial[n] = factorial(n - 1) * n // 计算结果并缓存
            }
            return factorial[n] // 返回结果
        }
        return NaN // 参数错误
    }
    factorial[0] = 1 // 初始化缓存

    function testRecur(data) {
        const result = doesObjectHaveNestedPair(data, 'bindStatus', 'BIND')
        // const result = doesObjectHaveNestedPair(data, 'bindStatus', 'BOUND')
        alert(result)
    }

    function testAlgorithm() {
        // testDemoFoo()
        // testTraverseTree()
        // testDemoTree()
        // testDemoTree2()
        // testConvertCraftJs2Formily()
        // const fac = factorial(5)
        // console.log('#515 fac:', fac)
        // src/containers/views/Playground/mock/formilySchema.js
        // const trimmedSchema = hideEmptyModules(formilySchema)
        // console.log('after hideEmptyModules', '\nformilySchema:', formilySchema, '\ntrimmedSchema:', trimmedSchema)
        // alert('OK')
        // testDp()
        // testKmp('ABABAC')
        // testRecur(mock4recur)
        // beSoldier()
        // testInterview()
        console.log('max:', lengthOfLongestSubstring('abcabdabeabc'))
        alert('OK')
    }

    function compose(...funcs) {
        if (funcs.length === 0) {
            return arg => arg
        }

        if (funcs.length === 1) {
            return funcs[0]
        }

        return funcs.reduce((a, b) => {
            console.log('#505', 'a:', a, '\n\t', 'b:', b, '\n')
            return (...args) => a(b(...args))
        })
    }

    // 测试js 方法 Start

    function testCompose() {
        const result = compose(
            a => {
                console.log('a', a)
                return a + 1
            },
            b => {
                console.log('b', b)
                return b + 1
            },
            c => {
                console.log('c', c)
                return c + 1
            }
        )
        console.log(result(1))
    }

    function regexIndexOf(text: string, re: RegExp, i?: number) {
        const indexInSuffix = text.slice(i).search(re)
        return indexInSuffix < 0 ? indexInSuffix : indexInSuffix + (i ?? 0)
    }

    function replaceByRegex(text: string, regex: RegExp, substitute: string) {
        return text.slice(regexIndexOf(text, regex)).replace(regex, substitute)
    }

    function testRegexIndexOf() {
        const requestUrl = 'http://dev.xtrfr.cn:3009/api/v1/trade/custom/search/setting/retrieve'
        const trimmedUrl = replaceByRegex(requestUrl, /\/api\/v\d+/i, '')
        console.log('requestUrl:', requestUrl, '\ntrimmedUrl:', trimmedUrl)
    }

    enum ATT_TYPE {
        TradeOrderAttachment = 'TradeOrderAttachment',
        TradeQuotationAttachment = 'TradeQuotationAttachment'
    }

    /* 转换 王栋的创建客户 schema */
    const test_convertCustomerCreator = () => {
        const arrayItems = {
            // items:
            type: 'void',
            'x-decorator': 'ArrayItems.Item',
            properties: {
                socialMediaModels: {
                    'x-decorator': 'FormItem',
                    'x-decorator-props': {
                        style: {
                            marginBottom: 10,
                            flexGrow: 1
                        }
                    },
                    'x-component': 'XtSelectInput',
                    'x-component-props': {
                        selectStyle: {
                            width: 150
                        },
                        inputStyle: {
                            width: '100%'
                        },
                        selectKey: 'socialMediaType',
                        inputKey: 'accountNumber',
                        defaultSelect: 'FACEBOOK'
                    },
                    enum: [
                        {
                            label: 'FaceBook',
                            value: 'FACEBOOK'
                        },
                        {
                            label: 'Twitter',
                            value: 'TWITTER'
                        },
                        {
                            label: 'QQ',
                            value: 'QQ'
                        },
                        {
                            label: 'Wechat',
                            value: 'WECHAT'
                        },
                        {
                            label: 'Linkedin',
                            value: 'LINKEDIN'
                        },
                        {
                            label: 'Skype',
                            value: 'SKYPE'
                        },
                        {
                            label: 'WhatsApp',
                            value: 'WHATSAPP'
                        }
                    ],
                    'x-validator': [],
                    'x-index': 1
                },
                remove: {
                    type: 'void',
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayItems.Remove',
                    'x-component-props': {
                        style: {
                            marginLeft: 10
                        },
                        className: 'xt$at-contactModels-0-socialMediaModels-0'
                    }
                }
            },
            'x-component-props': {
                className: 'xt$at-contactModels-0-socialMediaModels-0'
            }
        }

        // const result = findNestedKey(schema4customer, 'socialMediaModels')

        // if ((result.current as any).items) {
        //     ;(result.current as any).items = arrayItems
        // }

        // console.log('findNestedKey:', result)
        // console.log('altered schema4customer:', schema4customer)

        const result = findNestedKey(arrayItems, 'defaultSelect')
        console.log('#709 defaultSelect:', result)
        return result
    }

    const test_getFirstPositiveNumber = () => {
        // const arr = [-1, 6, 4]
        // const arr = [-1, -1, 4]
        const arr = [-1, -1, -1]
        const result = _.find(arr, a => a > -1) ?? -1
        console.log(result)
        alert('OK')
    }

    const test_mapToLabeledValue = () => {
        enum BusinessOppStage {
            INQUIRY = 'INQUIRY',
            OFFER = 'OFFER',
            ORDER = 'ORDER',
            WIN_ORDER = 'WIN_ORDER',
            FAIL_ORDER = 'FAIL_ORDER'
        }

        const BUSINESS_STAGE_MAP = {
            [BusinessOppStage.INQUIRY]: '询盘',
            [BusinessOppStage.OFFER]: '报价',
            [BusinessOppStage.ORDER]: '订单',
            [BusinessOppStage.WIN_ORDER]: '赢单',
            [BusinessOppStage.FAIL_ORDER]: '输单'
        }

        const arr = _.chain(BUSINESS_STAGE_MAP)
            .toPairs()
            .map(function (o: string[]) {
                return { label: o[1], value: o[0] }
            })
            .value()

        // const arr = _.toPairs(BUSINESS_STAGE_MAP)
        console.log(arr)
    }

    const test_iterateObject4ThousandthFormat = () => {
        const copyObject = deepCloneDecimalSeparator(['amount'], 'display', boardData)
        console.log('copyObject:', copyObject)

        const group1 =
            '(1) ' +
            thousandthFormat({ amount: '1137' }) +
            '\n(2) ' +
            thousandthFormat({ amount: '1137.000' }) +
            '\n(3) ' +
            thousandthFormat({ amount: '1137.13500' }) +
            '\n(4) ' +
            thousandthFormat({ amount: '1137.' }) +
            '\n(5) ' +
            thousandthFormat({ amount: '0.03817688193' })

        const group2 =
            '(1) ' +
            thousandthFormat({ amount: '19999.999', currency: 'CNY' }) +
            '\n(2) ' +
            thousandthFormat({ amount: '19999.999', currency: 'JPY' }) +
            '\n(3) ' +
            thousandthFormat({ amount: '19999.999', currency: 'CNY', roundUp: true }) +
            '\n(4) ' +
            thousandthFormat({ amount: '19999.999', currency: 'JPY', roundUp: true }) +
            '\n(5) ' +
            thousandthFormat({ amount: '1137.132', currency: 'CNY', precision: 2 }) +
            '\n(6) ' +
            thousandthFormat({ amount: '1137.132', currency: 'JPY', precision: 2 }) +
            '\n(7) ' +
            thousandthFormat({ amount: '1137', currency: 'CNY' }) +
            '\n(8) ' +
            thousandthFormat({ amount: '1137.', currency: 'CNY' }) +
            '\n(9) ' +
            thousandthFormat({ amount: '1137.0', currency: 'CNY' }) +
            '\n(10) ' +
            thousandthFormat({ amount: '1137.132', currency: '' }) +
            '\n(11) ' +
            thousandthFormat({ amount: '1137.132', currency: undefined }) +
            '\n(12) ' +
            thousandthFormat({ amount: '1137.132', currency: null }) +
            '\n(13) ' +
            thousandthFormat({ amount: '1137.132', currency: 'undefined' }) +
            '\n(14) ' +
            thousandthFormat({ amount: '1137.132', currency: 'null' })

        const group3 =
            '(1) ' +
            thousandthFormat({ amount: 1137.0002, precision: 6 }) +
            '\n(2) ' +
            thousandthFormat({ amount: 1137.0002, precision: 6 }) +
            '\n(3) ' +
            thousandthFormat({ amount: 1137.0002, precision: 2 }) +
            '\n(4) ' +
            thousandthFormat({ amount: 1137, precision: 2 })

        const group4 =
            '(1) ' +
            thousandthFormat({ amount: 1137.1372, decimalPlaces: 2 }) +
            '\n(2) ' +
            thousandthFormat({ amount: 1137.1372, decimalPlaces: 2, roundUp: true }) +
            '\n(3) ' +
            thousandthFormat({ amount: 1137.1, decimalPlaces: 2 }) +
            '\n(4) ' +
            thousandthFormat({ amount: 1137, decimalPlaces: 2 }) +
            '\n(5) ' +
            thousandthFormat({ amount: '1999.999', decimalPlaces: 0 }) +
            '\n(6) ' +
            thousandthFormat({ amount: '1999.999', decimalPlaces: 0, roundUp: true }) +
            '\n(7) ' +
            thousandthFormat({ amount: '1999.999', decimalPlaces: 1, roundUp: true })
        console.log('group1:', group1, '\ngroup2:', group2, '\ngroup3:', group3, '\ngroup4:', group4)

        const group5 =
            '(1) 单价：' +
            thousandthFormat({ amount: 1137.13726, formatType: ThousandthFormatTypes.unitPrice }) +
            '\n(2) 单价（CNY）：' +
            thousandthFormat({ amount: 1137.13726, formatType: ThousandthFormatTypes.unitPrice, currency: 'CNY' }) +
            '\n(3) 单价（JPY）：' +
            thousandthFormat({ amount: 1137.13, formatType: ThousandthFormatTypes.unitPrice, currency: 'JPY' }) +
            '\n(4) 结算金额（CNY）：' +
            thousandthFormat({
                amount: 1137.13726,
                formatType: ThousandthFormatTypes.settlementAmount,
                currency: 'CNY'
            }) +
            '\n(4-2) 结算金额（CNY）：' +
            thousandthFormat({
                amount: 1137,
                formatType: ThousandthFormatTypes.settlementAmount,
                currency: 'CNY'
            }) +
            '\n(5) 结算金额（JPY）：' +
            thousandthFormat({
                amount: 1137.13726,
                formatType: ThousandthFormatTypes.settlementAmount,
                currency: 'JPY'
            }) +
            '\n(6) 质量：' +
            thousandthFormat({ amount: '1999.999', formatType: ThousandthFormatTypes.quantity }) +
            '\n(7) 重量：' +
            thousandthFormat({ amount: '1999.999888777666', formatType: ThousandthFormatTypes.weight }) +
            '\n(8) 尺寸：' +
            thousandthFormat({ amount: '1999.999888777666', formatType: ThousandthFormatTypes.size }) +
            '\n(9) 体积：' +
            thousandthFormat({ amount: '1999.999888777666', formatType: ThousandthFormatTypes.volume }) +
            '\n(10) 汇率：' +
            thousandthFormat({ amount: '1.4923842477', formatType: ThousandthFormatTypes.exchangeRate })

        console.log(
            'group1:',
            group1,
            '\ngroup2:',
            group2,
            '\ngroup3:',
            group3,
            '\ngroup4:',
            group4,
            '\ngroup5:',
            group5
        )

        const str = formatNumber(77439741.37567)
        console.log('number:', str)

        console.log('numeralResult:', [numeral('1.327').value(), numeral(3321.327).value()])

        iterateObject4DecimalParse(submitOrder)
        console.log('submitOrder:', submitOrder)

        const multipleLinesInput = '张三 是 个12345\n是吗？\n呵呵'
        const multipleLines = thousandthParser(multipleLinesInput)
        console.log('thousandthParser #846: \n' + multipleLinesInput + '\n->\n' + multipleLines)

        const multipleLinesInput2 = '1,234,684.4422'
        const multipleLines2 = thousandthParser(multipleLinesInput2)
        console.log('thousandthParser #851: \n' + multipleLinesInput2 + '\n->\n' + multipleLines2)

        const multipleLinesInput3 = '1,234,684.4422.'
        const multipleLines3 = thousandthParser(multipleLinesInput3)
        console.log('thousandthParser #909: \n' + multipleLinesInput3 + '\n->\n' + multipleLines3)

        const multipleLinesInput4 = '123.'
        const multipleLines4 = thousandthParser(multipleLinesInput4)
        console.log('thousandthParser #913: \n' + multipleLinesInput4 + '\n->\n' + multipleLines4)
    }

    function testIsEmpty() {
        alert(
            '"":' +
                _.isEmpty('') +
                '\n" ":' +
                _.isEmpty(' ') +
                '\n[]:' +
                _.isEmpty([]) +
                '\n{}:' +
                _.isEmpty({}) +
                '\n"A":' +
                _.isEmpty('A') +
                '\nundefined:' +
                _.isEmpty(undefined) +
                '\nnull:' +
                _.isEmpty(null)
        )
    }

    function testImmutableJs() {
        const map1 = Map({ a: 1, b: 2, c: 3, d: { d1: 11, d2: 21 } })
        const map2 = map1.set('b', 50)
        console.log('map1.b: ' + map1.get('b') + ' vs. ' + 'map2.b: ' + map2.get('b')) // 2 vs. 50
        console.log('map1.d === map2.d: ' + Boolean(map1.get('d') === map2.get('d')))
    }

    function testBigNumber() {
        const x = new BigNumber(123.4567)
        const y = BigNumber('123456.7e-3')
        const z = new BigNumber(x)
        console.log('testBigNumber #938 x === y === z', x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z))

        const α = new BigNumber('1111222233334444555566.22370').multipliedBy('245').dividedBy(2)
        console.log(
            α.toString() + // "1.111222233334444555566e+21"
                ',' +
                α.toFixed() // "1111222233334444555566"
        )

        const β = new BigNumber('12,456,789.33')
        const γ = new BigNumber('12,456a,789.33')
        const ζ = new BigNumber(Infinity)
        console.log('testBigNumber #949 α isNaN isFinite isValid:', α.isNaN(), α.isFinite(), !α.isNaN() && α.isFinite())
        console.log('testBigNumber #950 β isNaN isFinite isValid:', β.isNaN(), β.isFinite(), !β.isNaN() && β.isFinite())
        console.log('testBigNumber #951 γ isNaN isFinite isValid:', γ.isNaN(), γ.isFinite(), !γ.isNaN() && γ.isFinite())
        console.log('testBigNumber #951 ζ isNaN isFinite isValid:', ζ.isNaN(), ζ.isFinite(), !ζ.isNaN() && ζ.isFinite())
    }

    function testDesignPattern() {
        // testSingleton()
        testSingleton2()
    }

    function testTs() {
        type CheckMe = PascalCase<'helloWorld'>
        type CheckMe2 = PascalCase<'HelloWorld'>
        type CheckMe3 = Underscore2CamelCaseProps<{ http_req: { header_name: string } }>
        type CheckMe4 = Underscore2CamelCaseProps<{ http_req_name: string; http_req_size: number }[]>
        let str: CheckMe | undefined
        let str2: CheckMe2 | undefined
        if (27 / 3 > 1) {
            str = 'HelloWorld'
        } else {
            str2 = 'HelloWorld'
        }

        const request: CheckMe3 = {
            httpReq: {
                headerName: '456'
            }
        }

        const requests: CheckMe4 = [
            { httpReqName: 'req1', httpReqSize: 31 },
            { httpReqName: 'req2', httpReqSize: 32 }
        ]

        console.log('request:', request, 'requests:', requests)

        // eslint-disable-next-line @typescript-eslint/ban-types
        type CheckFirstParam = FirstParam<(a: number) => {}>
        // type CheckMe = number;
        let zeta: CheckFirstParam | undefined
        if (151 / 5 > 10) {
            zeta = 15
        }

        // type CamelFromUnderscore = Underscore2CamelCase<'abc_def_ghi'>
        type CamelFromUnderscore = Underscore2CamelCase<'get_HTTP_request'>
        // const cfu: CamelFromUnderscore = 'abcDefGhi'
        const cfu: CamelFromUnderscore = 'getHTTPRequest'

        alert(`${str ?? str2}, ${cfu}`)
    }

    function testJs() {
        /*  
        console.log('ATT_TYPE.TradeOrderAttachment:', ATT_TYPE.TradeOrderAttachment)
        console.log('ATT_TYPE.TradeQuotationAttachment:', JSON.stringify(ATT_TYPE.TradeQuotationAttachment)) 
      */
        // testConcat()
        // testPipeAndTap()
        // testMergeAll()
        // test_convertCustomerCreator()
        // test_getFirstPositiveNumber()
        // test_mapToLabeledValue()
        // testIsEmpty()
        // test_iterateObject4ThousandthFormat()
        // testImmutableJs()
        // testBigNumber()
        // testQueue()
        // testImmer()
        // sortNodes()
        // extractFromCraftJsTemplate(template)
    }

    function testJs2() {
        // extractFromCraftJsTemplate(fastTemplate)
        // testGetCookie()
        console.log(myFlatten([1, 2, [3, 4], [[5, 6], 7, 8], 9]))
        alert('OK')
    }

    function testQueue() {
        const pLimit = new PLimit(2)

        function asyncFun(value, delay) {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(new Date(), ' handle: ' + value)
                    resolve(value)
                }, delay)
            })
        }
        // 模拟一个任务进队列的情况：
        pLimit.enqueue(asyncFun, 'a', 1000) /* .then(() => {
            console.log('a finished')
        }) */
        pLimit.enqueue(asyncFun, 'b', 2000) /* .then(() => {
            console.log('b finished')
        }) */
        pLimit.enqueue(asyncFun, 'c', 1000) /* .then(() => {
            console.log('c finished')
        }) */
        pLimit.enqueue(asyncFun, 'd', 3000) /* .then(() => {
            console.log('d finished')
        }) */
        pLimit.enqueue(asyncFun, 'e', 1000) /* .then(() => {
            console.log('e finished')
        }) */
        setTimeout(() => {
            pLimit.enqueue(asyncFun, 'f', 1000) /* .then(() => {
                console.log('f finished')
            }) */
        }, 500)
        setTimeout(() => {
            pLimit.enqueue(asyncFun, 'g', 1000) /* .then(() => {
                console.log('g finished')
            }) */
        }, 1500)
    }

    // function testQueue() {
    //     function asyncFun(value, delay) {
    //         return new Promise(resolve => {
    //             console.log(' handle: ' + value)
    //             setTimeout(() => resolve(value), delay)
    //         })
    //     }
    //     // 模拟一个任务进队列的情况：
    //     pLimit.enqueue(asyncFun, 'a', 1000)
    //     pLimit.enqueue(asyncFun, 'b', 2000)
    //     pLimit.enqueue(asyncFun, 'c', 1000)
    //     pLimit.enqueue(asyncFun, 'd', 3000)
    //     pLimit.enqueue(asyncFun, 'e', 1000)
    // }

    function testXss() {
        const arr = testEscapeAndUnescape(customerData)
        const str = arr.join('\n')
        setTextAreaVal(str)
    }

    // 测试js 方法 End

    return (
        <div className={styles.playground}>
            <div className={styles.container}>
                <a className={styles.link} href={targetUrl} rel="noreferrer" target="_blank">
                    {targetUrl}
                </a>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>新老接口转换</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        style={{ width: 120, textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={convNewToOld}
                    >
                        {`new -> old`}
                    </Button>
                    <Button
                        style={{ width: 120, textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={convOldToNew}
                    >
                        {`old -> new`}
                    </Button>
                </div>
                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        style={{ textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={getBasicInfo}
                    >
                        get basicInfo &amp; featInfo
                    </Button>
                </div>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试 @formily/json-schema</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        style={{ width: 120, textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={recurFieldId}
                    >
                        recurFieldId
                    </Button>
                    <Button
                        style={{ width: 120, textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={parseData2}
                    >
                        parseData2
                    </Button>
                    <Button
                        style={{ width: 120, textAlign: 'center', textOverflow: 'ellipsis' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={submitFormily}
                    >
                        submitFormily
                    </Button>
                </div>
                {/* <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试 @formily/reactive</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        style={{ width: 100, textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={doAction}
                    >
                        Test Action
                    </Button>
                    <Button
                        style={{ width: 100, textAlign: 'center' }}
                        type="primary"
                        block
                        loading={loading}
                        onClick={doBatch}
                    >
                        Test Batch
                    </Button>
                </div> */}
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试算法</h3>
                <Button type="primary" block loading={loading} onClick={testAlgorithm}>
                    Test
                </Button>

                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试JS</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button style={{ width: 120 }} type="primary" block loading={loading} onClick={testDesignPattern}>
                        测试设计模式
                    </Button>
                    <Button style={{ width: 120 }} type="primary" block loading={loading} onClick={testTs}>
                        测试 TS
                    </Button>
                    <Button style={{ width: 120 }} type="primary" block loading={loading} onClick={testJs}>
                        测试 JS1
                    </Button>
                    <Button style={{ width: 120 }} type="primary" block loading={loading} onClick={testJs2}>
                        测试 JS2
                    </Button>
                    <Button style={{ width: 120 }} type="primary" block loading={loading} onClick={testXss}>
                        测试 xss
                    </Button>
                </div>
                <div style={{ textAlign: 'center', marginTop: 30 }}>
                    <TextArea
                        ref={textAreaRef}
                        value={textAreaVal}
                        autoSize={{ minRows: 1, maxRows: 10 }}
                        onChange={e => setTextAreaVal(e.target.value)}
                    />
                </div>
                {/* <h3 style={{ textAlign: 'center', marginTop: 30 }}>
                    测试正则{' '}
                    <input
                        onChange={s => {
                            setEscStr(s.target.value)
                        }}
                    />
                </h3>
                <Button type="primary" block loading={loading} onClick={testEscRegExp}>
                    Test
                </Button>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试邮箱碰撞</h3>
                <Button type="primary" block loading={loading} onClick={testMultipleConnection}>
                    Test
                </Button>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试透明层</h3>
                <Button type="primary" block loading={loading} onClick={testTransparencyLayer}>
                    Test
                </Button>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试 isConnect</h3>
                <Button type="primary" block loading={loading} onClick={testIsConnect}>
                    Test
                </Button>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试 reduce</h3>
                <Button type="primary" block loading={loading} onClick={test}>
                    Test
                </Button> */}
            </div>
            {/* <div className={styles.container}>
                <h3 style={{ textAlign: 'center', marginBottom: 20 }}>获取抖音无水印视频</h3>
                <Input
                    placeholder="input dy shared url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    onPressEnter={submit}
                />
                <div className={styles.tips}>
                    仅限以下域名的链接: <br />
                    iesdouyin.com <br />
                    douyin.com
                </div>
            </div> */}
            {displayTransparencyLayer ? transparencyLayer : undefined}
        </div>
    )
}

export default Playground
