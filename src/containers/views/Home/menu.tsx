import React from 'react'
import loadable from '@loadable/component'
import { CoffeeOutlined, UserOutlined, VideoCameraOutlined, CodeSandboxOutlined } from '@ant-design/icons'

import PageLoading from '@components/PageLoading'

const loadableOptions = { fallback: <PageLoading /> }
export const asynchronousComponents = {
	ChatLab: loadable(() => import('@views/ChatLab'), loadableOptions),
	Graph: loadable(() => import('@views/Graph'), loadableOptions),
	GeoLocation: loadable(() => import('@views/GeoLocation'), loadableOptions),
	CssLab: loadable(() => import('@views/CssLab'), loadableOptions),
	Playground: loadable(() => import('@views/Playground'), loadableOptions),
	SocketDebugger: loadable(() => import('@views/SocketDebugger'), loadableOptions),
	ReactLab: loadable(() => import('@views/ReactLab'), loadableOptions),
	AntdLab: loadable(() => import('@views/AntdLab'), loadableOptions),
	Users: loadable(() => import('@views/Users'), loadableOptions),
	Countdown: loadable(() => import('@views/Countdown'), loadableOptions),
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
		path: '/Countdown',
		title: 'Countdown',
		icon: <VideoCameraOutlined />,
		component: 'Countdown',
		exact: true,
	},
	{
		path: '/Geolocation',
		title: 'Geolocation',
		icon: <VideoCameraOutlined />,
		component: 'GeoLocation',
		exact: true,
	},
	{
		path: '/Graph',
		title: 'Graph',
		icon: <VideoCameraOutlined />,
		component: 'Graph',
		exact: true,
	},
	{
		path: '/CssLab',
		title: 'CssLab',
		icon: <VideoCameraOutlined />,
		component: 'CssLab',
		exact: true,
	},
	{
		path: '/ChatLab',
		title: 'ChatLab',
		icon: <VideoCameraOutlined />,
		component: 'ChatLab',
		exact: true,
	},
	{
		path: '/react-lab',
		title: 'React Lab',
		icon: <CodeSandboxOutlined />,
		component: 'ReactLab',
		exact: true,
	},
	{
		path: '/playground',
		title: 'playground',
		icon: <VideoCameraOutlined />,
		component: 'Playground',
		exact: true,
	},
	{
		path: '/antd-lab',
		title: 'Antd Lab',
		icon: <CodeSandboxOutlined />,
		component: 'AntdLab',
		exact: true,
	},
	{
		path: '/',
		title: 'SocketDebugger',
		icon: <CoffeeOutlined />,
		component: 'SocketDebugger',
		exact: true,
	},
	{
		path: '/users',
		title: 'Users',
		icon: <UserOutlined />,
		component: 'Users',
		exact: true,
	},
].map((a, index) => {
	;(a as IMenu).id = index + 1
	return a
}) as IMenu[]

export default menu
