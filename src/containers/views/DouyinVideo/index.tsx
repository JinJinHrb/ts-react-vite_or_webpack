import React, { useState } from 'react'
import { /* Input, */ Button, message } from 'antd'
import axios from 'axios'

import styles from './index.module.scss'
import data from 'mock/data'
import _ from 'lodash'
import { testDemoFoo } from './interview'
import { DataResponse, IEspEntity, IParams } from './types.d'
import { doBatch, doAction } from './reactive'
import { parseData } from './schema'

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

function DouyinVideo() {
    const [loading, setLoading] = React.useState(false)
    const [url, setUrl] = React.useState('')
    const [targetUrl, setTargetUrl] = React.useState('')

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

    function testAlgorithm() {
        testDemoFoo()
    }

    return (
        <div className={styles.douyinVideo}>
            <div className={styles.container}>
                <a className={styles.link} href={targetUrl} rel="noreferrer" target="_blank">
                    {targetUrl}
                </a>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试 @formily/json-schema</h3>
                <Button type="primary" block loading={loading} onClick={parseData}>
                    Test
                </Button>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试 @formily/reactive</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
                </div>
                <h3 style={{ textAlign: 'center', marginTop: 30 }}>测试算法</h3>
                <Button type="primary" block loading={loading} onClick={testAlgorithm}>
                    Test
                </Button>
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

export default DouyinVideo
