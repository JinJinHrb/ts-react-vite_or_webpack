export default {
    de15cp2CeH: {
        type: {
            resolvedName: 'ArrayItems'
        },
        isCanvas: false,
        props: {
            tabsKey: 'new',
            field: {
                'x-component-type': '组合文本框',
                'x-component': 'ArrayItems',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
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
                fieldType: 'TD_CONTACT',
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
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'ArrayItems',
        custom: {},
        parent: 'RQPo4CrX7e',
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
    UuUc7N5Uhs: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'ArrayItems',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                customFieldId: '35990100879000023092000010402',
                'x-component-props': {
                    placeholder: '请输入',
                    id: 'UuUc7N5Uhs'
                },
                type: 'array',
                title: 'heuue',
                'x-index': 5,
                default: [''],
                'x-decorator': 'FormItem',
                name: 'UuUc7N5Uhs',
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
                                layout: 'vertical',
                                labelAlign: 'left',
                                style: {
                                    flexGrow: 1
                                }
                            },
                            'x-component-props': {
                                size: 'large',
                                id: 'input_single'
                            },
                            'x-validator': [],
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
            },
            tabsKey: 'new',
            remain: 34,
            source: 'component',
            isMember: true,
            type: 'TD_CONTACT'
        },
        displayName: 'vt',
        custom: {
            error: ''
        },
        parent: 'RQPo4CrX7e',
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 256
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Input',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    lLOsynWMPa: {
        type: {
            resolvedName: 'Input'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component-type': '单行文本框',
                'x-list': true,
                'x-component': 'ArrayItems',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                customFieldId: '35990100879000023092000010401',
                'x-component-props': {
                    placeholder: '请输入',
                    id: 'lLOsynWMPa'
                },
                type: 'array',
                title: 'shuaige',
                'x-index': 5,
                default: [''],
                'x-decorator': 'FormItem',
                name: 'lLOsynWMPa',
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
                                layout: 'vertical',
                                labelAlign: 'left',
                                style: {
                                    flexGrow: 1
                                }
                            },
                            'x-component-props': {
                                size: 'large',
                                id: 'input_single'
                            },
                            'x-validator': [],
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
            tabsKey: 'new',
            remain: 34,
            source: 'component',
            isMember: true,
            type: 'TD_CUSTOMER'
        },
        displayName: 'vt',
        custom: {
            error: ''
        },
        parent: 'HWsrHAflDh',
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
                'x-component': 'ModuleCard',
                module: true,
                id: 'hudxz1dtorr',
                type: 'void',
                title: '附件'
            }
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_right: 'vmcoGOi3Nh',
            module_left: 'eAjONKvzlV'
        }
    },
    q_2HdwvIbR: {
        type: {
            resolvedName: 'XtCustomSelect'
        },
        isCanvas: false,
        props: {
            tabsKey: 'new',
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
                title: '标签',
                fieldType: 'TD_CUSTOMER'
            },
            source: '0chqj6titjf',
            type: 'TD_CUSTOMER'
        },
        displayName: 'XtCustomSelect',
        custom: {},
        parent: 'fSfzyoIGUs',
        hidden: false,
        nodes: [],
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
                fieldType: 'TD_CUSTOMER',
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
            tabsKey: 'new',
            source: '0chqj6titjf',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Select',
        custom: {},
        parent: '9j86GWnU_Q',
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
                title: '传真',
                fieldType: 'TD_CUSTOMER'
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Input',
        custom: {},
        parent: 'HWsrHAflDh',
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
                fieldType: 'TD_CONTACT',
                maxLength: 100
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'Input',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    '9I_03IdCP_': {
        type: {
            resolvedName: 'ArrayItems'
        },
        isCanvas: false,
        props: {
            tabsKey: 'new',
            field: {
                'x-component-type': '叠加文本框',
                'x-component': 'ArrayItems',
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
                'x-component-props': {
                    id: 'contactPhone'
                },
                type: 'array',
                title: '电话',
                default: [''],
                'x-decorator': 'FormItem',
                name: 'contactPhone',
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
                fieldType: 'TD_CONTACT',
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
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'ArrayItems',
        custom: {},
        parent: 'RQPo4CrX7e',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    vmcoGOi3Nh: {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: 'hudxz1dtorr',
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 256
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Input',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
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
                fieldType: 'TD_CONTACT',
                maxLength: 100
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'Input',
        custom: {},
        parent: '32wVskLBQ4',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    eAjONKvzlV: {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: 'hudxz1dtorr',
        hidden: false,
        nodes: ['cFRGqeHkKy'],
        linkedNodes: {}
    },
    jg1ging5grt: {
        type: {
            resolvedName: 'Module'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component': 'ModuleCard',
                module: true,
                id: 'jg1ging5grt',
                type: 'void',
                title: '基本信息'
            }
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_right: 'YZ73n2A8uV',
            module_left: 'HWsrHAflDh'
        }
    },
    '0chqj6titjf': {
        type: {
            resolvedName: 'Module'
        },
        isCanvas: false,
        props: {
            field: {
                'x-component': 'ModuleCard',
                module: true,
                id: '0chqj6titjf',
                type: 'void',
                title: '特征信息'
            }
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_right: 'fSfzyoIGUs',
            module_left: '9j86GWnU_Q'
        }
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
                title: '生日',
                fieldType: 'TD_CONTACT'
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'DatePicker',
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
                'x-component': 'ModuleCard',
                module: true,
                id: '7pktwpbt1oe',
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
        },
        displayName: 'Module',
        custom: {},
        parent: 'ROOT',
        hidden: false,
        nodes: [],
        linkedNodes: {
            module_right: '32wVskLBQ4',
            module_left: 'RQPo4CrX7e'
        }
    },
    '9j86GWnU_Q': {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: '0chqj6titjf',
        hidden: false,
        nodes: ['zWinyM7910', 'By-jOs5g-b'],
        linkedNodes: {}
    },
    cFRGqeHkKy: {
        type: {
            resolvedName: 'Upload'
        },
        isCanvas: false,
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 10
            },
            tabsKey: 'new',
            source: 'hudxz1dtorr',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Upload',
        custom: {},
        parent: 'eAjONKvzlV',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    RQPo4CrX7e: {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: '7pktwpbt1oe',
        hidden: false,
        nodes: ['oSi3oJVpUB', 'fY8xDBOz-P', 'Uq9QMHz6AG', '9I_03IdCP_', 'de15cp2CeH', 'UuUc7N5Uhs'],
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 32
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'CustomerNoInput',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 512
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'TextArea',
        custom: {},
        parent: 'YZ73n2A8uV',
        hidden: false,
        nodes: [],
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
                    layout: 'vertical',
                    labelAlign: 'left',
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
            tabsKey: 'new',
            source: '0chqj6titjf',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Select',
        custom: {},
        parent: 'fSfzyoIGUs',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    HWsrHAflDh: {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleLeft',
                type: 'void'
            },
            name: 'ModuleLeft',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: 'jg1ging5grt',
        hidden: false,
        nodes: ['NwcfuwAmuM', 'YESWbtlnwQ', 'EDBEH5ffam', 'dGrWHEb9Yp', 'nCfTP0Aeyj', 'lLOsynWMPa'],
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
                    layout: 'vertical',
                    labelAlign: 'left',
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
                    }
                ],
                'x-component-props': {
                    size: 'large',
                    id: 'contactEmail'
                },
                type: 'string',
                title: '邮箱',
                required: true,
                'x-decorator': 'FormItem',
                name: 'contactEmail',
                fieldType: 'TD_CONTACT',
                maxLength: 100
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'Input',
        custom: {},
        parent: '32wVskLBQ4',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    '32wVskLBQ4': {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: '7pktwpbt1oe',
        hidden: false,
        nodes: ['VI9zBZw_v3', 'Y9AZsfG8dL', '5tOQ6JYvlQ', '72gq2ezr7w'],
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
                title: '固定电话',
                fieldType: 'TD_CUSTOMER'
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Input',
        custom: {},
        parent: 'YZ73n2A8uV',
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
                fieldType: 'TD_CONTACT',
                maxLength: 512
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'TextArea',
        custom: {},
        parent: '32wVskLBQ4',
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
                    layout: 'vertical',
                    labelAlign: 'left',
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
            },
            tabsKey: 'new',
            source: '0chqj6titjf',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Select',
        custom: {},
        parent: '9j86GWnU_Q',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    },
    fSfzyoIGUs: {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: '0chqj6titjf',
        hidden: false,
        nodes: ['TkMjwpTWjz', 'q_2HdwvIbR'],
        linkedNodes: {}
    },
    YZ73n2A8uV: {
        type: 'div',
        isCanvas: true,
        props: {
            field: {
                'x-component': 'ModuleRight',
                type: 'void'
            },
            name: 'ModuleRight',
            className: 'moduleItem_3AhEv'
        },
        displayName: 'div',
        custom: {},
        parent: 'jg1ging5grt',
        hidden: false,
        nodes: ['GrBKDneOqP', 'W9MUhbm1-o', 'NrAOYrHpn-', 'ePirNCV5h4'],
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
                'x-component': 'Select',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
                    colon: false
                },
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
                ],
                'x-decorator': 'FormItem',
                name: 'gender',
                fieldType: 'TD_CONTACT'
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'Select',
        custom: {},
        parent: 'RQPo4CrX7e',
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
            tabsKey: 'new',
            field: {
                'x-component-type': '单选列表',
                'x-component': 'GeoSelect',
                'x-filter': true,
                'x-decorator-props': {
                    layout: 'vertical',
                    labelAlign: 'left',
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
                required: true,
                disableHide: true,
                'x-decorator': 'FormItem',
                name: 'customerGeoCode',
                fieldType: 'TD_CUSTOMER'
            },
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'GeoSelect',
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
                fieldType: 'TD_CONTACT',
                maxLength: 100
            },
            tabsKey: 'new',
            source: '7pktwpbt1oe',
            type: 'TD_CONTACT'
        },
        displayName: 'Input',
        custom: {},
        parent: 'RQPo4CrX7e',
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 128
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'Input',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
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
                fieldType: 'TD_CUSTOMER',
                maxLength: 512
            },
            tabsKey: 'new',
            source: 'jg1ging5grt',
            type: 'TD_CUSTOMER'
        },
        displayName: 'TextArea',
        custom: {},
        parent: 'HWsrHAflDh',
        hidden: false,
        nodes: [],
        linkedNodes: {}
    }
}
