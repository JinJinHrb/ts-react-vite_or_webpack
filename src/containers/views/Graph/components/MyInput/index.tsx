import React, { useState } from 'react'
import Search from 'antd/lib/input/Search'
import styles from './index.module.scss'
import { useQueryStore } from '@views/Graph/store'

export type MyProps = {
	style?: any
}

export default (props: MyProps) => {
	const [loading, setLoading] = useState<boolean>(false)

	const setName = useQueryStore((state: any) => state.setName)

	const onSearch = (input: string) => {
		console.log('onSearch:', input)
		setName(input)
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	return (
		<Search
			className={styles.input}
			placeholder='input search text'
			loading={loading}
			onSearch={onSearch}
			enterButton
		/>
	)
}
