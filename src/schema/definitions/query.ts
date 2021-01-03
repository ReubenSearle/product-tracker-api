import { gql } from 'apollo-server-express'

module.exports = gql`
  type Query {
    productSearch(input: ProductSearchOptions!): ProductSearchResponse
  }
`
