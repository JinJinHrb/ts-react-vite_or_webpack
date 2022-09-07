export default {
    JUU3JTg5JUI5JUU1JUJFJTgxJUU0JUJGJUExJUU2JTgxJUFG2: {
        type: 'void',
        'x-component': 'FormCollapse',
        'x-component-props': {
            ghost: true,
            style: {
                width: '100%'
            },
            className: 'xt$at-JUU3JTg5JUI5JUU1JUJFJTgxJUU0JUJGJUExJUU2JTgxJUFG2'
        },
        properties: {
            collapsePanelJuu3JTg5Jui5Juu1JujfjTgxJuu0JujgjuExJuu2JTgxJufg2: {
                type: 'void',
                'x-component': 'FormCollapse.CollapsePanel',
                'x-component-props': {
                    header: '特征信息',
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
                    className: 'xt$at-collapsePanelJuu3JTg5Jui5Juu1JujfjTgxJuu0JujgjuExJuu2JTgxJufg2'
                },
                properties: {
                    featInfo: {
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
                            className: 'xt$at-featInfo'
                        },
                        'x-pattern': 'readPretty'
                    }
                },
                'x-index': 0
            }
        },
        'x-index': 2
    }
}
