import { Tab } from '@apollographql/graphql-playground-html/dist/render-playground-page.js'
import fs from 'fs'
import path from 'path'

export default function (graphQlEndpoint: string): Tab[] {
  return [
    {
      endpoint: graphQlEndpoint,
      name: 'Get Local Products in Category',
      query: fs.readFileSync(path.join(path.resolve(), 'queryExamples/getLocalProductsInCategory.txt'), 'utf8')
    }
  ]
}
