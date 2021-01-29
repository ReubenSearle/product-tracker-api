import { createTestClient } from 'apollo-server-testing'
import { gql } from 'apollo-server-express'
import constructTestServer from './testServer.js'
import Ebay from 'ebay-sdk'
import productSearchSingleCategoryFixture from './fixtures/productSearchSingleCategory.js'
import productSearchSingleCategoryExpected from './expected/productSearchSingleCategory.js'
import productSearchRecentlyListedFixture from './fixtures/productSearchRecentlyListed.js'
import productSearchRecentlyListedExpected from './expected/productSearchRecentlyListed.js'

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
        const findItemsAdvanced = sinon.stub()
          .withArgs({
            itemFilters: [{ name: 'Condition', value: '3000' }],
            itemsPerPage: 100,
            marketplaceId: 'EBAY-GB',
            categoryId: 34998
          })
          .resolves(productSearchSingleCategoryFixture)
        sinon.stub(Ebay.prototype, 'finding').value({ findItemsAdvanced })
      })
      it('should return the expected products', async function () {
        const query = gql`
          query {
            productSearch(
              input: {
                filter: {
                  category: garageEquipmentTools
                  condition: used
                }
              }
            ) {
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

    context('when searching for recently listed products', function () {
      beforeEach(function() {
        const findItemsAdvanced = sinon.stub()
          .withArgs({
            itemFilters: [{ name: 'Condition', value: '3000'}, {name: 'MaxDistance', value: '5' }],
            itemsPerPage: 100,
            marketplaceId: 'EBAY-GB',
            categoryId: 34998,
            buyerPostalCode: 'XXXX XXX',
            sortOrder: 'StartTimeNewest'
          })
          .resolves(productSearchRecentlyListedFixture)
        sinon.stub(Ebay.prototype, 'finding').value({ findItemsAdvanced })
      })
      it('should return the expected result', async function () {
        const query = gql`
          query {
            productSearch(
              input: {
                filter: {
                  buyerPostCode: "XXXX XXX"
                  category: garageEquipmentTools
                  condition: used
                  listedAfter: "2021-01-28T19:59:59.000Z"
                  maxDistance: 5
                }
                sort: startTimeNewest
              }
            ) {
              products {
                listing {
                  endTime
                  startTime
								}
                location {
                  name
                }
                productId
                productTitle
              }
            }
          }
        `
        const result = await testClient.query({ query })
        expect(result.data).to.deep.equal(productSearchRecentlyListedExpected)
      })
    })
  })
})