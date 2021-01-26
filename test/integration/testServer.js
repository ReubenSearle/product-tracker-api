import { ApolloServer } from 'apollo-server-express'
import schema from '../../lib/schema/index.js'

export default function() {
  return new ApolloServer({ ...schema })
}
