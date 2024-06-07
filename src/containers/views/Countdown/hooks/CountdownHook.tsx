import { useEffect, useRef, useState } from 'react'

export const CountdownHook = (run: boolean) => {
	const countdownHandlerRef = useRef<any>()
	const timerRef = useRef<any>()
	const [rtnSec, setRtnSec] = useState<number>()

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current)
		}
		if (run) {
			countdownHandlerRef.current = (sec: number) => {
				setRtnSec(sec)
				timerRef.current = setTimeout(() => {
					sec++
					if (sec < 0) {
						sec = 0
					}
					setRtnSec(sec)
					if (sec > 0) {
						countdownHandlerRef.current(sec)
					}
				}, 100)
			}
			countdownHandlerRef.current(0)
		} else {
			setRtnSec(0)
		}
	}, [run])

	return [rtnSec]
}
