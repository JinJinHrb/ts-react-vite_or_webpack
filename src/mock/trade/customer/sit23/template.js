export default {
    type: 'object',
    properties: {
        hudxz1dtorr: {
            'x-component': 'ModuleCard',
            module: true,
            'x-hidden': false,
            type: 'void',
            title: '附件',
            'x-index': 3,
            properties: {
                vmcoGOi3Nh: {
                    'x-component': 'ModuleRight',
                    type: 'void',
                    'x-index': 1
                },
                eAjONKvzlV: {
                    'x-component': 'ModuleLeft',
                    type: 'void',
                    'x-index': 0,
                    properties: {
                        attachmentVOS: {
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
                            'x-index': 0,
                            fieldType: 'TD_CUSTOMER',
                            maxLength: 10
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
                            'x-index': 2,
                            fieldType: 'TD_CUSTOMER'
                        },
                        '35990100879000022072900010002': {
                            'x-component-type': '单行文本框',
                            'x-list': true,
                            'x-component': 'ArrayItems',
                            'x-filter': true,
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left',
                                colon: false
                            },
                            customFieldId: '35990100879000022072900010002',
                            'x-component-props': {
                                id: ''
                            },
                            type: 'array',
                            title: '哈哈哈',
                            'x-index': 4,
                            default: [''],
                            'x-decorator': 'FormItem',
                            name: 'e7zJyzCmw3',
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
                                            id: 'input'
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
                        customerAbbreviation: {
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
                            'x-index': 1,
                            fieldType: 'TD_CUSTOMER',
                            maxLength: 80
                        },
                        customizeAddress: {
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
                            'x-index': 3,
                            fieldType: 'TD_CUSTOMER',
                            maxLength: 512
                        },
                        customerName: {
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
                        customerGeoCode: {
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
                            'x-index': 4,
                            fieldType: 'TD_CUSTOMER',
                            maxLength: 512
                        },
                        customerNo: {
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
                            'x-index': 0,
                            disableHide: true,
                            disableEdit: true,
                            'x-decorator': 'FormItem',
                            name: 'customerNo',
                            fieldType: 'TD_CUSTOMER',
                            maxLength: 32
                        },
                        customerFax: {
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
                            'x-index': 3,
                            fieldType: 'TD_CUSTOMER'
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
            'x-index': 2,
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
                                layout: 'vertical',
                                labelAlign: 'left',
                                colon: false
                            },
                            'x-component-props': {
                                optionFilterProp: 'label',
                                showSearch: true,
                                id: 'customerType',
                                allowClear: true
                            },
                            'x-validator': [],
                            'x-hidden': true,
                            type: 'string',
                            title: '客户类型',
                            'x-index': 4,
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
                        '35990100879000022072900010107': {
                            'x-component-type': '日期时间',
                            'x-list': true,
                            'x-component': 'DatePicker',
                            'x-filter': true,
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left',
                                colon: false
                            },
                            customFieldId: '35990100879000022072900010107',
                            'x-component-props': {
                                showTime: true,
                                id: '',
                                unix: true
                            },
                            'x-validator': [],
                            title: 'huhuhuhu',
                            type: 'string',
                            'x-index': 2,
                            'x-decorator': 'FormItem',
                            name: 'PwBpdGB0EY',
                            isCustom: true,
                            fieldType: 'TD_CUSTOMER'
                        },
                        '35990100879000022072900010106': {
                            'x-component-type': '图片上传',
                            'x-component': 'Upload',
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left',
                                colon: false
                            },
                            customFieldId: '35990100879000022072900010106',
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
                            title: 'uhuhu',
                            type: 'Array<object>',
                            'x-index': 0,
                            required: false,
                            'x-decorator': 'FormItem',
                            name: '0JYjJdPfXq',
                            isCustom: true,
                            fieldType: 'TD_CUSTOMER'
                        },
                        customerSource: {
                            add: false,
                            'x-component-type': '单选列表',
                            'x-list': true,
                            'x-component': 'Select',
                            'x-filter': true,
                            color: false,
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
                            'x-index': 1,
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
                                    isCustom: true,
                                    label: '选项6',
                                    value: '选项6'
                                }
                            ],
                            isSelectAll: false,
                            'x-decorator': 'FormItem',
                            name: 'customerSource',
                            fieldType: 'TD_CUSTOMER',
                            hideEnum: [
                                {
                                    label: '社交平台',
                                    value: 'SOCIAL_PLATFORM'
                                }
                            ]
                        },
                        tags: {
                            'x-component-type': '多选列表',
                            'x-list': true,
                            'x-component': 'XtCustomSelect',
                            'x-filter': true,
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left',
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
                            'x-index': 3,
                            'x-decorator': 'FormItem',
                            name: 'tags',
                            fieldType: 'TD_CUSTOMER'
                        }
                    }
                },
                fSfzyoIGUs: {
                    'x-component': 'ModuleRight',
                    type: 'void',
                    'x-index': 1,
                    properties: {
                        '35990100879000022072900010105': {
                            'x-component-type': '文件上传',
                            'x-component': 'Upload',
                            'x-decorator-props': {
                                layout: 'vertical',
                                labelAlign: 'left',
                                colon: false
                            },
                            customFieldId: '35990100879000022072900010105',
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
                            title: 'huhuhuhuhu',
                            type: 'Array<object>',
                            'x-index': 1,
                            required: false,
                            'x-decorator': 'FormItem',
                            name: 'ZE_ay7KePs',
                            isCustom: true,
                            fieldType: 'TD_CUSTOMER'
                        },
                        status: {
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
                                            '35990100879000022072900010102': {
                                                'x-component-type': '文件上传',
                                                'x-component': 'Upload',
                                                'x-decorator-props': {
                                                    layout: 'vertical',
                                                    labelAlign: 'left',
                                                    colon: false
                                                },
                                                customFieldId: '35990100879000022072900010102',
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
                                                title: 'djwidjiw',
                                                type: 'Array<object>',
                                                'x-index': 4,
                                                required: false,
                                                'x-decorator': 'FormItem',
                                                name: 'kcVi1Vyw80',
                                                isCustom: true,
                                                fieldType: 'TD_CONTACT'
                                            },
                                            gender: {
                                                'x-component-type': '单选列表',
                                                disableEditEnum: true,
                                                'x-component': 'Select',
                                                'x-decorator-props': {
                                                    layout: 'vertical',
                                                    labelAlign: 'left',
                                                    colon: false
                                                },
                                                'x-validator': [],
                                                'x-component-props': {
                                                    showSearch: true,
                                                    id: 'gender',
                                                    allowClear: true
                                                },
                                                type: 'boolean',
                                                title: '性别',
                                                'x-index': 1,
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
                                                'x-component-type': '单行文本框',
                                                'x-list': true,
                                                'x-component': 'Input',
                                                'x-decorator-props': {
                                                    layout: 'vertical',
                                                    labelAlign: 'left',
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
                                            contactPhone: {
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
                                                'x-index': 2,
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
                                            socialMediaModels: {
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
                                                'x-hidden': false,
                                                type: 'array',
                                                title: '社交账号',
                                                'x-index': 3,
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
                                                                    add: true,
                                                                    'x-component-type': '组合输入框',
                                                                    'x-component': 'Select',
                                                                    color: false,
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
                                                                    'x-component-props': {
                                                                        optionFilterProp: 'label',
                                                                        showSearch: true,
                                                                        id: 'socialMediaType'
                                                                    },
                                                                    type: 'string',
                                                                    enum: [
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
                                                                            isCustom: true,
                                                                            label: '选项10',
                                                                            value: '选项10'
                                                                        },
                                                                        {
                                                                            isCustom: true,
                                                                            label: '选项9',
                                                                            value: '选项9'
                                                                        }
                                                                    ],
                                                                    isSelectAll: false,
                                                                    'x-decorator': 'FormItem',
                                                                    showAdd: true,
                                                                    name: 'socialMediaType',
                                                                    hideEnum: [
                                                                        {
                                                                            label: 'FaceBook',
                                                                            value: 'FACEBOOK'
                                                                        },
                                                                        {
                                                                            isCustom: true,
                                                                            label: '选项8',
                                                                            value: '选项8'
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
                                                        'x-visible': true,
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
                                            }
                                        }
                                    },
                                    '32wVskLBQ4': {
                                        'x-component': 'ModuleRight',
                                        type: 'void',
                                        'x-index': 1,
                                        properties: {
                                            birthday: {
                                                'x-component-type': '日期',
                                                'x-decorator': 'FormItem',
                                                'x-component': 'DatePicker',
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
                                                'x-index': 1,
                                                fieldType: 'TD_CONTACT'
                                            },
                                            '35990100879000022072900010104': {
                                                'x-component-type': '图片上传',
                                                'x-component': 'Upload',
                                                'x-decorator-props': {
                                                    layout: 'vertical',
                                                    labelAlign: 'left',
                                                    colon: false
                                                },
                                                customFieldId: '35990100879000022072900010104',
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
                                                title: 'tupian',
                                                type: 'Array<object>',
                                                'x-index': 4,
                                                required: false,
                                                'x-decorator': 'FormItem',
                                                name: 'LuV_JA2UsM',
                                                isCustom: true,
                                                fieldType: 'TD_CONTACT'
                                            },
                                            contactEmail: {
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
                                                'x-index': 2,
                                                fieldType: 'TD_CONTACT',
                                                maxLength: 100
                                            },
                                            remark: {
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
                                                'x-index': 3,
                                                fieldType: 'TD_CONTACT',
                                                maxLength: 512
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
}
