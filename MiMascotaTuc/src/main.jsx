import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import NuevoUsuario,{action as NuevoUsuarioAction} from './pages/NuevoUsuario'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      { 
        index:true,
        path:'/',
        element:<Inicio/>
      },
      {
        path:'/usuario/nuevo',
        element:<NuevoUsuario/>,
        action:NuevoUsuarioAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
