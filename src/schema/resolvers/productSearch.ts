import Ebay from 'ebay-sdk'
import moment from 'moment'
import { condition, itemFilterType, itemSortOrder, marketplaceCategory, marketplaceId } from 'ebay-sdk/lib/esm/enums/index.js'
import { AppConfig } from 'ebay-sdk/lib/esm/types/appConfig.js'
import { EbayItems, EbayItem } from 'ebay-sdk/lib/esm/types/ebayItems.js'
import { FindItemsAdvancedRequestOptions } from 'ebay-sdk/lib/esm/types/findingRequestOptions.js'
import { Product, ProductSearchResponse, QueryToProductSearchResolverArgs, QueryToProductSearchResolverParent } from '../../types/productSearch.js'

function buildFindItemsAdvancedRequestOptions (args: QueryToProductSearchResolverArgs): FindItemsAdvancedRequestOptions {
  const requestOptions: FindItemsAdvancedRequestOptions = {
    itemFilters: [],
    itemsPerPage: 10, // gql paging not yet implemented
    marketplaceId: marketplaceId.ebayGB
  }
  if (args.input.filter?.category) {
    const categoryEnumKey = args.input.filter.category as keyof typeof marketplaceCategory.gb
    requestOptions.categoryId = marketplaceCategory.gb[categoryEnumKey]
  }
  if (args.input.filter?.condition) {
    const conditionEnumKey = args.input.filter.condition as keyof typeof condition
    requestOptions.itemFilters?.push({ name: itemFilterType.condition, value: condition[conditionEnumKey].toString() })
  }
  if (args.input.filter?.keywords) {
    requestOptions.keywords = args.input.filter.keywords
  }
  if (args.input.filter?.maxDistance) {
    if (!args.input.filter?.buyerPostCode) throw new Error('buyerPostCode is required to assert maxDistance filter')
    requestOptions.buyerPostalCode = args.input.filter.buyerPostCode
    requestOptions.itemFilters?.push({ name: itemFilterType.maxDistance, value: args.input.filter.maxDistance.toString() })
  }
  if (args.input.sort) {
    if (args.input.sort === itemSortOrder.distanceNearest) {
      if (!args.input.filter?.buyerPostCode) throw new Error('buyerPostCode is required to assert distanceNearest sorting')
      requestOptions.buyerPostalCode = args.input.filter.buyerPostCode
    }
    const sortOrderEnumKey = args.input.sort as keyof typeof itemSortOrder
    requestOptions.sortOrder = itemSortOrder[sortOrderEnumKey]
  }
  return requestOptions
}

function mapEbayItemsToProducts (ebayItems: EbayItems): Product[] {
  return ebayItems.map(mapEbayItemToProduct)
}

function mapEbayItemToProduct (ebayItem: EbayItem): Product {
  return {
    listing: { endTime: ebayItem.listing.endTime, startTime: ebayItem.listing.startTime },
    location: { name: ebayItem.location.name, postCode: ebayItem.location.postalCode },
    productId: ebayItem.itemId,
    productTitle: ebayItem.title
  }
}

function filterProducts (products: Product[], args: QueryToProductSearchResolverArgs): Product[] {
  const listedAfter = args.input.filter?.listedAfter
  if (listedAfter) {
    products = products.filter(product => moment(product.listing.startTime).isAfter(listedAfter))
  }
  return products
}

export default async function (parent: QueryToProductSearchResolverParent, args: QueryToProductSearchResolverArgs): Promise<ProductSearchResponse> {
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
  const products = mapEbayItemsToProducts(result)
  const filteredProducts = filterProducts(products, args)
  return { products: filteredProducts }
}
