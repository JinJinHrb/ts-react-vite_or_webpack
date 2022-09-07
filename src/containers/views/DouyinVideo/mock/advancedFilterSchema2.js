export default [
    {
        name: 'createdTimeType',
        type: 'string',
        address: 'createdTimeType',
        path: 'createdTimeType',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'createdTime',
                        name: 'createdTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{timeType($deps.createdTime)}}'
                    }
                }
            },
            name: 'createdTimeType'
        }
    },
    {
        name: 'createStartTime',
        type: 'string',
        address: 'createStartTime',
        path: 'createStartTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'createdTime',
                        name: 'createdTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatStartTime($deps.createdTime)}}'
                    }
                }
            },
            name: 'createStartTime'
        }
    },
    {
        name: 'createEndTime',
        type: 'string',
        address: 'createEndTime',
        path: 'createEndTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'createdTime',
                        name: 'createdTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatEndTime($deps.createdTime)}}'
                    }
                }
            },
            name: 'createEndTime'
        }
    },
    {
        name: 'recentContactTimeTimeType',
        type: 'string',
        address: 'recentContactTimeTimeType',
        path: 'recentContactTimeTimeType',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'recentContactTime',
                        name: 'recentContactTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{timeType($deps.recentContactTime)}}'
                    }
                }
            },
            name: 'recentContactTimeTimeType'
        }
    },
    {
        name: 'recentContactStartTime',
        type: 'string',
        address: 'recentContactStartTime',
        path: 'recentContactStartTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'recentContactTime',
                        name: 'recentContactTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatStartTime($deps.recentContactTime)}}'
                    }
                }
            },
            name: 'recentContactStartTime'
        }
    },
    {
        name: 'recentContactEndTime',
        type: 'string',
        address: 'recentContactEndTime',
        path: 'recentContactEndTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'recentContactTime',
                        name: 'recentContactTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatEndTime($deps.recentContactTime)}}'
                    }
                }
            },
            name: 'recentContactEndTime'
        }
    },
    {
        name: 'expectRecoveryStartTime',
        type: 'string',
        address: 'expectRecoveryStartTime',
        path: 'expectRecoveryStartTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'expectRecoveryTime',
                        name: 'expectRecoveryTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatStartTime($deps.expectRecoveryTime)}}'
                    }
                }
            },
            name: 'expectRecoveryStartTime'
        }
    },
    {
        name: 'expectRecoveryEndTime',
        type: 'string',
        address: 'expectRecoveryEndTime',
        path: 'expectRecoveryEndTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'expectRecoveryTime',
                        name: 'expectRecoveryTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatEndTime($deps.expectRecoveryTime)}}'
                    }
                }
            },
            name: 'expectRecoveryEndTime'
        }
    },
    {
        name: 'responsibleStatusChangeStartTime',
        type: 'string',
        address: 'responsibleStatusChangeStartTime',
        path: 'responsibleStatusChangeStartTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'responsibleStatusChangeTime',
                        name: 'responsibleStatusChangeTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatStartTime($deps.responsibleStatusChangeTime)}}'
                    }
                }
            },
            name: 'responsibleStatusChangeStartTime'
        }
    },
    {
        name: 'responsibleStatusChangeEndTime',
        type: 'string',
        address: 'responsibleStatusChangeEndTime',
        path: 'responsibleStatusChangeEndTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'responsibleStatusChangeTime',
                        name: 'responsibleStatusChangeTime'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{formatEndTime($deps.responsibleStatusChangeTime)}}'
                    }
                }
            },
            name: 'responsibleStatusChangeEndTime'
        }
    },
    {
        name: 'responsibleCountMin',
        type: 'number',
        address: 'responsibleCountMin',
        path: 'responsibleCountMin',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'number',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'responsibleCount',
                        name: 'responsibleCount'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{countMin($deps.responsibleCount)}}'
                    }
                }
            },
            name: 'responsibleCountMin'
        }
    },
    {
        name: 'responsibleCountMax',
        type: 'number',
        address: 'responsibleCountMax',
        path: 'responsibleCountMax',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'number',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'responsibleCount',
                        name: 'responsibleCount'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{countMax($deps.responsibleCount)}}'
                    }
                }
            },
            name: 'responsibleCountMax'
        }
    },
    {
        name: 'releaseCountMin',
        type: 'number',
        address: 'releaseCountMin',
        path: 'releaseCountMin',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'number',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'releaseCount',
                        name: 'releaseCount'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{countMin($deps.releaseCount)}}'
                    }
                }
            },
            name: 'releaseCountMin'
        }
    },
    {
        name: 'releaseCountMax',
        type: 'number',
        address: 'releaseCountMax',
        path: 'releaseCountMax',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'number',
            'x-component': 'Input',
            'x-hidden': true,
            'x-component-props': {
                type: 'hidden'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'array',
                        source: 'releaseCount',
                        name: 'releaseCount'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{countMax($deps.releaseCount)}}'
                    }
                }
            },
            name: 'releaseCountMax'
        }
    },
    {
        name: 'comprehensiveInfo',
        type: 'string',
        address: 'comprehensiveInfo',
        path: 'comprehensiveInfo',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            title: '客户关键词',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                placeholder: '客户名称/简称/编号、联系人姓名/邮箱',
                id: 'comprehensiveInfo',
                size: 'large',
                autoComplete: 'off'
            },
            name: 'comprehensiveInfo'
        }
    },
    {
        name: 'customerGeoCode',
        type: 'string',
        address: 'customerGeoCode',
        path: 'customerGeoCode',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            title: '贸易国家/地区',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                placeholder: '选择贸易国家/地区',
                allowClear: true,
                id: 'customerGeoCode',
                size: 'large',
                showSearch: true,
                optionFilterProp: 'label'
            },
            name: 'customerGeoCode'
        }
    },
    {
        name: 'labelQueryType',
        type: 'string',
        address: 'tags.labelQueryType',
        path: 'labelQueryType',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            'x-component': 'Radio.Group',
            'x-component-props': {
                id: 'labelQueryType',
                size: 'large'
            },
            default: 'CONTAINS_ANY',
            enum: [
                {
                    label: '包含全部标签',
                    value: 'CONTAINS_ALL'
                },
                {
                    label: '包含任一标签',
                    value: 'CONTAINS_ANY'
                }
            ],
            name: 'labelQueryType'
        }
    },
    {
        name: 'tags',
        type: 'array',
        address: 'tags.tags',
        path: 'tags',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            'x-component': 'XtCustomSelect',
            'x-component-props': {
                placeholder: '选择标签（可多选）',
                id: 'tags',
                mode: 'CRM',
                size: 'large',
                noAddition: true,
                noConfirm: true,
                noDeleteOption: true
            },
            name: 'tags'
        }
    },
    {
        name: 'customerSource',
        type: 'array',
        address: 'customerSource',
        path: 'customerSource',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '客户来源',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                placeholder: '选择来源（可多选）',
                mode: 'multiple',
                allowClear: true,
                id: 'customerSource',
                size: 'large'
            },
            name: 'customerSource'
        }
    },
    {
        name: 'status',
        type: 'array',
        address: 'status',
        path: 'status',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '客户状态',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                placeholder: '选择状态（可多选）',
                mode: 'multiple',
                allowClear: true,
                id: 'status',
                size: 'large'
            },
            name: 'status'
        }
    },
    {
        name: 'customerType',
        type: 'array',
        address: 'customerType',
        path: 'customerType',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '客户类型',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                placeholder: '选择类型（可多选）',
                mode: 'multiple',
                allowClear: true,
                id: 'customerType',
                size: 'large'
            },
            name: 'customerType'
        }
    },
    {
        name: 'createUserId',
        type: 'string',
        address: 'createUserId',
        path: 'createUserId',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'string',
            title: '创建人',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                placeholder: '选择创建人',
                allowClear: true,
                id: 'createUserId',
                size: 'large'
            },
            'x-reactions': {
                fulfill: {
                    schema: {
                        'x-hidden': ''
                    }
                }
            },
            name: 'createUserId'
        }
    },
    {
        name: 'responsibleUserId',
        type: 'array',
        address: 'responsibleUserId',
        path: 'responsibleUserId',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '负责人',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                placeholder: '选择负责人（可多选）',
                mode: 'multiple',
                allowClear: true,
                id: 'responsibleUserId',
                size: 'large'
            },
            'x-reactions': {
                fulfill: {
                    schema: {
                        'x-hidden': ''
                    }
                }
            },
            name: 'responsibleUserId'
        }
    },
    {
        name: 'recentContactTime',
        type: 'array',
        address: 'recentContactTime',
        path: 'recentContactTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '最近跟进时间',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker.RangePicker',
            'x-component-props': {
                placeholder: ['选择跟进时间', '选择跟进时间'],
                id: 'recentContactTime',
                ranges: {},
                size: 'large'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'string',
                        source: 'recentContactTimeTimeType',
                        name: 'recentContactTimeTimeType'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{DatePickerRanges($deps.recentContactTimeTimeType)}}'
                    }
                }
            },
            name: 'recentContactTime'
        }
    },
    {
        name: 'createdTime',
        type: 'array',
        address: 'createdTime',
        path: 'createdTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '创建时间',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker.RangePicker',
            'x-component-props': {
                placeholder: ['选择创建时间', '选择创建时间'],
                id: 'createdTime',
                ranges: {},
                size: 'large'
            },
            'x-reactions': {
                dependencies: [
                    {
                        property: 'value',
                        type: 'string',
                        source: 'createdTimeType',
                        name: 'createdTimeType'
                    }
                ],
                fulfill: {
                    state: {
                        value: '{{DatePickerRanges($deps.createdTimeType)}}'
                    }
                }
            },
            name: 'createdTime'
        }
    },
    {
        name: 'expectRecoveryTime',
        type: 'array',
        address: 'expectRecoveryTime',
        path: 'expectRecoveryTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '预计回收时间',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker.RangePicker',
            'x-component-props': {
                placeholder: ['选择预计回收时间', '选择预计回收时间'],
                id: 'expectRecoveryTime',
                ranges: {},
                size: 'large'
            },
            'x-reactions': {
                fulfill: {
                    state: {
                        value: '{{$deps.expectRecoveryTime}}'
                    }
                }
            },
            name: 'expectRecoveryTime'
        }
    },
    {
        name: 'responsibleCount',
        type: 'array',
        address: 'responsibleCount',
        path: 'responsibleCount',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '跟进次数',
            'x-decorator': 'FormItem',
            'x-component': 'NumberRange',
            'x-component-props': {
                id: 'responsibleCount',
                size: 'large'
            },
            name: 'responsibleCount'
        }
    },
    {
        name: 'responsibleStatusChangeTime',
        type: 'array',
        address: 'responsibleStatusChangeTime',
        path: 'responsibleStatusChangeTime',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '当前负责人获得时间',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker.RangePicker',
            'x-component-props': {
                placeholder: ['选择当前负责人获得时间', '选择当前负责人获得时间'],
                id: 'responsibleStatusChangeTime',
                ranges: {},
                size: 'large'
            },
            name: 'responsibleStatusChangeTime'
        }
    },
    {
        name: 'releaseCount',
        type: 'array',
        address: 'releaseCount',
        path: 'releaseCount',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'array',
            title: '进入公海次数',
            'x-decorator': 'FormItem',
            'x-component': 'NumberRange',
            'x-component-props': {
                id: 'releaseCount',
                size: 'large'
            },
            name: 'releaseCount'
        }
    }
]
