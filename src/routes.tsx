import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'
import { AboutPage } from './pages/pages/about/about'
import { ContactPage } from './pages/pages/contact/contact'
import { HomePage } from './pages/pages/home/home'
import { ProjectsPage } from './pages/pages/projects/projects'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
])
