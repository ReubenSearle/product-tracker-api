import { gql } from 'apollo-server-express'

export default gql`
  type Product {
    productId: String!
    productTitle: String!
  }
`
