/** @format */

export enum EMPatternType {
    Identical = 'identical',
    Separate = 'separate'
}

export enum EMSetupStep {
    ESP_1 = 1, // list Email Service Providers
    Setup_2 = 2, // set account, password
    Advanced_3 = 3 // advanced setup
}

export interface IEspEntity {
    protocol: string
    hostEntry: {
        hostname: string
        port: number
        sslPort: number
    }
}

export interface IEsp {
    id: string
    imgStr: any
    entities?: IEspEntity[]
    entityGroups?: IEspEntity[][]
}

export interface IParams {
    authenticateEntry: {
        username: string
        password: string
        ssl: boolean
    }
    hostEntry: {
        hostname: string
        port: number | string
    }
    protocol: string
}

interface DataResponse {
    __delay__: number
    __response__: {
        entities?: IEspEntity[]
        entityGroups?: IEspEntity[][]
    }
}

type TraverseSchema = {
    name?: string
    type?: string
    address: string
    path: string
    visible: boolean
    hidden: boolean
    fieldJson: Stringify<any>
}
