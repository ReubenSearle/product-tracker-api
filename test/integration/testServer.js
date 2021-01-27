import { ApolloServer } from 'apollo-server-express'
import schema from '../../lib/schema/index.js'
import dotenv from 'dotenv'
dotenv.config()

export default function() {
  return new ApolloServer({ ...schema })
}
