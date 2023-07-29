import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Login,{action as loginAction, loader as loginLoader} from './pages/Login'
import NuevoUsuario,{action as NuevoUsuarioAction} from './pages/NuevoUsuario'
import PerfilUsuario,{ action as NuevaMascotaAction} from './pages/PerfilUsuario'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      { 
        index:true,
        path:'/',
        element:<Inicio/>,
        
      },
      {
        path:'/usuario/nuevo',
        element:<NuevoUsuario/>,
        action:NuevoUsuarioAction
      },
      {
        path:'/usuario/login',
        element:<Login/>,
        action:loginAction,
        loader:loginLoader
        
        
      },      
      {
        path:'/usuario/perfilDelUsuario',
        element:<PerfilUsuario/>,
        action:NuevaMascotaAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
