import { gql } from 'apollo-server-express'

module.exports = gql`
  input ProductSearchOptions {
    searchTerm: String
  }
  type ProductSearchResponse {
    productTitle: String!
  }
`
