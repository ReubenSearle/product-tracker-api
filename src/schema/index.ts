import { gql } from 'apollo-server-express'
import definitions from './definitions/index.js'
import resolvers from './resolvers/index.js'

const rootSchema = gql`
  schema {
    query: Query
  }
`

export default {
  typeDefs: [
    ...definitions,
    rootSchema
  ],
  resolvers
}
