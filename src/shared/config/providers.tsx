import { Suspense } from 'react'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import { SessionStoreProvider } from '@/entities/session/model/session-store-provider'
import { theme } from './theme'

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <SessionStoreProvider>
          <Suspense>{children}</Suspense>
        </SessionStoreProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
