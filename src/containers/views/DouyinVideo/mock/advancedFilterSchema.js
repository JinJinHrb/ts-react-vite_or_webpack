export default {
    type: 'object',
    properties: {
        createdTimeType: {
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
            }
        },
        createStartTime: {
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
            }
        },
        createEndTime: {
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
            }
        },
        recentContactTimeTimeType: {
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
            }
        },
        recentContactStartTime: {
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
            }
        },
        recentContactEndTime: {
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
            }
        },
        expectRecoveryStartTime: {
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
            }
        },
        expectRecoveryEndTime: {
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
            }
        },
        responsibleStatusChangeStartTime: {
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
            }
        },
        responsibleStatusChangeEndTime: {
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
            }
        },
        responsibleCountMin: {
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
            }
        },
        responsibleCountMax: {
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
            }
        },
        releaseCountMin: {
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
            }
        },
        releaseCountMax: {
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
            }
        },
        comprehensiveInfo: {
            type: 'string',
            title: '客户关键词',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                placeholder: '客户名称/简称/编号、联系人姓名/邮箱',
                id: 'comprehensiveInfo',
                size: 'large',
                autoComplete: 'off'
            }
        },
        customerGeoCode: {
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
            }
        },
        tags: {
            type: 'void',
            title: '标签',
            'x-decorator': 'FormItem',
            properties: {
                labelQueryType: {
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
                    ]
                },
                tags: {
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
                    }
                }
            }
        },
        customerSource: {
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
            }
        },
        status: {
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
            }
        },
        customerType: {
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
            }
        },
        createUserId: {
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
            }
        },
        responsibleUserId: {
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
            }
        },
        recentContactTime: {
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
            }
        },
        createdTime: {
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
            }
        },
        expectRecoveryTime: {
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
            }
        },
        responsibleCount: {
            type: 'array',
            title: '跟进次数',
            'x-decorator': 'FormItem',
            'x-component': 'NumberRange',
            'x-component-props': {
                id: 'responsibleCount',
                size: 'large'
            }
        },
        responsibleStatusChangeTime: {
            type: 'array',
            title: '当前负责人获得时间',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker.RangePicker',
            'x-component-props': {
                placeholder: ['选择当前负责人获得时间', '选择当前负责人获得时间'],
                id: 'responsibleStatusChangeTime',
                ranges: {},
                size: 'large'
            }
        },
        releaseCount: {
            type: 'array',
            title: '进入公海次数',
            'x-decorator': 'FormItem',
            'x-component': 'NumberRange',
            'x-component-props': {
                id: 'releaseCount',
                size: 'large'
            }
        }
    }
}
