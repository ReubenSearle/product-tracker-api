import { gql } from 'apollo-server-express'

export default gql`
  type Product {
    listing: ProductListing
    location: ProductLocation
    productId: String
    productTitle: String
  }
`
