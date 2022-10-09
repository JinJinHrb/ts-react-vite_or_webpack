import { XTConsole } from '@utils/index'
import { concat, defer, from, of, delay, mergeAll, map } from 'rxjs'
import { tap, concatAll } from 'rxjs/operators'

export const testMergeAll = () => {
    XTConsole.log('MergeAll start')
    const getData = (param: unknown) => of(param).pipe(delay(1000))

    from([1, 2, 3, 4, 5])
        .pipe(
            map(item => getData(item)),
            mergeAll()
        )
        .subscribe(x => XTConsole.log(x))
}

export const testConcat = () => {
    XTConsole.log('Start')
    const promiseA$ = defer(() =>
        from(
            new Promise((reslove, reject) => {
                setTimeout(() => {
                    reslove('PromiseA')
                }, 1000)
            })
        )
    )

    const promiseB$ = defer(() =>
        from(
            new Promise((reslove, reject) => {
                setTimeout(() => {
                    reslove('PromiseB')
                }, 1000)
            })
        )
    )

    const promiseC$ = defer(() =>
        from(
            new Promise((reslove, reject) => {
                setTimeout(() => {
                    reslove('PromiseC')
                }, 1000)
            })
        )
    )

    // 会依次间隔一秒打印Start, PromiseA, PromiseB
    concat(promiseA$, promiseB$, promiseC$).subscribe(x => XTConsole.log(x))
}

export const testPipeAndTap = () => {
    XTConsole.log('Start')

    const promiseA$ = defer(() =>
        from(
            new Promise((reslove, reject) => {
                XTConsole.log('PromiseA has been Subscribed ')
                setTimeout(() => {
                    reslove('PromiseA')
                }, 1000)
            })
        )
    )

    const promiseB$ = defer(() =>
        from(
            new Promise((reslove, reject) => {
                XTConsole.log('PromiseB has been Subscribed ')
                setTimeout(() => {
                    reslove('PromiseB')
                }, 1000)
            })
        )
    )

    const promiseC$ = defer(() =>
        from(
            new Promise((reslove, reject) => {
                XTConsole.log('PromiseC has been Subscribed ')
                setTimeout(() => {
                    reslove('PromiseC')
                }, 1000)
            })
        )
    )

    // 会依次间隔一秒打印Start, PromiseA, PromiseB
    of(promiseA$, promiseB$, promiseC$)
        .pipe(tap(console.log), concatAll())
        .subscribe(x => XTConsole.log(x))
}
