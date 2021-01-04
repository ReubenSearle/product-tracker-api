import { gql } from 'apollo-server-express'

export default gql`
  input ProductSearchOptions {
    searchTerm: String
  }
  type ProductSearchResponse {
    productTitle: String!
  }
`
