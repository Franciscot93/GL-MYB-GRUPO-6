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
 
import DeletePet from "./pages/DeletePet";

import Home from "./pages/Home";

// Crear enrutador con rutas y elementos correspondientes
const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Root />,
      },
      {
        path: "/usuario/nuevo",
        element: <NewUser />,
        action: NuevoUsuarioAction,
      },
      {
        path: "/usuario/login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId",
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
        loader: loaderUser,
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId/nuevaMascota",
        element: (
          <ProtectedRoute>
            <NewPet />
          </ProtectedRoute>
        )
       
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
      },
      {
        path: "/usuario/perfilDelUsuario/:perfilDelUsuarioId/eliminarMascota/:eliminarMascotaId",
        element: (<DeletePet />),
      },{
      

        path: "/Home",
        element: <Home />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
