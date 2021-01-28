import { gql } from 'apollo-server-express'

export default gql`
  input ProductSearchFilters {
    category: Category
    condition: Condition
    keywords: String
    listedAfter: DateTime
    maxDistance: Float
    buyerPostCode: String
  }

  input ProductSearchOptions {
    filter: ProductSearchFilters
    sort: SortOrder
  }
`
