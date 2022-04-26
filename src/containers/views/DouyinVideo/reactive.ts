import { observable, autorun, batch, action } from '@formily/reactive'

type IObs = {
    [key: string]: any
}

const obs: IObs = observable({})

autorun(() => {
    console.log('DouyinVideo #10 a, b, c, d:', obs.aa, obs.bb, obs.cc, obs.dd)
})

export const doBatch = () => {
    const rdm1 = Math.floor(Math.random() * 20)
    const rdm2 = Math.floor(Math.random() * 20)
    const letter1 = String.fromCharCode('A'.charCodeAt(0) + rdm1)
    const letter2 = String.fromCharCode('A'.charCodeAt(0) + rdm2)
    console.log('DouyinVideo #18 rdm1, letter1, rdm2, letter2:', rdm1, letter1, rdm2, letter2)
    batch(() => {
        batch.scope(() => {
            console.log('DouyinVideo #21 rdm1:', rdm1)
            obs.aa = rdm1
        })
        batch.scope(() => {
            console.log('DouyinVideo #25 letter1:', letter1)
            obs.cc = letter1
        })
        console.log('DouyinVideo #28 rdm2, letter2:', rdm2, letter2)
        obs.bb = rdm2
        obs.dd = letter2
    })
    console.log('========================================')
    alert('OK')
}

export const doAction = () => {
    const rdm1 = Math.floor(Math.random() * 20)
    const rdm2 = Math.floor(Math.random() * 20)
    const letter1 = String.fromCharCode('A'.charCodeAt(0) + rdm1)
    const letter2 = String.fromCharCode('A'.charCodeAt(0) + rdm2)
    console.log('DouyinVideo #42 rdm1, letter1, rdm2, letter2:', rdm1, letter1, rdm2, letter2)
    action(() => {
        action.scope(() => {
            console.log('DouyinVideo #45 rdm1:', rdm1)
            obs.aa = rdm1
        })
        action.scope(() => {
            console.log('DouyinVideo #49 letter1:', letter1)
            obs.cc = letter1
        })
        console.log('DouyinVideo #52 rdm2, letter2:', rdm2, letter2)
        obs.bb = rdm2
        obs.dd = letter2
    })
    console.log('========================================')
    alert('OK')
}
