import { expect, test } from 'vitest'

import { transformVueArgTypes } from './main'

test('transformVueArgTypes', () => {
  expect(
    transformVueArgTypes(
      {
        test: {
          type: String,
          required: true,
          default: 'test value2',
        },

        number: {
          type: Number,
          required: false,
          default: 123,
        },

        Array: {
          type: Array,
          required: false,
        },

        Object: {
          type: Object,
          required: false,
        },

        Boolean: {
          type: Boolean,
          required: false,
        },

        Date: {
          type: Date,
          required: false,
        },

        fn: {
          type: Function,
          required: false,
        },

        ooo: Object,

        oooo: [Object, String, Function],

        mmm: {
          type: [Function],
          required: false,
        },

        mmmm: {
          type: [Function, String, Number, Object],
          required: false,
        },
      },
      { test: 'test desc ok' }
    )
  ).toEqual({
    test: {
      name: 'test',
      description: 'test desc ok',
      type: {
        name: 'string',
        value: String,
        required: true,
      },
      table: {
        defaultValue: {
          summary: 'test value2',
        },
        type: {
          summary: 'string',
        },
      },
    },

    number: {
      name: 'number',
      description: undefined,
      type: {
        name: 'number',
        value: Number,
        required: false,
      },
      table: {
        defaultValue: {
          summary: 123,
        },
        type: {
          summary: 'number',
        },
      },
    },

    Array: {
      name: 'Array',
      description: undefined,
      type: {
        name: 'array',
        value: Array,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Array',
        },
      },
    },

    Object: {
      name: 'Object',
      description: undefined,
      type: {
        name: 'object',
        value: Object,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Object',
        },
      },
    },

    Boolean: {
      name: 'Boolean',
      description: undefined,
      type: {
        name: 'boolean',
        value: Boolean,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'boolean',
        },
      },
    },

    Date: {
      name: 'Date',
      description: undefined,
      type: {
        name: 'other',
        value: Date,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Date',
        },
      },
    },

    fn: {
      name: 'fn',
      description: undefined,
      type: {
        name: 'function',
        value: Function,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Function',
        },
      },
    },

    ooo: {
      name: 'ooo',
      description: undefined,
      type: {
        name: 'object',
        value: Object,
        required: undefined,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Object',
        },
      },
    },

    oooo: {
      name: 'oooo',
      description: undefined,
      type: {
        name: 'object',
        value: Object,
        required: undefined,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Object | string | Function',
        },
      },
    },

    mmm: {
      name: 'mmm',
      description: undefined,
      type: {
        name: 'function',
        value: Function,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Function',
        },
      },
    },

    mmmm: {
      name: 'mmmm',
      description: undefined,
      type: {
        name: 'function',
        value: Function,
        required: false,
      },
      table: {
        defaultValue: {
          summary: '-',
        },
        type: {
          summary: 'Function | string | number | Object',
        },
      },
    },
  })
})
