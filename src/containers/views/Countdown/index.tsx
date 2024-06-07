import React, { useState } from 'react'
import { CountdownHook } from './hooks/CountdownHook'
import styles from './index.module.scss'
import { Button } from 'antd'

const cityMap = {
	'0': '北京',
	'1': '上海',
	'2': '深圳',
}

export default () => {
	const [run, setRun] = useState(false)
	const [sec] = CountdownHook(run)
	const [loading, setLoading] = useState(false)
	const [lists, setLists] = useState<number[]>([])

	const starter = () => {
		setLoading(true)
		if (!run) {
			setRun(!run)
		}
		setTimeout(() => {
			setLoading(false)
		}, 200)
		lists.push(sec)
		setLists(lists.slice())
	}

	const stopper = () => {
		if (run === true) {
			setRun(false)
		} else {
			setLists([])
		}
	}

	return (
		<div className={styles.layout}>
			<div className={styles.module}>
				<div>{sec}</div>
				<Button onClick={starter} loading={loading}>
					Starter
				</Button>
				<Button onClick={stopper} loading={loading}>
					Stop
				</Button>
			</div>
			<div className={styles.module}>
				{lists.map(i => (
					<div key={i}>{cityMap[i % 3]}</div>
				))}
			</div>
		</div>
	)
}
