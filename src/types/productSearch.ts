export type Product = {
  productTitle: string
}

export type ProductSearchResponse = {
  products: Array<Product>
}

export type QueryToProductSearchResolverParent = {}

export type QueryToProductSearchResolverArgs = {
  input: {
    category: string
    keywords: string
  }
}
