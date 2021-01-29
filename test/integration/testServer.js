import { ApolloServer } from 'apollo-server-express'
import schema from '../../lib/src/schema/index.js'
import dotenv from 'dotenv'
dotenv.config()

export default function() {
  return new ApolloServer({ ...schema })
}
