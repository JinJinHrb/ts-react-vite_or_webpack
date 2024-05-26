import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'

const ChatMessage = ({ avatarUrl, message, reverse }: { avatarUrl: string; message: string; reverse?: boolean }) => {
	return (
		<div className={reverse ? styles.chatMessageReverse : styles.chatMessage}>
			<img src={avatarUrl} alt='Avatar' className={styles.chatAvatar} />
			<div className={styles.chatBubble}>{message}</div>
		</div>
	)
}

export default ChatMessage
