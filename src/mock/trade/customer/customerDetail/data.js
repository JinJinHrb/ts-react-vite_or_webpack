export default {
    contactModels: [
        {
            birthday: null,
            gender: null,
            contactEmail: '202107281538@vip.com',
            contactId: '19990100324000021072800010127',
            contactName: '联系人',
            contactFax: null,
            customerId: '19990100323000021072800012053',
            remark: null,
            position: null,
            contactPhone: [],
            socialMediaModels: []
        }
    ],
    basicInfo: [
        {
            key: 6,
            leftLabel: '客户编号',
            leftComponent: 'CustomerNoInput',
            leftValue: 'C000000001',
            leftMaxLength: 32,
            leftXValidator: [
                {
                    checkCustomerNoDuplicate: true,
                    triggerType: 'onBlur'
                }
            ],
            leftXIndex: 0,
            rightLabel: '客户名称',
            rightComponent: 'Input',
            rightValue: '测试用客户勿动',
            rightRequired: true,
            rightMaxLength: 80,
            rightXValidator: [
                {
                    disallowEmoticon: true
                }
            ],
            rightXIndex: 0
        },
        {
            key: 7,
            leftLabel: '国家/地区',
            leftComponent: 'GeoSelect',
            leftValue: 'AGO',
            leftRequired: true,
            leftXValidator: [],
            leftDataSource: [],
            leftXIndex: 1,
            rightLabel: '客户简称',
            rightComponent: 'Input',
            rightValue: '',
            rightMaxLength: 80,
            rightXValidator: [
                {
                    disallowEmoticon: true
                }
            ],
            rightXIndex: 1
        },
        {
            key: 8,
            leftLabel: '客户网址',
            leftComponent: 'Input',
            leftValue: '',
            leftMaxLength: 128,
            leftXValidator: [
                {
                    format: 'url',
                    triggerType: 'onBlur'
                },
                {
                    disallowEmoticon: true
                }
            ],
            leftXIndex: 2,
            rightLabel: '固定电话',
            rightComponent: 'Input',
            rightValue: '',
            rightXValidator: [
                {
                    disallowEmoticon: true
                }
            ],
            rightXIndex: 2
        },
        {
            key: 9,
            leftLabel: '传真',
            leftComponent: 'Input',
            leftValue: '',
            leftXValidator: [
                {
                    disallowEmoticon: true
                }
            ],
            leftXIndex: 3,
            rightLabel: '联系地址',
            rightComponent: 'Input.TextArea',
            rightValue: '',
            rightMaxLength: 512,
            rightXValidator: [
                {
                    disallowEmoticon: true
                }
            ],
            rightXIndex: 3
        },
        {
            key: 4,
            leftLabel: '备注',
            leftComponent: 'Input.TextArea',
            leftValue: '',
            leftMaxLength: 512,
            leftXValidator: [
                {
                    disallowEmoticon: true
                }
            ],
            leftXIndex: 4
        },
        {
            key: 5,
            leftLabel: '多选下拉',
            leftComponent: 'Select',
            leftValue: '',
            leftXValidator: [],
            leftDataSource: [
                {
                    isCustom: true,
                    label: '选项1',
                    value: '选项1'
                },
                {
                    isCustom: true,
                    label: '选项2',
                    value: '选项2'
                }
            ],
            leftColor: false,
            leftXIndex: 5
        }
    ],
    featInfo: [
        {
            key: 2,
            leftLabel: '客户来源',
            leftComponent: 'Select',
            leftValue: '',
            leftXValidator: [],
            leftDataSource: [
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
            leftXIndex: 0,
            rightLabel: '客户状态',
            rightComponent: 'Select',
            rightValue: '',
            rightXValidator: [],
            rightDataSource: [
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
            rightXIndex: 0
        },
        {
            key: 1,
            leftLabel: '客户类型',
            leftComponent: 'Select',
            leftValue: '',
            leftXValidator: [],
            leftDataSource: [
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
            leftXIndex: 1
        }
    ],
    attachmentVOS: null
}
