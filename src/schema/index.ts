import { gql } from 'apollo-server-express'
import definitions from './definitions'
import resolvers from './resolvers'

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
