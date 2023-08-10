import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Root from "./pages/Root";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login";
import NewUser, { action as NuevoUsuarioAction } from "./pages/NewUser";
import UserPage, { loader as loaderUser } from "./pages/UserPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import NewPet from "./pages/NewPet";

import EditPet, {
  loader as editPetLoader,
  action as editPetAction,
} from "./pages/EditPet";
 
import PetDetail from "./pages/PetDetail";

import Home from "./pages/Home";

import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";


// Crear enrutador con rutas y elementos correspondientes
const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        errorElement:<ErrorPage/>

      },
      {
        path: "/usuario/nuevo",
        element: <NewUser />,
        action: NuevoUsuarioAction,
        errorElement:<ErrorPage/>
      },
      {
        path: "/usuario/login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
        errorElement:<ErrorPage/>
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId",
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
          
        ),
        loader: loaderUser,
        errorElement:<ErrorPage/>
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId/nuevaMascota",
        element: (
          <ProtectedRoute>
            <NewPet />
          </ProtectedRoute>
        ),
        errorElement:<ErrorPage/>
       
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId/editarMascota/:editarMascotaId",
        element: (
          <ProtectedRoute>
            <EditPet />
          </ProtectedRoute>
        ),
        loader: editPetLoader,
        action: editPetAction,
        errorElement:<ErrorPage/>
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId/detailPet/:detailPet",
        element: <ProtectedRoute><PetDetail /></ProtectedRoute>,
        errorElement:<ErrorPage/>
      },{
      

        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId/home",
        element: <ProtectedRoute><Home /></ProtectedRoute>,
      },
       {
        path:"/about",
        element:<About/>,
        errorElement:<ErrorPage/>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
