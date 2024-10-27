export const mapURLToStep = (pathname: string) => {
  switch (pathname) {
    case '/register':
      return 0
    case '/shopify-connect':
      return 1
    case '/no-shopify':
      return 1
    case '/platform-submitted':
      return 1
    case '/store-connected':
      return 2
    case '/customer-connect':
      return 2
    case '/no-gmail':
      return 2
    case '/email-provider-submitted':
      return 2
    case '/onboarding-complete':
      return 3
    default:
      return 0
  }
}
