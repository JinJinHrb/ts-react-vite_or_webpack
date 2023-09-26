export default {
    '0chqj6titjf': {
        type: {
            resolvedName: 'Module'
        },
        isCanvas: false,
        props: {
            field: {
                type: 'void',
                module: true,
                'x-component': 'ModuleCard',
                title: '特征信息'
            }
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_left: '9j86GWnU_Q',
            module_right: 'fSfzyoIGUs'
        }
    },
    '32wVskLBQ4': {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            }
        },
        displayName: 'div',
        custom: {},
        parent: '7pktwpbt1oe',
        hidden: false,
        nodes: ['VI9zBZw_v3', 'Y9AZsfG8dL', '5tOQ6JYvlQ', '72gq2ezr7w'],
        linkedNodes: {}
    },
    '5tOQ6JYvlQ': {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'contactFax',
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ],
                'x-component-props': {
                    size: 'large',
                    id: 'contactFax'
                },
                type: 'string',
                title: '传真',
                maxLength: 100
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'Input',
        custom: {},
        parent: '32wVskLBQ4',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    '72gq2ezr7w': {
        type: {
            resolvedName: 'TextArea'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'remark',
                'x-component-props': {
                    id: 'remark'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ],
                type: 'string',
                title: '联系人备注',
                maxLength: 512
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'TextArea',
        custom: {},
        parent: '32wVskLBQ4',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    '7pktwpbt1oe': {
        type: {
            resolvedName: 'Module'
        },
        isCanvas: false,
        props: {
            field: {
                type: 'void',
                module: true,
                'x-items-slot-path': 'properties.contactModels.items.properties.tgfnpbqvlgv',
                'x-component': 'ModuleCard',
                title: '联系人',
                properties: {
                    contactModels: {
                        type: 'array',
                        name: 'contactModels',
                        'x-component': 'ArrayItems',
                        'x-component-props': {
                            id: 'contactModels',
                            twoColumn: true
                        },
                        'x-validator': [],
                        'x-index': 0,
                        default: [{}],
                        maxLength: 15,
                        items: {
                            type: 'object',
                            'x-validator': [],
                            properties: {
                                tgfnpbqvlgu: {
                                    type: 'void',
                                    'x-component': 'Space',
                                    'x-component-props': {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            background: '#00000005',
                                            marginBottom: '20px',
                                            padding: '4px'
                                        }
                                    },
                                    properties: {
                                        tgfnpbqvlgl: {
                                            type: 'void',
                                            'x-component': 'ArrayItems.Remove',
                                            'x-index': 1
                                        },
                                        tgfnpbqvlgm: {
                                            type: 'void',
                                            'x-component': 'ArrayItems.Index',
                                            'x-component-props': {
                                                title: '联系人'
                                            },
                                            'x-index': 0
                                        }
                                    },
                                    'x-reactions': {
                                        dependencies: [
                                            {
                                                property: 'value',
                                                type: 'any',
                                                source: '7pktwpbt1oe.contactModels',
                                                name: 'contactModels'
                                            }
                                        ],
                                        fulfill: {
                                            schema: {
                                                'x-hidden':
                                                    '{{$deps.contactModels && $deps.contactModels.length <= 1 ? true : false }}'
                                            }
                                        }
                                    },
                                    'x-index': 0
                                },
                                tgfnpbqvlgv: {
                                    type: 'void',
                                    'x-index': 1
                                }
                            }
                        },
                        properties: {
                            cpscgs1n1yf: {
                                type: 'void',
                                title: '添加联系人',
                                'x-component': 'ArrayItems.Addition',
                                'x-index': 0,
                                'x-component-props': {}
                            }
                        }
                    }
                }
            },
            ArrayModule: true
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_left: 'RQPo4CrX7e',
            module_right: '32wVskLBQ4'
        }
    },
    '9I_03IdCP_': {
        type: {
            resolvedName: 'ArrayItems'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '叠加文本框',
                'x-component': 'ArrayItems',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                'x-component-props': {
                    id: 'contactPhone'
                },
                type: 'array',
                title: '电话',
                default: ['--'],
                'x-decorator': 'FormItem',
                name: 'contactPhone',
                items: {
                    'x-component': 'OverlayLayout',
                    'x-component-props': {},
                    type: 'void',
                    properties: {
                        input: {
                            default: '--',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left',
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
                            maxLength: 100
                        },
                        remove: {
                            'x-decorator': 'FormItem',
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left'
                            },
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
                maxLength: 15,
                properties: {
                    add: {
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
                        title: '添加电话'
                    }
                }
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'ArrayItems',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    '9j86GWnU_Q': {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            }
        },
        displayName: 'div',
        custom: {},
        parent: '0chqj6titjf',
        hidden: false,
        nodes: ['zWinyM7910', 'By-jOs5g-b'],
        linkedNodes: {}
    },
    'By-jOs5g-b': {
        type: {
            resolvedName: 'Select'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'customerType',
                'x-component-props': {
                    optionFilterProp: 'label',
                    showSearch: true,
                    id: 'customerType',
                    allowClear: true
                },
                'x-validator': [],
                type: 'string',
                title: '客户类型',
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
                ]
            },
            source: '0chqj6titjf'
        },
        displayName: 'Select',
        custom: {},
        parent: '9j86GWnU_Q',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    EDBEH5ffam: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                maxLength: 128
            },
            source: 'jg1ging5grt'
        },
        displayName: 'Input',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    GrBKDneOqP: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'Input',
                'x-list-fixed': true,
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                required: true,
                disableHide: true,
                'x-decorator': 'FormItem',
                name: 'customerName',
                maxLength: 80
            },
            source: 'jg1ging5grt'
        },
        displayName: 'Input',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    HWsrHAflDh: {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            }
        },
        displayName: 'div',
        custom: {},
        parent: 'jg1ging5grt',
        hidden: false,
        nodes: ['NwcfuwAmuM', 'YESWbtlnwQ', 'EDBEH5ffam', 'dGrWHEb9Yp', 'nCfTP0Aeyj'],
        linkedNodes: {}
    },
    'NrAOYrHpn-': {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                title: '固定电话'
            },
            source: 'jg1ging5grt'
        },
        displayName: 'Input',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    NwcfuwAmuM: {
        type: {
            resolvedName: 'CustomerNoInput'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'CustomerNoInput',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                disableHide: true,
                disableEdit: true,
                'x-decorator': 'FormItem',
                name: 'customerNo',
                maxLength: 32
            },
            source: 'jg1ging5grt'
        },
        displayName: 'CustomerNoInput',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    ROOT: {
        type: 'div',
        isCanvas: true,
        props: {
            className: 'frameWrap_39Gff'
        },
        displayName: 'div',
        custom: {},
        hidden: false,
        nodes: ['jg1ging5grt', '7pktwpbt1oe', '0chqj6titjf', 'hudxz1dtorr'],
        linkedNodes: {}
    },
    RQPo4CrX7e: {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            }
        },
        displayName: 'div',
        custom: {},
        parent: '7pktwpbt1oe',
        hidden: false,
        nodes: ['oSi3oJVpUB', 'fY8xDBOz-P', 'Uq9QMHz6AG', '9I_03IdCP_', 'de15cp2CeH'],
        linkedNodes: {}
    },
    TkMjwpTWjz: {
        type: {
            resolvedName: 'Select'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-list': true,
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                name: 'status'
            },
            source: '0chqj6titjf'
        },
        displayName: 'Select',
        custom: {},
        parent: 'fSfzyoIGUs',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    Uq9QMHz6AG: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'position',
                title: '职位',
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ],
                'x-component-props': {
                    size: 'large',
                    id: 'position'
                },
                type: 'string',
                maxLength: 100
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'Input',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    VI9zBZw_v3: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                required: true,
                disableHide: true,
                disableEdit: true,
                'x-decorator': 'FormItem',
                name: 'contactEmail',
                maxLength: 100
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'Input',
        custom: {},
        parent: '32wVskLBQ4',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    'W9MUhbm1-o': {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                maxLength: 80
            },
            source: 'jg1ging5grt'
        },
        displayName: 'Input',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    Y9AZsfG8dL: {
        type: {
            resolvedName: 'DatePicker'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '日期',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'birthday',
                'x-validator': [],
                'x-component-props': {
                    id: 'birthday'
                },
                type: 'string',
                title: '生日'
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'DatePicker',
        custom: {},
        parent: '32wVskLBQ4',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    YESWbtlnwQ: {
        type: {
            resolvedName: 'GeoSelect'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-component': 'GeoSelect',
                'x-filter': true,
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                'x-component-props': {
                    optionFilterProp: 'label',
                    showSearch: true,
                    id: 'customerGeoCode'
                },
                'x-validator': [],
                type: 'string',
                title: '国家/地区',
                required: true,
                disableHide: true,
                'x-decorator': 'FormItem',
                name: 'customerGeoCode'
            },
            source: 'jg1ging5grt'
        },
        displayName: 'GeoSelect',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    YZ73n2A8uV: {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            }
        },
        displayName: 'div',
        custom: {},
        parent: 'jg1ging5grt',
        hidden: false,
        nodes: ['GrBKDneOqP', 'W9MUhbm1-o', 'NrAOYrHpn-', 'ePirNCV5h4'],
        linkedNodes: {}
    },
    cFRGqeHkKy: {
        type: {
            resolvedName: 'Upload'
        },
        isCanvas: false,
        props: {
            field: {
                'x-decorator': 'FormItem',
                'x-component': 'Upload',
                'x-component-type': '上传文件',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                'x-component-props': {
                    buttonProps: {
                        block: true
                    },
                    data: {
                        attachmentType: 'TDCustomerAttachment',
                        usage: 'TDCustomerAttachment'
                    },
                    name: 'files',
                    multiple: true,
                    style: {
                        display: 'block'
                    },
                    textContent: '点击上传',
                    placeholder: '上传文件大小50M以内（限制10个附件)',
                    maxCount: 10
                },
                'x-validator': [],
                type: 'Array<object>',
                title: '上传附件',
                maxLength: 10,
                name: 'attachmentVOS'
            },
            source: 'hudxz1dtorr'
        },
        displayName: 'Upload',
        custom: {},
        parent: 'eAjONKvzlV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    dGrWHEb9Yp: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                maxLength: 128
            },
            source: 'jg1ging5grt'
        },
        displayName: 'Input',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    de15cp2CeH: {
        type: {
            resolvedName: 'ArrayItems'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '组合文本框',
                'x-component': 'ArrayItems',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                'x-component-props': {
                    id: 'socialMediaModels'
                },
                type: 'array',
                title: '社交账号',
                default: [{}],
                'x-decorator': 'FormItem',
                name: 'socialMediaModels',
                items: {
                    type: 'object',
                    properties: {
                        space: {
                            'x-component': 'OverlayLayout',
                            type: 'void',
                            properties: {
                                socialMediaType: {
                                    'x-component-type': '组合输入框',
                                    default: 'FACEBOOK',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Select',
                                    'x-decorator-props': {
                                        layout: 'vertical',
                                        labelAlign: 'left',
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
                                    'x-component-type': '单行文本框',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-decorator-props': {
                                        layout: 'vertical',
                                        labelAlign: 'left',
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
                                    'x-decorator': 'FormItem',
                                    'x-decorator-props': {
                                        layout: 'vertical',
                                        labelAlign: 'left'
                                    },
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
                        }
                    }
                },
                maxLength: 15,
                properties: {
                    add: {
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
                        title: '添加社交账号'
                    }
                }
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'ArrayItems',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    eAjONKvzlV: {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            }
        },
        displayName: 'div',
        custom: {},
        parent: 'hudxz1dtorr',
        hidden: false,
        nodes: ['cFRGqeHkKy'],
        linkedNodes: {}
    },
    ePirNCV5h4: {
        type: {
            resolvedName: 'TextArea'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                maxLength: 512
            },
            source: 'jg1ging5grt'
        },
        displayName: 'TextArea',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    fSfzyoIGUs: {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            }
        },
        displayName: 'div',
        custom: {},
        parent: '0chqj6titjf',
        hidden: false,
        nodes: ['TkMjwpTWjz', 'q_2HdwvIbR'],
        linkedNodes: {}
    },
    'fY8xDBOz-P': {
        type: {
            resolvedName: 'Select'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单选列表',
                disableEditEnum: true,
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'gender',
                'x-validator': [],
                'x-component-props': {
                    id: 'gender',
                    allowClear: true
                },
                type: 'boolean',
                title: '性别',
                enum: [
                    {
                        label: '男',
                        value: true
                    },
                    {
                        label: '女',
                        value: false
                    }
                ]
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'Select',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    hudxz1dtorr: {
        type: {
            resolvedName: 'Module'
        },
        isCanvas: false,
        props: {
            field: {
                type: 'void',
                module: true,
                'x-component': 'ModuleCard',
                title: '附件'
            }
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_left: 'eAjONKvzlV',
            module_right: 'vmcoGOi3Nh'
        }
    },
    jg1ging5grt: {
        type: {
            resolvedName: 'Module'
        },
        isCanvas: false,
        props: {
            field: {
                type: 'void',
                module: true,
                'x-component': 'ModuleCard',
                title: '基本信息'
            }
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_left: 'HWsrHAflDh',
            module_right: 'YZ73n2A8uV'
        }
    },
    nCfTP0Aeyj: {
        type: {
            resolvedName: 'TextArea'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                maxLength: 512
            },
            source: 'jg1ging5grt'
        },
        displayName: 'TextArea',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    oSi3oJVpUB: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'Input',
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                required: true,
                disableHide: true,
                'x-decorator': 'FormItem',
                name: 'contactName',
                maxLength: 100
            },
            source: '7pktwpbt1oe'
        },
        displayName: 'Input',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    q_2HdwvIbR: {
        type: {
            resolvedName: 'XtCustomSelect'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '多选列表',
                'x-list': true,
                'x-decorator': 'FormItem',
                'x-component': 'XtCustomSelect',
                'x-filter': true,
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
                },
                name: 'tags',
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ],
                'x-component-props': {
                    mode: 'CRM',
                    optionFilterProp: 'label',
                    size: 'large',
                    id: 'tags',
                    allowClear: true,
                    noConfirm: true
                },
                type: 'array',
                title: '标签'
            },
            source: '0chqj6titjf'
        },
        displayName: 'XtCustomSelect',
        custom: {},
        parent: 'fSfzyoIGUs',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    vmcoGOi3Nh: {
        type: 'div',
        isCanvas: true,
        props: {
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            }
        },
        displayName: 'div',
        custom: {},
        parent: 'hudxz1dtorr',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    zWinyM7910: {
        type: {
            resolvedName: 'Select'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-list': true,
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator-props': {
                    colon: false,
                    layout: 'vertical',
                    labelAlign: 'left'
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
                name: 'customerSource'
            },
            source: '0chqj6titjf'
        },
        displayName: 'Select',
        custom: {},
        parent: '9j86GWnU_Q',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    }
}
