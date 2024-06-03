import { MutableRefObject, useEffect, useRef, useState } from 'react'

// type CountDownProps = {
//   seconds: number,
// }

export const CountDownHook = (count: number): [MutableRefObject<any>, number] => {
	const ref = useRef<any>()
	const funRef = useRef<any>()
	const timerRef = useRef<any>()
	const [current, setCurrent] = useState(count)

	useEffect(() => {
		if (!ref.current) {
			return
		}
		if (funRef.current) {
			clearTimeout(timerRef.current)
		}
		if (count > 0) {
			funRef.current = () => {
				timerRef.current = setTimeout(() => {
					if (count > 0) {
						setCurrent(--count)
						funRef.current()
					}
					ref.current.textContent = count > 0 ? count : '已结束'
				}, 1000)
			}
			funRef.current()
		} else {
			ref.current.textContent = '已结束'
			funRef.current = null
			setCurrent(0)
		}
		return () => {
			if (funRef.current) {
				clearTimeout(timerRef.current)
			}
		}
	}, [count])

	return [ref, current]
}
