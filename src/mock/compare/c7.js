export default {
    formCollapse4BasicInfo: {
        type: 'void',
        'x-component': 'FormCollapse',
        'x-component-props': {
            ghost: true,
            style: {
                width: '100%'
            },
            className: 'xt$at-formCollapse4BasicInfo'
        },
        properties: {
            collapsePanel4BasicInfo: {
                type: 'void',
                'x-component': 'FormCollapse.CollapsePanel',
                'x-component-props': {
                    header: '基本信息',
                    showArrow: false,
                    style: {
                        backgroundColor: 'white',
                        fontSize: '16px',
                        fontFamily: 'PingFangSC-Medium, PingFang SC',
                        fontWeight: 500,
                        color: '#000000',
                        marginBottom: '-6px'
                    },
                    mode: 'CRM',
                    collapsible: 'header',
                    className: 'xt$at-collapsePanel4BasicInfo'
                },
                properties: {
                    basicInfo: {
                        type: 'object',
                        'x-decorator': 'FormItem',
                        'x-component': 'XtTable',
                        'x-component-props': {
                            showHeader: false,
                            bordered: true,
                            columns: [
                                {
                                    title: '',
                                    dataIndex: 'leftLabel',
                                    className: 'header-column_1THem'
                                },
                                {
                                    title: '',
                                    dataIndex: 'leftValue',
                                    className: 'header-column-value_27OUu'
                                },
                                {
                                    title: '',
                                    dataIndex: 'rightLabel',
                                    className: 'header-column_1THem'
                                },
                                {
                                    title: '',
                                    dataIndex: 'rightValue',
                                    className: 'header-column-value_27OUu'
                                }
                            ],
                            size: 'small',
                            pagination: false,
                            className: 'xt$at-basicInfo'
                        },
                        'x-pattern': 'readPretty'
                    }
                },
                'x-index': 0
            }
        },
        'x-index': 0
    }
}
