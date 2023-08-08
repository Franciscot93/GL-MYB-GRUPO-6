

import React, { useEffect } from "react";
import User from "../components/User";
import Pet from "../components/Pet";


import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useLogin } from "../store/userZustand";
import { obtenerDatosUsuario } from "../data/usuarios";

export async function loader({ params }) {
  
  return null;
}

function UserPage() {
  const navigate=useNavigate()
   // Obtener informacion del usuario y funcion de cierre de sesion desde el estado global
  const { user, logout,setUser} = useLogin();

  
  // Función para cargar los datos del usuario al montar o actualizar la página
  const cargarDatosUsuario = async () => {
    try {
      const usuarioActualizado = await obtenerDatosUsuario(user.id);
      setUser(usuarioActualizado); // Actualizar los datos del usuario en el estado global
    } catch (error) {
      console.log("Error al cargar los datos del usuario:", error);
    }
  };

  // Cargar los datos del usuario al montar o actualizar la página
  useEffect(() => {
    cargarDatosUsuario();
  }, []);


  

  return (
    <main>
      <div className="flex mb-5 justify-end">

        <button
          onClick={()=>navigate(-1)}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          Cerrar sesion
        </button>
      </div>

    
    {/* Seccion de perfil de usuario y mascotas*/}
      <section className="shadow-md flex flex-wrap my-2 mx-3  py-5"> 
       {/*Seccion de perfil de usuario  */}
        <aside className="w-full md:w-2/5 lg:1/5 mt-5 ">
          <User />
        </aside>
        {/* Seccion de lista de mascotas*/}
        <aside className="md:w-3/5 lg:4/5 mt-5 w-full text-center md:h-screen overflow-y-scroll overflow-x-hidden">
          <h2 className='text-4xl text-center logoTitle text-[#066aff]  border-b-2 border-indigo-700 py-1 mx-3'>TuS MasCotaS </h2>
          {user?.mascotas.length > 0 ? (
            <ul>
              {user?.mascotas.map((pet) => (
                <Pet key={pet.id} pet={pet} />
              ))}
            </ul>
          ) : (
            <h3 className="text-3xl text-slate-800 logoTitle">NO HAY MASCOTAS</h3>
          )}
        </aside>
      </section>
      {/*Enlace para agregar una nueva mascota */}
      <div className="shadow-md my-2 mx-3 py-5 box-border ">
        <Link to={`/usuario/perfilDelUsuario/${user.id}/nuevaMascota`} className='logoTitle py-4 px-2 w-full text-3xl bg-[#0841c5] hover:bg-[#066aff]  hover:cursor-pointer  text-[#fff] rounded-md'>Agregar MaScOtA</Link>
      </div>


    

    </main>
  );
}

export default UserPage;
