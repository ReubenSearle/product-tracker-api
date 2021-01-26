import { createTestClient } from 'apollo-server-testing'
import { gql } from 'apollo-server-express'
import constructTestServer from './testServer.js'
import Ebay from 'ebay-sdk'
import sinon from 'sinon'

describe('Queries', function() {
  let testClient
  beforeEach(function() {
    const testServer = constructTestServer()
    testClient = createTestClient(testServer)
  })
  afterEach(function() {
    sinon.restore()
  })
  
  describe('Product Search', function() {
    context('when searching for all products in a category', function () {
      beforeEach(function() {
        sinon.stub(Ebay.prototype, 'finding').returns({ findItemsAdvanced: sinon.stub() })
      })
      it('should return the expected products', async function () {
        const query = gql`
          query {
            productSearch(input: {category: garageEquipmentTools}) {
              products {
                productId
                productTitle
              }
            }
          }
        `
        const result = await testClient.query({ query })
        // setup dotenv for test scenarios
        console.log(result)
      })
    })
  })
})