import moment from 'moment'
import { ObjectField, createForm } from '@formily/core'
const FormItemStyle = { marginBottom: 10 }
const basicTableColumns = []
const tableColumns = []
const getExpandAll = (bool: boolean) => bool
export const form = createForm()
export default {
    type: 'object',
    properties: {
        formCollapse4BasicInfo: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                }
            },
            properties: {
                collapsePanel4BasicInfo: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '基本信息',
                        style: {
                            backgroundColor: 'white'
                        }
                    },
                    properties: {
                        basicInfo: {
                            type: 'object',
                            'x-decorator': 'FormItem',
                            'x-component': 'XtTable',
                            'x-component-props': {
                                showHeader: false,
                                bordered: false,
                                columns: basicTableColumns,
                                size: 'small',
                                pagination: false
                            },
                            'x-pattern': 'readPretty'
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 0
        },

        contactsWrapper1: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                },
                className: 'contactsWrapper1'
            },
            properties: {
                contactsWrapper2: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '联系人列表',
                        style: {
                            backgroundColor: 'white'
                        }
                    },
                    properties: {
                        contactsWrapper3: {
                            type: 'void',
                            'x-component': 'FormCollapse.CollapsePanel',
                            'x-component-props': {
                                header: '客户'
                            },
                            'x-index': 1,
                            properties: {
                                // array item addition Start
                                contacts: {
                                    type: 'array',
                                    'x-decorator': 'FormItem',
                                    'x-decorator-props': {
                                        style: FormItemStyle
                                    },
                                    'x-component': 'ArrayCards',
                                    'x-component-props': {
                                        title: '客户'
                                    },
                                    'x-validator': [],
                                    items: {
                                        type: 'object',
                                        'x-validator': [],
                                        properties: {
                                            oz6cn21pbeb: {
                                                type: 'void',
                                                'x-component': 'ArrayCards.Index',
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
                                                                    labelWidth: 80
                                                                    // labelAlign: 'left',
                                                                    // layout: 'vertical',
                                                                },
                                                                properties: {
                                                                    // 左侧列 Start
                                                                    contactName: {
                                                                        type: 'string',
                                                                        title: '姓名',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Input',
                                                                        'x-validator': [
                                                                            {
                                                                                required: true,
                                                                                message: '必填字段'
                                                                            }
                                                                        ],
                                                                        'x-component-props': {},
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 0,
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },

                                                                    position: {
                                                                        title: '职位',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Input',
                                                                        'x-validator': [],
                                                                        'x-component-props': {},
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 1,
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },

                                                                    contactEmail: {
                                                                        title: '邮箱',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Input',
                                                                        'x-validator': [],
                                                                        'x-component-props': {},
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 2,
                                                                        'x-reactions': '{{setSuffix}}'
                                                                    },

                                                                    // array3 Start
                                                                    contactPhone: {
                                                                        title: '电话',
                                                                        type: 'array',
                                                                        default: [' '],
                                                                        'x-validator': [
                                                                            {
                                                                                maxItems: 3,
                                                                                message: '添加数量不得超过3'
                                                                            }
                                                                        ],
                                                                        'x-component': 'ArrayItems',
                                                                        'x-component-props': {},
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 3,
                                                                        items: {
                                                                            type: 'void',
                                                                            'x-decorator': 'ArrayItems.Item',
                                                                            properties: {
                                                                                phone: {
                                                                                    // title: '电话',
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
                                                                                    'x-validator': [],
                                                                                    'x-index': 1,
                                                                                    'x-reactions': '{{setSuffix}}'
                                                                                },
                                                                                remove: {
                                                                                    type: 'void',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-component': 'ArrayItems.Remove'
                                                                                }
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
                                                                                    }
                                                                                },
                                                                                'x-reactions': [
                                                                                    {
                                                                                        when: '{{($self.query(".....").take()?.value?.phones || []).length > 0}}',
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
                                                                                                    'inherit',
                                                                                                'component[1].style.top':
                                                                                                    undefined
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    },
                                                                    // array3 End

                                                                    remark: {
                                                                        title: '备注',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Input.TextArea',
                                                                        'x-validator': [],
                                                                        'x-component-props': {},
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 4
                                                                    }
                                                                    // 左侧列 End
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
                                                                    labelWidth: 80
                                                                    // labelAlign: 'left',
                                                                    // layout: 'vertical',
                                                                },
                                                                properties: {
                                                                    // 右侧列 Start
                                                                    gender: {
                                                                        type: 'string',
                                                                        title: '性别',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Select',
                                                                        enum: [
                                                                            { label: '', value: '' },
                                                                            { label: '男', value: 'male' },
                                                                            { label: '女', value: 'female' }
                                                                        ],
                                                                        'x-validator': [],
                                                                        'x-component-props': {},
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 0
                                                                    },
                                                                    birthday: {
                                                                        type: 'string',
                                                                        title: '生日',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'DatePicker',
                                                                        'x-validator': [],
                                                                        'x-component-props': {
                                                                            disabledDate: function (
                                                                                current: moment.Moment
                                                                            ) {
                                                                                // Can not select days before today and today
                                                                                return (
                                                                                    current &&
                                                                                    current > moment().endOf('day')
                                                                                )
                                                                            }
                                                                        },
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 1
                                                                    },
                                                                    contactFax: {
                                                                        type: 'string',
                                                                        title: '传真',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-component': 'Input',
                                                                        'x-validator': [],
                                                                        'x-component-props': {},
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-index': 2
                                                                    },
                                                                    // array4 Start
                                                                    socialAccounts: {
                                                                        title: '社交账号',
                                                                        type: 'array',
                                                                        'x-validator': {
                                                                            maxItems: 3,
                                                                            message: '添加数量不得超过3'
                                                                        },
                                                                        'x-component': 'ArrayItems',
                                                                        'x-decorator': 'FormItem',
                                                                        'x-decorator-props': {
                                                                            style: FormItemStyle
                                                                        },
                                                                        'x-component-props': {},
                                                                        default: [{}],
                                                                        items: {
                                                                            type: 'void',
                                                                            'x-decorator': 'ArrayItems.Item',
                                                                            properties: {
                                                                                socialAccount: {
                                                                                    // title: 'A2',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-component': 'XtSelectInput',
                                                                                    enum: [
                                                                                        {
                                                                                            label: '脸书（Facebook）',
                                                                                            value: 'Facebook'
                                                                                        },
                                                                                        {
                                                                                            label: '推特（Twitter）',
                                                                                            value: 'Twitter'
                                                                                        },
                                                                                        {
                                                                                            label: '腾讯（QQ）',
                                                                                            value: 'QQ'
                                                                                        },
                                                                                        {
                                                                                            label: '微信（Wechat）',
                                                                                            value: 'Wechat'
                                                                                        },
                                                                                        {
                                                                                            label: '领英（Linkedin）',
                                                                                            value: 'Linkedin'
                                                                                        },
                                                                                        {
                                                                                            label: 'Line',
                                                                                            value: 'Line'
                                                                                        },
                                                                                        {
                                                                                            label: 'WhatsApp',
                                                                                            value: 'WhatsApp'
                                                                                        }
                                                                                    ],
                                                                                    'x-validator': [],
                                                                                    'x-component-props': {
                                                                                        selectStyle: {
                                                                                            width: 150
                                                                                        },
                                                                                        inputStyle: {
                                                                                            width: '100%',
                                                                                            marginRight: '15px'
                                                                                        }
                                                                                    },
                                                                                    'x-decorator-props': {
                                                                                        style: FormItemStyle
                                                                                    },
                                                                                    'x-index': 1
                                                                                },
                                                                                remove: {
                                                                                    type: 'void',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-component': 'ArrayItems.Remove'
                                                                                }
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
                                                                                    }
                                                                                },
                                                                                'x-reactions': [
                                                                                    {
                                                                                        when: '{{($self.query(".....").take()?.value?.socialAccounts || []).length > 0}}',
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
                                                                                                    'inherit',
                                                                                                'component[1].style.top':
                                                                                                    undefined
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        'x-index': 3
                                                                    }
                                                                    // array4 End
                                                                    // 右侧列 End
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
                                                    clickFactory:
                                                        ({ index, /* record, */ array }: any) =>
                                                        async (/* e */) => {
                                                            const targetField = array.field.form
                                                                .query(`contacts.${index}`)
                                                                .take() as ObjectField
                                                            if (targetField.pattern === 'readPretty') {
                                                                targetField?.setPattern('editable')
                                                            } else {
                                                                try {
                                                                    await targetField.validate()
                                                                    targetField?.setPattern('readPretty')
                                                                } catch (e) {
                                                                    console.log('onClick #884', 'e:', e)
                                                                }
                                                            }
                                                        }
                                                },
                                                'x-index': 2
                                            },
                                            '76m7zkduq5q': {
                                                type: 'void',
                                                title: 'Addition',
                                                'x-component': 'ArrayCards.MoveDown',
                                                'x-component-props': {
                                                    style: {
                                                        marginLeft: 8
                                                    }
                                                },
                                                'x-index': 3
                                            },
                                            o550v0yxqat: {
                                                type: 'void',
                                                title: 'Addition',
                                                'x-component': 'ArrayCards.MoveUp',
                                                'x-index': 4
                                            },
                                            vy7thjdraos: {
                                                type: 'void',
                                                title: 'Addition',
                                                'x-component': 'ArrayCards.Remove',
                                                'x-component-props': {
                                                    style: {
                                                        marginLeft: 8
                                                    }
                                                },
                                                'x-index': 5
                                            }
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
                                                                children: getExpandAll(false),
                                                                'data-expand-all': 'N',
                                                                type: 'link',
                                                                style: {
                                                                    height: 20,
                                                                    padding: 0,
                                                                    relative: 'relative',
                                                                    top: -10
                                                                }
                                                            },
                                                            'x-reactions': {
                                                                dependencies: ['$values'],
                                                                fulfill: {
                                                                    schema: {
                                                                        'x-visible':
                                                                            '{{($values.contacts || []).length > 1}}'
                                                                    }
                                                                }
                                                            },
                                                            'x-index': 0
                                                        },
                                                        m6670i21fnu: {
                                                            type: 'void',
                                                            'x-component': 'FormGrid',
                                                            'x-validator': [],
                                                            'x-component-props': {},
                                                            'x-designable-id': 'm6670i21fnu',
                                                            properties: {
                                                                '44qxvivthcj': {
                                                                    type: 'void',
                                                                    'x-component': 'FormGrid.GridColumn',
                                                                    'x-validator': [],
                                                                    'x-component-props': {},
                                                                    'x-designable-id': '44qxvivthcj',
                                                                    'x-index': 0,
                                                                    properties: {
                                                                        b1tpd9tzf7r: {
                                                                            type: 'void',
                                                                            title: '新建联系人',
                                                                            'x-component': 'ArrayCards.Addition',
                                                                            'x-validator': [],
                                                                            'x-component-props': {},
                                                                            'x-designable-id': 'b1tpd9tzf7r',
                                                                            'x-index': 0
                                                                        }
                                                                    }
                                                                },
                                                                sxhvhdpscep: {
                                                                    type: 'void',
                                                                    'x-component': 'FormGrid.GridColumn',
                                                                    'x-validator': [],
                                                                    'x-component-props': {},
                                                                    'x-designable-id': 'sxhvhdpscep',
                                                                    'x-index': 1,
                                                                    properties: {
                                                                        submit: {
                                                                            type: 'void',
                                                                            'x-component': 'Button',
                                                                            'x-validator': [],
                                                                            'x-component-props': {
                                                                                children: '提交',
                                                                                style: {
                                                                                    width: '100%'
                                                                                },
                                                                                onClick: async () => {
                                                                                    try {
                                                                                        await form.validate()
                                                                                        form.submit()
                                                                                    } catch (e) {
                                                                                        console.log(
                                                                                            'onClick #1011',
                                                                                            'e:',
                                                                                            e
                                                                                        )
                                                                                    }
                                                                                }
                                                                            },
                                                                            'x-designable-id': '27nq0nviwzh',
                                                                            'x-index': 0,
                                                                            'x-reactions': {
                                                                                dependencies: ['$form'],
                                                                                fulfill: {
                                                                                    state: {
                                                                                        'component[1].loading':
                                                                                            '{{$form.submitting}}'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
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
                                // array item addition End
                            }
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 1
        },

        wimb2p986vb: {
            type: 'void',
            'x-component': 'FormCollapse',
            'x-component-props': {
                ghost: true,
                style: {
                    width: '100%'
                }
            },
            properties: {
                trwkuoobufp: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: '特征信息',
                        style: {
                            backgroundColor: 'white'
                        }
                    },
                    properties: {
                        featInfo: {
                            type: 'object',
                            'x-decorator': 'FormItem',
                            'x-component': 'XtTable',
                            'x-component-props': {
                                showHeader: false,
                                bordered: false,
                                columns: tableColumns,
                                size: 'small',
                                pagination: false
                            },
                            'x-pattern': 'readPretty'
                        }
                    },
                    'x-index': 0
                }
            },
            'x-index': 2
        }
    }
}
