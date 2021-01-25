import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import dotenv from 'dotenv'
import express from 'express'
import schema from './schema/index.js'

const getGraphqlOptions = function (): ApolloServerExpressConfig {
  return {
    ...schema
  }
}

const initialise = function (): void {
  dotenv.config()
  const graphqlOptions = getGraphqlOptions()
  const server = new ApolloServer(graphqlOptions)
  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  )
}

initialise()
