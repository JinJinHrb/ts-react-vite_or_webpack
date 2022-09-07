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
                        showArrow: false,
                        collapsible: 'header',
                        style: {
                            backgroundColor: 'white',
                            fontSize: '16px',
                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                            fontWeight: 500,
                            color: '#000000',
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
                                            maxItems: 10,
                                            message: '联系人数量不能超过 10 个'
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
                                                                            layout: 'horizontal'
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    '35990100874000022072500010122': {
                                                                        'x-list': true,
                                                                        'x-component': 'Select',
                                                                        'x-filter': true,
                                                                        customFieldId: '35990100874000022072500010122',
                                                                        'x-validator': [],
                                                                        title: '联系人-单选',
                                                                        type: 'string',
                                                                        'x-index': 3,
                                                                        enum: [
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
                                                                        name: '35990100874000022072500010122',
                                                                        isCustom: true,
                                                                        fieldType: 'TD_CONTACT',
                                                                        'x-component-props': {
                                                                            className:
                                                                                'contactModels-35990100874000022072500010122',
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
                                                                            layout: 'horizontal'
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    '35990100874000022072500010129': {
                                                                        'x-list': true,
                                                                        'x-component': 'DatePicker',
                                                                        'x-filter': true,
                                                                        customFieldId: '35990100874000022072500010129',
                                                                        'x-validator': [],
                                                                        title: '联系人-日期',
                                                                        type: 'string',
                                                                        'x-index': 2,
                                                                        name: '35990100874000022072500010129',
                                                                        isCustom: true,
                                                                        fieldType: 'TD_CONTACT',
                                                                        'x-component-props': {
                                                                            className:
                                                                                'contactModels-35990100874000022072500010129',
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
                                                                            layout: 'horizontal'
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    '35990100874000022072500010121': {
                                                                        name: '35990100874000022072500010121',
                                                                        title: '联系人-单行',
                                                                        type: 'array',
                                                                        default: [' '],
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
                                                                                'xt$at-contactModels-0-35990100874000022072500010121'
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
                                                                            layout: 'horizontal'
                                                                        },
                                                                        'x-index': 1,
                                                                        items: {
                                                                            type: 'void',
                                                                            'x-decorator': 'ArrayItems.Item',
                                                                            properties: {
                                                                                '35990100874000022072500010121': {
                                                                                    type: 'string',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-decorator-props': {
                                                                                        style: {
                                                                                            border: 0,
                                                                                            width: '100%',
                                                                                            marginRight: '15px'
                                                                                        }
                                                                                    },
                                                                                    'x-component': 'Input',
                                                                                    'x-component-props': {
                                                                                        style: {
                                                                                            border: 0
                                                                                        }
                                                                                    },
                                                                                    'x-index': 1,
                                                                                    'x-reactions': '{{setSuffix}}'
                                                                                },
                                                                                remove: {
                                                                                    type: 'void',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-component': 'ArrayItems.Remove',
                                                                                    'x-component-props': {
                                                                                        className:
                                                                                            'xt$at-contactModels-0-35990100874000022072500010121-0'
                                                                                    }
                                                                                }
                                                                            },
                                                                            'x-component-props': {
                                                                                className:
                                                                                    'xt$at-contactModels-0-35990100874000022072500010121-0'
                                                                            }
                                                                        },
                                                                        properties: {
                                                                            add: {
                                                                                type: 'void',
                                                                                title: '添加',
                                                                                'x-component': 'ArrayItems.Addition',
                                                                                'x-component-props': {
                                                                                    buttonType: 'link',
                                                                                    style: {
                                                                                        textAlign: 'left',
                                                                                        padding: 0,
                                                                                        display: 'none'
                                                                                    },
                                                                                    className:
                                                                                        'xt$at-contactModels-0-35990100874000022072500010121-add'
                                                                                },
                                                                                'x-reactions': [
                                                                                    {
                                                                                        when: '{{($self.query(".....").take()?.value?.35990100874000022072500010121 || []).length > 0}}',
                                                                                        fulfill: {
                                                                                            state: {
                                                                                                'component[1].style.position':
                                                                                                    'relative',
                                                                                                'component[1].style.top':
                                                                                                    '-10px'
                                                                                            }
                                                                                        },
                                                                                        otherwise: {
                                                                                            state: {
                                                                                                'component[1].style.position':
                                                                                                    'inherit'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        when: '{{($self.query(".....").take()?.value?.35990100874000022072500010121 || []).length > 15}}',
                                                                                        fulfill: {
                                                                                            schema: {
                                                                                                'x-disabled': true
                                                                                            }
                                                                                        },
                                                                                        otherwise: {
                                                                                            schema: {
                                                                                                'x-disabled': false
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ]
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
                                                                    '35990100874000022072500010127': {
                                                                        'x-list': true,
                                                                        'x-component': 'Input.TextArea',
                                                                        'x-filter': true,
                                                                        customFieldId: '35990100874000022072500010127',
                                                                        'x-validator': [
                                                                            {
                                                                                disallowEmoticon: true
                                                                            }
                                                                        ],
                                                                        type: 'string',
                                                                        title: '联系人-多行',
                                                                        'x-index': 2,
                                                                        name: '35990100874000022072500010127',
                                                                        isCustom: true,
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 512,
                                                                        'x-component-props': {
                                                                            className:
                                                                                'contactModels-35990100874000022072500010127',
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
                                                                            layout: 'horizontal'
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
                                                                            },
                                                                            {
                                                                                asyncCheckEmailDuplicate: true,
                                                                                triggerType: 'onBlur'
                                                                            }
                                                                        ],
                                                                        type: 'string',
                                                                        title: '邮箱',
                                                                        'x-index': 0,
                                                                        required: true,
                                                                        disableHide: true,
                                                                        disableEdit: true,
                                                                        name: 'contactEmail',
                                                                        fieldType: 'TD_CONTACT',
                                                                        maxLength: 100,
                                                                        'x-component-props': {
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
                                                                            layout: 'horizontal'
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },
                                                                    '35990100874000022072500010130': {
                                                                        'x-list': true,
                                                                        'x-component': 'DatePicker',
                                                                        'x-filter': true,
                                                                        customFieldId: '35990100874000022072500010130',
                                                                        'x-validator': [],
                                                                        title: '联系人-日期时间',
                                                                        type: 'string',
                                                                        'x-index': 3,
                                                                        name: '35990100874000022072500010130',
                                                                        isCustom: true,
                                                                        fieldType: 'TD_CONTACT',
                                                                        'x-component-props': {
                                                                            className:
                                                                                'contactModels-35990100874000022072500010130',
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
                                                                            layout: 'horizontal'
                                                                        },
                                                                        'x-reactions': '{{setSuffix}}'
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
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            fontSize: '16px',
                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                            fontWeight: 500,
                            color: '#000000',
                            marginBottom: '-6px'
                        },
                        collapsible: 'header',
                        mode: 'CRM',
                        className: 'xt$at-trwkuoobufp'
                    },
                    properties: {
                        attachmentVOS: {
                            type: 'array',
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
                                maxSize: 51200,
                                placeholder: '上传文件大小50M以内（限制10个附件)',
                                serviceErrorMessage: '文件大小不能超过50M',
                                className: 'xt$at-attachmentVOS'
                            }
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 4
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
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            fontSize: '16px',
                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                            fontWeight: 500,
                            color: '#000000',
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
                                        className: 'header-column_1THem'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'leftValue',
                                        className: 'header-column-value_27OUu'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightLabel',
                                        className: 'header-column_1THem'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightValue',
                                        className: 'header-column-value_27OUu'
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
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            fontSize: '16px',
                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                            fontWeight: 500,
                            color: '#000000',
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
                                        className: 'header-column_1THem'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'leftValue',
                                        className: 'header-column-value_27OUu'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightLabel',
                                        className: 'header-column_1THem'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightValue',
                                        className: 'header-column-value_27OUu'
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
            'x-index': 3
        },
        JUU3JTg5JUI5JUU1JUJFJTgxJUU0JUJGJUExJUU2JTgxJUFG3: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                },
                className: 'xt$at-JUU3JTg5JUI5JUU1JUJFJTgxJUU0JUJGJUExJUU2JTgxJUFG3'
            },
            properties: {
                collapsePanelJuu3JTg5Jui5Juu1JujfjTgxJuu0JujgjuExJuu2JTgxJufg3: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '特征信息',
                        showArrow: false,
                        style: {
                            backgroundColor: 'white',
                            fontSize: '16px',
                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                            fontWeight: 500,
                            color: '#000000',
                            marginBottom: '-6px'
                        },
                        mode: 'CRM',
                        collapsible: 'header',
                        className: 'xt$at-collapsePanelJuu3JTg5Jui5Juu1JujfjTgxJuu0JujgjuExJuu2JTgxJufg3'
                    },
                    properties: {
                        customInfoModule: {
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
                                        className: 'header-column_1THem'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'leftValue',
                                        className: 'header-column-value_27OUu'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightLabel',
                                        className: 'header-column_1THem'
                                    },
                                    {
                                        title: '',
                                        dataIndex: 'rightValue',
                                        className: 'header-column-value_27OUu'
                                    }
                                ],
                                size: 'small',
                                pagination: false,
                                className: 'xt$at-customInfoModule'
                            },
                            'x-pattern': 'readPretty'
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 5
        }
    }
}
