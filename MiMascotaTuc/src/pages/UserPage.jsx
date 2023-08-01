import React from 'react'
import User from '../components/User'
import Pet from '../components/Pet';

import {  Link, useLoaderData, } from "react-router-dom";
import { useLogin } from '../store/userZustand';
import { obtenerDatosUsuario } from '../data/usuarios';




export async function loader({params}) {
  const userNow =await obtenerDatosUsuario(params.perfilDelUsuarioId)
  return userNow
} 




function UserPage() {
 
 const userNow=useLoaderData()
 console.log(userNow.mascotas)
 
  
 const {user,logout}=useLogin()
  

  
  
  return (
    <main >
    <div className="flex mb-5 justify-end">
        <button
          onClick={() => logout()}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          Cerrar sesion
        </button>
      </div>
    <div className='shadow-md  my-2 mx-3 py-5'>
      <h3 className='text-2xl text-center text-slate-800 font-semibold'>Bienvenido/a <span className='text-indigo-600'>{user.username}</span></h3>

    </div>
    <section className='shadow-md flex flex-wrap my-2 mx-3  py-5'>
      <aside className='w-full md:w-2/5  mt-5 '>
        <User />
        </aside>
        <aside className='md:w-3/5 mt-5 w-full text-center md:h-screen overflow-scroll'>
          <h2 className='text-xl text-center text-slate-800 font-semibold'>Tus Mascotas </h2>
          {(userNow.mascotas).length>0 ? (<ul>{(userNow.mascotas).map(pet=>(<Pet key={pet.id} pet={pet}/>))}</ul>): <h3>NO HAY MASCOTAS</h3>}
        
        </aside>
        
      
    </section>
    <div className='shadow-md my-2 mx-3 py-5 box-border '>

    <Link to={`/usuario/perfilDelUsuario/${user.id}/nuevaMascota`} className='uppercase py-4 px-2 w-full font-bold hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md'>Añadir Mascota</Link>

    </div>
     

   
   
    </main>
  )
}

export default UserPage