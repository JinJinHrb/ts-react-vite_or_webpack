import React, { useEffect, useRef } from 'react'
import { Layout, Space } from 'antd'
import styles from './index.module.scss'
// import MySelect from './components/MySelect'
import MyInput from './components/MyInput'
import Charts from './components/Charts'
// import { createStore, useStore } from 'zustand'

const { Header, Footer, Content } = Layout

function handleResize(entries, observer) {
    for (const entry of entries) {
        console.log('handleResize #12', entry)
    }
}

export const Performance = () => {
    const observerRef = useRef<ResizeObserver | null>(null)
    const domRef = useRef<HTMLElement>(null)
    useEffect(() => {
        if (!observerRef.current && domRef.current) {
            observerRef.current = new ResizeObserver(handleResize)
            observerRef.current.observe(domRef.current)
        }
        return () => {
            // // 结束对指定DOM元素的监听
            // observerRef.current.unobserve(domRef.current)

            // 结束对所有DOM元素的监听
            observerRef.current.disconnect()
        }
    }, [domRef.current])

    return (
        <Space direction="vertical" className={styles.containter} size={[0, 48]}>
            <Layout ref={domRef}>
                <Header className={styles.headerStyle}>
                    {/* <MySelect /> */}
                    <MyInput />
                </Header>
                <Content className={styles.contentStyle}>
                    <Charts optionType={'lineChart'} />
                    <Charts optionType={'branch'} />
                </Content>
                <Footer className={styles.footerStyle}>
                    Footer
                    <div style={{ border: '1px solid #000', overflow: 'hidden' }}>
                        <div style={{ width: '100px', height: '100px', background: '#eee', float: 'left' }}>
                            阿尔法狗
                        </div>
                        <div style={{ width: '100px', height: '100px', background: '#aee', float: 'left' }}>
                            贝塔射线
                        </div>
                        <div
                            style={{
                                content: '',
                                display: 'block',
                                height: 0,
                                clear: 'both',
                                visibility: 'hidden'
                            }}
                        ></div>
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                background: '#efa',
                                color: 'blue'
                            }}
                        >
                            xTransfer.cn
                        </div>
                        <div style={{ width: '100px', height: '100px', background: '#eee', float: 'left' }}>
                            阿尔法狗
                        </div>
                        <div style={{ width: '100px', height: '100px', background: '#aee', float: 'left' }}>
                            贝塔射线
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Space>
    )
}

export default Performance
