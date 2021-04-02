import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { pizza, topping } from './pizza'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    topping,
    pizza
  ]),
})
