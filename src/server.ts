import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import express from 'express'
import schema from './schema/index.js'

const getGraphqlOptions = function (): ApolloServerExpressConfig {
  return {
    ...schema
  }
}

const initialise = function (): void {
  const graphqlOptions = getGraphqlOptions()
  const server = new ApolloServer(graphqlOptions)
  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

initialise()
