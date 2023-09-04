import React from 'react'
import { Select } from 'antd'
import styles from './index.module.scss'
import { useQueryStore } from '@views/Performance/store'

// const onSearch = (value: string) => {
//     console.log('search:', value)
// }

export type MyProps = {
    style?: any
}

const App: React.FC<MyProps> = (props: MyProps) => {
    const setName = useQueryStore((state: any) => state.setName)

    // const [, setQuery] = useContext(PerformanceContext)
    const onChange = (value: string) => {
        console.log(`selected ${value}`)
        if (value) {
            setName(value)
        }
    }

    const { ...restProps } = props
    return (
        <div className={styles.select}>
            <Select
                {...restProps}
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                    input && (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                    {
                        value: 'jack',
                        label: 'Jack'
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy'
                    },
                    {
                        value: 'tom',
                        label: 'Tom'
                    }
                ]}
            />
        </div>
    )
}

export default App
