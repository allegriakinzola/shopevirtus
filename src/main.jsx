import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Link, Route } from 'react-router-dom'
import { DashboardAminProduits } from './components/admin/produitsection/dashboardadminproduits.jsx'
import { Login } from './pages/login.jsx'
import { DashboardAdminVentes } from './components/admin/ventesection/dashboadadminventes.jsx'
import { DashboardClientCommandes } from './components/client/commandesection/dashboardclientcommandes.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Login/>
  },
  {
    path : "/dashboardadminproduits",
    element : <DashboardAminProduits/>
  }, 
  {
    path :"/dashboardadminventes",
    element : <DashboardAdminVentes/>
  },
  {
    path : "/dashboardclientcommandes",
    element : <DashboardClientCommandes/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
