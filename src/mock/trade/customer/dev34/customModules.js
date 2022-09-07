export default {
    0: {
        name: '33990100795000022072400012812',
        type: 'array',
        address: 'module.vED9d0tSc9.33990100795000022072400012812',
        path: '33990100795000022072400012812',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '单行文本框',
            'x-list': true,
            'x-component': 'ArrayItems',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                id: ''
            },
            type: 'array',
            title: '自定义-单行',
            'x-index': 0,
            default: [''],
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012812',
            isCustom: true,
            items: {
                _isJSONSchemaObject: true,
                version: '2.0',
                'x-component': 'OverlayLayout',
                'x-component-props': {},
                type: 'void',
                properties: {
                    input: {
                        _isJSONSchemaObject: true,
                        version: '2.0',
                        default: '',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                            style: {
                                flexGrow: 1
                            }
                        },
                        'x-component-props': {
                            size: 'large',
                            id: 'input'
                        },
                        'x-validator': [],
                        type: 'string',
                        maxLength: 100,
                        name: 'input'
                    },
                    remove: {
                        _isJSONSchemaObject: true,
                        version: '2.0',
                        'x-decorator': 'FormItem',
                        'x-component': 'ArrayItems.Remove',
                        'x-component-props': {
                            atLeastOne: true,
                            style: {
                                marginLeft: 10
                            }
                        },
                        type: 'void',
                        name: 'remove'
                    }
                }
            },
            fieldType: 'TD_CUSTOMER',
            maxLength: 15,
            properties: {
                add: {
                    _isJSONSchemaObject: true,
                    version: '2.0',
                    'x-component': 'ArrayItems.Addition',
                    'x-visible': false,
                    'x-component-props': {
                        noIcon: true,
                        block: false,
                        style: {
                            padding: 0
                        },
                        type: 'link'
                    },
                    type: 'void',
                    title: '添加',
                    name: 'add'
                }
            }
        },
        titles: ['自定义模块', '自定义-单行']
    },
    1: {
        name: '33990100795000022072400012815',
        type: 'string',
        address: 'module.vED9d0tSc9.33990100795000022072400012815',
        path: '33990100795000022072400012815',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '多行文本框',
            'x-list': true,
            'x-component': 'Input.TextArea',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                id: ''
            },
            'x-validator': [
                {
                    disallowEmoticon: true
                }
            ],
            type: 'string',
            title: '自定义-多行',
            'x-index': 1,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012815',
            isCustom: true,
            fieldType: 'TD_CUSTOMER',
            maxLength: 512
        },
        titles: ['自定义模块', '自定义-多行']
    },
    2: {
        name: '33990100795000022072400012809',
        type: 'string',
        address: 'module.vED9d0tSc9.33990100795000022072400012809',
        path: '33990100795000022072400012809',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '单选列表',
            'x-list': true,
            'x-component': 'Select',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                optionFilterProp: 'label',
                showSearch: true,
                id: '',
                allowClear: true
            },
            'x-validator': [],
            title: '自定义-单选',
            type: 'string',
            'x-index': 2,
            enum: [
                {
                    isCustom: true,
                    label: '选项1',
                    value: '选项1'
                },
                {
                    isCustom: true,
                    label: '选项2',
                    value: '选项2'
                }
            ],
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012809',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-单选']
    },
    3: {
        name: '33990100795000022072400012817',
        type: 'number',
        address: 'module.vED9d0tSc9.33990100795000022072400012817',
        path: '33990100795000022072400012817',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '小数',
            'x-list': true,
            'x-component': 'NumberPicker',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                min: 0,
                max: 10000,
                precision: 2,
                id: ''
            },
            'x-validator': [],
            title: '自定义-小数',
            type: 'number',
            'x-index': 3,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012817',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-小数']
    },
    4: {
        name: '33990100795000022072400012819',
        type: 'Array<object>',
        address: 'module.vED9d0tSc9.33990100795000022072400012819',
        path: '33990100795000022072400012819',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '文件上传',
            'x-component': 'Upload',
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                buttonProps: {
                    block: true
                },
                data: {
                    attachmentType: 'TDCustomerAttachment',
                    usage: 'TDCustomerAttachment'
                },
                multiple: true,
                name: 'files',
                style: {
                    display: 'block'
                },
                textContent: '点击上传',
                placeholder: '上传文件大小50M以内（限制10个附件)',
                maxCount: 50
            },
            'x-validator': [],
            title: '自定义-文件',
            type: 'Array<object>',
            'x-index': 4,
            required: false,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012819',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-文件']
    },
    5: {
        name: '33990100795000022072400012805',
        type: 'array',
        address: 'module.Iz5bryeAzL.33990100795000022072400012805',
        path: '33990100795000022072400012805',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '多选列表',
            'x-list': true,
            'x-component': 'MultipleSelect',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                mode: 'multiple',
                optionFilterProp: 'label',
                showSearch: true,
                id: '',
                allowClear: true
            },
            'x-validator': [],
            title: '自定义-多选',
            type: 'array',
            'x-index': 0,
            enum: [
                {
                    color: '#BD1E2E',
                    isCustom: true,
                    label: '选项1',
                    value: '选项1'
                },
                {
                    color: '#DA681C',
                    isCustom: true,
                    label: '选项2',
                    value: '选项2'
                }
            ],
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012805',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-多选']
    },
    6: {
        name: '33990100795000022072400012802',
        type: 'string',
        address: 'module.Iz5bryeAzL.33990100795000022072400012802',
        path: '33990100795000022072400012802',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '日期',
            'x-list': true,
            'x-component': 'DatePicker',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                id: ''
            },
            'x-validator': [],
            title: '自定义-日期',
            type: 'string',
            'x-index': 1,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012802',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-日期']
    },
    7: {
        name: '33990100795000022072400012807',
        type: 'string',
        address: 'module.Iz5bryeAzL.33990100795000022072400012807',
        path: '33990100795000022072400012807',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '日期时间',
            'x-list': true,
            'x-component': 'DatePicker',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                showTime: true,
                id: ''
            },
            'x-validator': [],
            title: '自定义-日期时间',
            type: 'string',
            'x-index': 2,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012807',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-日期时间']
    },
    8: {
        name: '33990100795000022072400012814',
        type: 'number',
        address: 'module.Iz5bryeAzL.33990100795000022072400012814',
        path: '33990100795000022072400012814',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '整数字段',
            'x-list': true,
            'x-component': 'NumberPicker',
            'x-filter': true,
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                min: 0,
                max: 10000,
                precision: 0,
                id: ''
            },
            'x-validator': [],
            title: '自定义-整数',
            type: 'number',
            'x-index': 3,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012814',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-整数']
    },
    9: {
        name: '33990100795000022072400012803',
        type: 'Array<object>',
        address: 'module.Iz5bryeAzL.33990100795000022072400012803',
        path: '33990100795000022072400012803',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
            'x-component-type': '图片上传',
            'x-component': 'Upload',
            'x-decorator-props': {
                colon: false
            },
            'x-component-props': {
                buttonProps: {
                    block: true
                },
                data: {
                    attachmentType: 'TDCustomerAttachment',
                    usage: 'TDCustomerAttachment'
                },
                multiple: true,
                name: 'files',
                style: {
                    display: 'block'
                },
                textContent: '点击上传',
                placeholder: '上传图片大小50M以内（限制10个图片)',
                maxCount: 50,
                accept: 'image/*'
            },
            'x-validator': [],
            title: '自定义-图片',
            type: 'Array<object>',
            'x-index': 4,
            required: false,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012803',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['自定义模块', '自定义-图片']
    }
}
