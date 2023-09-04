import _ from 'lodash'

type TLinkedList = {
    root: unknown
    parent: unknown
    current: unknown
}

export const findNestedKey = (obj: unknown, key: unknown, struct?: TLinkedList): TLinkedList | null => {
    if (obj === null || obj === undefined) {
        return null
    }

    let newStruct: TLinkedList
    if (_.isNil(struct)) {
        newStruct = {
            root: obj,
            parent: null,
            current: obj
        }
    } else {
        newStruct = {
            root: struct.root,
            parent: struct,
            current: obj
        }
    }

    for (const k of Object.keys(obj)) {
        if (k === key) {
            /* Search keys of obj for match and return true if match found */
            const strctReturned = {
                root: newStruct.root,
                parent: newStruct,
                current: obj[key]
            }
            return strctReturned
        } else {
            const val = obj[k]

            /* If k not a match, try to search it's value. We can search through
  object value types, seeing they are capable of containing
  objects with keys that might be a match */
            if (typeof val === 'object') {
                /* Recursivly search for nested key match in nested val */
                const result = findNestedKey(val, key, newStruct)
                if (result) {
                    return result
                }
            }
        }
    }
    return null
}

/* Define function to recursively search for existence of key in obj */
export const doesObjectHaveNestedKey = (obj: unknown, key: unknown) => {
    if (obj === null || obj === undefined) {
        return false
    }

    for (const k of Object.keys(obj)) {
        if (k === key) {
            /* Search keys of obj for match and return true if match found */
            return true
        } else {
            const val = obj[k]

            /* If k not a match, try to search it's value. We can search through
             * object value types, seeing they are capable of containing
             * objects with keys that might be a match */
            if (typeof val === 'object') {
                /* Recursivly search for nested key match in nested val */
                if (doesObjectHaveNestedKey(val, key) === true) {
                    return true
                }
            }
        }
    }
    return false
}

/* Define function to recursively search for existence of key in obj */
export const doesObjectHaveNestedPair = (obj: unknown, key: unknown, val: unknown) => {
    if (obj === null || obj === undefined) {
        return false
    }
    if (_.isNil(val)) {
        return doesObjectHaveNestedKey(obj, key)
    }
    for (const k of Object.keys(obj)) {
        if (k === key && obj[k]) {
            if (obj[k] === val) {
                return true
            } else {
                continue
            }
        } else {
            const elem = obj[k]
            if (typeof elem === 'object') {
                if (doesObjectHaveNestedPair(elem, key, val) === true) {
                    return true
                }
            }
        }
    }
    return false
}
