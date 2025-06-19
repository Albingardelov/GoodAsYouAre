import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createHashRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
// importera fler sidor här vid behov

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/about-me',
        Component: AboutMe
      },
      // fler routes här
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
