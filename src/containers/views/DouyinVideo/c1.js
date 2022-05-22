export default {
    type: 'object',
    properties: {
        hudxz1dtorr: {
            'x-component': 'ModuleCard',
            type: 'void',
            title: '附件',
            'x-index': 3,
            properties: {
                '2afogl82dch': {
                    'x-component': 'FormLayout',
                    'x-component-props': {
                        layout: 'two-columns'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        attachmentVOS: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Upload',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                attachmentType: 'TDCustomerAttachment',
                                usage: 'TDCustomerAttachment',
                                action: 'http://127.0.0.1:4523/mock/713578/file/upload',
                                textContent: '上传附件',
                                id: 'attachmentVOS'
                            },
                            'x-validator': [],
                            type: 'Array&lt;object&gt;',
                            title: '上传附件',
                            'x-index': 0
                        }
                    }
                }
            }
        },
        jg1ging5grt: {
            'x-component': 'ModuleCard',
            module: true,
            type: 'void',
            title: '基本信息',
            'x-index': 0,
            properties: {
                '2afogl82dcf': {
                    'x-component': 'FormLayout',
                    'x-component-props': {
                        layout: 'two-columns'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        customerPhone: {
                            'x-component-type': '文本框',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'customerPhone'
                            },
                            'x-validator': [],
                            'x-hidden': true,
                            type: 'string',
                            title: '固定电话',
                            'x-index': 5,
                            required: true,
                            'x-decorator': 'FormItem',
                            name: 'customerPhone',
                            maxLength: 110
                        },
                        customerAbbreviation: {
                            'x-component-type': '文本框',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'customerAbbreviation'
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户简称',
                            'x-index': 3,
                            required: true,
                            'x-decorator': 'FormItem',
                            name: 'customerAbbreviation',
                            'x-reactions': {
                                fulfill: {
                                    state: {
                                        value: '{{$deps.customerName\n}}'
                                    }
                                },
                                dependencies: [
                                    {
                                        property: 'value',
                                        name: 'customerName',
                                        source: 'jg1ging5grt.2afogl82dcf.customerName',
                                        type: 'any'
                                    }
                                ]
                            },
                            maxLength: 128
                        },
                        customerGeoCode: {
                            'x-component-type': '下拉选择框',
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'customerGeoCode'
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '贸易国家/地区',
                            'x-index': 2,
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
                                },
                                {
                                    label: 'Other',
                                    value: 'OTHER'
                                }
                            ],
                            required: true,
                            disableHide: true,
                            default: 'AQ',
                            'x-decorator': 'FormItem',
                            name: 'customerGeoCode'
                        },
                        webAddress: {
                            'x-component-type': '文本框',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'webAddress'
                            },
                            'x-validator': [],
                            'x-hidden': false,
                            type: 'string',
                            title: '客户网址',
                            'x-index': 4,
                            required: true,
                            'x-decorator': 'FormItem',
                            name: 'webAddress',
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
                            'x-validator': [],
                            type: 'string',
                            title: '备注',
                            'x-index': 8,
                            maxLength: 1024,
                            required: true
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
                            'x-validator': [],
                            type: 'string',
                            title: '联系地址',
                            'x-index': 7
                        },
                        customerNo: {
                            'x-component-type': '文本框',
                            'x-list': true,
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'customerNo'
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户编号',
                            'x-index': 0,
                            required: true,
                            disableHide: true,
                            disableEdit: true,
                            'x-decorator': 'FormItem',
                            name: 'customerNo',
                            maxLength: 2
                        },
                        customerName: {
                            'x-component-type': '文本框',
                            'x-list': true,
                            'x-component': 'Input',
                            'x-list-fixed': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'customerName'
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户名称',
                            'x-index': 1,
                            required: true,
                            disableHide: true,
                            'x-decorator': 'FormItem',
                            name: 'customerName'
                        },
                        customerFax: {
                            'x-component-type': '文本框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customerFax',
                            'x-component-props': {
                                id: 'customerFax'
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '传真',
                            'x-index': 6
                        }
                    }
                }
            }
        },
        '0chqj6titjf': {
            'x-component': 'ModuleCard',
            module: true,
            type: 'void',
            title: '特征信息',
            'x-index': 2,
            properties: {
                '2afogl82dcg': {
                    'x-component': 'FormLayout',
                    'x-component-props': {
                        layout: 'two-columns'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        customerType: {
                            'x-component-type': '下拉选择框',
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            name: 'customerType',
                            'x-component-props': {
                                id: 'customerType',
                                allowClear: true
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户类型',
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
                            ]
                        },
                        customerSource: {
                            'x-component-type': '下拉选择框',
                            'x-list': true,
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
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
                            name: 'customerSource'
                        },
                        status: {
                            'x-component-type': '下拉选择框',
                            'x-list': true,
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-component-props': {
                                id: 'status',
                                allowClear: true
                            },
                            'x-validator': [],
                            type: 'string',
                            title: '客户状态',
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
                                null,
                                null
                            ],
                            'x-decorator': 'FormItem',
                            name: 'status'
                        },
                        tags: {
                            'x-component-type': '标签选择框',
                            'x-list': true,
                            'x-component': 'Select',
                            'x-filter': true,
                            'x-decorator-props': {
                                colon: false
                            },
                            'x-validator': [],
                            'x-component-props': {
                                id: 'tags',
                                allowClear: true
                            },
                            'x-hidden': false,
                            type: 'array',
                            title: '标签',
                            'x-index': 3,
                            'x-decorator': 'FormItem',
                            name: 'tags'
                        }
                    }
                }
            }
        },
        '7pktwpbt1oe': {
            'x-component': 'ModuleCard',
            module: true,
            type: 'void',
            title: '联系人',
            'x-index': 1,
            properties: {
                contactModels: {
                    maxItems: 2,
                    'x-component': 'ArrayItems',
                    name: 'contactModels',
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
                    },
                    'x-component-props': {
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
                                'x-component': 'FormLayout',
                                'x-component-props': {
                                    layout: 'two-columns'
                                },
                                type: 'void',
                                properties: {
                                    birthday: {
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
                                        type: 'string',
                                        title: '生日',
                                        'x-index': 6
                                    },
                                    gender: {
                                        'x-component-type': '下拉选择框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Select',
                                        'x-decorator-props': {
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
                                        'x-index': 5,
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
                                    contactEmail: {
                                        'x-component-type': '文本框',
                                        'x-list': true,
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'contactEmail',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'contactEmail'
                                        },
                                        type: 'string',
                                        title: '邮箱',
                                        'x-index': 4,
                                        required: true
                                    },
                                    contactName: {
                                        'x-component-type': '文本框',
                                        'x-list': true,
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'contactName',
                                        'x-component-props': {
                                            id: 'contactName'
                                        },
                                        'x-validator': [],
                                        type: 'string',
                                        title: '姓名',
                                        'x-index': 3,
                                        required: true
                                    },
                                    contactFax: {
                                        'x-component-type': '文本框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'contactFax',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'contactFax'
                                        },
                                        type: 'string',
                                        title: '传真',
                                        'x-index': 8
                                    },
                                    position: {
                                        'x-component-type': '文本框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'position',
                                        'x-validator': [],
                                        'x-component-props': {
                                            id: 'position'
                                        },
                                        type: 'string',
                                        title: '职位',
                                        'x-index': 7
                                    },
                                    contactPhone: {
                                        'x-component-type': '组合文本框',
                                        'x-component': 'ArrayItems',
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
                                            colon: false
                                        },
                                        name: 'contactPhone',
                                        'x-component-props': {
                                            id: 'contactPhone'
                                        },
                                        type: 'array',
                                        title: '电话',
                                        items: {
                                            'x-component': 'Space',
                                            type: 'void',
                                            properties: {
                                                input: {
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'Input',
                                                    showAdd: true,
                                                    'x-component-props': {
                                                        id: 'input'
                                                    },
                                                    type: 'string',
                                                    title: '电话',
                                                    maxLength: 125,
                                                    required: true
                                                },
                                                remove: {
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'ArrayItems.Remove',
                                                    type: 'void'
                                                }
                                            }
                                        },
                                        properties: {
                                            add: {
                                                'x-component': 'ArrayItems.Addition',
                                                type: 'void',
                                                title: '添加'
                                            }
                                        }
                                    },
                                    socialMediaModels: {
                                        'x-component-type': '组合选择框',
                                        'x-component': 'ArrayItems',
                                        'x-decorator': 'FormItem',
                                        'x-decorator-props': {
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
                                                    'x-component': 'Space',
                                                    type: 'void',
                                                    properties: {
                                                        socialMediaType: {
                                                            'x-component-type': '下拉选择框',
                                                            default: 'FACEBOOK',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Select',
                                                            showAdd: true,
                                                            name: 'socialMediaType',
                                                            'x-component-props': {
                                                                id: 'socialMediaType',
                                                                allowClear: true
                                                            },
                                                            type: 'string',
                                                            title: '社交账号',
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
                                                                null,
                                                                null
                                                            ]
                                                        },
                                                        accountNumber: {
                                                            'x-component-type': '文本框',
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Input',
                                                            name: 'accountNumber',
                                                            'x-component-props': {
                                                                id: 'accountNumber',
                                                                allowClear: true
                                                            },
                                                            type: 'string'
                                                        },
                                                        remove: {
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'ArrayItems.Remove',
                                                            type: 'void'
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        properties: {
                                            add: {
                                                'x-component': 'ArrayItems.Addition',
                                                type: 'void',
                                                title: '添加'
                                            }
                                        }
                                    }
                                }
                            },
                            tgfnpbqvlgu: {
                                'x-component': 'ArrayItems.Remove',
                                'x-reactions': {
                                    fulfill: {
                                        schema: {
                                            'x-hidden': '{{$deps.contactModels.length &lt;= 1 ? true : false }}'
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
                                type: 'void',
                                'x-index': 0
                            }
                        }
                    },
                    properties: {
                        cpscgs1n1yf: {
                            'x-component': 'ArrayItems.Addition',
                            'x-reactions': {
                                fulfill: {
                                    schema: {
                                        'x-disabled': '{{$deps.contactModels.length &gt;= 10 ? true : false }}',
                                        title: "{{$deps.contactModels.length &gt;= 10 ? '最多添加10个' : '添加联系人' }}"
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
                            type: 'void',
                            title: '添加联系人',
                            'x-index': 0
                        }
                    }
                }
            }
        }
    }
}
