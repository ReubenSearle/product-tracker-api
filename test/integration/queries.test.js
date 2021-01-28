import { createTestClient } from 'apollo-server-testing'
import { gql } from 'apollo-server-express'
import constructTestServer from './testServer.js'
import Ebay from 'ebay-sdk'
import productSearchSingleCategoryFixture from './fixtures/productSearchSingleCategory.js'
import productSearchSingleCategoryExpected from './expected/productSearchSingleCategory.js'

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
        const findItemsAdvanced = sinon.stub().resolves(productSearchSingleCategoryFixture)
        sinon.stub(Ebay.prototype, 'finding').value({ findItemsAdvanced })
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
        expect(result.data).to.deep.equal(productSearchSingleCategoryExpected)
      })
    })
  })
})