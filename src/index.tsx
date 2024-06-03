import 'antd/dist/antd.less'
import './index.scss'

import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDomClient from 'react-dom/client'
import { configure } from 'mobx'

import App from '@shared/App'
import catchUnhandledRejection from './errorHandler'
import { ClickToComponent } from 'click-to-react-component'

configure({ enforceActions: 'observed' })
catchUnhandledRejection()

// const render = (Component: React.ComponentType) => {
//     ReactDOM.render(<Component />, document.getElementById('app'))
// }
// render(App)

const root = ReactDomClient.createRoot(document.getElementById('app'))
root.render(
	<>
		<ClickToComponent />
		<App />
	</>,
)
