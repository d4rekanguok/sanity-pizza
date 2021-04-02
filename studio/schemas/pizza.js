import * as React from 'react'

const fieldSize = {
  title: 'Size',
  name: 'size',
  type: 'number',
  description: 'The size of the svg. Ideally we could automatically generate this number from svg field, but to keep thing simple lets enter it here.'
}

export const topping = {
  type: 'document',
  name: 'topping',
  title: 'Topping',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().min(2),
    },
    {
      title: 'SVG',
      name: 'svg',
      type: 'text',
      validation: Rule => Rule.required().min(2),
    },
    fieldSize,
  ],
  preview: {
    select: {
      title: 'title',
      svg: 'svg',
    },
    prepare: ({ title, svg }) => ({
      title,
      media: () => <div dangerouslySetInnerHTML={{ __html: svg }} />
    })
  }
}

export const pizza = {
  type: 'document',
  name: 'pizza',
  title: 'Pizza',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Base Pizza',
      name: 'svg',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    fieldSize,
    {
      title: 'Toppings',
      name: 'toppings',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: topping.name }]
      }],
      validation: Rule => Rule.required().min(2),
    }
  ]
}