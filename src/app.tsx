import { inject } from '@vercel/analytics'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { routes } from './routes'

inject()

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Diego Krause" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
