import Ebay from 'ebay-sdk'
import { condition, itemFilterType, itemSortOrder, marketplaceCategory, marketplaceId } from 'ebay-sdk/lib/esm/enums/index.js'
import { EbayItems } from 'ebay-sdk/lib/esm/types/ebayItems.js'
import { FindItemsAdvancedRequestOptions } from 'ebay-sdk/lib/esm/types/findingRequestOptions.js'
import { ProductSearchResponse, QueryToProductSearchResolverArgs, QueryToProductSearchResolverParent } from '../../types/productSearch.js'

function buildFindItemsAdvancedRequestOptions (args: QueryToProductSearchResolverArgs): FindItemsAdvancedRequestOptions {
  const categoryEnumKey = args.input.category as keyof typeof marketplaceCategory.gb
  return {
    buyerPostalCode: 'CT19 5HE',
    categoryId: marketplaceCategory.gb[categoryEnumKey],
    itemFilters: [{
      name: itemFilterType.condition,
      value: condition.used.toString()
    }],
    itemsPerPage: 100,
    keywords: args.input.keywords,
    marketplaceId: marketplaceId.ebayGB,
    sortOrder: itemSortOrder.distanceNearest
  }
}

function mapEbayItemsToProductResponse (ebayItems: EbayItems): ProductSearchResponse {
  return {
    products: ebayItems.map(ebayItem => {
      return {
        productTitle: ebayItem.title
      }
    })
  }
}

export default async function (parent: QueryToProductSearchResolverParent, args: QueryToProductSearchResolverArgs) {
  const appConfig = { applicationId: 'ReubenSe-ProductT-PRD-dd4af8734-e20fc474' }
  const ebay = new Ebay(appConfig)
  const options = buildFindItemsAdvancedRequestOptions(args)
  const result = await ebay.finding.findItemsAdvanced(options)
  return mapEbayItemsToProductResponse(result)
}
