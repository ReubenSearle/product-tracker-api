import { gql } from 'apollo-server-express'

export default gql`
  enum Condition {
    new
    used
  }
`
