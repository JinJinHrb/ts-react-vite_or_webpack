export default {
    status: 'success',
    isLoading: false,
    isSuccess: true,
    isError: false,
    isIdle: false,
    data: {
        template: {
            type: 'object',
            properties: {
                jg1ging5grt: {
                    type: 'void',
                    module: true,
                    'x-component': 'ModuleCard',
                    title: '基本信息',
                    'x-index': 0,
                    properties: {
                        '2afogl82dcf': {
                            type: 'void',
                            'x-component': 'FormLayout',
                            'x-component-props': {
                                layout: 'two-columns'
                            },
                            'x-index': 0,
                            properties: {
                                customerNo: {
                                    type: 'string',
                                    name: 'customerNo',
                                    title: '客户编号',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'CustomerNoInput',
                                    'x-component-props': {
                                        id: 'customerNo'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-validator': [
                                        {
                                            checkCustomerNoDuplicate: true,
                                            triggerType: 'onBlur'
                                        }
                                    ],
                                    maxLength: 32,
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 0,
                                    disableHide: true,
                                    disableEdit: true,
                                    'x-list': true
                                },
                                customerName: {
                                    type: 'string',
                                    name: 'customerName',
                                    title: '客户名称',
                                    maxLength: 80,
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-component-props': {
                                        id: 'customerName',
                                        size: 'large'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 1,
                                    required: true,
                                    disableHide: true,
                                    'x-list': true,
                                    'x-list-fixed': true
                                },
                                customerGeoCode: {
                                    type: 'string',
                                    name: 'customerGeoCode',
                                    title: '国家/地区',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'GeoSelect',
                                    'x-component-props': {
                                        showSearch: true,
                                        id: 'customerGeoCode',
                                        optionFilterProp: 'label'
                                    },
                                    'x-component-type': '单选列表',
                                    'x-validator': [],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 2,
                                    required: true,
                                    'x-filter': true,
                                    disableHide: true
                                },
                                customerAbbreviation: {
                                    type: 'string',
                                    name: 'customerAbbreviation',
                                    title: '客户简称',
                                    maxLength: 80,
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-component-props': {
                                        id: 'customerAbbreviation',
                                        size: 'large'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 3
                                },
                                webAddress: {
                                    type: 'string',
                                    name: 'webAddress',
                                    title: '客户网址',
                                    maxLength: 128,
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-component-props': {
                                        id: 'webAddress',
                                        size: 'large'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-validator': [
                                        'url',
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 4
                                },
                                customerPhone: {
                                    type: 'string',
                                    name: 'customerPhone',
                                    title: '固定电话',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-component-props': {
                                        id: 'customerPhone',
                                        size: 'large'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 5
                                },
                                customerFax: {
                                    type: 'string',
                                    name: 'customerFax',
                                    title: '传真',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-component-props': {
                                        id: 'customerFax',
                                        size: 'large'
                                    },
                                    'x-component-type': '单行文本框',
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 6
                                },
                                customizeAddress: {
                                    type: 'string',
                                    name: 'customizeAddress',
                                    title: '联系地址',
                                    maxLength: 512,
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input.TextArea',
                                    'x-component-props': {
                                        id: 'customizeAddress'
                                    },
                                    'x-component-type': '多行文本框',
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 7
                                },
                                memo: {
                                    type: 'string',
                                    name: 'memo',
                                    title: '备注',
                                    maxLength: 512,
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input.TextArea',
                                    'x-component-props': {
                                        id: 'memo'
                                    },
                                    'x-component-type': '多行文本框',
                                    'x-validator': [
                                        {
                                            disallowEmoticon: true
                                        }
                                    ],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 8
                                }
                            }
                        }
                    }
                },
                '7pktwpbt1oe': {
                    type: 'void',
                    module: true,
                    'x-component': 'ModuleCard',
                    title: '联系人',
                    'x-index': 1,
                    properties: {
                        contactModels: {
                            type: 'array',
                            name: 'contactModels',
                            'x-component': 'ArrayItems',
                            'x-component-props': {
                                id: 'contactModels'
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
                                                    'x-hidden': '{{$deps.contactModels.length <= 1 ? true : false }}'
                                                }
                                            }
                                        },
                                        'x-index': 0
                                    },
                                    tgfnpbqvlgv: {
                                        type: 'void',
                                        'x-component': 'FormLayout',
                                        'x-component-props': {
                                            layout: 'two-columns'
                                        },
                                        properties: {
                                            contactName: {
                                                type: 'string',
                                                name: 'contactName',
                                                title: '姓名',
                                                maxLength: 100,
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-component': 'Input',
                                                'x-component-props': {
                                                    id: 'contactName',
                                                    size: 'large'
                                                },
                                                'x-component-type': '单行文本框',
                                                'x-validator': [
                                                    {
                                                        disallowEmoticon: true
                                                    }
                                                ],
                                                'x-index': 3,
                                                required: true,
                                                'x-list': true,
                                                disableHide: true
                                            },
                                            contactEmail: {
                                                type: 'string',
                                                name: 'contactEmail',
                                                title: '邮箱',
                                                maxLength: 100,
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-component': 'Input',
                                                'x-component-type': '单行文本框',
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
                                                    },
                                                    {
                                                        asyncCheckEmailDuplicate: true,
                                                        triggerType: 'onBlur'
                                                    }
                                                ],
                                                'x-component-props': {
                                                    id: 'contactEmail',
                                                    size: 'large'
                                                },
                                                'x-index': 4,
                                                required: true,
                                                'x-list': true,
                                                disableEdit: true,
                                                disableHide: true
                                            },
                                            gender: {
                                                type: 'boolean',
                                                title: '性别',
                                                name: 'gender',
                                                disableEditEnum: true,
                                                enum: [
                                                    {
                                                        value: true,
                                                        label: '男'
                                                    },
                                                    {
                                                        value: false,
                                                        label: '女'
                                                    }
                                                ],
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-component': 'Select',
                                                'x-component-type': '单选列表',
                                                'x-validator': [],
                                                'x-component-props': {
                                                    showSearch: true,
                                                    allowClear: true,
                                                    id: 'gender'
                                                },
                                                'x-index': 5
                                            },
                                            birthday: {
                                                type: 'string',
                                                name: 'birthday',
                                                title: '生日',
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-component': 'DatePicker',
                                                'x-component-type': '日期',
                                                'x-validator': [],
                                                'x-component-props': {
                                                    id: 'birthday'
                                                },
                                                'x-index': 6
                                            },
                                            position: {
                                                type: 'string',
                                                name: 'position',
                                                title: '职位',
                                                maxLength: 100,
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-component': 'Input',
                                                'x-component-type': '单行文本框',
                                                'x-validator': [
                                                    {
                                                        disallowEmoticon: true
                                                    }
                                                ],
                                                'x-component-props': {
                                                    id: 'position',
                                                    size: 'large'
                                                },
                                                'x-index': 7
                                            },
                                            contactFax: {
                                                type: 'string',
                                                name: 'contactFax',
                                                title: '传真',
                                                maxLength: 100,
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-component': 'Input',
                                                'x-component-type': '单行文本框',
                                                'x-validator': [
                                                    {
                                                        disallowEmoticon: true
                                                    }
                                                ],
                                                'x-component-props': {
                                                    id: 'contactFax',
                                                    size: 'large'
                                                },
                                                'x-index': 8
                                            },
                                            contactPhone: {
                                                type: 'array',
                                                name: 'contactPhone',
                                                'x-component': 'ArrayItems',
                                                'x-component-type': '叠加文本框',
                                                'x-component-props': {
                                                    id: 'contactPhone'
                                                },
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                title: '电话',
                                                maxLength: 15,
                                                default: [''],
                                                items: {
                                                    type: 'void',
                                                    'x-component': 'OverlayLayout',
                                                    'x-component-props': {},
                                                    properties: {
                                                        input: {
                                                            type: 'string',
                                                            maxLength: 100,
                                                            'x-decorator': 'FormItem',
                                                            'x-decorator-props': {
                                                                style: {
                                                                    flexGrow: 1
                                                                }
                                                            },
                                                            'x-component': 'Input',
                                                            'x-component-props': {
                                                                id: 'input',
                                                                size: 'large'
                                                            },
                                                            'x-validator': [
                                                                {
                                                                    disallowEmoticon: true
                                                                }
                                                            ]
                                                        },
                                                        remove: {
                                                            type: 'void',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'ArrayItems.Remove',
                                                            'x-component-props': {
                                                                atLeastOne: true,
                                                                style: {
                                                                    marginLeft: 10
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                properties: {
                                                    add: {
                                                        type: 'void',
                                                        title: '添加电话',
                                                        'x-component': 'ArrayItems.Addition',
                                                        'x-component-props': {
                                                            noIcon: true,
                                                            block: false,
                                                            type: 'link',
                                                            style: {
                                                                padding: 0
                                                            }
                                                        }
                                                    }
                                                },
                                                'x-index': 9
                                            },
                                            socialMediaModels: {
                                                type: 'array',
                                                name: 'socialMediaModels',
                                                maxLength: 15,
                                                'x-component': 'ArrayItems',
                                                'x-component-props': {
                                                    id: 'socialMediaModels'
                                                },
                                                'x-component-type': '组合文本框',
                                                'x-decorator': 'FormItem',
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                title: '社交账号',
                                                default: [{}],
                                                items: {
                                                    type: 'object',
                                                    properties: {
                                                        space: {
                                                            type: 'void',
                                                            'x-component': 'OverlayLayout',
                                                            properties: {
                                                                socialMediaType: {
                                                                    type: 'string',
                                                                    name: 'socialMediaType',
                                                                    enum: [
                                                                        {
                                                                            value: 'FACEBOOK',
                                                                            label: 'FaceBook'
                                                                        },
                                                                        {
                                                                            value: 'TWITTER',
                                                                            label: 'Twitter'
                                                                        },
                                                                        {
                                                                            value: 'QQ',
                                                                            label: 'QQ'
                                                                        },
                                                                        {
                                                                            value: 'WECHAT',
                                                                            label: 'Wechat'
                                                                        },
                                                                        {
                                                                            value: 'LINKEDIN',
                                                                            label: 'Linkedin'
                                                                        },
                                                                        {
                                                                            value: 'SKYPE',
                                                                            label: 'Skype'
                                                                        },
                                                                        {
                                                                            value: 'WHATSAPP',
                                                                            label: 'WhatsApp'
                                                                        }
                                                                    ],
                                                                    default: 'FACEBOOK',
                                                                    'x-decorator': 'FormItem',
                                                                    'x-decorator-props': {
                                                                        style: {
                                                                            minWidth: 124,
                                                                            width: 124,
                                                                            marginRight: 8,
                                                                            flexShrink: 0
                                                                        }
                                                                    },
                                                                    'x-component': 'Select',
                                                                    'x-component-type': '组合输入框',
                                                                    'x-component-props': {
                                                                        showSearch: true,
                                                                        id: 'socialMediaType',
                                                                        optionFilterProp: 'label'
                                                                    }
                                                                },
                                                                accountNumber: {
                                                                    type: 'string',
                                                                    name: 'accountNumber',
                                                                    maxLength: 100,
                                                                    'x-decorator': 'FormItem',
                                                                    'x-decorator-props': {
                                                                        style: {
                                                                            flexGrow: 1
                                                                        }
                                                                    },
                                                                    'x-component': 'Input',
                                                                    'x-component-type': '单行文本框',
                                                                    'x-component-props': {
                                                                        id: 'accountNumber',
                                                                        size: 'large'
                                                                    },
                                                                    'x-validator': [
                                                                        {
                                                                            disallowEmoticon: true
                                                                        }
                                                                    ]
                                                                },
                                                                remove: {
                                                                    type: 'void',
                                                                    'x-decorator': 'FormItem',
                                                                    'x-component': 'ArrayItems.Remove',
                                                                    'x-component-props': {
                                                                        atLeastOne: true,
                                                                        style: {
                                                                            marginLeft: 10
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                properties: {
                                                    add: {
                                                        type: 'void',
                                                        title: '添加社交账号',
                                                        'x-component': 'ArrayItems.Addition',
                                                        'x-component-props': {
                                                            noIcon: true,
                                                            block: false,
                                                            type: 'link',
                                                            style: {
                                                                padding: 0
                                                            }
                                                        }
                                                    }
                                                },
                                                'x-index': 10
                                            },
                                            remark: {
                                                type: 'string',
                                                name: 'remark',
                                                title: '备注',
                                                maxLength: 512,
                                                'x-decorator': 'FormItem',
                                                'x-component': 'Input.TextArea',
                                                'x-component-props': {
                                                    id: 'remark'
                                                },
                                                'x-component-type': '多行文本框',
                                                'x-validator': [
                                                    {
                                                        disallowEmoticon: true
                                                    }
                                                ],
                                                'x-decorator-props': {
                                                    colon: false
                                                },
                                                'x-index': 11
                                            }
                                        },
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
                '0chqj6titjf': {
                    type: 'void',
                    module: true,
                    'x-component': 'ModuleCard',
                    title: '特征信息',
                    'x-index': 2,
                    properties: {
                        '2afogl82dcg': {
                            type: 'void',
                            'x-component': 'FormLayout',
                            'x-component-props': {
                                layout: 'two-columns'
                            },
                            'x-index': 0,
                            properties: {
                                customerSource: {
                                    type: 'string',
                                    name: 'customerSource',
                                    title: '客户来源',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Select',
                                    'x-component-props': {
                                        showSearch: true,
                                        allowClear: true,
                                        id: 'customerSource',
                                        optionFilterProp: 'label'
                                    },
                                    'x-component-type': '单选列表',
                                    'x-validator': [],
                                    'x-decorator-props': {
                                        colon: false
                                    },
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
                                    'x-index': 0,
                                    'x-list': true,
                                    'x-filter': true
                                },
                                status: {
                                    type: 'string',
                                    name: 'status',
                                    title: '客户状态',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Select',
                                    'x-component-props': {
                                        showSearch: true,
                                        allowClear: true,
                                        id: 'status',
                                        optionFilterProp: 'label'
                                    },
                                    'x-component-type': '单选列表',
                                    'x-validator': [],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 1,
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
                                    'x-list': true,
                                    'x-filter': true
                                },
                                customerType: {
                                    type: 'string',
                                    name: 'customerType',
                                    title: '客户类型',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Select',
                                    'x-component-props': {
                                        showSearch: true,
                                        allowClear: true,
                                        id: 'customerType',
                                        optionFilterProp: 'label'
                                    },
                                    'x-component-type': '单选列表',
                                    'x-validator': [],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 2,
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
                                    'x-filter': true
                                },
                                tags: {
                                    type: 'array',
                                    name: 'tags',
                                    title: '标签',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'XtCustomSelect',
                                    'x-component-type': '多选列表',
                                    'x-validator': [],
                                    'x-component-props': {
                                        mode: 'CRM',
                                        allowClear: true,
                                        id: 'tags',
                                        noConfirm: true,
                                        optionFilterProp: 'label',
                                        size: 'large'
                                    },
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 3,
                                    'x-list': true,
                                    'x-filter': true
                                }
                            }
                        }
                    }
                },
                hudxz1dtorr: {
                    type: 'void',
                    'x-component': 'ModuleCard',
                    title: '附件',
                    'x-index': 3,
                    properties: {
                        '2afogl82dch': {
                            type: 'void',
                            'x-component': 'FormLayout',
                            'x-component-props': {
                                layout: 'two-columns'
                            },
                            'x-index': 0,
                            properties: {
                                attachmentVOS: {
                                    type: 'Array<object>',
                                    maxLength: 10,
                                    title: '上传附件',
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Upload',
                                    'x-component-props': {
                                        style: {
                                            display: 'block'
                                        },
                                        buttonProps: {
                                            block: true
                                        },
                                        data: {
                                            attachmentType: 'TDCustomerAttachment',
                                            usage: 'TDCustomerAttachment'
                                        },
                                        name: 'files',
                                        maxCount: 10,
                                        multiple: true,
                                        textContent: '点击上传',
                                        placeholder: '上传文件大小50M以内（限制10个附件)'
                                    },
                                    'x-validator': [],
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    'x-index': 0
                                }
                            }
                        }
                    }
                }
            }
        },
        templateId: '33990100700000022050500015101',
        type: 'TD_CUSTOMER'
    },
    dataUpdatedAt: 1653031369552,
    error: null,
    errorUpdatedAt: 0,
    failureCount: 0,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isPreviousData: false,
    isRefetchError: false,
    isStale: true
}
