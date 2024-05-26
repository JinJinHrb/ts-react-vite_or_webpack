import React from 'react'
import ChatMessage from './components/ChatLab'
import styles from './index.module.scss'
import avatar147142 from 'assets/images/147142.png'
import avatar5556468 from 'assets/images/5556468.png'

const App = () => {
	return (
		<div className={styles.app}>
			<ChatMessage avatarUrl={avatar147142} message='Hello, how are you?' />
			<ChatMessage
				reverse={true}
				avatarUrl={avatar5556468}
				message="I'm good, thanks for asking!\nABC DEF GHI EFG QQQ TCP"
			/>
			<ChatMessage avatarUrl={avatar147142} message='POI IUY YTR EWQ ASD\nLKJ HGF FDS AAA' />
			{/* 更多的ChatMessage组件 */}
		</div>
	)
}

export default App
