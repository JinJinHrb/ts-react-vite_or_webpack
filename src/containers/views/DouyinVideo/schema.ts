import { ISchema, Schema, SchemaKey, Stringify } from '@formily/json-schema'
import { createForm, Form } from '@formily/core'
import _ from 'lodash'
import mock from './mock'
import { TraverseSchema } from './types'
const template = mock.data.template

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
const map4String = (path, fieldJson: Stringify<any>) => {
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
    return { [path]: rtn }
}

export const parseData = () => {
    const result = traverseSchema(template)
    console.log('schema.ts #151', 'result:', result)
    const contactModels = result
        .filter(({ path, visible, hidden }) => visible && !hidden && path?.indexOf('contactModels.0.') === 0)
        .map(({ name, type, address, path, visible, hidden, fieldJson }) => {
            /* if (!type || type === 'string') {
                return map4String(path, fieldJson)
            } */
            return map4String(path, fieldJson)
        })
        .filter(a => a)
    const schemas = _.merge.apply(null, contactModels)

    // 假设，不会出现嵌套表格
    // SelectInput 自动映射
    console.log('schema.ts #179', 'contactModels:', contactModels)
    console.log('schema.ts #180', 'schemas:', schemas)
    alert('OK')
}
