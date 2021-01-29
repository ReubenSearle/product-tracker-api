import { gql } from 'apollo-server-express'

export default gql`
  type ProductListing {
    endTime: DateTime
    startTime: DateTime
  }
`
