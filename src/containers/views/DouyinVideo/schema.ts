import { ISchema, Schema, SchemaKey, Stringify } from '@formily/json-schema'
import { createForm, Form } from '@formily/core'
import _ from 'lodash'
import mock from './mock/mock'
import { TraverseSchema } from './types'
import schemaDemo from './schemaDemo'
import classnames from 'classnames'
import advancedFilterSchema from './mock/advancedFilterSchema'
const template = mock.data.template

/**
 * 判断模块是否被隐藏；若所有子模块内容都被隐藏，等同于模块被隐藏
 */
const isModuleHidden = (module: ISchema) => {
    if (module?.['x-hidden'] === true) {
        return true
    }
    if (!_.isObject(module)) {
        return true
    }
    let isHidden = true
    for (const key in module) {
        const subProperty = module[key]
        if (['ModuleLeft', 'ModuleRight'].includes(subProperty?.['x-component'])) {
            if (!isModuleHidden(subProperty.properties)) {
                isHidden = false
                break
            }
        } else if (subProperty?.['x-component'] && subProperty?.['x-hidden'] !== true) {
            isHidden = false
            break
        }
    }
    return isHidden
}

/** 若所有子模块都隐藏，隐藏模块 */
export const hideEmptyModules = (schema: ISchema) => {
    if (!_.isObject(schema)) {
        return schema
    }
    const { properties } = schema
    if (_.isEmpty(properties)) {
        return schema
    }
    const moduleKeys = Object.keys(properties).filter(
        key => _.isObject(properties[key]) && properties[key]['x-component'] === 'ModuleCard'
    )
    const toHideModuleKeys = []
    for (const moduleKey of moduleKeys) {
        const subProperties = properties[moduleKey]?.properties
        const isHidden = isModuleHidden(subProperties)
        console.log('hideEmptyModules', 'moduleKey:', moduleKey, 'isHidden:', isHidden, 'subProperties:', subProperties)
        if (isHidden) {
            toHideModuleKeys.push(moduleKey)
        }
    }
    if (!_.isEmpty(toHideModuleKeys)) {
        schema = _.clone(schema)
        schema.properties = _.clone(schema.properties)
        toHideModuleKeys.forEach(k => {
            delete schema.properties[k]
        })
    }
    return schema
}

export const recursiveField = (form: Form, schema: ISchema, basePath?: string, name?: SchemaKey) => {
    console.log('schema recursiveField #7', 'basePath:', basePath, 'name:', name)
    const fieldSchema = new Schema(schema)
    const fieldProps = fieldSchema.toFieldProps()

    function recursiveProperties(propBasePath?: string) {
        fieldSchema.mapProperties((propSchema, propName) => {
            recursiveField(form, propSchema, propBasePath, propName)
        })
    }

    if (name === undefined || name === null) {
        recursiveProperties(basePath)
        return
    }

    if (schema.type === 'object') {
        const field = form.createObjectField({
            ...fieldProps,
            name,
            basePath
        })

        recursiveProperties(field.address.toString())
    } else if (schema.type === 'array') {
        const field = form.createArrayField({
            ...fieldProps,
            name,
            basePath
        })

        const fieldAddress = field.address.toString()
        const fieldValues = form.getValuesIn(fieldAddress) || []
        fieldValues.forEach((value: any, index: number) => {
            if (schema.items) {
                const itemsSchema = Array.isArray(schema.items) ? schema.items[index] || schema.items[0] : schema.items

                recursiveField(form, itemsSchema as ISchema, fieldAddress, index)
            }
        })
    } else if (schema.type === 'void') {
        const field = form.createVoidField({
            ...fieldProps,
            name,
            basePath
        })

        recursiveProperties(field.address.toString())
    } else {
        form.createField({
            ...fieldProps,
            name,
            basePath
        })
    }
}

export const traverseSchema = (template: any) => {
    const form = createForm()
    const schema = new Schema(template)
    const result: TraverseSchema[] = []
    const traverse = (form: Form, schema: ISchema, basePath?: string, name?: SchemaKey) => {
        const fieldSchema = new Schema(schema)
        const fieldProps = fieldSchema.toFieldProps()
        const fieldJson = fieldSchema.toJSON()

        function recursiveProperties(propBasePath?: string) {
            fieldSchema.mapProperties((propSchema, propName) => {
                traverse(form, propSchema, propBasePath, propName)
            })
        }

        if (name === undefined || name === null) {
            recursiveProperties(basePath)
            return
        }

        if (schema.type === 'object') {
            const field = form.createObjectField({
                // ...fieldProps,
                name,
                basePath
            })
            if (fieldProps.name) {
                result.push({
                    name: String(fieldProps.name),
                    type: schema.type,
                    address: field.address.toString(),
                    path: field.path.toString(),
                    visible: field.visible,
                    hidden: field.hidden,
                    fieldJson
                })
            }
            recursiveProperties(field.address.toString())
        } else if (schema.type === 'array') {
            const field = form.createArrayField({
                // ...fieldProps,
                name,
                basePath
            })
            result.push({
                name: String(fieldProps.name),
                type: schema.type,
                address: field.address.toString(),
                path: field.path.toString(),
                visible: field.visible,
                hidden: field.hidden,
                fieldJson
            })
            const fieldAddress = field.address.toString()
            if (schema.items) {
                const itemsSchema = Array.isArray(schema.items) ? schema.items[0] : schema.items
                traverse(form, itemsSchema as ISchema, fieldAddress, 0)
            }
        } else if (schema.type === 'void') {
            const field = form.createVoidField({
                // ...fieldProps,
                name,
                basePath
            })

            recursiveProperties(field.address.toString())
        } else {
            const field = form.createField({
                // ...fieldProps,
                name,
                basePath
            })
            result.push({
                name: String(fieldProps.name),
                type: schema.type,
                address: field.address.toString(),
                path: field.path.toString(),
                visible: field.visible,
                hidden: field.hidden,
                fieldJson
            })
        }
    }
    traverse(form, schema)
    return result
}

/*
'x-component-props': {},
	'x-decorator-props': {
		style: FormItemStyle,
	},
*/
const map4SubSchema = (fieldJson: Stringify<any>) => {
    const fields = Object.keys(fieldJson).filter(
        k =>
            ![
                '_isJSONSchemaObject',
                'version',
                'x-component-props',
                'x-decorator',
                'x-decorator-props',
                'x-designable-id'
            ].includes(k)
    )
    const rtn = {}
    fields.forEach(k => {
        rtn[k] = fieldJson[k]
    })
    return rtn
}

const FormItemStyle = {}
const selectStyle = {
    width: 150
}

const convertArrayItemsXtSelectInput = ({
    arrayName,
    dataSource,
    title,
    addTitle,
    xValidator,
    selectKey,
    inputKey
}) => {
    return {
        name: arrayName,
        title,
        type: 'array',
        'x-validator': {
            maxItems: 10,
            message: '添加数量不得超过10'
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
                [arrayName]: {
                    // title: 'A2',
                    'x-decorator': 'FormItem',
                    'x-component': 'XtSelectInput',
                    enum: dataSource,
                    'x-validator': xValidator,
                    'x-component-props': {
                        selectStyle,
                        inputStyle: {
                            width: '100%',
                            marginRight: '15px'
                        },
                        selectKey: selectKey,
                        inputKey: inputKey
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
                title: addTitle, //'添加社交账号',
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
                        when: `{{($self.query(".....").take()?.value?.${arrayName} || []).length > 0}}`,
                        fulfill: {
                            state: {
                                'component[1].style.position': 'relative',
                                'component[1].style.top': '-10px'
                            }
                        },
                        otherwise: {
                            state: {
                                'component[1].style.position': 'inherit',
                                'component[1].style.top': undefined
                            }
                        }
                    }
                ]
            }
        },
        'x-index': 3
    }
}

const convertArrayItemsInput = ({ arrayName, title, addTitle, xValidator }) => {
    return {
        name: arrayName,
        title,
        type: 'array',
        default: [' '],
        'x-validator': [
            {
                maxItems: 10,
                message: '添加数量不得超过10'
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
                [arrayName]: {
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
                    'x-validator': xValidator,
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
                title: addTitle,
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
                        when: `{{($self.query(".....").take()?.value?.${arrayName} || []).length > 0}}`,
                        fulfill: {
                            state: {
                                'component[1].style.position': 'relative',
                                'component[1].style.top': '-10px'
                            }
                        },
                        otherwise: {
                            state: {
                                'component[1].style.position': 'inherit',
                                'component[1].style.top': undefined
                            }
                        }
                    }
                ]
            }
        }
    }
}

export const parseData2 = () => {
    const result = traverseSchema(advancedFilterSchema)
    console.log('parseData2 #419', 'result:', result)
}

/**
 * 自动映射未隐藏字段
 */
export const parseData = () => {
    const result = traverseSchema(template).filter(({ path, visible, hidden }) => {
        const pathSplit = _.trim(path).split('0.')
        if (pathSplit.length > 3) {
            // 数组里不能套数组
            console.log('pathSplit.length > 3', pathSplit)
            return false
        } else if (pathSplit.length === 3 && _.endsWith(pathSplit[pathSplit.length - 1], '0')) {
            // 数组里不能套数组
            console.log('pathSplit.length === 3', _.endsWith(pathSplit[pathSplit.length - 1], '0'))
            return false
        }
        return visible && !hidden && path?.indexOf('contactModels.0.') === 0
    })
    console.log('schema.ts #151', 'result:', result)
    const typeArrayResult = result.filter(a => _.trim(a.type).toLowerCase().indexOf('array') === 0)
    const typeStringResult = result.filter(a => !a.type || a.type === 'string')
    const typeArrayObject = {}
    typeArrayResult.forEach(schema => {
        const path = schema.path
        typeArrayObject[path] = { schema } as { schema: any; children?: any }
    })
    // const arrayChildArray = {}
    // 寻找合适组件转化为 select-input
    const typeStringResultFiltered = typeStringResult
        .map((el: any) => {
            const path = _.trim(el.path)
            const pathSplit = path.split('0.')
            let parentPath = ''
            if (pathSplit.length === 2 && _.endsWith(pathSplit[pathSplit.length - 1], '0')) {
                parentPath = pathSplit.slice(0, 2).join('0.').replace(/\.0?$/, '')
            } else if (pathSplit.length === 3) {
                parentPath = pathSplit.slice(0, 2).join('0.').replace(/\.0?$/, '')
            }
            if (!parentPath || !typeArrayObject[parentPath]) {
                return el
            }
            if (!typeArrayObject[parentPath].children) {
                typeArrayObject[parentPath].children = []
            }
            typeArrayObject[parentPath].children.push(el)
            return undefined
        })
        .filter(a => a)
    console.log('schema.ts #388', 'typeArrayObject:', typeArrayObject)
    const typeArraySchemas = Object.keys(typeArrayObject)
        .map(k => {
            const elem = typeArrayObject[k]
            const arrayScehma = elem.schema
            const arrayName = arrayScehma.name
            const title = arrayScehma.fieldJson.title
            const addTitle = arrayScehma.fieldJson.properties?.add?.title
            const hasSelect = _.some(elem.children || [], el => {
                return el?.fieldJson?.['x-component'] === 'Select'
            })
            const hasInput = _.some(elem.children || [], el => {
                return el?.fieldJson?.['x-component'] === 'Input'
            })
            if (hasSelect && hasInput && (elem.children || []).length === 2) {
                console.log('hasSelect && hasInput #395 elem:', elem)
                let dataSource, xValidator, selectKey, inputKey
                for (const child of elem.children) {
                    const childFieldJson = child.fieldJson
                    const xComponent = childFieldJson['x-component']
                    if (xComponent === 'Select') {
                        dataSource = childFieldJson.enum || []
                        selectKey = childFieldJson.name
                    } else if (xComponent === 'Input') {
                        inputKey = childFieldJson.name
                    }

                    // selectKey: 'socialMedia',
                    // inputKey: 'socialAcount',
                }
                console.log('#424', {
                    arrayName,
                    dataSource,
                    title,
                    addTitle,
                    xValidator,
                    selectKey,
                    inputKey
                })
                return convertArrayItemsXtSelectInput({
                    arrayName,
                    dataSource,
                    title,
                    addTitle,
                    xValidator,
                    selectKey,
                    inputKey
                })
            } else if (hasInput && (elem.children || []).length === 1) {
                let xValidator
                console.log('hasInput #397 elem:', elem)
                console.log('#424', {
                    arrayName,
                    title,
                    addTitle,
                    xValidator
                })
                return convertArrayItemsInput({ arrayName, title, addTitle, xValidator })
            }
        })
        .filter(a => a)
    console.log('#459 typeArraySchemas:', typeArraySchemas)
    const contactModels = (typeStringResultFiltered as any[])
        .map(({ name, type, address, path, visible, hidden, fieldJson }) => {
            /* if (!type || type === 'string') {
                return map4String(path, fieldJson)
            } */
            return map4SubSchema(fieldJson)
        })
        .filter(a => a)
        .concat(...typeArraySchemas)

    // 假设，不会出现嵌套表格
    // SelectInput 自动映射
    console.log('schema.ts #179', 'contactModels:', contactModels)
    alert('OK')
}

const setXtAtCls = (template, address) => {
    const alteredAddress = _.trim(address).replace(/\./g, '-')
    const cls = classnames(_.trim(template['x-component']?.className), `xt$at-${alteredAddress}`)
    const xComponent = _.trim(template['x-component'])
    if (xComponent.indexOf('FormGrid') > -1 || xComponent.indexOf('FormLayout') > -1) {
        return
    }
    if (!template['x-component-props']) {
        template['x-component-props'] = {}
    }
    template['x-component-props'].className = cls
}

export const recurFieldId = () => {
    const form = createForm()
    const copyTemplate = _.clone(schemaDemo)
    const schema = new Schema(schemaDemo as any)

    // const result: TraverseSchema[] = []
    const traverse = (form: Form, template, schema: ISchema, basePath?: string, name?: SchemaKey) => {
        const fieldSchema = new Schema(schema)
        /* const fieldProps = fieldSchema.toFieldProps()
        const fieldJson = fieldSchema.toJSON() */

        function recursiveProperties(propBasePath?: string) {
            fieldSchema.mapProperties((propSchema, propName) => {
                const subTemplate = template?.properties?.[propName]
                // console.log('#489', 'propBasePath:', propBasePath, 'propName:', propName, 'subTemplate:', subTemplate)
                traverse(form, subTemplate, propSchema, propBasePath, propName)
            })
        }

        if (name === undefined || name === null) {
            recursiveProperties(basePath)
            return
        }

        if (schema.type === 'object') {
            const field = form.createObjectField({
                // ...fieldProps,
                name,
                basePath
            })

            /* console.log(
                '#508',
                'address:',
                field.address.toString(),
                'template["x-component"]:',
                template['x-component'],
                'fieldSchema["x-component"]:',
                fieldSchema['x-component']
            ) */
            setXtAtCls(template, field.path.toString())

            /* if (fieldProps.name) {
                result.push({
                    name: String(fieldProps.name),
                    type: schema.type,
                    address: field.address.toString(),
                    path: field.path.toString(),
                    visible: field.visible,
                    hidden: field.hidden,
                    fieldJson
                })
            } */
            recursiveProperties(field.address.toString())
        } else if (schema.type === 'array') {
            const field = form.createArrayField({
                // ...fieldProps,
                name,
                basePath
            })

            /* console.log(
                '#537',
                'address:',
                field.address.toString(),
                'template["x-component"]:',
                template['x-component'],
                'fieldSchema["x-component"]:',
                fieldSchema['x-component']
            ) */
            setXtAtCls(template, field.path.toString())

            /* result.push({
                name: String(fieldProps.name),
                type: schema.type,
                address: field.address.toString(),
                path: field.path.toString(),
                visible: field.visible,
                hidden: field.hidden,
                fieldJson
            }) */
            const fieldAddress = field.address.toString()
            if (schema.items) {
                const itemsSchema = Array.isArray(schema.items) ? schema.items[0] : schema.items
                const subTemplate = Array.isArray(schema.items) ? template.items[0] : template.items
                // console.log('#536', 'fieldAddress:', fieldAddress, 'subTemplate:', subTemplate)
                traverse(form, subTemplate, itemsSchema as ISchema, fieldAddress, 0)
            }
            recursiveProperties(field.address.toString())
        } else if (schema.type === 'void') {
            const field = form.createVoidField({
                // ...fieldProps,
                name,
                basePath
            })

            /* console.log(
                '#570',
                'address:',
                field.address.toString(),
                'template["x-component"]:',
                template['x-component'],
                'fieldSchema["x-component"]:',
                fieldSchema['x-component']
            ) */
            setXtAtCls(template, field.path.toString())

            recursiveProperties(field.address.toString())
        } /*  else {
            const field = form.createField({
                // ...fieldProps,
                name,
                basePath
            })
            result.push({
                name: String(fieldProps.name),
                type: schema.type,
                address: field.address.toString(),
                path: field.path.toString(),
                visible: field.visible,
                hidden: field.hidden,
                fieldJson
            })
        } */
    }
    traverse(form, copyTemplate, schema)
    console.log('#610 copyTemplate:', copyTemplate)
    alert('OK')
    // return result
}
