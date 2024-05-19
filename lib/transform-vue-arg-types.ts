import type { ComponentPropsOptions } from 'vue'
import type { ArgTypes } from '@storybook/vue3'
import type { InputType } from '@storybook/types'

export function transformVueArgTypes<T extends ComponentPropsOptions, K extends keyof T>(
  propsOptions: T,
  descMap?: Record<K, string>
): ArgTypes {
  const argTypes: ArgTypes = {}

  for (const key in propsOptions) {
    let propsItem = propsOptions[key] as any

    if (!propsItem?.type) {
      propsItem = {
        type: propsItem,
      }
    }

    const typeList: any[] = Array.isArray(propsItem.type) ? propsItem.type : [propsItem.type]
    const firstType = typeList[0]

    // console.log(firstType, firstType?.name)

    const argTypeItem: InputType = {
      name: key,
      description: descMap?.[key as unknown as K],
      type: {
        name: transformStorybookTypeName(firstType),
        value: firstType,
        required: propsItem.required,
      },
      table: {
        defaultValue: {
          summary: propsItem.default || '-',
        },
        type: {
          summary: typeList.map((v) => transformTypeName(v)).join(' | '),
        },
      },
    }
    argTypes[key] = argTypeItem
  }

  return argTypes
}

function transformTypeName(type: any) {
  switch (type?.name) {
    case 'Boolean':
      return 'boolean'
    case 'Number':
      return 'number'
    case 'String':
      return 'string'
    case 'Function':
      return 'Function'
    case 'Object':
      return 'Object'
    case 'Array':
      return 'Array'
    case 'Symbol':
      return 'Symbol'
    case 'Date':
      return 'Date'
    case 'Promise':
      return 'Promise'
    case 'Set':
      return 'Set'
    case 'Map':
      return 'Map'
    case 'WeakSet':
      return 'Weakset'
    case 'WeakMap':
      return 'Weakmap'
    case 'Error':
      return 'Error'
    case 'RegExp':
      return 'RegExp'
    case 'BigInt':
      return 'BigInt'
    case 'BigInt64Array':
      return 'BigInt64Array'
    case 'BigUint64Array':
      return 'BigUint64Array'
    case 'ArrayBuffer':
      return 'ArrayBuffer'
    default:
      return `other(${type?.name})`
  }
}

function transformStorybookTypeName(type: any) {
  console.log(type, type?.name)

  switch (type?.name) {
    case 'Boolean':
      return 'boolean'
    case 'Number':
      return 'number'
    case 'String':
      return 'string'
    case 'Function':
      return 'function'
    case 'Object':
      return 'object'
    case 'Array':
      return 'array'
    case 'Symbol':
      return 'symbol'
    default:
      return 'other'
  }
}
