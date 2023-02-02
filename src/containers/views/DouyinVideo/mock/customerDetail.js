export default {
    type: 'object',
    properties: {
        contactsWrapper1: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                },
                className: 'xt$at-contactsWrapper1'
            },
            properties: {
                contactsWrapper2: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        mode: 'CRM',
                        header: '联系人列表',
                        headerClass: 'collapse-panel-header__GpLK',
                        showArrow: false,
                        collapsible: 'header',
                        style: {
                            backgroundColor: 'white',
                            marginBottom: '-6px'
                        },
                        className: 'xt$at-contactsWrapper2'
                    },
                    properties: {
                        contactsWrapper3: {
                            type: 'void',
                            'x-component': 'FormCollapse.CollapsePanel',
                            'x-component-props': {
                                header: '联系人',
                                className: 'xt$at-contactsWrapper3'
                            },
                            'x-index': 1,
                            properties: {
                                contactModels: {
                                    type: 'array',
                                    'x-decorator': 'FormItem',
                                    'x-decorator-props': {
                                        style: {
                                            marginBottom: 10
                                        }
                                    },
                                    'x-component': 'ArrayCards',
                                    'x-component-props': {
                                        headStyle: {
                                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                            fontSize: '14px',
                                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                                            fontWeight: 500,
                                            color: 'rgba(0, 0, 0, 0.85)'
                                        },
                                        bodyStyle: {
                                            position: 'relative'
                                        },
                                        style: {
                                            borderBottom: '60px solid #FAFAFA'
                                        },
                                        className: 'xt$at-contactModels'
                                    },
                                    'x-validator': [
                                        {
                                            maxItems: 15,
                                            message: '联系人数量不能超过 15 个'
                                        }
                                    ],
                                    items: {
                                        type: 'object',
                                        properties: {
                                            oz6cn21pbeb: {
                                                type: 'void',
                                                'x-component': 'ArrayCards.Index',
                                                'x-component-props': {
                                                    title: '联系人',
                                                    className: 'xt$at-contactModels-0-oz6cn21pbeb'
                                                },
                                                'x-index': 0
                                            },
                                            d62bw3a0i8q: {
                                                type: 'void',
                                                'x-component': 'FormGrid',
                                                'x-validator': [],
                                                'x-component-props': {},
                                                properties: {
                                                    v28lzt4onno: {
                                                        type: 'void',
                                                        'x-component': 'FormGrid.GridColumn',
                                                        'x-validator': [],
                                                        'x-component-props': {
                                                            style: {
                                                                margin: '0px 15px 0px 0px'
                                                            }
                                                        },
                                                        properties: {
                                                            nngq513lx8k: {
                                                                type: 'void',
                                                                'x-component': 'FormLayout',
                                                                'x-component-props': {
                                                                    labelWidth: 80,
                                                                    labelAlign: 'left'
                                                                },
                                                                properties: {
                                                                    contactName: {
                                                                        'x-list': true,
                                                                        'x-component': 'Input',
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
                                                                        name: 'contactName',
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 100,
                                                                        'x-component-props': {
                                                                            size: 'large',
                                                                            id: 'contactName',
                                                                            className: 'contactModels-contactName',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    position: {
                                                                        'x-component': 'Input',
                                                                        name: 'position',
                                                                        'x-validator': [
                                                                            {
                                                                                disallowEmoticon: true
                                                                            }
                                                                        ],
                                                                        title: '职位',
                                                                        type: 'string',
                                                                        'x-index': 2,
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 100,
                                                                        'x-component-props': {
                                                                            size: 'large',
                                                                            id: 'position',
                                                                            className: 'contactModels-position',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    birthday: {
                                                                        'x-component': 'DatePicker',
                                                                        name: 'birthday',
                                                                        'x-validator': [],
                                                                        type: 'string',
                                                                        title: '生日',
                                                                        'x-index': 4,
                                                                        fieldType: 'TD_CONTACT',
                                                                        'x-component-props': {
                                                                            id: 'birthday',
                                                                            className: 'date-picker-style_iovtN',
                                                                            format: 'YYYY-MM-DD',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    remark: {
                                                                        'x-component': 'Input.TextArea',
                                                                        name: 'remark',
                                                                        'x-validator': [
                                                                            {
                                                                                disallowEmoticon: true
                                                                            }
                                                                        ],
                                                                        type: 'string',
                                                                        title: '联系人备注',
                                                                        'x-index': 6,
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 512,
                                                                        'x-component-props': {
                                                                            id: 'remark',
                                                                            className: 'contactModels-remark',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    socialMediaModels: {
                                                                        name: 'socialMediaModels',
                                                                        title: '社交账号',
                                                                        type: 'array',
                                                                        'x-index': 8,
                                                                        'x-validator': [
                                                                            {
                                                                                maxItems: 15,
                                                                                message: '添加数量不得超过15'
                                                                            },
                                                                            {
                                                                                minItems: 1
                                                                            }
                                                                        ],
                                                                        'x-component': 'ArrayItems',
                                                                        'x-component-props': {
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            },
                                                                            disableSingleItemKey: 'bindStatus',
                                                                            disableSingleItemValue: 'BIND',
                                                                            className:
                                                                                'xt$at-contactModels-0-socialMediaModels'
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        default: [{}],
                                                                        maxLength: 15,
                                                                        items: {
                                                                            type: 'void',
                                                                            'x-decorator': 'ArrayItems.Item',
                                                                            properties: {
                                                                                socialMediaModels: {
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-decorator-props': {
                                                                                        style: {
                                                                                            marginBottom: 10,
                                                                                            flexGrow: 1
                                                                                        }
                                                                                    },
                                                                                    'x-component': 'XtSelectInput',
                                                                                    'x-component-props': {
                                                                                        selectStyle: {
                                                                                            width: 150
                                                                                        },
                                                                                        inputStyle: {
                                                                                            width: '100%'
                                                                                        },
                                                                                        selectKey: 'socialMediaType',
                                                                                        inputKey: 'accountNumber',
                                                                                        defaultSelect: 'FACEBOOK'
                                                                                    },
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
                                                                                    'x-validator': [],
                                                                                    'x-index': 1
                                                                                },
                                                                                remove: {
                                                                                    type: 'void',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-component': 'ArrayItems.Remove',
                                                                                    'x-component-props': {
                                                                                        style: {
                                                                                            marginLeft: 10
                                                                                        },
                                                                                        className:
                                                                                            'xt$at-contactModels-0-socialMediaModels-0'
                                                                                    }
                                                                                }
                                                                            },
                                                                            'x-component-props': {
                                                                                className:
                                                                                    'xt$at-contactModels-0-socialMediaModels-0'
                                                                            }
                                                                        },
                                                                        properties: {
                                                                            add: {
                                                                                type: 'void',
                                                                                title: '添加社交账号',
                                                                                'x-component': 'ArrayItems.Addition',
                                                                                'x-component-props': {
                                                                                    buttonType: 'link',
                                                                                    style: {
                                                                                        textAlign: 'left',
                                                                                        padding: 0
                                                                                    },
                                                                                    className:
                                                                                        'xt$at-contactModels-0-socialMediaModels-add'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                'x-index': 0
                                                            }
                                                        },
                                                        'x-index': 0
                                                    },
                                                    '33va9xjoo59': {
                                                        type: 'void',
                                                        'x-component': 'FormGrid.GridColumn',
                                                        'x-validator': [],
                                                        'x-component-props': {
                                                            style: {
                                                                margin: '0px 0px 0px 15px'
                                                            }
                                                        },
                                                        properties: {
                                                            '1584zp0q8uf': {
                                                                type: 'void',
                                                                'x-component': 'FormLayout',
                                                                'x-component-props': {
                                                                    labelWidth: 80,
                                                                    labelAlign: 'left'
                                                                },
                                                                properties: {
                                                                    gender: {
                                                                        disableEditEnum: true,
                                                                        'x-component': 'Select',
                                                                        'x-validator': [],
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
                                                                        name: 'gender',
                                                                        fieldType: 'TD_CONTACT',
                                                                        'x-component-props': {
                                                                            id: 'gender',
                                                                            allowClear: true,
                                                                            className: 'contactModels-gender',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    contactEmail: {
                                                                        'x-list': true,
                                                                        'x-component': 'Input',
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
                                                                        type: 'string',
                                                                        title: '邮箱',
                                                                        'x-index': 3,
                                                                        required: true,
                                                                        name: 'contactEmail',
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 100,
                                                                        'x-component-props': {
                                                                            size: 'large',
                                                                            id: 'contactEmail',
                                                                            className: 'contactModels-contactEmail',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    contactFax: {
                                                                        'x-component': 'Input',
                                                                        name: 'contactFax',
                                                                        'x-validator': [
                                                                            {
                                                                                disallowEmoticon: true
                                                                            }
                                                                        ],
                                                                        type: 'string',
                                                                        title: '传真',
                                                                        'x-index': 5,
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 100,
                                                                        'x-component-props': {
                                                                            size: 'large',
                                                                            id: 'contactFax',
                                                                            className: 'contactModels-contactFax',
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            }
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    contactPhone: {
                                                                        name: 'contactPhone',
                                                                        title: '电话',
                                                                        type: 'array',
                                                                        'x-index': 7,
                                                                        'x-validator': [
                                                                            {
                                                                                maxItems: 15,
                                                                                message: '添加数量不得超过15'
                                                                            },
                                                                            {
                                                                                minItems: 1
                                                                            }
                                                                        ],
                                                                        'x-component': 'ArrayItems',
                                                                        'x-component-props': {
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.85)'
                                                                            },
                                                                            className:
                                                                                'xt$at-contactModels-0-contactPhone'
                                                                        },
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: {
                                                                                marginBottom: 10
                                                                            },
                                                                            labelStyle: {
                                                                                fontSize: '14px',
                                                                                fontFamily:
                                                                                    'PingFangSC-Regular, PingFang SC',
                                                                                fontWeight: 400,
                                                                                color: 'rgba(0, 0, 0, 0.65)'
                                                                            },
                                                                            layout: 'horizontal',
                                                                            labelWrap: true
                                                                        },
                                                                        default: [' '],
                                                                        maxLength: 15,
                                                                        items: {
                                                                            type: 'void',
                                                                            'x-decorator': 'ArrayItems.Item',
                                                                            properties: {
                                                                                contactPhone: {
                                                                                    type: 'string',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-decorator-props': {
                                                                                        style: {
                                                                                            border: 0,
                                                                                            width: '100%'
                                                                                        }
                                                                                    },
                                                                                    'x-component': 'Input',
                                                                                    'x-component-props': {
                                                                                        size: 'large'
                                                                                    },
                                                                                    'x-validator': [],
                                                                                    'x-index': 1,
                                                                                    'x-reactions': '{{setSuffix}}'
                                                                                },
                                                                                remove: {
                                                                                    type: 'void',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-component': 'ArrayItems.Remove',
                                                                                    'x-component-props': {
                                                                                        style: {
                                                                                            marginLeft: 10
                                                                                        },
                                                                                        className:
                                                                                            'xt$at-contactModels-0-contactPhone-0'
                                                                                    }
                                                                                }
                                                                            },
                                                                            'x-component-props': {
                                                                                className:
                                                                                    'xt$at-contactModels-0-contactPhone-0'
                                                                            }
                                                                        },
                                                                        properties: {
                                                                            add: {
                                                                                type: 'void',
                                                                                title: '添加电话',
                                                                                'x-component': 'ArrayItems.Addition',
                                                                                'x-component-props': {
                                                                                    buttonType: 'link',
                                                                                    style: {
                                                                                        textAlign: 'left',
                                                                                        padding: 0
                                                                                    },
                                                                                    className:
                                                                                        'xt$at-contactModels-0-contactPhone-add'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                'x-index': 0
                                                            }
                                                        },
                                                        'x-index': 1
                                                    }
                                                },
                                                'x-index': 1
                                            },
                                            edit: {
                                                type: 'void',
                                                title: 'Addition',
                                                'x-component': 'ArrayCards.Edit',
                                                'x-component-props': {
                                                    children: {
                                                        key: null,
                                                        ref: null,
                                                        props: {
                                                            size: 'small',
                                                            type: 'text',
                                                            style: {
                                                                color: '#FF934A'
                                                            },
                                                            children: [
                                                                {
                                                                    type: {},
                                                                    key: null,
                                                                    ref: null,
                                                                    props: {
                                                                        name: 'EditOutlined'
                                                                    },
                                                                    _owner: null,
                                                                    _store: {}
                                                                },
                                                                {
                                                                    type: 'span',
                                                                    key: null,
                                                                    ref: null,
                                                                    props: {
                                                                        children: '编辑'
                                                                    },
                                                                    _owner: null,
                                                                    _store: {}
                                                                }
                                                            ]
                                                        },
                                                        _owner: null,
                                                        _store: {}
                                                    },
                                                    className: 'xt$at-contactModels-0-edit'
                                                },
                                                'x-index': 2
                                            },
                                            vy7thjdraos: {
                                                type: 'void',
                                                title: 'Addition',
                                                'x-component': 'ArrayCards.Remove',
                                                'x-component-props': {
                                                    children: {
                                                        key: null,
                                                        ref: null,
                                                        props: {
                                                            id: '6400d63b',
                                                            size: 'small',
                                                            type: 'text',
                                                            style: {
                                                                color: '#FF934A',
                                                                paddingLeft: 10,
                                                                borderLeft: '1px solid #F0F0F0'
                                                            },
                                                            children: [
                                                                {
                                                                    type: {},
                                                                    key: null,
                                                                    ref: null,
                                                                    props: {
                                                                        name: 'DeleteOutlined'
                                                                    },
                                                                    _owner: null,
                                                                    _store: {}
                                                                },
                                                                '删除'
                                                            ]
                                                        },
                                                        _owner: null,
                                                        _store: {}
                                                    },
                                                    className: 'xt$at-contactModels-0-vy7thjdraos'
                                                },
                                                'x-reactions': {
                                                    dependencies: ['$values'],
                                                    fulfill: {
                                                        schema: {
                                                            'x-hidden': '{{($values.contactModels || []).length === 1}}'
                                                        }
                                                    }
                                                },
                                                'x-index': 3
                                            },
                                            extraBtn: {
                                                type: 'void',
                                                'x-component': 'FormGrid',
                                                'x-validator': [],
                                                'x-component-props': {
                                                    style: {
                                                        position: 'absolute',
                                                        bottom: '-46px',
                                                        right: '24px'
                                                    }
                                                },
                                                properties: {
                                                    '44qxvivthcj': {
                                                        type: 'void',
                                                        'x-component': 'FormGrid.GridColumn',
                                                        'x-validator': [],
                                                        'x-component-props': {
                                                            style: {
                                                                backgroundColor: '#FAFAFA'
                                                            }
                                                        },
                                                        properties: {
                                                            cancelBtn: {
                                                                type: 'void',
                                                                'x-component': 'Button',
                                                                'x-component-props': {
                                                                    children: '取消',
                                                                    style: {
                                                                        marginRight: '10px'
                                                                    },
                                                                    className: 'xt$at-contactModels-0-cancelBtn'
                                                                },
                                                                'x-index': 0
                                                            },
                                                            saveBtn: {
                                                                type: 'void',
                                                                'x-component': 'Button',
                                                                'x-component-props': {
                                                                    children: '保存',
                                                                    style: {
                                                                        backgroundColor: '#FF934A',
                                                                        color: 'white',
                                                                        border: 'none'
                                                                    },
                                                                    className: 'xt$at-contactModels-0-saveBtn'
                                                                },
                                                                'x-index': 1
                                                            }
                                                        }
                                                    }
                                                },
                                                'x-index': 4
                                            }
                                        },
                                        'x-component-props': {
                                            className: 'xt$at-contactModels-0'
                                        }
                                    },
                                    'x-index': 1,
                                    properties: {
                                        ip96hv6a06z: {
                                            type: 'void',
                                            'x-component': 'FormGrid',
                                            'x-validator': [],
                                            'x-component-props': {},
                                            'x-designable-id': 'ip96hv6a06z',
                                            isExtraAddition: true,
                                            properties: {
                                                ime3zowigaf: {
                                                    type: 'void',
                                                    'x-component': 'FormGrid.GridColumn',
                                                    'x-validator': [],
                                                    'x-component-props': {},
                                                    'x-designable-id': 'ime3zowigaf',
                                                    properties: {
                                                        expandAll: {
                                                            type: 'void',
                                                            'x-component': 'Button',
                                                            'x-validator': [],
                                                            'x-component-props': {
                                                                children: {
                                                                    type: 'span',
                                                                    key: null,
                                                                    ref: null,
                                                                    props: {
                                                                        id: '0995bbbb',
                                                                        style: {
                                                                            lineHeight: '15px'
                                                                        },
                                                                        children: {
                                                                            key: null,
                                                                            ref: null,
                                                                            props: {
                                                                                children: [
                                                                                    {
                                                                                        type: {},
                                                                                        key: null,
                                                                                        ref: null,
                                                                                        props: {
                                                                                            name: 'DownOutlined'
                                                                                        },
                                                                                        _owner: null,
                                                                                        _store: {}
                                                                                    },
                                                                                    '展示全部联系人'
                                                                                ]
                                                                            },
                                                                            _owner: null,
                                                                            _store: {}
                                                                        }
                                                                    },
                                                                    _owner: null,
                                                                    _store: {}
                                                                },
                                                                'data-expand-all': 'N',
                                                                type: 'link',
                                                                style: {
                                                                    height: 20,
                                                                    padding: 0,
                                                                    relative: 'relative',
                                                                    top: -10
                                                                },
                                                                className: 'xt$at-contactModels-expandAll'
                                                            },
                                                            'x-reactions': {
                                                                dependencies: ['$values'],
                                                                fulfill: {
                                                                    schema: {
                                                                        'x-visible':
                                                                            '{{($values.contactModels || []).length > 1}}'
                                                                    }
                                                                }
                                                            },
                                                            'x-index': 0
                                                        },
                                                        m6670i21fnu: {
                                                            type: 'void',
                                                            title: '新建联系人',
                                                            'x-component': 'ArrayCards.Addition',
                                                            'x-validator': [],
                                                            'x-component-props': {
                                                                className: 'xt$at-contactModels-m6670i21fnu'
                                                            },
                                                            'x-index': 1
                                                        }
                                                    },
                                                    'x-index': 0
                                                }
                                            },
                                            'x-index': 0
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 1
        },
        JUU1JTlGJUJBJUU2JTlDJUFDJUU0JUJGJUExJUU2JTgxJUFG1: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                },
                className: 'xt$at-JUU1JTlGJUJBJUU2JTlDJUFDJUU0JUJGJUExJUU2JTgxJUFG1'
            },
            properties: {
                collapsePanelJuu1JTlGjujbjuu2JTlDjufdjuu0JujgjuExJuu2JTgxJufg1: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '基本信息',
                        headerClass: 'collapse-panel-header__GpLK',
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            marginBottom: '-6px'
                        },
                        mode: 'CRM',
                        collapsible: 'header',
                        className: 'xt$at-collapsePanelJuu1JTlGjujbjuu2JTlDjufdjuu0JujgjuExJuu2JTgxJufg1'
                    },
                    properties: {
                        basicInfo: {
                            type: 'object',
                            'x-decorator': 'FormItem',
                            'x-component': 'XtTable',
                            'x-component-props': {
                                showHeader: false,
                                bordered: true,
                                columns: [
                                    {
                                        title: '',
                                        dataIndex: 'leftLabel',
                                        className: 'header-column_qLN4V'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'leftValue',
                                        className: 'header-column-value_FFklb'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightLabel',
                                        className: 'header-column_qLN4V'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightValue',
                                        className: 'header-column-value_FFklb'
                                    }
                                ],
                                size: 'small',
                                pagination: false,
                                className: 'xt$at-basicInfo'
                            },
                            'x-pattern': 'readPretty'
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 0
        },
        JUU3JTg5JUI5JUU1JUJFJTgxJUU0JUJGJUExJUU2JTgxJUFG2: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                },
                className: 'xt$at-JUU3JTg5JUI5JUU1JUJFJTgxJUU0JUJGJUExJUU2JTgxJUFG2'
            },
            properties: {
                collapsePanelJuu3JTg5Jui5Juu1JujfjTgxJuu0JujgjuExJuu2JTgxJufg2: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '特征信息',
                        headerClass: 'collapse-panel-header__GpLK',
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            marginBottom: '-6px'
                        },
                        mode: 'CRM',
                        collapsible: 'header',
                        className: 'xt$at-collapsePanelJuu3JTg5Jui5Juu1JujfjTgxJuu0JujgjuExJuu2JTgxJufg2'
                    },
                    properties: {
                        featInfo: {
                            type: 'object',
                            'x-decorator': 'FormItem',
                            'x-component': 'XtTable',
                            'x-component-props': {
                                showHeader: false,
                                bordered: true,
                                columns: [
                                    {
                                        title: '',
                                        dataIndex: 'leftLabel',
                                        className: 'header-column_qLN4V'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'leftValue',
                                        className: 'header-column-value_FFklb'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightLabel',
                                        className: 'header-column_qLN4V'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightValue',
                                        className: 'header-column-value_FFklb'
                                    }
                                ],
                                size: 'small',
                                pagination: false,
                                className: 'xt$at-featInfo'
                            },
                            'x-pattern': 'readPretty'
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 2
        },
        hudxz1dtorr: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                },
                className: 'xt$at-hudxz1dtorr'
            },
            properties: {
                trwkuoobufp: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '附件',
                        headerClass: 'collapse-panel-header__GpLK',
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            marginBottom: '-6px'
                        },
                        collapsible: 'header',
                        mode: 'CRM',
                        className: 'xt$at-trwkuoobufp'
                    },
                    properties: {
                        attachmentVOS: {
                            type: 'string',
                            'x-decorator': 'FormItem',
                            'x-component': 'PreviewText.Input',
                            'x-component-props': {
                                style: {
                                    fontWeight: 'normal'
                                }
                            },
                            default: '暂无相关数据'
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 3
        }
    }
}
