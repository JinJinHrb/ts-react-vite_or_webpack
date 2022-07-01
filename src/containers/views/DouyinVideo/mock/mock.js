export default {
    status: 'success',
    isLoading: false,
    isSuccess: true,
    isError: false,
    isIdle: false,
    data: {
        templateId: '33990100700000022040700010001',
        template: {
            'x-designable-id': 'nz2eji7j3dr',
            type: 'object',
            properties: {
                hudxz1dtorr: {
                    'x-component': 'Card',
                    'x-designable-id': 'hudxz1dtorr',
                    'x-component-props': {
                        title: '附件'
                    },
                    type: 'void',
                    'x-index': 3,
                    properties: {
                        attachmentVOS: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Upload',
                            'x-designable-id': 'k0asy55rktg',
                            'x-decorator-props': {},
                            'x-component-props': {
                                attachmentType: 'TDCustomerAttachment',
                                usage: 'TDCustomerAttachment',
                                action: 'http://127.0.0.1:4523/mock/713578/file/upload',
                                textContent: '上传附件'
                            },
                            'x-validator': [],
                            type: 'Array<object>',
                            title: 'Upload',
                            'x-index': 0
                        }
                    },
                    display: 'hidden'
                },
                jg1ging5grt: {
                    'x-component': 'Card',
                    'x-designable-id': 'jg1ging5grt',
                    'x-component-props': {
                        title: '基本信息'
                    },
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        '2afogl82dcf': {
                            'x-component': 'FormLayout',
                            'x-designable-id': '2afogl82dcf',
                            'x-component-props': {},
                            type: 'void',
                            'x-index': 0,
                            properties: {
                                customerPhone: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-designable-id': 'ab25j0g9k5v',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'customerPhone',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '固定电话',
                                    'x-index': 5
                                },
                                customerAbbreviation: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-designable-id': 'jeaoik2r0rj',
                                    'x-decorator-props': {
                                        colon: false
                                    },
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
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '客户简称',
                                    'x-index': 3
                                },
                                customerGeoCode: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Select',
                                    'x-designable-id': 'aplxzzy1p15',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'customerGeoCode',
                                    'x-reactions': {
                                        fulfill: {
                                            run: "$effect(()=>{\n  $self.loading = true\n  fetch('http://localhost:3000/country')\n    .then(response=>response.json())\n    .then(( data )=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[])"
                                        },
                                        dependencies: [
                                            {
                                                property: 'value',
                                                type: 'any'
                                            }
                                        ]
                                    },
                                    'x-validator': [],
                                    'x-component-props': {},
                                    title: '贸易国家/地区',
                                    'x-index': 2,
                                    required: true
                                },
                                webAddress: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-designable-id': 'y713g4ugpbt',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'webAddress',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '客户网址',
                                    'x-index': 4
                                },
                                memo: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input.TextArea',
                                    'x-designable-id': 'u0tjy90k590',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'memo',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '备注',
                                    'x-index': 8
                                },
                                customizeAddress: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input.TextArea',
                                    'x-designable-id': '2oc8t0rvz6i',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'customizeAddress',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '联系地址',
                                    'x-index': 7
                                },
                                customerNo: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-designable-id': '2hiou6fsrnk',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'customerNo',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '客户编号',
                                    'x-index': 0,
                                    required: true
                                },
                                customerName: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-designable-id': '1msgk934pbr',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'customerName',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '客户名称',
                                    'x-index': 1,
                                    required: true
                                },
                                customerFax: {
                                    'x-decorator': 'FormItem',
                                    'x-component': 'Input',
                                    'x-designable-id': 'dgey4v1lzng',
                                    'x-decorator-props': {
                                        colon: false
                                    },
                                    name: 'customerFax',
                                    'x-validator': [],
                                    'x-component-props': {},
                                    type: 'string',
                                    title: '传真',
                                    'x-index': 6
                                }
                            }
                        }
                    }
                },
                '0chqj6titjf': {
                    'x-component': 'Card',
                    'x-designable-id': '0chqj6titjf',
                    'x-component-props': {
                        title: '特征信息'
                    },
                    type: 'void',
                    'x-index': 2,
                    properties: {
                        customerType: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-designable-id': '9klhdf3h85y',
                            'x-decorator-props': {},
                            name: 'customerType',
                            'x-validator': [],
                            'x-component-props': {},
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
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-designable-id': 'p6nspj1qsbt',
                            'x-decorator-props': {},
                            name: 'customerSource',
                            'x-validator': [],
                            'x-component-props': {},
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
                                    label: 'SOCIAL_PLATFORM',
                                    value: '社交平台'
                                }
                            ]
                        },
                        status: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-designable-id': 'qt1ryc47697',
                            'x-decorator-props': {},
                            name: 'status',
                            'x-validator': [],
                            'x-component-props': {},
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
                        tags: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-designable-id': 'x2bmnyykpdv',
                            'x-decorator-props': {},
                            name: 'tags',
                            'x-validator': [],
                            'x-component-props': {},
                            title: '标签',
                            'x-index': 3
                        }
                    }
                },
                '7pktwpbt1oe': {
                    'x-component': 'Card',
                    'x-designable-id': '7pktwpbt1oe',
                    'x-component-props': {
                        title: '联系人'
                    },
                    type: 'void',
                    'x-index': 1,
                    properties: {
                        contactModels: {
                            'x-decorator': 'FormItem',
                            'x-component': 'ArrayCards',
                            'x-designable-id': '4mnym3bdk1q',
                            'x-decorator-props': {},
                            name: 'contactModels',
                            'x-component-props': {
                                title: 'Title'
                            },
                            'x-validator': [],
                            type: 'array',
                            'x-index': 0,
                            items: {
                                'x-designable-id': 'vj71k3xkwpg',
                                'x-validator': [],
                                type: 'object',
                                properties: {
                                    birthday: {
                                        'x-decorator': 'FormItem',
                                        'x-component': 'DatePicker',
                                        'x-designable-id': 'f2c3mbzjr9j',
                                        'x-decorator-props': {},
                                        name: 'birthday',
                                        'x-validator': [],
                                        'x-component-props': {},
                                        type: 'string',
                                        title: '生日',
                                        'x-index': 6
                                    },
                                    l36doucqn7g: {
                                        'x-component': 'ArrayCards.MoveDown',
                                        'x-designable-id': 'l36doucqn7g',
                                        type: 'void',
                                        'x-index': 1
                                    },
                                    zey2pnd31yo: {
                                        'x-component': 'ArrayCards.MoveUp',
                                        'x-designable-id': 'zey2pnd31yo',
                                        type: 'void',
                                        'x-index': 2
                                    },
                                    gender: {
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Select',
                                        'x-designable-id': 'hw6dlq04io7',
                                        'x-decorator-props': {},
                                        name: 'gender',
                                        'x-validator': [],
                                        'x-component-props': {},
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
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-designable-id': '16tzjyqs4hx',
                                        'x-decorator-props': {},
                                        name: 'contactEmail',
                                        'x-validator': [],
                                        'x-component-props': {},
                                        type: 'string',
                                        title: '邮箱',
                                        'x-index': 4,
                                        required: true
                                    },
                                    contactName: {
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-designable-id': '7ewaq7vvjnx',
                                        'x-decorator-props': {},
                                        name: 'contactName',
                                        'x-validator': [],
                                        'x-component-props': {},
                                        type: 'string',
                                        title: '姓名',
                                        'x-index': 3,
                                        required: true
                                    },
                                    contactFax: {
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-designable-id': 'p4pij8bx457',
                                        'x-decorator-props': {},
                                        name: 'contactFax',
                                        'x-validator': [],
                                        'x-component-props': {},
                                        type: 'string',
                                        title: '传真',
                                        'x-index': 8
                                    },
                                    position: {
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-designable-id': 'jzj13esxqi8',
                                        'x-decorator-props': {},
                                        name: 'position',
                                        'x-validator': [],
                                        'x-component-props': {},
                                        type: 'string',
                                        title: '职位',
                                        'x-index': 7
                                    },
                                    contactPhone: {
                                        'x-component': 'ArrayItems',
                                        'x-decorator': 'FormItem',
                                        type: 'array',
                                        title: '电话',
                                        items: {
                                            'x-component': 'Space',
                                            type: 'void',
                                            properties: {
                                                input: {
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'Input',
                                                    type: 'string'
                                                },
                                                sort: {
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'ArrayItems.SortHandle',
                                                    type: 'void'
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
                                                title: '添加条目'
                                            }
                                        }
                                    },
                                    socialMediaModels: {
                                        'x-component': 'ArrayItems',
                                        'x-decorator': 'FormItem',
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
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Select',
                                                            'x-component-props': {
                                                                style: {
                                                                    width: 160
                                                                }
                                                            },
                                                            type: 'string',
                                                            title: '',
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
                                                            ]
                                                        },
                                                        accountNumber: {
                                                            'x-decorator': 'FormItem',
                                                            'x-component': 'Input',
                                                            type: 'string',
                                                            title: ''
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
                                                title: '添加条目'
                                            }
                                        }
                                    },
                                    tgfnpbqvlgu: {
                                        'x-component': 'ArrayCards.Remove',
                                        'x-designable-id': 'tgfnpbqvlgu',
                                        type: 'void',
                                        'x-index': 0
                                    }
                                }
                            },
                            properties: {
                                cpscgs1n1yf: {
                                    'x-component': 'ArrayCards.Addition',
                                    'x-designable-id': 'cpscgs1n1yf',
                                    'x-component-props': {},
                                    type: 'void',
                                    title: 'Addition',
                                    'x-index': 0
                                }
                            }
                        }
                    }
                }
            }
        },
        type: 'TD_CUSTOMER'
    },
    dataUpdatedAt: 1650553695640,
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
