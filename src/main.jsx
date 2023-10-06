import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Imports das paginas
import Home from './pages/Home/index.jsx'
import Projects from './pages/Projects/index.jsx'
import Contacts from './pages/Contacts/index.jsx'

// Alterado para comportar o reaproveitamento de estrutura
const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <App />,
        children:[
          {
            path:"/",
            element: <Home />
          },
          {
            path:"/projects",
            element: <Projects />
          },
          {
            path:"/contacts",
            element: <Contacts />
          }
        ]
      }
    ]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
