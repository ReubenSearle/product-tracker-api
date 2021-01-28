import { gql } from 'apollo-server-express'

export default gql`
  enum SortOrder {
    default
    bestMatch
    bidCountFewest
    bidCountMost
    countryAscending
    countryDescending
    currentPriceHighest
    distanceNearest
    endTimeSoonest
    pricePlusShippingHighest
    pricePlusShippingLowest
    startTimeNewest
    watchCountDecreaseSort
  }
`
