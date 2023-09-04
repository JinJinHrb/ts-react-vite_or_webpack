import { observable, autorun, batch, action } from '@formily/reactive'

type IObs = {
    [key: string]: any
}

const obs: IObs = observable({})

autorun(() => {
    console.log('Playground #10 a, b, c, d:', obs.aa, obs.bb, obs.cc, obs.dd)
})

export const doBatch = () => {
    const rdm1 = Math.floor(Math.random() * 20)
    const rdm2 = Math.floor(Math.random() * 20)
    const letter1 = String.fromCharCode('A'.charCodeAt(0) + rdm1)
    const letter2 = String.fromCharCode('A'.charCodeAt(0) + rdm2)
    console.log('Playground #18 rdm1, letter1, rdm2, letter2:', rdm1, letter1, rdm2, letter2)
    batch(() => {
        batch.scope(() => {
            console.log('Playground #21 rdm1:', rdm1)
            obs.aa = rdm1
        })
        batch.scope(() => {
            console.log('Playground #25 letter1:', letter1)
            obs.cc = letter1
        })
        console.log('Playground #28 rdm2, letter2:', rdm2, letter2)
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
    console.log('Playground #42 rdm1, letter1, rdm2, letter2:', rdm1, letter1, rdm2, letter2)
    action(() => {
        action.scope(() => {
            console.log('Playground #45 rdm1:', rdm1)
            obs.aa = rdm1
        })
        action.scope(() => {
            console.log('Playground #49 letter1:', letter1)
            obs.cc = letter1
        })
        console.log('Playground #52 rdm2, letter2:', rdm2, letter2)
        obs.bb = rdm2
        obs.dd = letter2
    })
    console.log('========================================')
    alert('OK')
}
