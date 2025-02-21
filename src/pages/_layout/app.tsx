import { Outlet, useLocation } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  const location = useLocation()

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-2 antialiased lg:p-10">
      <Header />

      <Outlet key={location.pathname} />
    </div>
  )
}
