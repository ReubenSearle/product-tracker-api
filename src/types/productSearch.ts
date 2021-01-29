export type Location = {
  name: string
  postCode: string
}

export type Product = {
  listing: {
    endTime: Date
    startTime: Date
  }
  location: Location
  productId: string
  productTitle: string
}

export type ProductSearchResponse = {
  products: Product[]
}

export type QueryToProductSearchResolverParent = {}

export type QueryToProductSearchResolverArgs = {
  input: {
    filter?: {
      category?: string
      condition?: string
      keywords?: string
      listedAfter?: Date
      maxDistance?: Number
      buyerPostCode?: string
    }
    sort?: string
  }
}
