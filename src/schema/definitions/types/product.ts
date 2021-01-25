import { gql } from 'apollo-server-express'

export default gql`
  type Product {
    location: ProductLocation
    productId: String
    productTitle: String
  }
`
