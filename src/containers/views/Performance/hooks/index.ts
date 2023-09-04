import { createContext, useContext, useEffect, useState } from 'react'
import { QueryState } from '../types'
import { Store } from '../store/simple'

export const AppContext = createContext<Store<QueryState> | null>(null)

export const useAppStore = (): [QueryState, (p: Partial<QueryState>) => void] => {
    const storeCtx = useContext(AppContext)

    const [state, setState] = useState(storeCtx.getState())

    // add subscribe

    useEffect(() => {
        const unsubscribe = storeCtx.subscribe((s: QueryState) => {
            setState(s)
        })

        return () => unsubscribe()
    }, [])

    // 如果在 react-18中 我们可以使用新的api useSyncExternalStore
    // useSyncExternalStore(store.subscribe, store.getState);
    // https://zh-hans.reactjs.org/docs/hooks-reference.html#usesyncexternalstore
    return [state, storeCtx.setState]
}
