import { ApolloServer, ApolloServerExpressConfig, PlaygroundConfig } from 'apollo-server-express'
import dotenv from 'dotenv'
import playgroundTabs from '../queryExamples/index.js'
import express from 'express'
import schema from './schema/index.js'

const defaultGraphqlEndpoint = '/graphql'

const getGraphQlOptions = function (): ApolloServerExpressConfig {
  return {
    ...schema,
    playground: getGraphQlPlayGroundOptions()
  }
}

const getGraphQlPlayGroundOptions = function () : PlaygroundConfig {
  return {
    title: 'Product Tracker',
    tabs: playgroundTabs(defaultGraphqlEndpoint)
  }
}

const initialise = function (): void {
  dotenv.config()
  const graphqlOptions = getGraphQlOptions()
  const server = new ApolloServer(graphqlOptions)
  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  )
}

initialise()
