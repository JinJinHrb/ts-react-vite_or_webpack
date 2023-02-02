export default {
    templateId: '35990100708000022082200010303',
    templateFormily: {
        type: 'object',
        properties: {
            hudxz1dtorr: {
                'x-component': 'ModuleCard',
                module: true,
                'x-hidden': false,
                type: 'void',
                title: '附件',
                'x-index': 4,
                properties: {
                    vmcoGOi3Nh: { 'x-component': 'ModuleRight', type: 'void', 'x-index': 1 },
                    eAjONKvzlV: {
                        'x-component': 'ModuleLeft',
                        type: 'void',
                        'x-index': 0,
                        properties: {
                            attachmentVOS: {
                                'x-component-type': '上传文件',
                                'x-decorator': 'FormItem',
                                'x-component': 'Upload',
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'attachmentVOS',
                                'x-component-props': {
                                    buttonProps: { block: true },
                                    data: { attachmentType: 'TDCustomerAttachment', usage: 'TDCustomerAttachment' },
                                    name: 'files',
                                    multiple: true,
                                    style: { display: 'block' },
                                    textContent: '点击上传',
                                    placeholder: '上传文件大小50M以内（限制10个附件)',
                                    maxCount: 10
                                },
                                'x-validator': [],
                                type: 'Array&lt;object&gt;',
                                title: '上传附件',
                                'x-index': 0,
                                fieldType: 'TD_CUSTOMER',
                                maxLength: 10
                            }
                        }
                    }
                }
            },
            '4N2ebjpxl2': {
                'x-component': 'ModuleCard',
                module: true,
                isCustom: true,
                'x-hidden': false,
                type: 'void',
                title: '自定义模块',
                'x-index': 3,
                properties: {
                    'PSAoo8yfQ-': {
                        'x-component': 'ModuleLeft',
                        type: 'void',
                        'x-index': 0,
                        properties: {
                            '35990100879000022082200010003': {
                                'x-component-type': '单行文本框',
                                'x-list': true,
                                'x-component': 'ArrayItems',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010003',
                                'x-component-props': { id: '' },
                                type: 'array',
                                title: '自定义单行',
                                'x-index': 0,
                                default: [''],
                                'x-decorator': 'FormItem',
                                name: '6VgFZzqTxd',
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
                                                style: { flexGrow: 1 }
                                            },
                                            'x-component-props': { size: 'large', id: 'input' },
                                            'x-validator': [],
                                            type: 'string',
                                            maxLength: 100
                                        },
                                        remove: {
                                            'x-decorator': 'FormItem',
                                            'x-component': 'ArrayItems.Remove',
                                            'x-decorator-props': { layout: 'vertical', labelAlign: 'left' },
                                            'x-component-props': { atLeastOne: true, style: { marginLeft: 10 } },
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
                                            style: { padding: 0 },
                                            type: 'link'
                                        },
                                        type: 'void',
                                        title: '添加'
                                    }
                                }
                            },
                            '35990100879000022082200010004': {
                                add: false,
                                'x-component-type': '单选列表',
                                'x-list': true,
                                'x-component': 'Select',
                                'x-filter': true,
                                color: false,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010004',
                                'x-component-props': {
                                    optionFilterProp: 'label',
                                    showSearch: true,
                                    id: '',
                                    allowClear: true
                                },
                                'x-validator': [],
                                title: '自定义单选',
                                type: 'string',
                                'x-index': 1,
                                enum: [
                                    { isCustom: true, label: '自定义单选A', value: '自定义单选A' },
                                    { isCustom: true, label: '自定义单选B', value: '自定义单选B' }
                                ],
                                isSelectAll: true,
                                'x-decorator': 'FormItem',
                                name: 'PwZDlsKR76',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER',
                                hideEnum: []
                            },
                            '35990100879000022082200010007': {
                                'x-component-type': '整数字段',
                                'x-list': true,
                                'x-component': 'NumberPicker',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010007',
                                'x-component-props': { min: 0, max: 10000, precision: 0, id: '' },
                                'x-validator': [],
                                title: '自定义整数',
                                type: 'number',
                                'x-index': 3,
                                'x-decorator': 'FormItem',
                                name: 'R5aH1B6em3',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER'
                            },
                            '35990100879000022082200010006': {
                                'x-component-type': '日期',
                                'x-list': true,
                                'x-component': 'DatePicker',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010006',
                                'x-component-props': { id: '', unix: true },
                                'x-validator': [],
                                title: '自定义日期',
                                type: 'string',
                                'x-index': 2,
                                'x-decorator': 'FormItem',
                                name: 'HEZGmdiD3C',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER'
                            }
                        }
                    },
                    j7St4GBLhl: {
                        'x-component': 'ModuleRight',
                        type: 'void',
                        'x-index': 1,
                        properties: {
                            '35990100879000022082200010001': {
                                'x-component-type': '小数',
                                'x-list': true,
                                'x-component': 'NumberPicker',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010001',
                                'x-component-props': { min: 0, max: 10000, precision: 2, id: '' },
                                'x-validator': [],
                                title: '自定义小数',
                                type: 'number',
                                'x-index': 3,
                                'x-decorator': 'FormItem',
                                name: 'GGwu7IiRtW',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER'
                            },
                            '35990100879000022082200010002': {
                                'x-component-type': '多行文本框',
                                'x-list': true,
                                'x-component': 'Input.TextArea',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010002',
                                'x-component-props': { id: '' },
                                'x-validator': [{ disallowEmoticon: true }],
                                type: 'string',
                                title: '自定义多行',
                                'x-index': 0,
                                'x-decorator': 'FormItem',
                                name: 'Av7VfWqK2v',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER',
                                maxLength: 512
                            },
                            '35990100879000022082200010005': {
                                'x-component-type': '日期时间',
                                'x-list': true,
                                'x-component': 'DatePicker',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010005',
                                'x-component-props': { showTime: true, id: '', unix: true },
                                'x-validator': [],
                                title: '自定义日期时间',
                                type: 'string',
                                'x-index': 2,
                                'x-decorator': 'FormItem',
                                name: 'bI__sGHA_N',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER'
                            },
                            '35990100879000022082200010008': {
                                add: false,
                                'x-component-type': '多选列表',
                                'x-list': true,
                                'x-component': 'MultipleSelect',
                                'x-filter': true,
                                color: false,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                customFieldId: '35990100879000022082200010008',
                                'x-component-props': {
                                    mode: 'multiple',
                                    optionFilterProp: 'label',
                                    showSearch: true,
                                    id: '',
                                    allowClear: true
                                },
                                'x-validator': [],
                                title: '自定义多选',
                                type: 'array',
                                'x-index': 1,
                                enum: [
                                    { color: '#BD1E2E', isCustom: true, label: '自定义多选A', value: '自定义多选A' },
                                    { color: '#DA681C', isCustom: true, label: '自定义多选B', value: '自定义多选B' }
                                ],
                                isSelectAll: true,
                                'x-decorator': 'FormItem',
                                name: 'U2BSHfiFAx',
                                isCustom: true,
                                fieldType: 'TD_CUSTOMER',
                                hideEnum: []
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'customerPhone',
                                'x-component-props': { size: 'large', id: 'customerPhone' },
                                'x-validator': [{ disallowEmoticon: true }],
                                type: 'string',
                                title: '固定电话',
                                'x-index': 2,
                                fieldType: 'TD_CUSTOMER'
                            },
                            customerAbbreviation: {
                                'x-component-type': '单行文本框',
                                'x-decorator': 'FormItem',
                                'x-component': 'Input',
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'customerAbbreviation',
                                'x-component-props': { size: 'large', id: 'customerAbbreviation' },
                                'x-validator': [{ disallowEmoticon: true }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'customizeAddress',
                                'x-component-props': { id: 'customizeAddress' },
                                'x-validator': [{ disallowEmoticon: true }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                'x-component-props': { size: 'large', id: 'customerName' },
                                'x-validator': [{ disallowEmoticon: true }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'webAddress',
                                'x-component-props': { size: 'large', id: 'webAddress' },
                                'x-validator': ['url', { disallowEmoticon: true }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'memo',
                                'x-component-props': { id: 'memo' },
                                'x-validator': [{ disallowEmoticon: true }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                'x-component-props': { id: 'customerNo' },
                                'x-validator': [{ checkCustomerNoDuplicate: true, triggerType: 'onBlur' }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                name: 'customerFax',
                                'x-component-props': { size: 'large', id: 'customerFax' },
                                'x-validator': [{ disallowEmoticon: true }],
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                'x-component-props': {
                                    optionFilterProp: 'label',
                                    showSearch: true,
                                    id: 'customerType',
                                    allowClear: true
                                },
                                'x-validator': [],
                                type: 'string',
                                title: '客户类型',
                                'x-index': 1,
                                enum: [
                                    { label: '采购商', value: 'BUYERS' },
                                    { label: '出口商', value: 'EXPORTER' },
                                    { label: '进口商', value: 'IMPORTER' },
                                    { label: '个人消费者', value: 'INDIVIDUAL_CONSUMER' },
                                    { label: '供应商', value: 'SUPPLIER' },
                                    { label: '贸易公司', value: 'TRADING_COMPANY' }
                                ],
                                'x-decorator': 'FormItem',
                                name: 'customerType',
                                fieldType: 'TD_CUSTOMER'
                            },
                            customerSource: {
                                'x-component-type': '单选列表',
                                'x-list': true,
                                'x-component': 'Select',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                                'x-component-props': {
                                    optionFilterProp: 'label',
                                    showSearch: true,
                                    id: 'customerSource',
                                    allowClear: true
                                },
                                'x-validator': [],
                                type: 'string',
                                title: '客户来源',
                                'x-index': 0,
                                enum: [
                                    { label: '商业数据', value: 'BUSINESS_DATA' },
                                    { label: '客户推荐', value: 'CUSTOMER_RECOMMENDATION' },
                                    { label: '电商平台', value: 'ECOMMERCE_PLATFORM' },
                                    { label: '展会', value: 'EXHIBITION' },
                                    { label: '社交平台', value: 'SOCIAL_PLATFORM' }
                                ],
                                'x-decorator': 'FormItem',
                                name: 'customerSource',
                                fieldType: 'TD_CUSTOMER'
                            }
                        }
                    },
                    fSfzyoIGUs: {
                        'x-component': 'ModuleRight',
                        type: 'void',
                        'x-index': 1,
                        properties: {
                            status: {
                                'x-component-type': '单选列表',
                                'x-list': true,
                                'x-component': 'Select',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
                                    { label: '持续跟进', value: 'FOLLOW_UP' },
                                    { label: '无效客户', value: 'INACTIVE' },
                                    { label: '初步接触', value: 'INITIAL_CONTACT' },
                                    { label: '忠诚客户', value: 'LOYAL_CUSTOMERS' },
                                    { label: '潜在客户', value: 'POTENTIAL_CUSTOMERS' },
                                    { label: '成交客户', value: 'TRANSACTION_CUSTOMERS' }
                                ],
                                'x-decorator': 'FormItem',
                                name: 'status',
                                fieldType: 'TD_CUSTOMER'
                            },
                            tags: {
                                'x-component-type': '多选列表',
                                'x-list': true,
                                'x-component': 'XtCustomSelect',
                                'x-filter': true,
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
                                'x-index': 1,
                                'x-decorator': 'FormItem',
                                name: 'tags',
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
                        'x-component-props': { twoColumn: true, id: 'contactModels' },
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
                                                '35990100879000022082200010011': {
                                                    'x-component-type': '日期',
                                                    'x-list': true,
                                                    'x-component': 'DatePicker',
                                                    'x-filter': true,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010011',
                                                    'x-component-props': { id: '', unix: true },
                                                    'x-validator': [],
                                                    title: '联系人日期',
                                                    type: 'string',
                                                    'x-index': 7,
                                                    'x-decorator': 'FormItem',
                                                    name: 'JlfyF7oZu4',
                                                    isCustom: true,
                                                    fieldType: 'TD_CONTACT'
                                                },
                                                '35990100879000022082200010013': {
                                                    'x-component-type': '单行文本框',
                                                    'x-list': true,
                                                    'x-component': 'ArrayItems',
                                                    'x-filter': true,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010013',
                                                    'x-component-props': { id: '' },
                                                    type: 'array',
                                                    title: '联系人单行',
                                                    'x-index': 5,
                                                    default: [''],
                                                    'x-decorator': 'FormItem',
                                                    name: 'fTKM0HBklq',
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
                                                                    style: { flexGrow: 1 }
                                                                },
                                                                'x-component-props': { size: 'large', id: 'input' },
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
                                                                    style: { marginLeft: 10 }
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
                                                                style: { padding: 0 },
                                                                type: 'link'
                                                            },
                                                            type: 'void',
                                                            title: '添加'
                                                        }
                                                    }
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
                                                    'x-component-props': { id: 'gender', allowClear: true },
                                                    type: 'boolean',
                                                    title: '性别',
                                                    'x-index': 1,
                                                    enum: [
                                                        { label: '男', value: true },
                                                        { label: '女', value: false }
                                                    ],
                                                    'x-decorator': 'FormItem',
                                                    name: 'gender',
                                                    fieldType: 'TD_CONTACT'
                                                },
                                                '35990100879000022082200010016': {
                                                    'x-component-type': '整数字段',
                                                    'x-list': true,
                                                    'x-component': 'NumberPicker',
                                                    'x-filter': true,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010016',
                                                    'x-component-props': { min: 0, max: 10000, precision: 0, id: '' },
                                                    'x-validator': [],
                                                    title: '联系人整数',
                                                    type: 'number',
                                                    'x-index': 8,
                                                    'x-decorator': 'FormItem',
                                                    name: '50r0mlZc1i',
                                                    isCustom: true,
                                                    fieldType: 'TD_CONTACT'
                                                },
                                                '35990100879000022082200010015': {
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
                                                    customFieldId: '35990100879000022082200010015',
                                                    'x-component-props': {
                                                        optionFilterProp: 'label',
                                                        showSearch: true,
                                                        id: '',
                                                        allowClear: true
                                                    },
                                                    'x-validator': [],
                                                    title: '联系人单选',
                                                    type: 'string',
                                                    'x-index': 6,
                                                    enum: [
                                                        { isCustom: true, label: '联系人单选A', value: '联系人单选A' },
                                                        { isCustom: true, label: '联系人单选B', value: '联系人单选B' }
                                                    ],
                                                    isSelectAll: true,
                                                    'x-decorator': 'FormItem',
                                                    name: 'vxmLqt1rM3',
                                                    isCustom: true,
                                                    fieldType: 'TD_CONTACT',
                                                    hideEnum: []
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
                                                    'x-component-props': { size: 'large', id: 'contactName' },
                                                    'x-validator': [{ disallowEmoticon: true }],
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
                                                    'x-component-type': '单行文本框',
                                                    'x-decorator': 'FormItem',
                                                    'x-component': 'Input',
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    name: 'position',
                                                    'x-validator': [{ disallowEmoticon: true }],
                                                    'x-component-props': { size: 'large', id: 'position' },
                                                    title: '职位',
                                                    type: 'string',
                                                    'x-index': 2,
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
                                                    'x-component-props': { id: 'contactPhone' },
                                                    type: 'array',
                                                    title: '电话',
                                                    'x-index': 3,
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
                                                                    style: { flexGrow: 1 }
                                                                },
                                                                'x-component-props': { size: 'large', id: 'input' },
                                                                'x-validator': [{ disallowEmoticon: true }],
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
                                                                    style: { marginLeft: 10 }
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
                                                                style: { padding: 0 },
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
                                                    'x-component-props': { id: 'socialMediaModels' },
                                                    type: 'array',
                                                    title: '社交账号',
                                                    'x-index': 4,
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
                                                                            { label: 'FaceBook', value: 'FACEBOOK' },
                                                                            { label: 'Twitter', value: 'TWITTER' },
                                                                            { label: 'QQ', value: 'QQ' },
                                                                            { label: 'Wechat', value: 'WECHAT' },
                                                                            { label: 'Linkedin', value: 'LINKEDIN' },
                                                                            { label: 'Skype', value: 'SKYPE' },
                                                                            { label: 'WhatsApp', value: 'WHATSAPP' }
                                                                        ]
                                                                    },
                                                                    accountNumber: {
                                                                        'x-component-type': '单行文本框',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Input',
                                                                        'x-decorator-props': {
                                                                            layout: 'vertical',
                                                                            labelAlign: 'left',
                                                                            style: { flexGrow: 1 }
                                                                        },
                                                                        name: 'accountNumber',
                                                                        'x-component-props': {
                                                                            size: 'large',
                                                                            id: 'accountNumber'
                                                                        },
                                                                        'x-validator': [{ disallowEmoticon: true }],
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
                                                                            style: { marginLeft: 10 }
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
                                                                style: { padding: 0 },
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
                                                    'x-component-props': { id: 'birthday' },
                                                    type: 'string',
                                                    title: '生日',
                                                    'x-index': 1,
                                                    fieldType: 'TD_CONTACT'
                                                },
                                                '35990100879000022082200010012': {
                                                    'x-component-type': '小数',
                                                    'x-list': true,
                                                    'x-component': 'NumberPicker',
                                                    'x-filter': true,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010012',
                                                    'x-component-props': { min: 0, max: 10000, precision: 2, id: '' },
                                                    'x-validator': [],
                                                    title: '联系人小数',
                                                    type: 'number',
                                                    'x-index': 7,
                                                    'x-decorator': 'FormItem',
                                                    name: 'omEppkoKdX',
                                                    isCustom: true,
                                                    fieldType: 'TD_CONTACT'
                                                },
                                                '35990100879000022082200010014': {
                                                    'x-component-type': '日期时间',
                                                    'x-list': true,
                                                    'x-component': 'DatePicker',
                                                    'x-filter': true,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010014',
                                                    'x-component-props': { showTime: true, id: '', unix: true },
                                                    'x-validator': [],
                                                    title: '联系人日期时间',
                                                    type: 'string',
                                                    'x-index': 6,
                                                    'x-decorator': 'FormItem',
                                                    name: 'TXCg7TpU4o',
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
                                                        { triggerType: 'onBlur', required: true },
                                                        { disallowEmoticon: true, triggerType: 'onBlur' },
                                                        { checkDuplicate: true, triggerType: 'onBlur' }
                                                    ],
                                                    'x-component-props': { size: 'large', id: 'contactEmail' },
                                                    type: 'string',
                                                    title: '邮箱',
                                                    'x-index': 0,
                                                    required: true,
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
                                                    'x-validator': [{ disallowEmoticon: true }],
                                                    'x-component-props': { size: 'large', id: 'contactFax' },
                                                    type: 'string',
                                                    title: '传真',
                                                    'x-index': 2,
                                                    fieldType: 'TD_CONTACT',
                                                    maxLength: 100
                                                },
                                                '35990100879000022082200010009': {
                                                    'x-component-type': '多行文本框',
                                                    'x-list': true,
                                                    'x-component': 'Input.TextArea',
                                                    'x-filter': true,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010009',
                                                    'x-component-props': { id: '' },
                                                    'x-validator': [{ disallowEmoticon: true }],
                                                    type: 'string',
                                                    title: '联系人多行',
                                                    'x-index': 4,
                                                    'x-decorator': 'FormItem',
                                                    name: 'i7xS8pBFXA',
                                                    isCustom: true,
                                                    fieldType: 'TD_CONTACT',
                                                    maxLength: 512
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
                                                    'x-component-props': { id: 'remark' },
                                                    'x-validator': [{ disallowEmoticon: true }],
                                                    type: 'string',
                                                    title: '联系人备注',
                                                    'x-index': 3,
                                                    fieldType: 'TD_CONTACT',
                                                    maxLength: 512
                                                },
                                                '35990100879000022082200010010': {
                                                    add: false,
                                                    'x-component-type': '多选列表',
                                                    'x-list': true,
                                                    'x-component': 'MultipleSelect',
                                                    'x-filter': true,
                                                    color: false,
                                                    'x-decorator-props': {
                                                        layout: 'vertical',
                                                        labelAlign: 'left',
                                                        colon: false
                                                    },
                                                    customFieldId: '35990100879000022082200010010',
                                                    'x-component-props': {
                                                        mode: 'multiple',
                                                        optionFilterProp: 'label',
                                                        showSearch: true,
                                                        id: '',
                                                        allowClear: true
                                                    },
                                                    'x-validator': [],
                                                    title: '联系人多选',
                                                    type: 'array',
                                                    'x-index': 5,
                                                    enum: [
                                                        {
                                                            color: '#BD1E2E',
                                                            isCustom: true,
                                                            label: '联系人多选A',
                                                            value: '联系人多选A'
                                                        },
                                                        {
                                                            color: '#DA681C',
                                                            isCustom: true,
                                                            label: '联系人多选B',
                                                            value: '联系人多选B'
                                                        }
                                                    ],
                                                    isSelectAll: true,
                                                    'x-decorator': 'FormItem',
                                                    name: 'g5tKvwRjav',
                                                    isCustom: true,
                                                    fieldType: 'TD_CONTACT',
                                                    hideEnum: []
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
                                                'x-hidden': '{{$deps.contactModels?.length &lt;= 1 ? true : false }}'
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
                                            'x-component-props': { title: '联系人' },
                                            type: 'void',
                                            'x-index': 0
                                        },
                                        tgfnpbqvlgl: { 'x-component': 'ArrayItems.Remove', type: 'void', 'x-index': 1 }
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
    },
    templateCraftjs: {
        de15cp2CeH: {
            parent: 'RQPo4CrX7e',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'ArrayItems',
            custom: {},
            type: { resolvedName: 'ArrayItems' },
            props: {
                field: {
                    'x-component-type': '组合文本框',
                    'x-component': 'ArrayItems',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { id: 'socialMediaModels' },
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
                                            style: { marginRight: 8, flexShrink: 0, width: 124, minWidth: 124 }
                                        },
                                        name: 'socialMediaType',
                                        'x-component-props': {
                                            optionFilterProp: 'label',
                                            showSearch: true,
                                            id: 'socialMediaType'
                                        },
                                        type: 'string',
                                        enum: [
                                            { label: 'FaceBook', value: 'FACEBOOK' },
                                            { label: 'Twitter', value: 'TWITTER' },
                                            { label: 'QQ', value: 'QQ' },
                                            { label: 'Wechat', value: 'WECHAT' },
                                            { label: 'Linkedin', value: 'LINKEDIN' },
                                            { label: 'Skype', value: 'SKYPE' },
                                            { label: 'WhatsApp', value: 'WHATSAPP' }
                                        ]
                                    },
                                    accountNumber: {
                                        'x-component-type': '单行文本框',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-decorator-props': {
                                            layout: 'vertical',
                                            labelAlign: 'left',
                                            style: { flexGrow: 1 }
                                        },
                                        name: 'accountNumber',
                                        'x-component-props': { size: 'large', id: 'accountNumber' },
                                        'x-validator': [{ disallowEmoticon: true }],
                                        type: 'string',
                                        maxLength: 100
                                    },
                                    remove: {
                                        'x-decorator': 'FormItem',
                                        'x-component': 'ArrayItems.Remove',
                                        'x-decorator-props': { layout: 'vertical', labelAlign: 'left' },
                                        'x-component-props': { atLeastOne: true, style: { marginLeft: 10 } },
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
                            'x-component-props': { noIcon: true, block: false, style: { padding: 0 }, type: 'link' },
                            type: 'void',
                            title: '添加社交账号'
                        }
                    }
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
            }
        },
        hudxz1dtorr: {
            parent: 'ROOT',
            linkedNodes: { module_right: 'vmcoGOi3Nh', module_left: 'eAjONKvzlV' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Module',
            custom: {},
            type: { resolvedName: 'Module' },
            props: { field: { 'x-component': 'ModuleCard', module: true, type: 'void', title: '附件' } }
        },
        omEppkoKdX: {
            parent: '32wVskLBQ4',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'sn',
            custom: { error: '' },
            type: { resolvedName: 'NumberPicker' },
            props: {
                field: {
                    'x-component-type': '小数',
                    'x-list': true,
                    'x-component': 'NumberPicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010012',
                    'x-component-props': { min: 0, max: 10000, precision: 2, id: '' },
                    'x-validator': [],
                    title: '联系人小数',
                    type: 'number',
                    'x-index': 7,
                    'x-decorator': 'FormItem',
                    name: 'omEppkoKdX',
                    isCustom: true,
                    fieldType: 'TD_CONTACT'
                },
                remain: 50,
                componentProps: { precision: 2 },
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
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
            type: { resolvedName: 'XtCustomSelect' },
            props: {
                field: {
                    'x-component-type': '多选列表',
                    'x-list': true,
                    'x-decorator': 'FormItem',
                    'x-component': 'XtCustomSelect',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
            }
        },
        PwZDlsKR76: {
            parent: 'PSAoo8yfQ-',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'an',
            custom: { error: '' },
            type: { resolvedName: 'Select' },
            props: {
                field: {
                    add: false,
                    'x-component-type': '单选列表',
                    'x-list': true,
                    'x-component': 'Select',
                    'x-filter': true,
                    color: false,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010004',
                    'x-component-props': { optionFilterProp: 'label', showSearch: true, id: '', allowClear: true },
                    'x-validator': [],
                    title: '自定义单选',
                    type: 'string',
                    'x-index': 1,
                    enum: [
                        { isCustom: true, label: '自定义单选A', value: '自定义单选A' },
                        { isCustom: true, label: '自定义单选B', value: '自定义单选B' }
                    ],
                    isSelectAll: true,
                    'x-decorator': 'FormItem',
                    name: 'PwZDlsKR76',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER',
                    hideEnum: []
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
            }
        },
        '50r0mlZc1i': {
            parent: 'RQPo4CrX7e',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'sn',
            custom: { error: '' },
            type: { resolvedName: 'NumberPicker' },
            props: {
                field: {
                    'x-component-type': '整数字段',
                    'x-list': true,
                    'x-component': 'NumberPicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010016',
                    'x-component-props': { min: 0, max: 10000, precision: 0, id: '' },
                    'x-validator': [],
                    title: '联系人整数',
                    type: 'number',
                    'x-index': 8,
                    'x-decorator': 'FormItem',
                    name: '50r0mlZc1i',
                    isCustom: true,
                    fieldType: 'TD_CONTACT'
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
            }
        },
        GGwu7IiRtW: {
            parent: 'j7St4GBLhl',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'sn',
            custom: { error: '' },
            type: { resolvedName: 'NumberPicker' },
            props: {
                field: {
                    'x-component-type': '小数',
                    'x-list': true,
                    'x-component': 'NumberPicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010001',
                    'x-component-props': { min: 0, max: 10000, precision: 2, id: '' },
                    'x-validator': [],
                    title: '自定义小数',
                    type: 'number',
                    'x-index': 3,
                    'x-decorator': 'FormItem',
                    name: 'GGwu7IiRtW',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER'
                },
                remain: 50,
                componentProps: { precision: 2 },
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'position',
                    'x-validator': [{ disallowEmoticon: true }],
                    'x-component-props': { size: 'large', id: 'position' },
                    title: '职位',
                    type: 'string',
                    fieldType: 'TD_CONTACT',
                    maxLength: 100
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
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
            type: { resolvedName: 'ArrayItems' },
            props: {
                field: {
                    'x-component-type': '叠加文本框',
                    'x-component': 'ArrayItems',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { id: 'contactPhone' },
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', style: { flexGrow: 1 } },
                                'x-component-props': { size: 'large', id: 'input' },
                                'x-validator': [{ disallowEmoticon: true }],
                                type: 'string',
                                maxLength: 100
                            },
                            remove: {
                                'x-decorator': 'FormItem',
                                'x-component': 'ArrayItems.Remove',
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left' },
                                'x-component-props': { atLeastOne: true, style: { marginLeft: 10 } },
                                type: 'void'
                            }
                        }
                    },
                    fieldType: 'TD_CONTACT',
                    maxLength: 15,
                    properties: {
                        add: {
                            'x-component': 'ArrayItems.Addition',
                            'x-component-props': { noIcon: true, block: false, style: { padding: 0 }, type: 'link' },
                            type: 'void',
                            title: '添加电话'
                        }
                    }
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'contactFax',
                    'x-validator': [{ disallowEmoticon: true }],
                    'x-component-props': { size: 'large', id: 'contactFax' },
                    type: 'string',
                    title: '传真',
                    fieldType: 'TD_CONTACT',
                    maxLength: 100
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
            }
        },
        'PSAoo8yfQ-': {
            parent: '4N2ebjpxl2',
            linkedNodes: {},
            nodes: ['6VgFZzqTxd', 'PwZDlsKR76', 'HEZGmdiD3C', 'R5aH1B6em3'],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                className: 'moduleItem_3AhEv'
            }
        },
        jg1ging5grt: {
            parent: 'ROOT',
            linkedNodes: { module_right: 'YZ73n2A8uV', module_left: 'HWsrHAflDh' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Module',
            custom: {},
            type: { resolvedName: 'Module' },
            props: { field: { 'x-component': 'ModuleCard', module: true, type: 'void', title: '基本信息' } }
        },
        '0chqj6titjf': {
            parent: 'ROOT',
            linkedNodes: { module_right: 'fSfzyoIGUs', module_left: '9j86GWnU_Q' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Module',
            custom: {},
            type: { resolvedName: 'Module' },
            props: { field: { 'x-component': 'ModuleCard', module: true, type: 'void', title: '特征信息' } }
        },
        Y9AZsfG8dL: {
            parent: '32wVskLBQ4',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'DatePicker',
            custom: {},
            type: { resolvedName: 'DatePicker' },
            props: {
                field: {
                    'x-component-type': '日期',
                    'x-decorator': 'FormItem',
                    'x-component': 'DatePicker',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'birthday',
                    'x-validator': [],
                    'x-component-props': { id: 'birthday' },
                    type: 'string',
                    title: '生日',
                    fieldType: 'TD_CONTACT'
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
            }
        },
        j7St4GBLhl: {
            parent: '4N2ebjpxl2',
            linkedNodes: {},
            nodes: ['Av7VfWqK2v', 'U2BSHfiFAx', 'bI__sGHA_N', 'GGwu7IiRtW'],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleRight', type: 'void' },
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
            type: { resolvedName: 'Upload' },
            props: {
                field: {
                    'x-component-type': '上传文件',
                    'x-decorator': 'FormItem',
                    'x-component': 'Upload',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'attachmentVOS',
                    'x-component-props': {
                        buttonProps: { block: true },
                        data: { attachmentType: 'TDCustomerAttachment', usage: 'TDCustomerAttachment' },
                        name: 'files',
                        multiple: true,
                        style: { display: 'block' },
                        textContent: '点击上传',
                        placeholder: '上传文件大小50M以内（限制10个附件)',
                        maxCount: 10
                    },
                    'x-validator': [],
                    type: 'Array&lt;object&gt;',
                    title: '上传附件',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 10
                },
                source: 'hudxz1dtorr',
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'CustomerNoInput' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'CustomerNoInput',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { id: 'customerNo' },
                    'x-validator': [{ checkCustomerNoDuplicate: true, triggerType: 'onBlur' }],
                    type: 'string',
                    title: '客户编号',
                    disableHide: true,
                    disableEdit: true,
                    'x-decorator': 'FormItem',
                    name: 'customerNo',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 32
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'Select' },
            props: {
                field: {
                    'x-component-type': '单选列表',
                    'x-list': true,
                    'x-component': 'Select',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
                        { label: '持续跟进', value: 'FOLLOW_UP' },
                        { label: '无效客户', value: 'INACTIVE' },
                        { label: '初步接触', value: 'INITIAL_CONTACT' },
                        { label: '忠诚客户', value: 'LOYAL_CUSTOMERS' },
                        { label: '潜在客户', value: 'POTENTIAL_CUSTOMERS' },
                        { label: '成交客户', value: 'TRANSACTION_CUSTOMERS' }
                    ],
                    'x-decorator': 'FormItem',
                    name: 'status',
                    fieldType: 'TD_CUSTOMER'
                },
                source: '0chqj6titjf',
                type: 'TD_CUSTOMER'
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
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                className: 'moduleItem_3AhEv'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-validator': [
                        { triggerType: 'onBlur', required: true },
                        { disallowEmoticon: true, triggerType: 'onBlur' },
                        { checkDuplicate: true, triggerType: 'onBlur' }
                    ],
                    'x-component-props': { size: 'large', id: 'contactEmail' },
                    type: 'string',
                    title: '邮箱',
                    required: true,
                    'x-decorator': 'FormItem',
                    name: 'contactEmail',
                    fieldType: 'TD_CONTACT',
                    maxLength: 100
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'customerPhone',
                    'x-component-props': { size: 'large', id: 'customerPhone' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '固定电话',
                    fieldType: 'TD_CUSTOMER'
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
            }
        },
        bI__sGHA_N: {
            parent: 'j7St4GBLhl',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'cn',
            custom: { error: '' },
            type: { resolvedName: 'DatePicker' },
            props: {
                field: {
                    'x-component-type': '日期时间',
                    'x-list': true,
                    'x-component': 'DatePicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010005',
                    'x-component-props': { showTime: true, id: '', unix: true },
                    'x-validator': [],
                    title: '自定义日期时间',
                    type: 'string',
                    'x-index': 2,
                    'x-decorator': 'FormItem',
                    name: 'bI__sGHA_N',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER'
                },
                remain: 50,
                componentProps: { showTime: true },
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'Select' },
            props: {
                field: {
                    'x-component-type': '单选列表',
                    'x-list': true,
                    'x-component': 'Select',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
                        { label: '商业数据', value: 'BUSINESS_DATA' },
                        { label: '客户推荐', value: 'CUSTOMER_RECOMMENDATION' },
                        { label: '电商平台', value: 'ECOMMERCE_PLATFORM' },
                        { label: '展会', value: 'EXHIBITION' },
                        { label: '社交平台', value: 'SOCIAL_PLATFORM' }
                    ],
                    'x-decorator': 'FormItem',
                    name: 'customerSource',
                    fieldType: 'TD_CUSTOMER'
                },
                source: '0chqj6titjf',
                type: 'TD_CUSTOMER'
            }
        },
        R5aH1B6em3: {
            parent: 'PSAoo8yfQ-',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'sn',
            custom: { error: '' },
            type: { resolvedName: 'NumberPicker' },
            props: {
                field: {
                    'x-component-type': '整数字段',
                    'x-list': true,
                    'x-component': 'NumberPicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010007',
                    'x-component-props': { min: 0, max: 10000, precision: 0, id: '' },
                    'x-validator': [],
                    title: '自定义整数',
                    type: 'number',
                    'x-index': 3,
                    'x-decorator': 'FormItem',
                    name: 'R5aH1B6em3',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER'
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
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
                field: { 'x-component': 'ModuleRight', type: 'void' },
                name: 'ModuleRight',
                className: 'moduleItem_3AhEv'
            }
        },
        i7xS8pBFXA: {
            parent: '32wVskLBQ4',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'on',
            custom: { error: '' },
            type: { resolvedName: 'TextArea' },
            props: {
                field: {
                    'x-component-type': '多行文本框',
                    'x-list': true,
                    'x-component': 'Input.TextArea',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010009',
                    'x-component-props': { id: '' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '联系人多行',
                    'x-index': 4,
                    'x-decorator': 'FormItem',
                    name: 'i7xS8pBFXA',
                    isCustom: true,
                    fieldType: 'TD_CONTACT',
                    maxLength: 512
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
            }
        },
        Av7VfWqK2v: {
            parent: 'j7St4GBLhl',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'on',
            custom: { error: '' },
            type: { resolvedName: 'TextArea' },
            props: {
                field: {
                    'x-component-type': '多行文本框',
                    'x-list': true,
                    'x-component': 'Input.TextArea',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010002',
                    'x-component-props': { id: '' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '自定义多行',
                    'x-index': 0,
                    'x-decorator': 'FormItem',
                    name: 'Av7VfWqK2v',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 512
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { size: 'large', id: 'contactName' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '姓名',
                    required: true,
                    disableHide: true,
                    'x-decorator': 'FormItem',
                    name: 'contactName',
                    fieldType: 'TD_CONTACT',
                    maxLength: 100
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
            }
        },
        fTKM0HBklq: {
            parent: 'RQPo4CrX7e',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'tn',
            custom: { error: '' },
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'ArrayItems',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010013',
                    'x-component-props': { id: '' },
                    type: 'array',
                    title: '联系人单行',
                    'x-index': 5,
                    default: [''],
                    'x-decorator': 'FormItem',
                    name: 'fTKM0HBklq',
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', style: { flexGrow: 1 } },
                                'x-component-props': { size: 'large', id: 'input' },
                                'x-validator': [],
                                type: 'string',
                                maxLength: 100
                            },
                            remove: {
                                'x-decorator': 'FormItem',
                                'x-component': 'ArrayItems.Remove',
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left' },
                                'x-component-props': { atLeastOne: true, style: { marginLeft: 10 } },
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
                            'x-component-props': { noIcon: true, block: false, style: { padding: 0 }, type: 'link' },
                            type: 'void',
                            title: '添加'
                        }
                    }
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
            }
        },
        '4N2ebjpxl2': {
            parent: 'ROOT',
            linkedNodes: { module_right: 'j7St4GBLhl', module_left: 'PSAoo8yfQ-' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Je',
            custom: {},
            type: { resolvedName: 'Module' },
            props: {
                field: { 'x-component': 'ModuleCard', module: true, isCustom: true, type: 'void', title: '自定义模块' },
                isMember: true
            }
        },
        TXCg7TpU4o: {
            parent: '32wVskLBQ4',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'cn',
            custom: { error: '' },
            type: { resolvedName: 'DatePicker' },
            props: {
                field: {
                    'x-component-type': '日期时间',
                    'x-list': true,
                    'x-component': 'DatePicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010014',
                    'x-component-props': { showTime: true, id: '', unix: true },
                    'x-validator': [],
                    title: '联系人日期时间',
                    type: 'string',
                    'x-index': 6,
                    'x-decorator': 'FormItem',
                    name: 'TXCg7TpU4o',
                    isCustom: true,
                    fieldType: 'TD_CONTACT'
                },
                remain: 50,
                componentProps: { showTime: true },
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
            }
        },
        vxmLqt1rM3: {
            parent: 'RQPo4CrX7e',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'an',
            custom: { error: '' },
            type: { resolvedName: 'Select' },
            props: {
                field: {
                    add: false,
                    'x-component-type': '单选列表',
                    'x-list': true,
                    'x-component': 'Select',
                    'x-filter': true,
                    color: false,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010015',
                    'x-component-props': { optionFilterProp: 'label', showSearch: true, id: '', allowClear: true },
                    'x-validator': [],
                    title: '联系人单选',
                    type: 'string',
                    'x-index': 6,
                    enum: [
                        { isCustom: true, label: '联系人单选A', value: '联系人单选A' },
                        { isCustom: true, label: '联系人单选B', value: '联系人单选B' }
                    ],
                    isSelectAll: true,
                    'x-decorator': 'FormItem',
                    name: 'vxmLqt1rM3',
                    isCustom: true,
                    fieldType: 'TD_CONTACT',
                    hideEnum: []
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
            }
        },
        JlfyF7oZu4: {
            parent: 'RQPo4CrX7e',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'cn',
            custom: { error: '' },
            type: { resolvedName: 'DatePicker' },
            props: {
                field: {
                    'x-component-type': '日期',
                    'x-list': true,
                    'x-component': 'DatePicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010011',
                    'x-component-props': { id: '', unix: true },
                    'x-validator': [],
                    title: '联系人日期',
                    type: 'string',
                    'x-index': 7,
                    'x-decorator': 'FormItem',
                    name: 'JlfyF7oZu4',
                    isCustom: true,
                    fieldType: 'TD_CONTACT'
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
            }
        },
        ROOT: {
            linkedNodes: {},
            nodes: ['jg1ging5grt', '7pktwpbt1oe', '0chqj6titjf', '4N2ebjpxl2', 'hudxz1dtorr'],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: { className: 'frameWrap_39Gff' }
        },
        'W9MUhbm1-o': {
            parent: 'YZ73n2A8uV',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Input',
            custom: {},
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'customerAbbreviation',
                    'x-component-props': { size: 'large', id: 'customerAbbreviation' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '客户简称',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 80
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'Select' },
            props: {
                field: {
                    'x-component-type': '单选列表',
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
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
                        { label: '采购商', value: 'BUYERS' },
                        { label: '出口商', value: 'EXPORTER' },
                        { label: '进口商', value: 'IMPORTER' },
                        { label: '个人消费者', value: 'INDIVIDUAL_CONSUMER' },
                        { label: '供应商', value: 'SUPPLIER' },
                        { label: '贸易公司', value: 'TRADING_COMPANY' }
                    ]
                },
                source: '0chqj6titjf',
                type: 'TD_CUSTOMER'
            }
        },
        g5tKvwRjav: {
            parent: '32wVskLBQ4',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'fn',
            custom: { error: '' },
            type: { resolvedName: 'MultipleSelect' },
            props: {
                field: {
                    add: false,
                    'x-component-type': '多选列表',
                    'x-list': true,
                    'x-component': 'MultipleSelect',
                    'x-filter': true,
                    color: false,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010010',
                    'x-component-props': {
                        mode: 'multiple',
                        optionFilterProp: 'label',
                        showSearch: true,
                        id: '',
                        allowClear: true
                    },
                    'x-validator': [],
                    title: '联系人多选',
                    type: 'array',
                    'x-index': 5,
                    enum: [
                        { color: '#BD1E2E', isCustom: true, label: '联系人多选A', value: '联系人多选A' },
                        { color: '#DA681C', isCustom: true, label: '联系人多选B', value: '联系人多选B' }
                    ],
                    isSelectAll: true,
                    'x-decorator': 'FormItem',
                    name: 'g5tKvwRjav',
                    isCustom: true,
                    fieldType: 'TD_CONTACT',
                    hideEnum: []
                },
                remain: 50,
                componentProps: { showColor: true },
                source: 'component',
                isMember: true,
                type: 'TD_CONTACT'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'customerFax',
                    'x-component-props': { size: 'large', id: 'customerFax' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '传真',
                    fieldType: 'TD_CUSTOMER'
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
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
                field: { 'x-component': 'ModuleRight', type: 'void' },
                name: 'ModuleRight',
                className: 'moduleItem_3AhEv'
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'Input',
                    'x-list-fixed': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { size: 'large', id: 'customerName' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '客户名称',
                    required: true,
                    disableHide: true,
                    'x-decorator': 'FormItem',
                    name: 'customerName',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 80
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
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
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                className: 'moduleItem_3AhEv'
            }
        },
        U2BSHfiFAx: {
            parent: 'j7St4GBLhl',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'fn',
            custom: { error: '' },
            type: { resolvedName: 'MultipleSelect' },
            props: {
                field: {
                    add: false,
                    'x-component-type': '多选列表',
                    'x-list': true,
                    'x-component': 'MultipleSelect',
                    'x-filter': true,
                    color: false,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010008',
                    'x-component-props': {
                        mode: 'multiple',
                        optionFilterProp: 'label',
                        showSearch: true,
                        id: '',
                        allowClear: true
                    },
                    'x-validator': [],
                    title: '自定义多选',
                    type: 'array',
                    'x-index': 1,
                    enum: [
                        { color: '#BD1E2E', isCustom: true, label: '自定义多选A', value: '自定义多选A' },
                        { color: '#DA681C', isCustom: true, label: '自定义多选B', value: '自定义多选B' }
                    ],
                    isSelectAll: true,
                    'x-decorator': 'FormItem',
                    name: 'U2BSHfiFAx',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER',
                    hideEnum: []
                },
                remain: 50,
                componentProps: { showColor: true },
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
            }
        },
        '7pktwpbt1oe': {
            parent: 'ROOT',
            linkedNodes: { module_right: '32wVskLBQ4', module_left: 'RQPo4CrX7e' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Module',
            custom: {},
            type: { resolvedName: 'Module' },
            props: {
                field: {
                    'x-component': 'ModuleCard',
                    module: true,
                    type: 'void',
                    title: '联系人',
                    properties: {
                        contactModels: {
                            default: [{}],
                            'x-component': 'ArrayItems',
                            name: 'contactModels',
                            'x-component-props': { twoColumn: true, id: 'contactModels' },
                            'x-validator': [],
                            type: 'array',
                            'x-index': 0,
                            items: {
                                'x-validator': [],
                                type: 'object',
                                properties: {
                                    tgfnpbqvlgv: { type: 'void', 'x-index': 1 },
                                    tgfnpbqvlgu: {
                                        'x-component': 'Space',
                                        'x-reactions': {
                                            fulfill: {
                                                schema: {
                                                    'x-hidden':
                                                        '{{$deps.contactModels?.length &lt;= 1 ? true : false }}'
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
                                                'x-component-props': { title: '联系人' },
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
                },
                ArrayModule: true
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
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                className: 'moduleItem_3AhEv'
            }
        },
        RQPo4CrX7e: {
            parent: '7pktwpbt1oe',
            linkedNodes: {},
            nodes: [
                'oSi3oJVpUB',
                'fY8xDBOz-P',
                'Uq9QMHz6AG',
                '9I_03IdCP_',
                'de15cp2CeH',
                'fTKM0HBklq',
                'vxmLqt1rM3',
                'JlfyF7oZu4',
                '50r0mlZc1i'
            ],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
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
            type: { resolvedName: 'TextArea' },
            props: {
                field: {
                    'x-component-type': '多行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'customizeAddress',
                    'x-component-props': { id: 'customizeAddress' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '联系地址',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 512
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
            }
        },
        '6VgFZzqTxd': {
            parent: 'PSAoo8yfQ-',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'tn',
            custom: { error: '' },
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'ArrayItems',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010003',
                    'x-component-props': { id: '' },
                    type: 'array',
                    title: '自定义单行',
                    'x-index': 0,
                    default: [''],
                    'x-decorator': 'FormItem',
                    name: '6VgFZzqTxd',
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
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left', style: { flexGrow: 1 } },
                                'x-component-props': { size: 'large', id: 'input' },
                                'x-validator': [],
                                type: 'string',
                                maxLength: 100
                            },
                            remove: {
                                'x-decorator': 'FormItem',
                                'x-component': 'ArrayItems.Remove',
                                'x-decorator-props': { layout: 'vertical', labelAlign: 'left' },
                                'x-component-props': { atLeastOne: true, style: { marginLeft: 10 } },
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
                            'x-component-props': { noIcon: true, block: false, style: { padding: 0 }, type: 'link' },
                            type: 'void',
                            title: '添加'
                        }
                    }
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
            }
        },
        '32wVskLBQ4': {
            parent: '7pktwpbt1oe',
            linkedNodes: {},
            nodes: [
                'VI9zBZw_v3',
                'Y9AZsfG8dL',
                '5tOQ6JYvlQ',
                '72gq2ezr7w',
                'i7xS8pBFXA',
                'g5tKvwRjav',
                'TXCg7TpU4o',
                'omEppkoKdX'
            ],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleRight', type: 'void' },
                name: 'ModuleRight',
                className: 'moduleItem_3AhEv'
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
            type: { resolvedName: 'TextArea' },
            props: {
                field: {
                    'x-component-type': '多行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'remark',
                    'x-component-props': { id: 'remark' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '联系人备注',
                    fieldType: 'TD_CONTACT',
                    maxLength: 512
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
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
                field: { 'x-component': 'ModuleRight', type: 'void' },
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
            type: { resolvedName: 'Select' },
            props: {
                field: {
                    'x-component-type': '单选列表',
                    disableEditEnum: true,
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'gender',
                    'x-validator': [],
                    'x-component-props': { id: 'gender', allowClear: true },
                    type: 'boolean',
                    title: '性别',
                    fieldType: 'TD_CONTACT',
                    enum: [
                        { label: '男', value: true },
                        { label: '女', value: false }
                    ]
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
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
            type: { resolvedName: 'GeoSelect' },
            props: {
                field: {
                    'x-component-type': '单选列表',
                    'x-component': 'GeoSelect',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { optionFilterProp: 'label', showSearch: true, id: 'customerGeoCode' },
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'webAddress',
                    'x-component-props': { size: 'large', id: 'webAddress' },
                    'x-validator': ['url', { disallowEmoticon: true }],
                    type: 'string',
                    title: '客户网址',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 128
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
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
            type: { resolvedName: 'TextArea' },
            props: {
                field: {
                    'x-component-type': '多行文本框',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    name: 'memo',
                    'x-component-props': { id: 'memo' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '备注',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 512
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
            }
        },
        HEZGmdiD3C: {
            parent: 'PSAoo8yfQ-',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'cn',
            custom: { error: '' },
            type: { resolvedName: 'DatePicker' },
            props: {
                field: {
                    'x-component-type': '日期',
                    'x-list': true,
                    'x-component': 'DatePicker',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    customFieldId: '35990100879000022082200010006',
                    'x-component-props': { id: '', unix: true },
                    'x-validator': [],
                    title: '自定义日期',
                    type: 'string',
                    'x-index': 2,
                    'x-decorator': 'FormItem',
                    name: 'HEZGmdiD3C',
                    isCustom: true,
                    fieldType: 'TD_CUSTOMER'
                },
                remain: 50,
                source: 'component',
                isMember: true,
                type: 'TD_CUSTOMER'
            }
        }
    },
    quickNewTemplateFormily: {
        type: 'object',
        properties: {
            td1ghnn5gtt: {
                'x-component': 'QuickModule',
                module: true,
                'x-hidden': false,
                type: 'void',
                'x-index': 0,
                properties: {
                    HYrtwh5t1te: {
                        'x-component': 'ModuleRight',
                        type: 'void',
                        'x-index': 1,
                        properties: {
                            '7pktwpbt1oe': {
                                'x-component': 'ModuleCard',
                                module: true,
                                'x-hidden': false,
                                type: 'void',
                                title: '联系人',
                                'x-index': 0,
                                properties: {
                                    contactModels: {
                                        default: [{}],
                                        'x-component': 'ArrayItems',
                                        name: 'contactModels',
                                        'x-component-props': { twoColumn: true, id: 'contactModels' },
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
                                                                        { triggerType: 'onBlur', required: true },
                                                                        {
                                                                            disallowEmoticon: true,
                                                                            triggerType: 'onBlur'
                                                                        },
                                                                        { checkDuplicate: true, triggerType: 'onBlur' },
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
                                                                    'x-index': 1,
                                                                    required: true,
                                                                    disableHide: true,
                                                                    disableEdit: true,
                                                                    'x-decorator': 'FormItem',
                                                                    name: 'contactEmail',
                                                                    fieldType: 'TD_CONTACT',
                                                                    maxLength: 100
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
                                                                    'x-validator': [{ disallowEmoticon: true }],
                                                                    type: 'string',
                                                                    title: '姓名',
                                                                    'x-index': 0,
                                                                    required: true,
                                                                    disableHide: true,
                                                                    'x-decorator': 'FormItem',
                                                                    name: 'contactName',
                                                                    fieldType: 'TD_CONTACT',
                                                                    maxLength: 100
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
                                                                'x-hidden':
                                                                    '{{$deps.contactModels?.length &lt;= 1 ? true : false }}'
                                                            }
                                                        },
                                                        dependencies: [
                                                            {
                                                                property: 'value',
                                                                name: 'contactModels',
                                                                source: 'td1ghnn5gtt.HYrtwh5t1te.7pktwpbt1oe.contactModels',
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
                                                            'x-component-props': { title: '联系人' },
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
                    },
                    AG1tirgw5ru: {
                        'x-component': 'ModuleLeft',
                        type: 'void',
                        'x-index': 0,
                        properties: {
                            hudxz1dtorr: {
                                'x-component': 'ModuleCard',
                                module: true,
                                'x-hidden': true,
                                type: 'void',
                                title: '附件',
                                'x-index': 3,
                                properties: { eAjONKvzlV: { 'x-component': 'ModuleLeft', type: 'void', 'x-index': 0 } }
                            },
                            '4N2ebjpxl2': {
                                'x-component': 'ModuleCard',
                                module: true,
                                isCustom: true,
                                'x-hidden': true,
                                type: 'void',
                                title: '自定义模块',
                                'x-index': 2,
                                properties: {
                                    'PSAoo8yfQ-': { 'x-component': 'ModuleLeft', type: 'void', 'x-index': 0 }
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
                                            customerNo: {
                                                'x-component-type': '单行文本框',
                                                'x-list': true,
                                                'x-component': 'CustomerNoInput',
                                                'x-decorator-props': {
                                                    layout: 'vertical',
                                                    labelAlign: 'left',
                                                    colon: false
                                                },
                                                'x-component-props': { id: 'customerNo' },
                                                'x-validator': [
                                                    { checkCustomerNoDuplicate: true, triggerType: 'onBlur' }
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
                                                'x-component-props': { size: 'large', id: 'customerName' },
                                                'x-validator': [{ disallowEmoticon: true }],
                                                type: 'string',
                                                title: '客户名称',
                                                'x-index': 2,
                                                required: true,
                                                disableHide: true,
                                                'x-decorator': 'FormItem',
                                                name: 'customerName',
                                                fieldType: 'TD_CUSTOMER',
                                                maxLength: 80
                                            }
                                        }
                                    }
                                }
                            },
                            '0chqj6titjf': {
                                'x-component': 'ModuleCard',
                                module: true,
                                'x-hidden': true,
                                type: 'void',
                                title: '特征信息',
                                'x-index': 1,
                                properties: {
                                    '9j86GWnU_Q': { 'x-component': 'ModuleLeft', type: 'void', 'x-index': 0 }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    quickNewTemplateCraftjs: {
        NwcfuwAmuM: {
            parent: 'HWsrHAflDh',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'CustomerNoInput',
            custom: {},
            type: { resolvedName: 'CustomerNoInput' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'CustomerNoInput',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { id: 'customerNo' },
                    'x-validator': [{ checkCustomerNoDuplicate: true, triggerType: 'onBlur' }],
                    type: 'string',
                    title: '客户编号',
                    disableHide: true,
                    disableEdit: true,
                    'x-decorator': 'FormItem',
                    name: 'customerNo',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 32
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
            }
        },
        RQPo4CrX7e: {
            parent: '7pktwpbt1oe',
            linkedNodes: {},
            nodes: ['oSi3oJVpUB', 'VI9zBZw_v3'],
            hidden: false,
            isCanvas: true,
            displayName: 'QuickModuleItemLeft',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                style: { minHeight: 200 }
            }
        },
        ROOT: {
            linkedNodes: {},
            nodes: ['td1ghnn5gtt'],
            hidden: false,
            isCanvas: false,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: { className: 'frameWrap_39Gff' }
        },
        HYrtwh5t1te: {
            parent: 'td1ghnn5gtt',
            linkedNodes: {},
            nodes: ['7pktwpbt1oe'],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: { field: { 'x-component': 'ModuleRight', type: 'void' }, name: 'ModuleRight' }
        },
        HWsrHAflDh: {
            parent: 'jg1ging5grt',
            linkedNodes: {},
            nodes: ['NwcfuwAmuM', 'YESWbtlnwQ', 'GrBKDneOqP'],
            hidden: false,
            isCanvas: true,
            displayName: 'QuickModuleItemLeft',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                style: { minHeight: 200 }
            }
        },
        VI9zBZw_v3: {
            parent: 'RQPo4CrX7e',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Input',
            custom: {},
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-validator': [
                        { triggerType: 'onBlur', required: true },
                        { disallowEmoticon: true, triggerType: 'onBlur' },
                        { checkDuplicate: true, triggerType: 'onBlur' },
                        { asyncCheckEmailDuplicate: true, triggerType: 'onBlur' }
                    ],
                    'x-component-props': { size: 'large', id: 'contactEmail' },
                    type: 'string',
                    title: '邮箱',
                    required: true,
                    disableHide: true,
                    disableEdit: true,
                    'x-decorator': 'FormItem',
                    name: 'contactEmail',
                    fieldType: 'TD_CONTACT',
                    maxLength: 100
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
            }
        },
        hudxz1dtorr: {
            parent: 'AG1tirgw5ru',
            linkedNodes: { module_left: 'eAjONKvzlV' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'QuickModuleItem',
            custom: {},
            type: { resolvedName: 'QuickModuleItem' },
            props: { field: { 'x-component': 'ModuleCard', module: true, type: 'void', title: '附件' } }
        },
        YESWbtlnwQ: {
            parent: 'HWsrHAflDh',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'GeoSelect',
            custom: {},
            type: { resolvedName: 'GeoSelect' },
            props: {
                field: {
                    'x-component-type': '单选列表',
                    'x-component': 'GeoSelect',
                    'x-filter': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { optionFilterProp: 'label', showSearch: true, id: 'customerGeoCode' },
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
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'Input',
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { size: 'large', id: 'contactName' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '姓名',
                    required: true,
                    disableHide: true,
                    'x-decorator': 'FormItem',
                    name: 'contactName',
                    fieldType: 'TD_CONTACT',
                    maxLength: 100
                },
                source: '7pktwpbt1oe',
                type: 'TD_CONTACT'
            }
        },
        'PSAoo8yfQ-': {
            parent: '4N2ebjpxl2',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: true,
            displayName: 'QuickModuleItemLeft',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                style: { minHeight: 200 }
            }
        },
        GrBKDneOqP: {
            parent: 'HWsrHAflDh',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'Input',
            custom: {},
            type: { resolvedName: 'Input' },
            props: {
                field: {
                    'x-component-type': '单行文本框',
                    'x-list': true,
                    'x-component': 'Input',
                    'x-list-fixed': true,
                    'x-decorator-props': { layout: 'vertical', labelAlign: 'left', colon: false },
                    'x-component-props': { size: 'large', id: 'customerName' },
                    'x-validator': [{ disallowEmoticon: true }],
                    type: 'string',
                    title: '客户名称',
                    required: true,
                    disableHide: true,
                    'x-decorator': 'FormItem',
                    name: 'customerName',
                    fieldType: 'TD_CUSTOMER',
                    maxLength: 80
                },
                source: 'jg1ging5grt',
                type: 'TD_CUSTOMER'
            }
        },
        '4N2ebjpxl2': {
            parent: 'AG1tirgw5ru',
            linkedNodes: { module_left: 'PSAoo8yfQ-' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'QuickModuleItem',
            custom: {},
            type: { resolvedName: 'QuickModuleItem' },
            props: {
                field: { 'x-component': 'ModuleCard', module: true, isCustom: true, type: 'void', title: '自定义模块' },
                isMember: true
            }
        },
        eAjONKvzlV: {
            parent: 'hudxz1dtorr',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: true,
            displayName: 'QuickModuleItemLeft',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                style: { minHeight: 200 }
            }
        },
        jg1ging5grt: {
            parent: 'AG1tirgw5ru',
            linkedNodes: { module_left: 'HWsrHAflDh' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'QuickModuleItem',
            custom: {},
            type: { resolvedName: 'QuickModuleItem' },
            props: { field: { 'x-component': 'ModuleCard', module: true, type: 'void', title: '基本信息' } }
        },
        '0chqj6titjf': {
            parent: 'AG1tirgw5ru',
            linkedNodes: { module_left: '9j86GWnU_Q' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'QuickModuleItem',
            custom: {},
            type: { resolvedName: 'QuickModuleItem' },
            props: { field: { 'x-component': 'ModuleCard', module: true, type: 'void', title: '特征信息' } }
        },
        td1ghnn5gtt: {
            parent: 'ROOT',
            linkedNodes: { module_right: 'HYrtwh5t1te', module_left: 'AG1tirgw5ru' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'QuickModule',
            custom: {},
            type: { resolvedName: 'QuickModule' },
            props: { field: { 'x-component': 'QuickModule', module: true, type: 'void' } }
        },
        AG1tirgw5ru: {
            parent: 'td1ghnn5gtt',
            linkedNodes: {},
            nodes: ['jg1ging5grt', '0chqj6titjf', '4N2ebjpxl2', 'hudxz1dtorr'],
            hidden: false,
            isCanvas: true,
            displayName: 'div',
            custom: {},
            type: 'div',
            props: { field: { 'x-component': 'ModuleLeft', type: 'void' }, name: 'ModuleLeft' }
        },
        '7pktwpbt1oe': {
            parent: 'HYrtwh5t1te',
            linkedNodes: { module_left: 'RQPo4CrX7e' },
            nodes: [],
            hidden: false,
            isCanvas: false,
            displayName: 'QuickModuleItem',
            custom: {},
            type: { resolvedName: 'QuickModuleItem' },
            props: {
                field: {
                    'x-component': 'ModuleCard',
                    module: true,
                    type: 'void',
                    title: '联系人',
                    properties: {
                        contactModels: {
                            default: [{}],
                            'x-component': 'ArrayItems',
                            name: 'contactModels',
                            'x-component-props': { twoColumn: true, id: 'contactModels' },
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
                                                            { triggerType: 'onBlur', required: true },
                                                            { disallowEmoticon: true, triggerType: 'onBlur' },
                                                            { checkDuplicate: true, triggerType: 'onBlur' },
                                                            { asyncCheckEmailDuplicate: true, triggerType: 'onBlur' }
                                                        ],
                                                        'x-component-props': { size: 'large', id: 'contactEmail' },
                                                        type: 'string',
                                                        title: '邮箱',
                                                        'x-index': 1,
                                                        required: true,
                                                        disableHide: true,
                                                        disableEdit: true,
                                                        'x-decorator': 'FormItem',
                                                        name: 'contactEmail',
                                                        fieldType: 'TD_CONTACT',
                                                        maxLength: 100
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
                                                        'x-component-props': { size: 'large', id: 'contactName' },
                                                        'x-validator': [{ disallowEmoticon: true }],
                                                        type: 'string',
                                                        title: '姓名',
                                                        'x-index': 0,
                                                        required: true,
                                                        disableHide: true,
                                                        'x-decorator': 'FormItem',
                                                        name: 'contactName',
                                                        fieldType: 'TD_CONTACT',
                                                        maxLength: 100
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
                                                    'x-hidden':
                                                        '{{$deps.contactModels?.length &lt;= 1 ? true : false }}'
                                                }
                                            },
                                            dependencies: [
                                                {
                                                    property: 'value',
                                                    name: 'contactModels',
                                                    source: 'td1ghnn5gtt.HYrtwh5t1te.7pktwpbt1oe.contactModels',
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
                                                'x-component-props': { title: '联系人' },
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
                },
                ArrayModule: true
            }
        },
        '9j86GWnU_Q': {
            parent: '0chqj6titjf',
            linkedNodes: {},
            nodes: [],
            hidden: false,
            isCanvas: true,
            displayName: 'QuickModuleItemLeft',
            custom: {},
            type: 'div',
            props: {
                field: { 'x-component': 'ModuleLeft', type: 'void' },
                name: 'ModuleLeft',
                style: { minHeight: 200 }
            }
        }
    }
}
