import { gql } from 'apollo-server-express'

export default gql`
  input ProductSearchOptions {
    keywords: String,
    category: Category
  }
`
