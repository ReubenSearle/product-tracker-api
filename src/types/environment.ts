/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      EBAY_API_SANDBOX: string
      EBAY_API_PRODUCTION_APP_ID: string
      EBAY_API_SANDBOX_APP_ID: string
    }
  }
}
export {}
