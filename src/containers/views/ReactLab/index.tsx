import React from 'react'
import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'
// import './styles.css'
import styles from './index.module.scss'
import classnames from 'classnames'
import { unstable_scheduleCallback } from 'scheduler'

const { PureComponent } = React
const { /* unstable_createRoot: createRoot, */ flushSync } = ReactDOM

import _ from 'lodash'
import Charts from './Charts'
import Clock from './Clock'

const cachedData = new Map()

interface State {
    value: string
    strategy: string
    showDemo: boolean
    showClock: boolean
}

class ReactLab extends PureComponent<Record<string, unknown>, State> {
    _ignoreClick = false
    state = {
        value: '',
        strategy: 'sync',
        showDemo: true,
        showClock: false
    }

    // Random data for the chart
    getStreamData(input: string | any[]) {
        if (cachedData.has(input)) {
            return cachedData.get(input)
        }
        const multiplier = input.length !== 0 ? input.length : 1
        const complexity = (parseInt(window.location.search.substring(1), 10) / 100) * 25 || 25
        const data = _.range(5).map(t =>
            _.range(complexity * multiplier).map((j, i) => {
                return {
                    x: j,
                    y: (t + 1) * _.random(0, 255)
                }
            })
        )
        cachedData.set(input, data)
        return data
    }

    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (e.key.toLowerCase() === '?') {
                e.preventDefault()
                this.setState(state => ({
                    showClock: !state.showClock
                }))
            }
        })
    }

    handleChartClick = (e: { shiftKey: any }) => {
        if (this.state.showDemo) {
            if (e.shiftKey) {
                this.setState({ showDemo: false })
            }
            return
        }
        if (this.state.strategy !== 'async') {
            flushSync(() => {
                this.setState(state => ({
                    showDemo: !state.showDemo
                }))
            })
            return
        }
        if (this._ignoreClick) {
            return
        }
        this._ignoreClick = true

        requestAnimationFrame(() => {
            this.setState({ showDemo: true }, () => {
                this._ignoreClick = false
            })
        })
    }

    debouncedHandleChange = _.debounce(value => {
        if (this.state.strategy === 'debounced') {
            flushSync(() => {
                this.setState({ value })
            })
        }
    }, 1000)

    throttleHandleChange = _.throttle(value => {
        if (this.state.strategy === 'throttle') {
            flushSync(() => {
                this.setState({ value })
            })
        }
    }, 1000)

    renderOption(
        strategy: string,
        label:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
    ) {
        const { strategy: currentStrategy } = this.state
        return (
            <label className={strategy === currentStrategy ? 'selected' : null}>
                <input
                    type="radio"
                    checked={strategy === currentStrategy}
                    onChange={() => {
                        this.setState({ strategy })
                    }}
                />
                {label}
            </label>
        )
    }

    handleChange = (e: { target: { value: any } }) => {
        const value = e.target.value
        const { strategy } = this.state
        switch (strategy) {
            case 'sync':
                this.setState({ value })
                break
            case 'setTimeout':
                setTimeout(() => {
                    this.setState({ value })
                })
                break
            case 'throttle':
                this.throttleHandleChange(value)
                break
            case 'debounced':
                this.debouncedHandleChange(value)
                break
            case 'async':
                unstable_scheduleCallback(0, () => {
                    this.setState({ value })
                })
                break
            default:
                break
        }
    }

    render() {
        const { showClock } = this.state
        const data = this.getStreamData(this.state.value)
        return (
            <div className={classnames(styles.reactLab, styles.container)}>
                <div className="rendering">
                    {this.renderOption('sync', 'Synchronous')}
                    {this.renderOption('setTimeout', 'SetTimeout')}
                    {this.renderOption('debounced', 'Debounced')}
                    {this.renderOption('throttle', 'Throttle')}
                    {this.renderOption('async', 'Concurrent')}
                </div>
                <input
                    className={classnames(
                        styles.input,
                        { [styles.sync]: this.state.strategy === 'sync' },
                        { [styles.debounced]: this.state.strategy === 'debounced' },
                        { [styles.async]: this.state.strategy === 'async' }
                    )}
                    placeholder="longer input → more components and DOM nodes"
                    onChange={this.handleChange}
                />
                <div className={classnames(styles.demo, styles.chart)} onClick={this.handleChartClick}>
                    {this.state.showDemo && <Charts data={data} />}
                    <div style={{ display: showClock ? 'block' : 'none' }}>
                        <Clock />
                    </div>
                </div>
            </div>
        )
    }
}

/* createRoot(document.getElementById('root')).render(<App />) */
export default ReactLab
