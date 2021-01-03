import { gql } from 'apollo-server-express'
const definitions = require('./definitions')
const resolvers = require('./resolvers')

const rootSchema = gql`
  schema {
    query: Query
  }
`

module.exports = {
  typeDefs: [
    ...definitions,
    rootSchema
  ],
  resolvers
}
