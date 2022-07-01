export default {
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
                            'x-component': 'Input',
                            'x-component-props': {
                                id: 'customerNo'
                            },
                            'x-component-type': '文本框',
                            'x-validator': [],
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
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-component-props': {
                                id: 'customerName'
                            },
                            'x-component-type': '文本框',
                            'x-validator': [],
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
                            title: '贸易国家/地区',
                            'x-decorator': 'FormItem',
                            'x-component': 'GeoSelect',
                            'x-component-props': {
                                id: 'customerGeoCode'
                            },
                            'x-component-type': '下拉选择框',
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
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-component-props': {
                                id: 'customerAbbreviation'
                            },
                            'x-component-type': '文本框',
                            'x-validator': [],
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-index': 3,
                            'x-reactions': {
                                dependencies: [
                                    {
                                        property: 'value',
                                        type: 'any',
                                        source: 'jg1ging5grt.2afogl82dcf.customerName',
                                        name: 'customerName'
                                    }
                                ],
                                fulfill: {
                                    state: {
                                        value: '{{$deps.customerName\n}}'
                                    }
                                }
                            }
                        },
                        webAddress: {
                            type: 'string',
                            name: 'webAddress',
                            title: '客户网址',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-component-props': {
                                id: 'webAddress'
                            },
                            'x-component-type': '文本框',
                            'x-validator': [],
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
                                id: 'customerPhone'
                            },
                            'x-component-type': '文本框',
                            'x-validator': [],
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
                                id: 'customerFax'
                            },
                            'x-component-type': '文本框',
                            'x-validator': [],
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-index': 6
                        },
                        customizeAddress: {
                            type: 'string',
                            name: 'customizeAddress',
                            title: '联系地址',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input.TextArea',
                            'x-component-props': {
                                id: 'customizeAddress'
                            },
                            'x-component-type': '多行文本框',
                            'x-validator': [],
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-index': 7
                        },
                        memo: {
                            type: 'string',
                            name: 'memo',
                            title: '备注',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input.TextArea',
                            'x-component-props': {
                                id: 'memo'
                            },
                            'x-component-type': '多行文本框',
                            'x-validator': [],
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
                    maxItems: 2,
                    items: {
                        type: 'object',
                        'x-validator': [],
                        properties: {
                            tgfnpbqvlgu: {
                                type: 'void',
                                'x-decorator': 'Space',
                                'x-decorator-props': {
                                    style: {
                                        width: '100%',
                                        display: 'block',
                                        textAlign: 'right'
                                    }
                                },
                                'x-component': 'ArrayItems.Remove',
                                'x-index': 0,
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
                                }
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
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component': 'Input',
                                        'x-component-props': {
                                            id: 'contactName'
                                        },
                                        'x-component-type': '文本框',
                                        'x-validator': [],
                                        'x-index': 3,
                                        required: true,
                                        'x-list': true
                                    },
                                    contactEmail: {
                                        type: 'string',
                                        name: 'contactEmail',
                                        title: '邮箱',
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component': 'Input',
                                        'x-component-type': '文本框',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'contactEmail'
                                        },
                                        'x-index': 4,
                                        required: true,
                                        'x-list': true
                                    },
                                    gender: {
                                        type: 'boolean',
                                        title: '性别',
                                        name: 'gender',
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
                                        'x-component-type': '下拉选择框',
                                        'x-validator': [],
                                        'x-component-props': {
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
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component': 'Input',
                                        'x-component-type': '文本框',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'position'
                                        },
                                        'x-index': 7
                                    },
                                    contactFax: {
                                        type: 'string',
                                        name: 'contactFax',
                                        title: '传真',
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        'x-component': 'Input',
                                        'x-component-type': '文本框',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'contactFax'
                                        },
                                        'x-index': 8
                                    },
                                    contactPhone: {
                                        type: 'array',
                                        name: 'contactPhone',
                                        'x-component': 'ArrayItems',
                                        'x-component-type': '组合文本框',
                                        'x-component-props': {
                                            id: 'contactPhone'
                                        },
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        title: '电话',
                                        items: {
                                            type: 'void',
                                            'x-component': 'Space',
                                            'x-component-props': {
                                                style: {
                                                    display: 'flex'
                                                }
                                            },
                                            properties: {
                                                input: {
                                                    type: 'string',
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'Input',
                                                    'x-component-props': {
                                                        id: 'input'
                                                    }
                                                },
                                                remove: {
                                                    type: 'void',
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'ArrayItems.Remove',
                                                    'x-component-props': {
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
                                                    style: {
                                                        border: 'none',
                                                        padding: 0,
                                                        width: 'auto',
                                                        color: 'rgb(255, 147, 74)'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    socialMediaModels: {
                                        type: 'array',
                                        name: 'socialMediaModels',
                                        'x-component': 'ArrayItems',
                                        'x-component-props': {
                                            id: 'socialMediaModels'
                                        },
                                        'x-component-type': '组合选择框',
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        title: '社交账号',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                space: {
                                                    type: 'void',
                                                    'x-component': 'Space',
                                                    'x-component-props': {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }
                                                    },
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
                                                            'x-component': 'Select',
                                                            'x-component-type': '下拉选择框',
                                                            'x-component-props': {
                                                                allowClear: true,
                                                                id: 'socialMediaType'
                                                            }
                                                        },
                                                        accountNumber: {
                                                            type: 'string',
                                                            name: 'accountNumber',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Input',
                                                            'x-component-type': '文本框',
                                                            'x-component-props': {
                                                                allowClear: true,
                                                                id: 'accountNumber'
                                                            }
                                                        },
                                                        remove: {
                                                            type: 'void',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'ArrayItems.Remove',
                                                            'x-component-props': {
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
                                                    style: {
                                                        border: 'none',
                                                        padding: 0,
                                                        width: 'auto',
                                                        color: 'rgb(255, 147, 74)'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    properties: {
                        cpscgs1n1yf: {
                            type: 'void',
                            title: '添加联系人',
                            'x-component': 'ArrayItems.Addition',
                            'x-index': 0,
                            'x-component-props': {
                                style: {
                                    width: 124,
                                    border: '1px solid rgb(255, 147, 74) ',
                                    color: 'rgb(255, 147, 74)',
                                    paddingLeft: 15
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
                                        'x-disabled': '{{$deps.contactModels.length >= 10 ? true : false }}',
                                        title: "{{$deps.contactModels.length >= 10 ? '最多添加10个' : '添加联系人' }}"
                                    }
                                }
                            }
                        }
                    },
                    'x-reactions': {
                        fulfill: {
                            state: {
                                value: [
                                    {
                                        contactPhone: [''],
                                        socialMediaModels: [
                                            {
                                                socialMediaType: 'FACEBOOK',
                                                accountNumber: ''
                                            }
                                        ]
                                    }
                                ]
                            }
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
                                allowClear: true,
                                id: 'customerSource'
                            },
                            'x-component-type': '下拉选择框',
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
                                allowClear: true,
                                id: 'status'
                            },
                            'x-component-type': '下拉选择框',
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
                                allowClear: true,
                                id: 'customerType'
                            },
                            'x-component-type': '下拉选择框',
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
                            'x-component-type': '标签选择框',
                            'x-validator': [],
                            'x-component-props': {
                                mode: 'CRM',
                                allowClear: true,
                                id: 'tags'
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
                            title: '点击上传',
                            'x-decorator': 'FormItem',
                            'x-component': 'Upload',
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
}
