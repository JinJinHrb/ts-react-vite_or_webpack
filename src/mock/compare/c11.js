export default {
    module: {
        'x-component': 'ModuleCard',
        module: true,
        name: 'module',
        isCustom: true,
        'x-hidden': false,
        type: 'void',
        title: '自定义模块2',
        'x-index': 5,
        properties: {
            UXhfQ3Nbv_: {
                'x-component': 'ModuleRight',
                type: 'void',
                'x-index': 1,
                properties: {
                    '35990100874000022072500010137': {
                        'x-component-type': '文件上传',
                        'x-component': 'Upload',
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010137',
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
                        title: '自定义S-文件',
                        type: 'Array<object>',
                        'x-index': 3,
                        required: false,
                        'x-decorator': 'FormItem',
                        name: 'UPiPQfk48_',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010133': {
                        'x-component-type': '单选列表',
                        'x-list': true,
                        'x-component': 'Select',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010133',
                        'x-component-props': {
                            optionFilterProp: 'label',
                            showSearch: true,
                            id: '',
                            allowClear: true
                        },
                        'x-validator': [],
                        title: '自定义S-单选',
                        type: 'string',
                        'x-index': 0,
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
                        name: '5aiq443mQ_',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010134': {
                        'x-component-type': '整数字段',
                        'x-list': true,
                        'x-component': 'NumberPicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010134',
                        'x-component-props': {
                            min: 0,
                            max: 10000,
                            precision: 0,
                            id: ''
                        },
                        'x-validator': [],
                        title: '自定义S-整数',
                        type: 'number',
                        'x-index': 2,
                        'x-decorator': 'FormItem',
                        name: 'Jue6tht8ks',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010140': {
                        'x-component-type': '多选列表',
                        'x-list': true,
                        'x-component': 'MultipleSelect',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010140',
                        'x-component-props': {
                            mode: 'multiple',
                            optionFilterProp: 'label',
                            showSearch: true,
                            id: '',
                            allowClear: true
                        },
                        'x-validator': [],
                        title: '自定义S-多选',
                        type: 'array',
                        'x-index': 1,
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
                        name: 'pzZeoiOifx',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    }
                }
            },
            kNRXF7XuaR: {
                'x-component': 'ModuleLeft',
                type: 'void',
                'x-index': 0,
                properties: {
                    '35990100874000022072500010139': {
                        'x-component-type': '日期',
                        'x-list': true,
                        'x-component': 'DatePicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010139',
                        'x-component-props': {
                            id: '',
                            unix: true
                        },
                        'x-validator': [],
                        title: '自定义S-日期',
                        type: 'string',
                        'x-index': 3,
                        'x-decorator': 'FormItem',
                        name: 'Qk-A3sFnhR',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010138': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010138',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '自定义S-单行',
                        'x-index': 0,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: '40iR7Fu5El',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    '35990100874000022072500010135': {
                        'x-component-type': '图片上传',
                        'x-component': 'Upload',
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010135',
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
                        title: '自定义S-图片',
                        type: 'Array<object>',
                        'x-index': 5,
                        required: false,
                        'x-decorator': 'FormItem',
                        name: '5NWfhms9J1',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010136': {
                        'x-component-type': '多行文本框',
                        'x-list': true,
                        'x-component': 'Input.TextArea',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010136',
                        'x-component-props': {
                            id: ''
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '自定义S-多行',
                        'x-index': 2,
                        'x-decorator': 'FormItem',
                        name: 'MlIE8NPBNP',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 512
                    },
                    '35990100874000022072600010214': {
                        'x-component-type': '多行文本框',
                        'x-list': true,
                        'x-component': 'Input.TextArea',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010214',
                        'x-component-props': {
                            id: ''
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '黑乎乎',
                        'x-index': 1,
                        'x-decorator': 'FormItem',
                        name: 'joxGZqHsWt',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 512
                    },
                    '35990100874000022072500010132': {
                        'x-component-type': '小数',
                        'x-list': true,
                        'x-component': 'NumberPicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010132',
                        'x-component-props': {
                            min: 0,
                            max: 10000,
                            precision: 2,
                            id: ''
                        },
                        'x-validator': [],
                        title: '自定义S-小数',
                        type: 'number',
                        'x-index': 4,
                        'x-decorator': 'FormItem',
                        name: 'kUdIQYDM27',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    }
                }
            }
        }
    },
    hudxz1dtorr: {
        'x-component': 'ModuleCard',
        module: true,
        'x-hidden': false,
        type: 'void',
        title: '附件',
        'x-index': 4,
        properties: {
            vmcoGOi3Nh: {
                'x-component': 'ModuleRight',
                type: 'void',
                'x-index': 1,
                properties: {
                    '35990100874000022072500010119': {
                        'x-component-type': '文件上传',
                        'x-component': 'Upload',
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010119',
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
                        title: '客户-文件',
                        type: 'Array<object>',
                        'x-index': 3,
                        required: false,
                        'x-decorator': 'FormItem',
                        name: 'Ojav5y0pbg',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010116': {
                        'x-component-type': '小数',
                        'x-list': true,
                        'x-component': 'NumberPicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010116',
                        'x-component-props': {
                            min: 0,
                            max: 10000,
                            precision: 2,
                            id: ''
                        },
                        'x-validator': [],
                        title: '客户-小数',
                        type: 'number',
                        'x-index': 1,
                        'x-decorator': 'FormItem',
                        name: 'MRk4JVW323',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010113': {
                        'x-component-type': '整数字段',
                        'x-list': true,
                        'x-component': 'NumberPicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010113',
                        'x-component-props': {
                            min: 0,
                            max: 10000,
                            precision: 0,
                            id: ''
                        },
                        'x-validator': [],
                        title: '客户-整数',
                        type: 'number',
                        'x-index': 0,
                        'x-decorator': 'FormItem',
                        name: 'qrXYOxEToh',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010102': {
                        'x-component-type': '图片上传',
                        'x-component': 'Upload',
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010102',
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
                        title: '客户-图片',
                        type: 'Array<object>',
                        'x-index': 2,
                        required: false,
                        'x-decorator': 'FormItem',
                        name: 'aYbkDC-llL',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    }
                }
            },
            eAjONKvzlV: {
                'x-component': 'ModuleLeft',
                type: 'void',
                'x-index': 0,
                properties: {
                    '35990100874000022072500010107': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010107',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '客户-单行',
                        'x-index': 0,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'qeXM0oFKUB',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    '35990100874000022072500010118': {
                        'x-component-type': '多选列表',
                        'x-list': true,
                        'x-component': 'MultipleSelect',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010118',
                        'x-component-props': {
                            mode: 'multiple',
                            optionFilterProp: 'label',
                            showSearch: true,
                            id: '',
                            allowClear: true
                        },
                        'x-validator': [],
                        title: '客户-多选',
                        type: 'array',
                        'x-index': 4,
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
                        name: '-3Ru6ly_QZ',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010104': {
                        'x-component-type': '多行文本框',
                        'x-list': true,
                        'x-component': 'Input.TextArea',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010104',
                        'x-component-props': {
                            id: ''
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '客户-多行',
                        'x-index': 2,
                        'x-decorator': 'FormItem',
                        name: 'urN2MCpQNd',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 512
                    },
                    '35990100874000022072500010103': {
                        'x-component-type': '单选列表',
                        'x-list': true,
                        'x-component': 'Select',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010103',
                        'x-component-props': {
                            optionFilterProp: 'label',
                            showSearch: true,
                            id: '',
                            allowClear: true
                        },
                        'x-validator': [],
                        title: '客户-单选',
                        type: 'string',
                        'x-index': 3,
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
                        name: 't8skZ5F468',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072600010213': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010213',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '呼呼呼呼呼呼呼呼呼呼呼呼',
                        'x-index': 1,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'qX0sk0zZ1s',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    '35990100874000022072500010101': {
                        'x-component-type': '日期',
                        'x-list': true,
                        'x-component': 'DatePicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010101',
                        'x-component-props': {
                            id: '',
                            unix: true
                        },
                        'x-validator': [],
                        title: '客户-日期',
                        type: 'string',
                        'x-index': 5,
                        'x-decorator': 'FormItem',
                        name: 'livJwP3wms',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072500010110': {
                        'x-component-type': '日期时间',
                        'x-list': true,
                        'x-component': 'DatePicker',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072500010110',
                        'x-component-props': {
                            showTime: true,
                            id: '',
                            unix: true
                        },
                        'x-validator': [],
                        title: '客户-日期时间',
                        type: 'string',
                        'x-index': 6,
                        'x-decorator': 'FormItem',
                        name: 'S3552d1TUu',
                        isCustom: true,
                        fieldType: 'TD_CUSTOMER'
                    }
                }
            }
        }
    },
    jg1ging5grt: {
        'x-component': 'ModuleCard',
        module: true,
        'x-hidden': false,
        type: 'void',
        title: '基本信息',
        'x-index': 0,
        properties: {
            YZ73n2A8uV: {
                'x-component': 'ModuleRight',
                type: 'void',
                'x-index': 1,
                properties: {
                    customerPhone: {
                        'x-component-type': '单行文本框',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                            colon: false
                        },
                        name: 'customerPhone',
                        'x-component-props': {
                            size: 'large',
                            id: 'customerPhone'
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '固定电话',
                        'x-index': 2,
                        fieldType: 'TD_CUSTOMER'
                    },
                    customerAbbreviation: {
                        'x-component-type': '单行文本框',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                            colon: false
                        },
                        name: 'customerAbbreviation',
                        'x-component-props': {
                            size: 'large',
                            id: 'customerAbbreviation'
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '客户简称',
                        'x-index': 1,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 80
                    },
                    '35990100874000022072600010202': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010202',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '6',
                        'x-index': 5,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'V6e5Gex_6l',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    '35990100874000022072600010211': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010211',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '9',
                        'x-index': 7,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'Q5MLEz6Bx_',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    customizeAddress: {
                        'x-component-type': '多行文本框',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input.TextArea',
                        'x-decorator-props': {
                            colon: false
                        },
                        name: 'customizeAddress',
                        'x-component-props': {
                            id: 'customizeAddress'
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '联系地址',
                        'x-index': 3,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 512
                    },
                    '35990100874000022072600010201': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010201',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: 'test',
                        'x-index': 4,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'gX2PXaUf1H',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    '35990100874000022072600010212': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010212',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '8',
                        'x-index': 6,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'z-p1ajVtC8',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    customerName: {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'Input',
                        'x-list-fixed': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        'x-component-props': {
                            size: 'large',
                            id: 'customerName'
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '客户名称',
                        'x-index': 0,
                        required: true,
                        disableHide: true,
                        'x-decorator': 'FormItem',
                        name: 'customerName',
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 80
                    }
                }
            },
            HWsrHAflDh: {
                'x-component': 'ModuleLeft',
                type: 'void',
                'x-index': 0,
                properties: {
                    '35990100874000022072600010208': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010208',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '3',
                        'x-index': 7,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'ZAtngpjFXN',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    customerGeoCode: {
                        'x-component-type': '单选列表',
                        'x-component': 'GeoSelect',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        'x-component-props': {
                            optionFilterProp: 'label',
                            showSearch: true,
                            id: 'customerGeoCode'
                        },
                        'x-validator': [],
                        type: 'string',
                        title: '国家/地区',
                        'x-index': 1,
                        required: true,
                        disableHide: true,
                        'x-decorator': 'FormItem',
                        name: 'customerGeoCode',
                        fieldType: 'TD_CUSTOMER'
                    },
                    webAddress: {
                        'x-component-type': '单行文本框',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                            colon: false
                        },
                        name: 'webAddress',
                        'x-component-props': {
                            size: 'large',
                            id: 'webAddress'
                        },
                        'x-validator': [
                            'url',
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '客户网址',
                        'x-index': 2,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 128
                    },
                    memo: {
                        'x-component-type': '多行文本框',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input.TextArea',
                        'x-decorator-props': {
                            colon: false
                        },
                        name: 'memo',
                        'x-component-props': {
                            id: 'memo'
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '备注',
                        'x-index': 4,
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 512
                    },
                    '35990100874000022072600010203': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010203',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '5',
                        'x-index': 8,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: '0iSzZ1BlSV',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    customerNo: {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'CustomerNoInput',
                        'x-decorator-props': {
                            colon: false
                        },
                        'x-component-props': {
                            id: 'customerNo'
                        },
                        'x-validator': [
                            {
                                checkCustomerNoDuplicate: true,
                                triggerType: 'onBlur'
                            }
                        ],
                        type: 'string',
                        title: '客户编号',
                        'x-index': 0,
                        disableHide: true,
                        disableEdit: true,
                        'x-decorator': 'FormItem',
                        name: 'customerNo',
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 32
                    },
                    '35990100874000022072600010204': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010204',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '2',
                        'x-index': 6,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'nuk3ZC40Bf',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    },
                    customerFax: {
                        'x-component-type': '单行文本框',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                            colon: false
                        },
                        name: 'customerFax',
                        'x-component-props': {
                            size: 'large',
                            id: 'customerFax'
                        },
                        'x-validator': [
                            {
                                disallowEmoticon: true
                            }
                        ],
                        type: 'string',
                        title: '传真',
                        'x-index': 3,
                        fieldType: 'TD_CUSTOMER'
                    },
                    '35990100874000022072600010205': {
                        'x-component-type': '单行文本框',
                        'x-list': true,
                        'x-component': 'ArrayItems',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        customFieldId: '35990100874000022072600010205',
                        'x-component-props': {
                            id: ''
                        },
                        type: 'array',
                        title: '1',
                        'x-index': 5,
                        default: [''],
                        'x-decorator': 'FormItem',
                        name: 'xdm5tuUG3f',
                        isCustom: true,
                        items: {
                            'x-component': 'OverlayLayout',
                            'x-component-props': {},
                            type: 'void',
                            properties: {
                                input: {
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
                                    maxLength: 100
                                },
                                remove: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    type: 'void'
                                }
                            }
                        },
                        fieldType: 'TD_CUSTOMER',
                        maxLength: 15,
                        properties: {
                            add: {
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
                                title: '添加'
                            }
                        }
                    }
                }
            }
        }
    },
    '0chqj6titjf': {
        'x-component': 'ModuleCard',
        module: true,
        'x-hidden': false,
        type: 'void',
        title: '特征信息',
        'x-index': 3,
        properties: {
            '9j86GWnU_Q': {
                'x-component': 'ModuleLeft',
                type: 'void',
                'x-index': 0,
                properties: {
                    customerType: {
                        'x-component-type': '单选列表',
                        'x-component': 'Select',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        'x-component-props': {
                            optionFilterProp: 'label',
                            showSearch: true,
                            id: 'customerType',
                            allowClear: true
                        },
                        'x-validator': [],
                        type: 'string',
                        title: '客户类型',
                        'x-index': 1,
                        enum: [
                            {
                                label: '采购商',
                                value: 'BUYERS'
                            },
                            {
                                label: '出口商',
                                value: 'EXPORTER'
                            },
                            {
                                label: '进口商',
                                value: 'IMPORTER'
                            },
                            {
                                label: '个人消费者',
                                value: 'INDIVIDUAL_CONSUMER'
                            },
                            {
                                label: '供应商',
                                value: 'SUPPLIER'
                            },
                            {
                                label: '贸易公司',
                                value: 'TRADING_COMPANY'
                            }
                        ],
                        'x-decorator': 'FormItem',
                        name: 'customerType',
                        fieldType: 'TD_CUSTOMER'
                    },
                    customerSource: {
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
                            id: 'customerSource',
                            allowClear: true
                        },
                        'x-validator': [],
                        type: 'string',
                        title: '客户来源',
                        'x-index': 0,
                        enum: [
                            {
                                label: '商业数据',
                                value: 'BUSINESS_DATA'
                            },
                            {
                                label: '客户推荐',
                                value: 'CUSTOMER_RECOMMENDATION'
                            },
                            {
                                label: '电商平台',
                                value: 'ECOMMERCE_PLATFORM'
                            },
                            {
                                label: '展会',
                                value: 'EXHIBITION'
                            },
                            {
                                label: '社交平台',
                                value: 'SOCIAL_PLATFORM'
                            }
                        ],
                        'x-decorator': 'FormItem',
                        name: 'customerSource',
                        fieldType: 'TD_CUSTOMER'
                    }
                }
            },
            fSfzyoIGUs: {
                'x-component': 'ModuleRight',
                type: 'void',
                'x-index': 1,
                properties: {
                    status: {
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
                            id: 'status',
                            allowClear: true
                        },
                        'x-validator': [],
                        type: 'string',
                        title: '客户状态',
                        'x-index': 0,
                        enum: [
                            {
                                label: '持续跟进',
                                value: 'FOLLOW_UP'
                            },
                            {
                                label: '无效客户',
                                value: 'INACTIVE'
                            },
                            {
                                label: '初步接触',
                                value: 'INITIAL_CONTACT'
                            },
                            {
                                label: '忠诚客户',
                                value: 'LOYAL_CUSTOMERS'
                            },
                            {
                                label: '潜在客户',
                                value: 'POTENTIAL_CUSTOMERS'
                            },
                            {
                                label: '成交客户',
                                value: 'TRANSACTION_CUSTOMERS'
                            }
                        ],
                        'x-decorator': 'FormItem',
                        name: 'status',
                        fieldType: 'TD_CUSTOMER'
                    },
                    tags: {
                        'x-component-type': '多选列表',
                        'x-list': true,
                        'x-component': 'XtCustomSelect',
                        'x-filter': true,
                        'x-decorator-props': {
                            colon: false
                        },
                        'x-validator': [],
                        'x-component-props': {
                            mode: 'CRM',
                            optionFilterProp: 'label',
                            size: 'large',
                            id: 'tags',
                            allowClear: true,
                            noConfirm: true
                        },
                        type: 'array',
                        title: '标签',
                        'x-index': 1,
                        'x-decorator': 'FormItem',
                        name: 'tags',
                        fieldType: 'TD_CUSTOMER'
                    }
                }
            }
        }
    },
    '7pktwpbt1oe': {
        'x-component': 'ModuleCard',
        module: true,
        'x-hidden': false,
        type: 'void',
        title: '联系人',
        'x-index': 1,
        properties: {
            contactModels: {
                default: [{}],
                'x-component': 'ArrayItems',
                name: 'contactModels',
                'x-component-props': {
                    twoColumn: true,
                    id: 'contactModels'
                },
                'x-validator': [],
                type: 'array',
                'x-index': 0,
                items: {
                    'x-validator': [],
                    type: 'object',
                    properties: {
                        tgfnpbqvlgv: {
                            type: 'void',
                            'x-index': 1,
                            properties: {
                                RQPo4CrX7e: {
                                    'x-component': 'ModuleLeft',
                                    type: 'void',
                                    'x-index': 0,
                                    properties: {
                                        '35990100874000022072500010128': {
                                            'x-component-type': '小数',
                                            'x-list': true,
                                            'x-component': 'NumberPicker',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010128',
                                            'x-component-props': {
                                                min: 0,
                                                max: 10000,
                                                precision: 2,
                                                id: ''
                                            },
                                            'x-validator': [],
                                            title: '联系人-小数',
                                            type: 'number',
                                            'x-index': 5,
                                            'x-decorator': 'FormItem',
                                            name: 'jGCM31CSvh',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        '35990100874000022072500010127': {
                                            'x-component-type': '多行文本框',
                                            'x-list': true,
                                            'x-component': 'Input.TextArea',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010127',
                                            'x-component-props': {
                                                id: ''
                                            },
                                            'x-validator': [
                                                {
                                                    disallowEmoticon: true
                                                }
                                            ],
                                            type: 'string',
                                            title: '联系人-多行',
                                            'x-index': 2,
                                            'x-decorator': 'FormItem',
                                            name: 'C3534qLEjJ',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT',
                                            maxLength: 512
                                        },
                                        contactName: {
                                            'x-component-type': '单行文本框',
                                            'x-list': true,
                                            'x-component': 'Input',
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            'x-component-props': {
                                                size: 'large',
                                                id: 'contactName'
                                            },
                                            'x-validator': [
                                                {
                                                    disallowEmoticon: true
                                                }
                                            ],
                                            type: 'string',
                                            title: '姓名',
                                            'x-index': 0,
                                            required: true,
                                            disableHide: true,
                                            'x-decorator': 'FormItem',
                                            name: 'contactName',
                                            fieldType: 'TD_CONTACT',
                                            maxLength: 100
                                        },
                                        '35990100874000022072500010125': {
                                            'x-component-type': '整数字段',
                                            'x-list': true,
                                            'x-component': 'NumberPicker',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010125',
                                            'x-component-props': {
                                                min: 0,
                                                max: 10000,
                                                precision: 0,
                                                id: ''
                                            },
                                            'x-validator': [],
                                            title: '联系人-整数',
                                            type: 'number',
                                            'x-index': 4,
                                            'x-decorator': 'FormItem',
                                            name: 'hYwvXJ0GOQ',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        '35990100874000022072500010122': {
                                            'x-component-type': '单选列表',
                                            'x-list': true,
                                            'x-component': 'Select',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010122',
                                            'x-component-props': {
                                                optionFilterProp: 'label',
                                                showSearch: true,
                                                id: '',
                                                allowClear: true
                                            },
                                            'x-validator': [],
                                            title: '联系人-单选',
                                            type: 'string',
                                            'x-index': 3,
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
                                            name: 'T2-S1PabgU',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        '35990100874000022072500010121': {
                                            'x-component-type': '单行文本框',
                                            'x-list': true,
                                            'x-component': 'ArrayItems',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010121',
                                            'x-component-props': {
                                                id: ''
                                            },
                                            type: 'array',
                                            title: '联系人-单行',
                                            'x-index': 1,
                                            default: [''],
                                            'x-decorator': 'FormItem',
                                            name: 'fKtPRpnynX',
                                            isCustom: true,
                                            items: {
                                                'x-component': 'OverlayLayout',
                                                'x-component-props': {},
                                                type: 'void',
                                                properties: {
                                                    input: {
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
                                                        maxLength: 100
                                                    },
                                                    remove: {
                                                        'x-decorator': 'FormItem',
                                                        'x-component': 'ArrayItems.Remove',
                                                        'x-component-props': {
                                                            atLeastOne: true,
                                                            style: {
                                                                marginLeft: 10
                                                            }
                                                        },
                                                        type: 'void'
                                                    }
                                                }
                                            },
                                            fieldType: 'TD_CONTACT',
                                            maxLength: 15,
                                            properties: {
                                                add: {
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
                                                    title: '添加'
                                                }
                                            }
                                        }
                                    }
                                },
                                '32wVskLBQ4': {
                                    'x-component': 'ModuleRight',
                                    type: 'void',
                                    'x-index': 1,
                                    properties: {
                                        '35990100874000022072500010129': {
                                            'x-component-type': '日期',
                                            'x-list': true,
                                            'x-component': 'DatePicker',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010129',
                                            'x-component-props': {
                                                id: '',
                                                unix: true
                                            },
                                            'x-validator': [],
                                            title: '联系人-日期',
                                            type: 'string',
                                            'x-index': 2,
                                            'x-decorator': 'FormItem',
                                            name: 'm9zqNQAOBo',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        '35990100874000022072500010126': {
                                            'x-component-type': '文件上传',
                                            'x-component': 'Upload',
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010126',
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
                                            title: '联系人-文件',
                                            type: 'Array<object>',
                                            'x-index': 5,
                                            required: false,
                                            'x-decorator': 'FormItem',
                                            name: 'Qa3l5AV10b',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        contactEmail: {
                                            'x-component-type': '单行文本框',
                                            'x-list': true,
                                            'x-component': 'Input',
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            'x-validator': [
                                                {
                                                    triggerType: 'onBlur',
                                                    required: true
                                                },
                                                {
                                                    disallowEmoticon: true,
                                                    triggerType: 'onBlur'
                                                },
                                                {
                                                    checkDuplicate: true,
                                                    triggerType: 'onBlur'
                                                },
                                                {
                                                    asyncCheckEmailDuplicate: true,
                                                    triggerType: 'onBlur'
                                                }
                                            ],
                                            'x-component-props': {
                                                size: 'large',
                                                id: 'contactEmail'
                                            },
                                            type: 'string',
                                            title: '邮箱',
                                            'x-index': 0,
                                            required: true,
                                            disableHide: true,
                                            disableEdit: true,
                                            'x-decorator': 'FormItem',
                                            name: 'contactEmail',
                                            fieldType: 'TD_CONTACT',
                                            maxLength: 100
                                        },
                                        '35990100874000022072500010124': {
                                            'x-component-type': '多选列表',
                                            'x-list': true,
                                            'x-component': 'MultipleSelect',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010124',
                                            'x-component-props': {
                                                mode: 'multiple',
                                                optionFilterProp: 'label',
                                                showSearch: true,
                                                id: '',
                                                allowClear: true
                                            },
                                            'x-validator': [],
                                            title: '联系人-多选',
                                            type: 'array',
                                            'x-index': 1,
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
                                            name: '5G89-34FOU',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        '35990100874000022072500010123': {
                                            'x-component-type': '图片上传',
                                            'x-component': 'Upload',
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010123',
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
                                            title: '联系人-图片',
                                            type: 'Array<object>',
                                            'x-index': 4,
                                            required: false,
                                            'x-decorator': 'FormItem',
                                            name: 'gVxS1mrb2I',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        },
                                        '35990100874000022072500010130': {
                                            'x-component-type': '日期时间',
                                            'x-list': true,
                                            'x-component': 'DatePicker',
                                            'x-filter': true,
                                            'x-decorator-props': {
                                                colon: false
                                            },
                                            customFieldId: '35990100874000022072500010130',
                                            'x-component-props': {
                                                showTime: true,
                                                id: '',
                                                unix: true
                                            },
                                            'x-validator': [],
                                            title: '联系人-日期时间',
                                            type: 'string',
                                            'x-index': 3,
                                            'x-decorator': 'FormItem',
                                            name: '0DT2Oh2z2A',
                                            isCustom: true,
                                            fieldType: 'TD_CONTACT'
                                        }
                                    }
                                }
                            }
                        },
                        tgfnpbqvlgu: {
                            'x-component': 'Space',
                            'x-reactions': {
                                fulfill: {
                                    schema: {
                                        'x-hidden': '{{($deps.contactModels || [])?.length <= 1 ? true : false }}'
                                    }
                                },
                                dependencies: [
                                    {
                                        property: 'value',
                                        name: 'contactModels',
                                        source: '7pktwpbt1oe.contactModels',
                                        type: 'any'
                                    }
                                ]
                            },
                            'x-component-props': {
                                style: {
                                    padding: '4px',
                                    background: '#00000005',
                                    display: 'flex',
                                    marginBottom: '20px',
                                    justifyContent: 'space-between'
                                }
                            },
                            type: 'void',
                            'x-index': 0,
                            properties: {
                                tgfnpbqvlgm: {
                                    'x-component': 'ArrayItems.Index',
                                    'x-component-props': {
                                        title: '联系人'
                                    },
                                    type: 'void',
                                    'x-index': 0
                                },
                                tgfnpbqvlgl: {
                                    'x-component': 'ArrayItems.Remove',
                                    type: 'void',
                                    'x-index': 1
                                }
                            }
                        }
                    }
                },
                maxLength: 15,
                properties: {
                    cpscgs1n1yf: {
                        'x-component': 'ArrayItems.Addition',
                        'x-component-props': {},
                        type: 'void',
                        title: '添加联系人',
                        'x-index': 0
                    }
                }
            }
        },
        'x-items-slot-path': 'properties.contactModels.items.properties.tgfnpbqvlgv'
    }
}
