import React from 'react'
import User from '../components/User'
import Pet from '../components/Pet';
import {  Link, useLoaderData, } from "react-router-dom";
import { useLogin } from '../store/userZustand';
import { obtenerDatosUsuario } from '../data/usuarios';



 // Funcion "loader" utilizada para obtener los datos del usuario actual
export async function loader({params}) {

  // Cargar los datos del usuario utilizando el ID proporcionado en los parametros
  const userNow =await obtenerDatosUsuario(params.perfilDelUsuarioId)
  return userNow
} 




function UserPage() {
  // Obtener los datos del usuario actual cargados por el "Loader"
  const userNow=useLoaderData()
  console.log(userNow.mascotas)
 
  // Obtener informacion del usuario y funcion de cierre de sesion desde el estado global
 const {user,logout}=useLogin()
  

  return (
    <main >
      {/* Boton para cerrar sesion */}
    <div className="flex mb-5 justify-end">
        <button
          onClick={() => logout()}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          Cerrar sesion
        </button>
      </div>
      {/*Seccion de Bienvenida */}
    <div className='shadow-md  my-2 mx-3 py-5'>
      <h3 className='text-2xl text-center text-slate-800 font-semibold'>Bienvenido/a <span className='text-indigo-600'>{user.username}</span></h3>

    </div>
      {/* Seccion de perfil de usuario y mascotas*/}
    <section className='shadow-md flex flex-wrap my-2 mx-3  py-5'>
      {/*Seccion de perfil de usuario  */}
      <aside className='w-full md:w-2/5  mt-5 '>
        <User />
        </aside>
        {/* Seccion de lista de mascotas*/}
        <aside className='md:w-3/5 mt-5 w-full text-center md:h-screen overflow-scroll'>
          <h2 className='text-2xl text-center logoTitle text-slate-800  border-b-2 border-indigo-700 py-1 mx-3'>Tus MasCotas </h2>
          {/* Renderizar lista de mascotas o mensaje si no hay */}
          {(userNow.mascotas).length>0 ? (<ul>{(userNow.mascotas).map(pet=>(<Pet key={pet.id} pet={pet}/>))}</ul>): <h3>NO HAY MASCOTAS</h3>}
        
        </aside>  
    </section>

        {/*Enlace para agregar una nueva mascota */}
    <div className='shadow-md my-2 mx-3 py-5 box-border '>

    <Link to={`/usuario/perfilDelUsuario/${user.id}/nuevaMascota`} className='logoTitle py-4 px-2 w-full text-3xl hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md'>Agregar MaScOtA</Link>

    </div>
     

   
   
    </main>
  )
}

export default UserPage