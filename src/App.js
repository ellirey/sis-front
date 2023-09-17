import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './routes/AdminLayout'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Items from './components/Items/Items'
const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'items',
        element: <Items />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
