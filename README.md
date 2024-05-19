# storybook-transform-vue-arg-types

将 Vue 声明的 Props 类型对象转换为 storybook ArgTypes

(ComponentPropsOptions -> ArgTypes)

### install

```bash
npm i storybook-transform-vue-arg-types -D
```

### .stories.ts

```ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { Table, tablePropsDefines } from '.'

import { transformVueArgTypes } from 'storybook-transform-vue-arg-types'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: transformVueArgTypes(tablePropsDefines, { test: 'test desc okkk' }),
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const 基础示例: Story = {
  args: {
    test: 'test value',
  },
}
```

### tablePropsDefines

```ts
import { ComponentPropsOptions } from 'vue'

export const tablePropsDefines = {
  test: {
    type: String,
    required: false,
    default: 'test value2',
  },

  ooo: Object,
  oooo: [Object, String, Function],

  mmmm: {
    type: [Function, String, Number, Object],
    required: false,
    default: () => {},
  },
} satisfies ComponentPropsOptions
```
