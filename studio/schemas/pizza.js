import * as React from 'react'

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