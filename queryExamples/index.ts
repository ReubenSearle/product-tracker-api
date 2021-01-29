import { Tab } from '@apollographql/graphql-playground-html/dist/render-playground-page.js'
import fs from 'fs'
import path from 'path'

export default function (graphQlEndpoint: string): Tab[] {
  return [
    {
      endpoint: graphQlEndpoint,
      name: 'Get newly listed, local, used products in category',
      query: fs.readFileSync(path.join(path.resolve(), 'queryExamples/getNewlyListedUsedProductsInLocalArea.txt'), 'utf8')
    }
  ]
}
