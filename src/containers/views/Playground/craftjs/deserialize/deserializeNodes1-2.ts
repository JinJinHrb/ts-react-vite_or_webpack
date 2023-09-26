export default {
    '0chqj6titjf': {
        custom: {},
        displayName: 'Module',
        hidden: false,
        isCanvas: false,
        linkedNodes: {
            module_left: '9j86GWnU_Q',
            module_right: 'fSfzyoIGUs'
        },
        nodes: [],
        parent: 'ROOT',
        props: {
            field: {
                module: true,
                title: '特征信息',
                type: 'void',
                'x-component': 'ModuleCard'
            }
        },
        type: {
            resolvedName: 'Module'
        }
    },
    '32wVskLBQ4': {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['VI9zBZw_v3', 'Y9AZsfG8dL', '5tOQ6JYvlQ', '72gq2ezr7w'],
        parent: '7pktwpbt1oe',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            },
            name: 'ModuleRight'
        },
        type: 'div'
    },
    '5tOQ6JYvlQ': {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: '32wVskLBQ4',
        props: {
            field: {
                maxLength: 100,
                name: 'contactFax',
                title: '传真',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'contactFax',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    '72gq2ezr7w': {
        custom: {},
        displayName: 'TextArea',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: '32wVskLBQ4',
        props: {
            field: {
                maxLength: 512,
                name: 'remark',
                title: '联系人备注',
                type: 'string',
                'x-component': 'Input.TextArea',
                'x-component-props': {
                    id: 'remark'
                },
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'TextArea'
        }
    },
    '7pktwpbt1oe': {
        custom: {},
        displayName: 'Module',
        hidden: false,
        isCanvas: false,
        linkedNodes: {
            module_left: 'RQPo4CrX7e',
            module_right: '32wVskLBQ4'
        },
        nodes: [],
        parent: 'ROOT',
        props: {
            ArrayModule: true,
            field: {
                module: true,
                properties: {
                    contactModels: {
                        default: [{}],
                        items: {
                            properties: {
                                tgfnpbqvlgu: {
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
                                    type: 'void',
                                    'x-component': 'Space',
                                    'x-component-props': {
                                        style: {
                                            background: '#00000005',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '20px',
                                            padding: '4px'
                                        }
                                    },
                                    'x-index': 0,
                                    'x-reactions': {
                                        dependencies: [
                                            {
                                                name: 'contactModels',
                                                property: 'value',
                                                source: '7pktwpbt1oe.contactModels',
                                                type: 'any'
                                            }
                                        ],
                                        fulfill: {
                                            schema: {
                                                'x-hidden':
                                                    '{{$deps.contactModels && $deps.contactModels.length <= 1 ? true : false }}'
                                            }
                                        }
                                    }
                                },
                                tgfnpbqvlgv: {
                                    type: 'void',
                                    'x-component': 'FormLayout',
                                    'x-component-props': {
                                        layout: 'two-columns'
                                    },
                                    'x-index': 1
                                }
                            },
                            type: 'object',
                            'x-decorator': 'InfiniteArrayItems.Item',
                            'x-validator': []
                        },
                        maxLength: 100,
                        name: 'contactModels',
                        properties: {
                            cpscgs1n1yf: {
                                title: '添加联系人',
                                type: 'void',
                                'x-component': 'ArrayItems.Addition',
                                'x-component-props': {},
                                'x-index': 0
                            }
                        },
                        type: 'array',
                        'x-component': 'InfiniteArrayItems',
                        'x-component-props': {
                            id: 'contactModels',
                            twoColumn: true
                        },
                        'x-index': 0,
                        'x-validator': []
                    }
                },
                title: '联系人',
                type: 'void',
                'x-component': 'ModuleCard',
                'x-items-slot-path': 'properties.contactModels.items.properties.tgfnpbqvlgv'
            }
        },
        type: {
            resolvedName: 'Module'
        }
    },
    '9I_03IdCP_': {
        custom: {},
        displayName: 'ArrayItems',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'RQPo4CrX7e',
        props: {
            field: {
                default: [''],
                items: {
                    properties: {
                        input: {
                            default: '',
                            maxLength: 100,
                            type: 'string',
                            'x-component': 'Input',
                            'x-component-props': {
                                id: 'input',
                                size: 'large'
                            },
                            'x-decorator': 'FormItem',
                            'x-decorator-props': {
                                labelAlign: 'left',
                                layout: 'vertical',
                                style: {
                                    flexGrow: 1
                                }
                            },
                            'x-validator': [
                                {
                                    disallowEmoticon: true
                                }
                            ]
                        },
                        remove: {
                            type: 'void',
                            'x-component': 'ArrayItems.Remove',
                            'x-component-props': {
                                atLeastOne: true,
                                style: {
                                    marginLeft: 10
                                }
                            },
                            'x-decorator': 'FormItem',
                            'x-decorator-props': {
                                labelAlign: 'left',
                                layout: 'vertical'
                            }
                        }
                    },
                    type: 'void',
                    'x-component': 'OverlayLayout',
                    'x-component-props': {}
                },
                maxLength: 15,
                name: 'contactPhone',
                properties: {
                    add: {
                        title: '添加电话',
                        type: 'void',
                        'x-component': 'ArrayItems.Addition',
                        'x-component-props': {
                            block: false,
                            noIcon: true,
                            style: {
                                padding: 0
                            },
                            type: 'link'
                        }
                    }
                },
                title: '电话',
                type: 'array',
                'x-component': 'ArrayItems',
                'x-component-props': {
                    id: 'contactPhone'
                },
                'x-component-type': '叠加文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                }
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'ArrayItems'
        }
    },
    '9j86GWnU_Q': {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['zWinyM7910', 'By-jOs5g-b'],
        parent: '0chqj6titjf',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            },
            name: 'ModuleLeft'
        },
        type: 'div'
    },
    'By-jOs5g-b': {
        custom: {},
        displayName: 'Select',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: '9j86GWnU_Q',
        props: {
            field: {
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
                name: 'customerType',
                title: '客户类型',
                type: 'string',
                'x-component': 'Select',
                'x-component-props': {
                    allowClear: true,
                    id: 'customerType',
                    optionFilterProp: 'label',
                    showSearch: true
                },
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-validator': []
            },
            source: '0chqj6titjf'
        },
        type: {
            resolvedName: 'Select'
        }
    },
    EDBEH5ffam: {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'HWsrHAflDh',
        props: {
            field: {
                maxLength: 128,
                name: 'webAddress',
                title: '客户网址',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'webAddress',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        format: 'url',
                        triggerType: 'onBlur'
                    },
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    GrBKDneOqP: {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'YZ73n2A8uV',
        props: {
            field: {
                disableHide: true,
                maxLength: 256,
                name: 'customerName',
                required: true,
                title: '客户名称',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'customerName',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-list': true,
                'x-list-fixed': true,
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    HWsrHAflDh: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['NwcfuwAmuM', 'YESWbtlnwQ', 'EDBEH5ffam', 'dGrWHEb9Yp', 'nCfTP0Aeyj'],
        parent: 'jg1ging5grt',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            },
            name: 'ModuleLeft'
        },
        type: 'div'
    },
    'NrAOYrHpn-': {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'YZ73n2A8uV',
        props: {
            field: {
                name: 'customerPhone',
                title: '固定电话',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'customerPhone',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    NwcfuwAmuM: {
        custom: {},
        displayName: 'CustomerNoInput',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'HWsrHAflDh',
        props: {
            field: {
                disableEdit: true,
                disableHide: true,
                maxLength: 32,
                name: 'customerNo',
                title: '客户编号',
                type: 'string',
                'x-component': 'CustomerNoInput',
                'x-component-props': {
                    id: 'customerNo'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-list': true,
                'x-validator': [
                    {
                        checkCustomerNoDuplicate: true,
                        triggerType: 'onBlur'
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'CustomerNoInput'
        }
    },
    ROOT: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['jg1ging5grt', '7pktwpbt1oe', '0chqj6titjf', 'hudxz1dtorr'],
        props: {
            className: 'frameWrap_39Gff'
        },
        type: 'div'
    },
    RQPo4CrX7e: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['oSi3oJVpUB', 'fY8xDBOz-P', 'Uq9QMHz6AG', '9I_03IdCP_', 'de15cp2CeH'],
        parent: '7pktwpbt1oe',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            },
            name: 'ModuleLeft'
        },
        type: 'div'
    },
    TkMjwpTWjz: {
        custom: {},
        displayName: 'Select',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'fSfzyoIGUs',
        props: {
            field: {
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
                name: 'status',
                title: '客户状态',
                type: 'string',
                'x-component': 'Select',
                'x-component-props': {
                    allowClear: true,
                    id: 'status',
                    optionFilterProp: 'label',
                    showSearch: true
                },
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-list': true,
                'x-validator': []
            },
            source: '0chqj6titjf'
        },
        type: {
            resolvedName: 'Select'
        }
    },
    Uq9QMHz6AG: {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'RQPo4CrX7e',
        props: {
            field: {
                maxLength: 100,
                name: 'position',
                title: '职位',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'position',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    VI9zBZw_v3: {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: '32wVskLBQ4',
        props: {
            field: {
                maxLength: 100,
                name: 'contactEmail',
                required: true,
                title: '邮箱',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'contactEmail',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-list': true,
                'x-validator': [
                    {
                        required: true,
                        triggerType: 'onBlur'
                    },
                    {
                        disallowEmoticon: true,
                        triggerType: 'onBlur'
                    },
                    {
                        checkDuplicate: true,
                        triggerType: 'onBlur'
                    }
                ]
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    'W9MUhbm1-o': {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'YZ73n2A8uV',
        props: {
            field: {
                maxLength: 256,
                name: 'customerAbbreviation',
                title: '客户简称',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'customerAbbreviation',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    Y9AZsfG8dL: {
        custom: {},
        displayName: 'DatePicker',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: '32wVskLBQ4',
        props: {
            field: {
                name: 'birthday',
                title: '生日',
                type: 'string',
                'x-component': 'DatePicker',
                'x-component-props': {
                    id: 'birthday'
                },
                'x-component-type': '日期',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-validator': []
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'DatePicker'
        }
    },
    YESWbtlnwQ: {
        custom: {},
        displayName: 'GeoSelect',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'HWsrHAflDh',
        props: {
            field: {
                disableHide: true,
                name: 'customerGeoCode',
                required: true,
                title: '国家/地区',
                type: 'string',
                'x-component': 'GeoSelect',
                'x-component-props': {
                    id: 'customerGeoCode',
                    optionFilterProp: 'label',
                    showSearch: true
                },
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-validator': []
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'GeoSelect'
        }
    },
    YZ73n2A8uV: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['GrBKDneOqP', 'W9MUhbm1-o', 'NrAOYrHpn-', 'ePirNCV5h4'],
        parent: 'jg1ging5grt',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            },
            name: 'ModuleRight'
        },
        type: 'div'
    },
    cFRGqeHkKy: {
        custom: {},
        displayName: 'Upload',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'eAjONKvzlV',
        props: {
            field: {
                maxLength: 10,
                name: 'attachmentVOS',
                title: '上传附件',
                type: 'Array<object>',
                'x-component': 'Upload',
                'x-component-props': {
                    buttonProps: {
                        block: true
                    },
                    data: {
                        attachmentType: 'TDCustomerAttachment',
                        usage: 'TDCustomerAttachment'
                    },
                    maxCount: 10,
                    maxSize: 51200,
                    multiple: true,
                    name: 'files',
                    placeholder: '上传文件大小50M以内（限制10个附件)',
                    serviceErrorMessage: '上传失败',
                    style: {
                        display: 'block'
                    },
                    textContent: '点击上传'
                },
                'x-component-type': '上传文件',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': []
            },
            source: 'hudxz1dtorr'
        },
        type: {
            resolvedName: 'Upload'
        }
    },
    dGrWHEb9Yp: {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'HWsrHAflDh',
        props: {
            field: {
                name: 'customerFax',
                title: '传真',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                    id: 'customerFax',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    de15cp2CeH: {
        custom: {},
        displayName: 'ArrayItems',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'RQPo4CrX7e',
        props: {
            field: {
                default: [{}],
                items: {
                    properties: {
                        space: {
                            properties: {
                                accountNumber: {
                                    maxLength: 100,
                                    name: 'accountNumber',
                                    type: 'string',
                                    'x-component': 'Input',
                                    'x-component-props': {
                                        id: 'accountNumber',
                                        size: 'large'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-decorator': 'FormItem',
                                    'x-decorator-props': {
                                        labelAlign: 'left',
                                        layout: 'vertical',
                                        style: {
                                            flexGrow: 1
                                        }
                                    },
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ]
                                },
                                remove: {
                                    type: 'void',
                                    'x-component': 'ArrayItems.Remove',
                                    'x-component-props': {
                                        atLeastOne: true,
                                        style: {
                                            marginLeft: 10
                                        }
                                    },
                                    'x-decorator': 'FormItem',
                                    'x-decorator-props': {
                                        labelAlign: 'left',
                                        layout: 'vertical'
                                    }
                                },
                                socialMediaType: {
                                    default: 'FACEBOOK',
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
                                    ],
                                    name: 'socialMediaType',
                                    type: 'string',
                                    'x-component': 'Select',
                                    'x-component-props': {
                                        id: 'socialMediaType',
                                        optionFilterProp: 'label',
                                        showSearch: true
                                    },
                                    'x-component-type': '组合输入框',
                                    'x-decorator': 'FormItem',
                                    'x-decorator-props': {
                                        labelAlign: 'left',
                                        layout: 'vertical',
                                        style: {
                                            flexShrink: 0,
                                            marginRight: 8,
                                            minWidth: 124,
                                            width: 124
                                        }
                                    }
                                }
                            },
                            type: 'void',
                            'x-component': 'OverlayLayout'
                        }
                    },
                    type: 'object'
                },
                maxLength: 15,
                name: 'socialMediaModels',
                properties: {
                    add: {
                        title: '添加社交账号',
                        type: 'void',
                        'x-component': 'ArrayItems.Addition',
                        'x-component-props': {
                            block: false,
                            noIcon: true,
                            style: {
                                padding: 0
                            },
                            type: 'link'
                        }
                    }
                },
                title: '社交账号',
                type: 'array',
                'x-component': 'ArrayItems',
                'x-component-props': {
                    id: 'socialMediaModels'
                },
                'x-component-type': '组合文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                }
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'ArrayItems'
        }
    },
    eAjONKvzlV: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['cFRGqeHkKy'],
        parent: 'hudxz1dtorr',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleLeft'
            },
            name: 'ModuleLeft'
        },
        type: 'div'
    },
    ePirNCV5h4: {
        custom: {},
        displayName: 'TextArea',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'YZ73n2A8uV',
        props: {
            field: {
                maxLength: 512,
                name: 'customizeAddress',
                title: '联系地址',
                type: 'string',
                'x-component': 'Input.TextArea',
                'x-component-props': {
                    id: 'customizeAddress'
                },
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'TextArea'
        }
    },
    fSfzyoIGUs: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: ['TkMjwpTWjz', 'q_2HdwvIbR'],
        parent: '0chqj6titjf',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            },
            name: 'ModuleRight'
        },
        type: 'div'
    },
    'fY8xDBOz-P': {
        custom: {},
        displayName: 'Select',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'RQPo4CrX7e',
        props: {
            field: {
                disableEditEnum: true,
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
                name: 'gender',
                title: '性别',
                type: 'boolean',
                'x-component': 'Select',
                'x-component-props': {
                    allowClear: true,
                    id: 'gender'
                },
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-validator': []
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'Select'
        }
    },
    hudxz1dtorr: {
        custom: {},
        displayName: 'Module',
        hidden: false,
        isCanvas: false,
        linkedNodes: {
            module_left: 'eAjONKvzlV',
            module_right: 'vmcoGOi3Nh'
        },
        nodes: [],
        parent: 'ROOT',
        props: {
            field: {
                module: true,
                title: '附件',
                type: 'void',
                'x-component': 'ModuleCard'
            }
        },
        type: {
            resolvedName: 'Module'
        }
    },
    jg1ging5grt: {
        custom: {},
        displayName: 'Module',
        hidden: false,
        isCanvas: false,
        linkedNodes: {
            module_left: 'HWsrHAflDh',
            module_right: 'YZ73n2A8uV'
        },
        nodes: [],
        parent: 'ROOT',
        props: {
            field: {
                module: true,
                title: '基本信息',
                type: 'void',
                'x-component': 'ModuleCard'
            }
        },
        type: {
            resolvedName: 'Module'
        }
    },
    nCfTP0Aeyj: {
        custom: {},
        displayName: 'TextArea',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'HWsrHAflDh',
        props: {
            field: {
                maxLength: 512,
                name: 'memo',
                title: '备注',
                type: 'string',
                'x-component': 'Input.TextArea',
                'x-component-props': {
                    id: 'memo'
                },
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ]
            },
            source: 'jg1ging5grt'
        },
        type: {
            resolvedName: 'TextArea'
        }
    },
    oSi3oJVpUB: {
        custom: {},
        displayName: 'Input',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'RQPo4CrX7e',
        props: {
            field: {
                disableHide: true,
                maxLength: 100,
                name: 'contactName',
                required: true,
                title: '姓名',
                type: 'string',
                'x-component': 'CRMName',
                'x-component-props': {
                    firstId: 'firstContactName',
                    lastId: 'lastContactName',
                    maxLength: 50,
                    placeholder: '请输入',
                    size: 'large'
                },
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-list': true,
                'x-validator': [
                    {
                        checkCRMName: true,
                        triggerType: 'onBlur'
                    }
                ]
            },
            source: '7pktwpbt1oe'
        },
        type: {
            resolvedName: 'Input'
        }
    },
    q_2HdwvIbR: {
        custom: {},
        displayName: 'XtCustomSelect',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: 'fSfzyoIGUs',
        props: {
            field: {
                name: 'tags',
                title: '标签',
                type: 'array',
                'x-component': 'XtCustomSelect',
                'x-component-props': {
                    allowClear: true,
                    id: 'tags',
                    mode: 'CRM',
                    noConfirm: true,
                    optionFilterProp: 'label',
                    size: 'large'
                },
                'x-component-type': '多选列表',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-list': true,
                'x-validator': []
            },
            source: '0chqj6titjf'
        },
        type: {
            resolvedName: 'XtCustomSelect'
        }
    },
    vmcoGOi3Nh: {
        custom: {},
        displayName: 'div',
        hidden: false,
        isCanvas: true,
        linkedNodes: {},
        nodes: [],
        parent: 'hudxz1dtorr',
        props: {
            className: 'moduleItem_3AhEv',
            field: {
                type: 'void',
                'x-component': 'ModuleRight'
            },
            name: 'ModuleRight'
        },
        type: 'div'
    },
    zWinyM7910: {
        custom: {},
        displayName: 'Select',
        hidden: false,
        isCanvas: false,
        linkedNodes: {},
        nodes: [],
        parent: '9j86GWnU_Q',
        props: {
            field: {
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
                name: 'customerSource',
                title: '客户来源',
                type: 'string',
                'x-component': 'Select',
                'x-component-props': {
                    allowClear: true,
                    id: 'customerSource',
                    optionFilterProp: 'label',
                    showSearch: true
                },
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    colon: false,
                    labelAlign: 'left',
                    layout: 'vertical'
                },
                'x-filter': true,
                'x-list': true,
                'x-validator': []
            },
            source: '0chqj6titjf'
        },
        type: {
            resolvedName: 'Select'
        }
    }
}
