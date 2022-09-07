export default {
    0: {
        name: 'customerNo',
        type: 'string',
        address: 'jg1ging5grt.HWsrHAflDh.customerNo',
        path: 'customerNo',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
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
        titles: ['基本信息', '客户编号']
    },
    1: {
        name: 'customerGeoCode',
        type: 'string',
        address: 'jg1ging5grt.HWsrHAflDh.customerGeoCode',
        path: 'customerGeoCode',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
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
        titles: ['基本信息', '国家/地区']
    },
    2: {
        name: 'customerName',
        type: 'string',
        address: 'jg1ging5grt.YZ73n2A8uV.customerName',
        path: 'customerName',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
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
        },
        titles: ['基本信息', '客户名称']
    },
    3: {
        name: 'contactModels',
        type: 'array',
        address: '7pktwpbt1oe.contactModels',
        path: 'contactModels',
        visible: true,
        hidden: false,
        fieldJson: {
            _isJSONSchemaObject: true,
            version: '2.0',
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
                _isJSONSchemaObject: true,
                version: '2.0',
                'x-validator': [],
                type: 'object',
                properties: {
                    tgfnpbqvlgv: {
                        _isJSONSchemaObject: true,
                        version: '2.0',
                        type: 'void',
                        'x-index': 1,
                        properties: {
                            RQPo4CrX7e: {
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                'x-component': 'ModuleLeft',
                                type: 'void',
                                'x-index': 0,
                                properties: {
                                    gender: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '单选列表',
                                        disableEditEnum: true,
                                        'x-component': 'Select',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-validator': [],
                                        'x-component-props': {
                                            showSearch: true,
                                            id: 'gender',
                                            allowClear: true
                                        },
                                        'x-hidden': true,
                                        type: 'boolean',
                                        title: '性别',
                                        'x-index': 4,
                                        enum: [
                                            {
                                                label: '男',
                                                value: true
                                            },
                                            {
                                                label: '女',
                                                value: false
                                            }
                                        ],
                                        'x-decorator': 'FormItem',
                                        name: 'gender',
                                        fieldType: 'TD_CONTACT'
                                    },
                                    contactName: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
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
                                    position: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '单行文本框',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        'x-component-props': {
                                            size: 'large',
                                            id: 'position'
                                        },
                                        'x-hidden': true,
                                        title: '职位',
                                        type: 'string',
                                        'x-index': 3,
                                        'x-decorator': 'FormItem',
                                        name: 'position',
                                        fieldType: 'TD_CONTACT',
                                        maxLength: 100
                                    },
                                    socialMediaModels: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '组合文本框',
                                        'x-component': 'ArrayItems',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component-props': {
                                            id: 'socialMediaModels'
                                        },
                                        'x-hidden': true,
                                        type: 'array',
                                        title: '社交账号',
                                        'x-index': 1,
                                        default: [{}],
                                        'x-decorator': 'FormItem',
                                        name: 'socialMediaModels',
                                        items: {
                                            _isJSONSchemaObject: true,
                                            version: '2.0',
                                            type: 'object',
                                            properties: {
                                                space: {
                                                    _isJSONSchemaObject: true,
                                                    version: '2.0',
                                                    'x-component': 'OverlayLayout',
                                                    type: 'void',
                                                    properties: {
                                                        socialMediaType: {
                                                            _isJSONSchemaObject: true,
                                                            version: '2.0',
                                                            'x-component-type': '组合输入框',
                                                            default: 'FACEBOOK',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Select',
                                                            'x-decorator-props': {
                                                                style: {
                                                                    marginRight: 8,
                                                                    flexShrink: 0,
                                                                    width: 124,
                                                                    minWidth: 124
                                                                }
                                                            },
                                                            name: 'socialMediaType',
                                                            'x-component-props': {
                                                                optionFilterProp: 'label',
                                                                showSearch: true,
                                                                id: 'socialMediaType'
                                                            },
                                                            type: 'string',
                                                            enum: [
                                                                {
                                                                    label: 'FaceBook',
                                                                    value: 'FACEBOOK'
                                                                },
                                                                {
                                                                    label: 'Twitter',
                                                                    value: 'TWITTER'
                                                                },
                                                                {
                                                                    label: 'QQ',
                                                                    value: 'QQ'
                                                                },
                                                                {
                                                                    label: 'Wechat',
                                                                    value: 'WECHAT'
                                                                },
                                                                {
                                                                    label: 'Linkedin',
                                                                    value: 'LINKEDIN'
                                                                },
                                                                {
                                                                    label: 'Skype',
                                                                    value: 'SKYPE'
                                                                },
                                                                {
                                                                    label: 'WhatsApp',
                                                                    value: 'WHATSAPP'
                                                                }
                                                            ]
                                                        },
                                                        accountNumber: {
                                                            _isJSONSchemaObject: true,
                                                            version: '2.0',
                                                            'x-component-type': '单行文本框',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Input',
                                                            'x-decorator-props': {
                                                                style: {
                                                                    flexGrow: 1
                                                                }
                                                            },
                                                            name: 'accountNumber',
                                                            'x-component-props': {
                                                                size: 'large',
                                                                id: 'accountNumber'
                                                            },
                                                            'x-validator': [
                                                                {
                                                                    disallowEmoticon: true
                                                                }
                                                            ],
                                                            type: 'string',
                                                            maxLength: 100
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
                                                    },
                                                    name: 'space'
                                                }
                                            }
                                        },
                                        fieldType: 'TD_CONTACT',
                                        maxLength: 15,
                                        properties: {
                                            add: {
                                                _isJSONSchemaObject: true,
                                                version: '2.0',
                                                'x-component': 'ArrayItems.Addition',
                                                'x-component-props': {
                                                    noIcon: true,
                                                    block: false,
                                                    style: {
                                                        padding: 0
                                                    },
                                                    type: 'link'
                                                },
                                                type: 'void',
                                                title: '添加社交账号',
                                                name: 'add'
                                            }
                                        }
                                    },
                                    contactPhone: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '叠加文本框',
                                        'x-component': 'ArrayItems',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component-props': {
                                            id: 'contactPhone'
                                        },
                                        'x-hidden': true,
                                        type: 'array',
                                        title: '电话',
                                        'x-index': 2,
                                        default: ['--'],
                                        'x-decorator': 'FormItem',
                                        name: 'contactPhone',
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
                                                    default: '--',
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
                                                    'x-validator': [
                                                        {
                                                            disallowEmoticon: true
                                                        }
                                                    ],
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
                                        fieldType: 'TD_CONTACT',
                                        maxLength: 15,
                                        properties: {
                                            add: {
                                                _isJSONSchemaObject: true,
                                                version: '2.0',
                                                'x-component': 'ArrayItems.Addition',
                                                'x-component-props': {
                                                    noIcon: true,
                                                    block: false,
                                                    style: {
                                                        padding: 0
                                                    },
                                                    type: 'link'
                                                },
                                                type: 'void',
                                                title: '添加电话',
                                                name: 'add'
                                            }
                                        }
                                    }
                                },
                                name: 'RQPo4CrX7e'
                            },
                            '32wVskLBQ4': {
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                'x-component': 'ModuleRight',
                                type: 'void',
                                'x-index': 1,
                                properties: {
                                    birthday: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '日期',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'DatePicker',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'birthday',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'birthday'
                                        },
                                        'x-hidden': true,
                                        type: 'string',
                                        title: '生日',
                                        'x-index': 2,
                                        fieldType: 'TD_CONTACT'
                                    },
                                    contactEmail: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
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
                                    contactFax: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '单行文本框',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        'x-component-props': {
                                            size: 'large',
                                            id: 'contactFax'
                                        },
                                        'x-hidden': true,
                                        type: 'string',
                                        title: '传真',
                                        'x-index': 1,
                                        'x-decorator': 'FormItem',
                                        name: 'contactFax',
                                        fieldType: 'TD_CONTACT',
                                        maxLength: 100
                                    },
                                    remark: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        'x-component-type': '多行文本框',
                                        'x-component': 'Input.TextArea',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component-props': {
                                            id: 'remark'
                                        },
                                        'x-validator': [
                                            {
                                                disallowEmoticon: true
                                            }
                                        ],
                                        'x-hidden': true,
                                        type: 'string',
                                        title: '联系人备注',
                                        'x-index': 3,
                                        'x-decorator': 'FormItem',
                                        name: 'remark',
                                        fieldType: 'TD_CONTACT',
                                        maxLength: 512
                                    }
                                },
                                name: '32wVskLBQ4'
                            }
                        },
                        name: 'tgfnpbqvlgv'
                    },
                    tgfnpbqvlgu: {
                        _isJSONSchemaObject: true,
                        version: '2.0',
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
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                'x-component': 'ArrayItems.Index',
                                'x-component-props': {
                                    title: '联系人'
                                },
                                type: 'void',
                                'x-index': 0,
                                name: 'tgfnpbqvlgm'
                            },
                            tgfnpbqvlgl: {
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                'x-component': 'ArrayItems.Remove',
                                type: 'void',
                                'x-index': 1,
                                name: 'tgfnpbqvlgl'
                            }
                        },
                        name: 'tgfnpbqvlgu'
                    }
                }
            },
            maxLength: 15,
            properties: {
                cpscgs1n1yf: {
                    _isJSONSchemaObject: true,
                    version: '2.0',
                    'x-component': 'ArrayItems.Addition',
                    'x-component-props': {},
                    type: 'void',
                    title: '添加联系人',
                    'x-index': 0,
                    name: 'cpscgs1n1yf'
                }
            }
        },
        titles: ['联系人']
    },
    4: {
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
    5: {
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
    6: {
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
    7: {
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
    8: {
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
    9: {
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
    10: {
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
    11: {
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
    12: {
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
    13: {
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
    },
    14: {
        name: '33990100795000022072400012801',
        type: 'array',
        address: '0chqj6titjf.9j86GWnU_Q.33990100795000022072400012801',
        path: '33990100795000022072400012801',
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
            title: '客户-单行',
            'x-index': 0,
            default: [''],
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012801',
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
        titles: ['特征信息', '客户-单行']
    },
    15: {
        name: '33990100795000022072400012820',
        type: 'string',
        address: '0chqj6titjf.9j86GWnU_Q.33990100795000022072400012820',
        path: '33990100795000022072400012820',
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
            title: '客户-多行',
            'x-index': 1,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012820',
            isCustom: true,
            fieldType: 'TD_CUSTOMER',
            maxLength: 512
        },
        titles: ['特征信息', '客户-多行']
    },
    16: {
        name: '33990100795000022072400012813',
        type: 'string',
        address: '0chqj6titjf.9j86GWnU_Q.33990100795000022072400012813',
        path: '33990100795000022072400012813',
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
            title: '客户-单选',
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
            name: '33990100795000022072400012813',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-单选']
    },
    17: {
        name: '33990100795000022072400012804',
        type: 'number',
        address: '0chqj6titjf.9j86GWnU_Q.33990100795000022072400012804',
        path: '33990100795000022072400012804',
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
            title: '客户-小数',
            type: 'number',
            'x-index': 3,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012804',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-小数']
    },
    18: {
        name: '33990100795000022072400012811',
        type: 'Array<object>',
        address: '0chqj6titjf.9j86GWnU_Q.33990100795000022072400012811',
        path: '33990100795000022072400012811',
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
            title: '客户-图片',
            type: 'Array<object>',
            'x-index': 4,
            required: false,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012811',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-图片']
    },
    19: {
        name: '33990100795000022072400012816',
        type: 'array',
        address: '0chqj6titjf.fSfzyoIGUs.33990100795000022072400012816',
        path: '33990100795000022072400012816',
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
            title: '客户-多选',
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
            name: '33990100795000022072400012816',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-多选']
    },
    20: {
        name: '33990100795000022072400012808',
        type: 'string',
        address: '0chqj6titjf.fSfzyoIGUs.33990100795000022072400012808',
        path: '33990100795000022072400012808',
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
            title: '客户-日期',
            type: 'string',
            'x-index': 1,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012808',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-日期']
    },
    21: {
        name: '33990100795000022072400012810',
        type: 'string',
        address: '0chqj6titjf.fSfzyoIGUs.33990100795000022072400012810',
        path: '33990100795000022072400012810',
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
            title: '客户-日期时间',
            type: 'string',
            'x-index': 2,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012810',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-日期时间']
    },
    22: {
        name: '33990100795000022072400012818',
        type: 'number',
        address: '0chqj6titjf.fSfzyoIGUs.33990100795000022072400012818',
        path: '33990100795000022072400012818',
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
            title: '客户-整数',
            type: 'number',
            'x-index': 3,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012818',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-整数']
    },
    23: {
        name: '33990100795000022072400012806',
        type: 'Array<object>',
        address: '0chqj6titjf.fSfzyoIGUs.33990100795000022072400012806',
        path: '33990100795000022072400012806',
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
            title: '客户-文件',
            type: 'Array<object>',
            'x-index': 4,
            required: false,
            'x-decorator': 'FormItem',
            name: '33990100795000022072400012806',
            isCustom: true,
            fieldType: 'TD_CUSTOMER'
        },
        titles: ['特征信息', '客户-文件']
    }
}
