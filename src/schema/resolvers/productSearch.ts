import Ebay from 'ebay-sdk'
import { condition, itemFilterType, itemSortOrder, marketplaceCategory, marketplaceId } from 'ebay-sdk/lib/esm/enums/index.js'
import { AppConfig } from 'ebay-sdk/lib/esm/types/appConfig.js'
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
  const useEbayApiSandboxEnv = (process.env.EBAY_API_SANDBOX.toLowerCase() === 'true')
  const appConfig: AppConfig = {
    applicationId: useEbayApiSandboxEnv
      ? process.env.EBAY_API_SANDBOX_APP_ID
      : process.env.EBAY_API_PRODUCTION_APP_ID,
    sandbox: useEbayApiSandboxEnv
  }
  const ebay = new Ebay(appConfig)
  const options = buildFindItemsAdvancedRequestOptions(args)
  const result = await ebay.finding.findItemsAdvanced(options)
  return mapEbayItemsToProductResponse(result)
}
