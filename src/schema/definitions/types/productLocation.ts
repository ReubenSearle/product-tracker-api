import { gql } from 'apollo-server-express'

export default gql`
  type ProductLocation {
    name: String
    postCode: String
  }
`
