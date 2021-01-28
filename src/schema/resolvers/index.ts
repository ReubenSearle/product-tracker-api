import graphqlIsoDate from 'graphql-iso-date'
import productSearch from './productSearch.js'
export default {
  DateTime: graphqlIsoDate.GraphQLDateTime,
  Query: {
    productSearch
  }
}
