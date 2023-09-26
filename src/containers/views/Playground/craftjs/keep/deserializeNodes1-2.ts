export default {
    '0chqj6titjf': {
        parent: 'ROOT',
        linkedNodes: {
            module_right: 'fSfzyoIGUs',
            module_left: '9j86GWnU_Q'
        },
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Module',
        custom: {},
        type: {
            resolvedName: 'Module'
        },
        props: {
            field: {
                'x-component': 'ModuleCard',
                module: true,
                type: 'void',
                title: '特征信息'
            }
        }
    },
    '32wVskLBQ4': {
        parent: '7pktwpbt1oe',
        linkedNodes: {},
        nodes: ['VI9zBZw_v3', 'Y9AZsfG8dL', '5tOQ6JYvlQ', '72gq2ezr7w'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        }
    },
    '5tOQ6JYvlQ': {
        parent: '32wVskLBQ4',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
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
        }
    },
    '72gq2ezr7w': {
        parent: '32wVskLBQ4',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'TextArea',
        custom: {},
        type: {
            resolvedName: 'TextArea'
        },
        props: {
            field: {
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
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
        }
    },
    '7pktwpbt1oe': {
        parent: 'ROOT',
        linkedNodes: {
            module_right: '32wVskLBQ4',
            module_left: 'RQPo4CrX7e'
        },
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Module',
        custom: {},
        type: {
            resolvedName: 'Module'
        },
        props: {
            field: {
                'x-component': 'ModuleCard',
                module: true,
                type: 'void',
                title: '联系人',
                properties: {
                    contactModels: {
                        default: [{}],
                        'x-component': 'InfiniteArrayItems',
                        name: 'contactModels',
                        'x-component-props': {
                            twoColumn: true,
                            id: 'contactModels'
                        },
                        'x-validator': [],
                        type: 'array',
                        'x-index': 0,
                        items: {
                            'x-decorator': 'InfiniteArrayItems.Item',
                            'x-validator': [],
                            type: 'object',
                            properties: {
                                tgfnpbqvlgv: {
                                    'x-component': 'FormLayout',
                                    'x-component-props': {
                                        layout: 'two-columns'
                                    },
                                    type: 'void',
                                    'x-index': 1
                                },
                                tgfnpbqvlgu: {
                                    'x-component': 'Space',
                                    'x-reactions': {
                                        fulfill: {
                                            schema: {
                                                'x-hidden':
                                                    '{{$deps.contactModels && $deps.contactModels.length <= 1 ? true : false }}'
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
                        maxLength: 100,
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
            },
            ArrayModule: true
        }
    },
    '9I_03IdCP_': {
        parent: 'RQPo4CrX7e',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'ArrayItems',
        custom: {},
        type: {
            resolvedName: 'ArrayItems'
        },
        props: {
            field: {
                'x-component-type': '叠加文本框',
                default: [''],
                'x-component': 'ArrayItems',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'contactPhone',
                'x-component-props': {
                    id: 'contactPhone'
                },
                type: 'array',
                title: '电话',
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
                            'x-component': 'ArrayItems.Remove',
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left'
                            },
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
        }
    },
    '9j86GWnU_Q': {
        parent: '0chqj6titjf',
        linkedNodes: {},
        nodes: ['zWinyM7910', 'By-jOs5g-b'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        }
    },
    'By-jOs5g-b': {
        parent: '9j86GWnU_Q',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Select',
        custom: {},
        type: {
            resolvedName: 'Select'
        },
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
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
        }
    },
    EDBEH5ffam: {
        parent: 'HWsrHAflDh',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'webAddress',
                'x-component-props': {
                    size: 'large',
                    id: 'webAddress'
                },
                'x-validator': [
                    {
                        format: 'url',
                        triggerType: 'onBlur'
                    },
                    {
                        disallowEmoticon: true
                    }
                ],
                type: 'string',
                title: '客户网址',
                maxLength: 128
            },
            source: 'jg1ging5grt'
        }
    },
    GrBKDneOqP: {
        parent: 'YZ73n2A8uV',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'Input',
                'x-list-fixed': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                required: true,
                disableHide: true,
                'x-decorator': 'FormItem',
                name: 'customerName',
                maxLength: 256
            },
            source: 'jg1ging5grt'
        }
    },
    HWsrHAflDh: {
        parent: 'jg1ging5grt',
        linkedNodes: {},
        nodes: ['NwcfuwAmuM', 'YESWbtlnwQ', 'EDBEH5ffam', 'dGrWHEb9Yp', 'nCfTP0Aeyj'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        }
    },
    'NrAOYrHpn-': {
        parent: 'YZ73n2A8uV',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                title: '固定电话'
            },
            source: 'jg1ging5grt'
        }
    },
    NwcfuwAmuM: {
        parent: 'HWsrHAflDh',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'CustomerNoInput',
        custom: {},
        type: {
            resolvedName: 'CustomerNoInput'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'CustomerNoInput',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                disableHide: true,
                disableEdit: true,
                'x-decorator': 'FormItem',
                name: 'customerNo',
                maxLength: 32
            },
            source: 'jg1ging5grt'
        }
    },
    ROOT: {
        linkedNodes: {},
        nodes: ['jg1ging5grt', '7pktwpbt1oe', '0chqj6titjf', 'hudxz1dtorr'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            className: 'frameWrap_39Gff'
        }
    },
    RQPo4CrX7e: {
        parent: '7pktwpbt1oe',
        linkedNodes: {},
        nodes: ['oSi3oJVpUB', 'fY8xDBOz-P', 'Uq9QMHz6AG', '9I_03IdCP_', 'de15cp2CeH'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        }
    },
    TkMjwpTWjz: {
        parent: 'fSfzyoIGUs',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Select',
        custom: {},
        type: {
            resolvedName: 'Select'
        },
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-list': true,
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'status',
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
                ]
            },
            source: '0chqj6titjf'
        }
    },
    Uq9QMHz6AG: {
        parent: 'RQPo4CrX7e',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'position',
                'x-validator': [
                    {
                        disallowEmoticon: true
                    }
                ],
                'x-component-props': {
                    size: 'large',
                    id: 'position'
                },
                title: '职位',
                type: 'string',
                maxLength: 100
            },
            source: '7pktwpbt1oe'
        }
    },
    VI9zBZw_v3: {
        parent: '32wVskLBQ4',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'Input',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'contactEmail',
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
                    }
                ],
                'x-component-props': {
                    size: 'large',
                    id: 'contactEmail'
                },
                type: 'string',
                title: '邮箱',
                required: true,
                maxLength: 100
            },
            source: '7pktwpbt1oe'
        }
    },
    'W9MUhbm1-o': {
        parent: 'YZ73n2A8uV',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                maxLength: 256
            },
            source: 'jg1ging5grt'
        }
    },
    Y9AZsfG8dL: {
        parent: '32wVskLBQ4',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'DatePicker',
        custom: {},
        type: {
            resolvedName: 'DatePicker'
        },
        props: {
            field: {
                'x-component-type': '日期',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
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
        }
    },
    YESWbtlnwQ: {
        parent: 'HWsrHAflDh',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'GeoSelect',
        custom: {},
        type: {
            resolvedName: 'GeoSelect'
        },
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-component': 'GeoSelect',
                'x-filter': true,
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'customerGeoCode',
                'x-component-props': {
                    optionFilterProp: 'label',
                    showSearch: true,
                    id: 'customerGeoCode'
                },
                'x-validator': [],
                type: 'string',
                title: '国家/地区',
                required: true,
                disableHide: true
            },
            source: 'jg1ging5grt'
        }
    },
    YZ73n2A8uV: {
        parent: 'jg1ging5grt',
        linkedNodes: {},
        nodes: ['GrBKDneOqP', 'W9MUhbm1-o', 'NrAOYrHpn-', 'ePirNCV5h4'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        }
    },
    cFRGqeHkKy: {
        parent: 'eAjONKvzlV',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Upload',
        custom: {},
        type: {
            resolvedName: 'Upload'
        },
        props: {
            field: {
                'x-component-type': '上传文件',
                'x-decorator': 'FormItem',
                'x-component': 'Upload',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'attachmentVOS',
                'x-component-props': {
                    buttonProps: {
                        block: true
                    },
                    data: {
                        attachmentType: 'TDCustomerAttachment',
                        usage: 'TDCustomerAttachment'
                    },
                    serviceErrorMessage: '上传失败',
                    name: 'files',
                    multiple: true,
                    style: {
                        display: 'block'
                    },
                    textContent: '点击上传',
                    maxSize: 51200,
                    placeholder: '上传文件大小50M以内（限制10个附件)',
                    maxCount: 10
                },
                'x-validator': [],
                type: 'Array<object>',
                title: '上传附件',
                maxLength: 10
            },
            source: 'hudxz1dtorr'
        }
    },
    dGrWHEb9Yp: {
        parent: 'HWsrHAflDh',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                title: '传真'
            },
            source: 'jg1ging5grt'
        }
    },
    de15cp2CeH: {
        parent: 'RQPo4CrX7e',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'ArrayItems',
        custom: {},
        type: {
            resolvedName: 'ArrayItems'
        },
        props: {
            field: {
                'x-component-type': '组合文本框',
                default: [{}],
                'x-component': 'ArrayItems',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'socialMediaModels',
                'x-component-props': {
                    id: 'socialMediaModels'
                },
                type: 'array',
                title: '社交账号',
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
                                    'x-component': 'ArrayItems.Remove',
                                    'x-decorator-props': {
                                        layout: 'vertical',
                                        labelAlign: 'left'
                                    },
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
        }
    },
    eAjONKvzlV: {
        parent: 'hudxz1dtorr',
        linkedNodes: {},
        nodes: ['cFRGqeHkKy'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        }
    },
    ePirNCV5h4: {
        parent: 'YZ73n2A8uV',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'TextArea',
        custom: {},
        type: {
            resolvedName: 'TextArea'
        },
        props: {
            field: {
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                maxLength: 512
            },
            source: 'jg1ging5grt'
        }
    },
    fSfzyoIGUs: {
        parent: '0chqj6titjf',
        linkedNodes: {},
        nodes: ['TkMjwpTWjz', 'q_2HdwvIbR'],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        }
    },
    'fY8xDBOz-P': {
        parent: 'RQPo4CrX7e',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Select',
        custom: {},
        type: {
            resolvedName: 'Select'
        },
        props: {
            field: {
                'x-component-type': '单选列表',
                disableEditEnum: true,
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
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
        }
    },
    hudxz1dtorr: {
        parent: 'ROOT',
        linkedNodes: {
            module_right: 'vmcoGOi3Nh',
            module_left: 'eAjONKvzlV'
        },
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Module',
        custom: {},
        type: {
            resolvedName: 'Module'
        },
        props: {
            field: {
                'x-component': 'ModuleCard',
                module: true,
                type: 'void',
                title: '附件'
            }
        }
    },
    jg1ging5grt: {
        parent: 'ROOT',
        linkedNodes: {
            module_right: 'YZ73n2A8uV',
            module_left: 'HWsrHAflDh'
        },
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Module',
        custom: {},
        type: {
            resolvedName: 'Module'
        },
        props: {
            field: {
                'x-component': 'ModuleCard',
                module: true,
                type: 'void',
                title: '基本信息'
            }
        }
    },
    nCfTP0Aeyj: {
        parent: 'HWsrHAflDh',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'TextArea',
        custom: {},
        type: {
            resolvedName: 'TextArea'
        },
        props: {
            field: {
                'x-component-type': '多行文本框',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                maxLength: 512
            },
            source: 'jg1ging5grt'
        }
    },
    oSi3oJVpUB: {
        parent: 'RQPo4CrX7e',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Input',
        custom: {},
        type: {
            resolvedName: 'Input'
        },
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'CRMName',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                'x-component-props': {
                    size: 'large',
                    lastId: 'lastContactName',
                    placeholder: '请输入',
                    maxLength: 50,
                    firstId: 'firstContactName'
                },
                'x-validator': [
                    {
                        checkCRMName: true,
                        triggerType: 'onBlur'
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
        }
    },
    q_2HdwvIbR: {
        parent: 'fSfzyoIGUs',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'XtCustomSelect',
        custom: {},
        type: {
            resolvedName: 'XtCustomSelect'
        },
        props: {
            field: {
                'x-component-type': '多选列表',
                'x-list': true,
                'x-decorator': 'FormItem',
                'x-component': 'XtCustomSelect',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'tags',
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
                title: '标签'
            },
            source: '0chqj6titjf'
        }
    },
    vmcoGOi3Nh: {
        parent: 'hudxz1dtorr',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: true,
        displayName: 'div',
        custom: {},
        type: 'div',
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        }
    },
    zWinyM7910: {
        parent: '9j86GWnU_Q',
        linkedNodes: {},
        nodes: [],
        hidden: false,
        isCanvas: false,
        displayName: 'Select',
        custom: {},
        type: {
            resolvedName: 'Select'
        },
        props: {
            field: {
                'x-component-type': '单选列表',
                'x-list': true,
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                name: 'customerSource',
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
                ]
            },
            source: '0chqj6titjf'
        }
    }
}
