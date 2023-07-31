import React from 'react'
import Usuario from '../components/Usuario'
import { useState } from 'react'
import FormularioMascotas from '../components/FormularioMascotas'
import { Form,useActionData, useLocation } from "react-router-dom";
import { useLogin } from '../store/userZustand';



export async function action({request}){
  const formDatosMascota = await request.formData();
  const datosMascota = Object.fromEntries(formDatosMascota);

  
  console.log(datosMascota)
  return null
}



function PerfilUsuario({usuario}) {
  const [animarModal,setAnimarModal]=useState(false)
  const [nuevaMascota, setNuevaMascota]=useState(false)
  const [modal,setModal]=useState(false)
  const {user,logout}=useLogin()
  
  
console.log(user)

  const handleNuevaMascota=()=>{
    setModal(true)

    setTimeout(()=>{
      setAnimarModal(true)
    },1500)
  }
  
  return (
    <>
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
    <section className='shadow-md flex flex-wrap my-2 mx-3 py-5'>
      <aside className='w-full md:w-2/5  mt-5 '>
        <Usuario />
        </aside>
        <aside className='md:w-3/5 mt-5 w-full text-center'>
          <h2 className='text-xl text-center text-slate-800 font-semibold'>Tus Mascotas </h2>
        
        
        </aside>
        
      
    </section>
    <div className='shadow-md my-2 mx-3 py-5 box-border'>

    <input onClick={handleNuevaMascota} className='uppercase py-4 px-2 w-full font-bold hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md' type="submit" value={'añadir Mascota'} />

    </div>
     

   {modal ?<Form method='post'> <FormularioMascotas animarModal={animarModal} setAnimarModal={setAnimarModal} setModal={setModal}/></Form>:null}
   
    </>
  )
}

export default PerfilUsuario