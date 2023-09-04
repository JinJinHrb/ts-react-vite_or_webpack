import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { getBranchData } from './branchData'
import { useQueryStore } from '@views/Performance/store'
import { getLineChartOptions } from './gridData'

export type MyProps = {
    optionType: keyof typeof OPT_FUN_SET
    style?: any
}

const OPT_FUN_SET = {
    lineChart: getLineChartOptions,
    branch: getBranchData
}

const Statics = (props: MyProps) => {
    const { optionType } = props

    const name = useQueryStore((state: any) => state.name)
    console.log('Statics #23 name:', name)

    const getOption = (name: string) => {
        return OPT_FUN_SET[name]()
    }

    return (
        <ReactEcharts
            option={getOption(optionType)}
            notMerge={true}
            lazyUpdate={true}
            // onEvents={onEvents}
            style={{ width: '100%', height: '800px' }}
        />
    )
}

export default Statics
