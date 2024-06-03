import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'

// const TextWithNewlines = (text: string) => {
//   // 将文本中的 \n 替换为 <br />
//   const formattedText = text.split('\n').map((line, index) => {
//     return <React.Fragment key={index}>{line}<br /></React.Fragment>;
//   });

//   return <div>{formattedText}</div>;
// };

const ChatMessage = ({ avatarUrl, message, reverse }: { avatarUrl: string; message: string; reverse?: boolean }) => {
	return (
		<div className={reverse ? styles.chatMessageReverse : styles.chatMessage}>
			<img src={avatarUrl} alt='Avatar' className={styles.chatAvatar} />
			{/* <div className={styles.chatBubble}>{TextWithNewlines(message)}</div> */}
			<div className={styles.chatBubble}>{message}</div>
		</div>
	)
}

export default ChatMessage
