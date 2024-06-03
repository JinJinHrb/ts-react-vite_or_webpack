import React, { useEffect, useRef, useState } from 'react'
import { Layout, Space, Button } from 'antd'
import styles from './index.module.scss'
import { CountDownHook } from './countDown'

const { Header, Footer, Content } = Layout

function handleResize(entries, observer) {
	for (const entry of entries) {
		console.log('handleResize #12', entry)
	}
}

export const CssLab = () => {
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

	const [initCountDown, setInitCountDown] = useState(0)
	const [countdownRef, countDown] = CountDownHook(initCountDown)
	useEffect(() => {
		if (countDown <= 0) {
			console.log('#36 countDown <= 0 countDown:', countDown)
			setInitCountDown(0)
		} else {
			console.log('#39 countDown:', countDown)
		}
	}, [countDown])

	const [isCountDownDisabled, setIsCountDownDisabled] = useState(false)
	const startCountDown = () => {
		setIsCountDownDisabled(true)
		setInitCountDown(10)
		setTimeout(() => {
			setIsCountDownDisabled(false)
		}, 500)
	}

	const [isResetDisabled, setIsResetDisabled] = useState(false)
	const resetCountDown = () => {
		setIsResetDisabled(true)
		setInitCountDown(0)
		setTimeout(() => {
			setIsResetDisabled(false)
		}, 500)
	}

	return (
		<Space direction='vertical' className={styles.containter} size={[0, 48]}>
			<Layout ref={domRef}>
				<Header className={styles.headerStyle}>
					<div className={styles.countDownStyle}>
						<div ref={countdownRef}>已结束</div>
						<Button disabled={isCountDownDisabled} onClick={startCountDown}>
							开始计时
						</Button>
						<Button disabled={isResetDisabled} onClick={resetCountDown}>
							重置
						</Button>
					</div>
				</Header>
				<Content className={styles.contentStyle}>
					<div className={styles.flexContainerOdd}>
						{Array.from({ length: 5 }, (_, i) => (
							<div key={`flex-item-${i}`} className={styles.flexItemOdd}>
								{i + 1}
							</div>
						))}
					</div>
					<div className={styles.flexContainerEven}>
						{Array.from({ length: 6 }, (_, i) => (
							<div key={`flex-item-${i}`} className={styles.flexItemEven}>
								{i + 1}
							</div>
						))}
					</div>
					<div style={{ border: '1px solid #000', overflow: 'hidden', margin: '10px 0' }}>
						<div style={{ width: '100px', height: '100px', background: '#eee', float: 'left' }}>阿尔法狗</div>
						<div style={{ width: '100px', height: '100px', background: '#aee', float: 'left' }}>贝塔射线</div>
						<div
							style={{
								content: '',
								display: 'block',
								height: 0,
								clear: 'both',
								visibility: 'hidden',
							}}
						></div>
						<div
							style={{
								width: '100px',
								height: '100px',
								background: '#efa',
								color: 'blue',
							}}
						>
							xTransfer.cn
						</div>
						<div style={{ width: '100px', height: '100px', background: '#eee', float: 'left' }}>阿尔法狗</div>
						<div style={{ width: '100px', height: '100px', background: '#aee', float: 'left' }}>贝塔射线</div>
					</div>
				</Content>
				<Footer className={styles.footerStyle}>Footer</Footer>
			</Layout>
		</Space>
	)
}

export default CssLab
