import React from 'react'
import loadable from '@loadable/component'
import { CoffeeOutlined, UserOutlined, VideoCameraOutlined, CodeSandboxOutlined } from '@ant-design/icons'

import PageLoading from '@components/PageLoading'

const loadableOptions = { fallback: <PageLoading /> }
export const asynchronousComponents = {
    SocketDebugger: loadable(() => import('@views/SocketDebugger'), loadableOptions),
    Performance: loadable(() => import('@views/Performance'), loadableOptions),
    Users: loadable(() => import('@views/Users'), loadableOptions),
    Playground: loadable(() => import('@views/Playground'), loadableOptions),
    ReactLab: loadable(() => import('@views/ReactLab'), loadableOptions),
    AntdLab: loadable(() => import('@views/AntdLab'), loadableOptions)
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface IMenu {
    title: string
    id: number
    pid?: number
    path?: string
    icon?: JSX.Element
    component?: AsynchronousComponentKeys
    exact?: boolean
}

export interface IMenuInTree extends IMenu {
    children?: IMenuInTree[]
}

export const menu: IMenu[] = [
    {
        id: 1,
        path: '/',
        title: 'SocketDebugger',
        icon: <CoffeeOutlined />,
        component: 'SocketDebugger',
        exact: true
    },
    {
        id: 6,
        path: '/performance',
        title: 'Performance',
        icon: <VideoCameraOutlined />,
        component: 'Performance',
        exact: true
    },
    {
        id: 3,
        path: '/playground',
        title: 'playground',
        icon: <VideoCameraOutlined />,
        component: 'Playground',
        exact: true
    },
    {
        id: 4,
        path: '/react-lab',
        title: 'React Lab',
        icon: <CodeSandboxOutlined />,
        component: 'ReactLab',
        exact: true
    },
    {
        id: 5,
        path: '/antd-lab',
        title: 'Antd Lab',
        icon: <CodeSandboxOutlined />,
        component: 'AntdLab',
        exact: true
    },
    {
        id: 2,
        path: '/users',
        title: 'Users',
        icon: <UserOutlined />,
        component: 'Users',
        exact: true
    }
]

export default menu
