import React from 'react'
import Usuario from '../components/Usuario'
import { useState } from 'react'
import FormularioMascotas from '../components/FormularioMascotas'



function PerfilUsuario({usuario}) {
  const [animarModal,setAnimarModal]=useState(false)
  const [nuevaMascota, setNuevaMascota]=useState(false)
  const [modal,setModal]=useState(false)
  const handleNuevaMascota=()=>{
    setModal(true)

    setTimeout(()=>{
      setAnimarModal(true)
    },1500)
  }
  
  return (
    <>

    <div className='shadow-md  my-2 mx-3 py-5'>
      <h3 className='text-2xl text-center text-slate-800 font-semibold'>Bienvenido {usuario}</h3>

    </div>
    <section className='shadow-md flex flex-wrap my-2 mx-3 py-5'>
      <aside className='w-full md:w-1/5  mt-5 border-indigo-500 '>
        <Usuario/>
        </aside>
        <aside className='md:w-4/5 mt-5 w-full text-center'>
          <h2 className='text-xl text-center text-slate-800 font-semibold'>Tus Mascotas </h2>
        
        
        </aside>
        
      
    </section>
    <div className='shadow-md my-2 mx-3 py-5 box-border'>

    <input onClick={handleNuevaMascota} className='uppercase py-4 px-2 w-full  hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md' type="submit" value={'añadir Mascota'} />

    </div>
     

   {modal ? <FormularioMascotas animarModal={animarModal} setAnimarModal={setAnimarModal} setModal={setModal}/>:null}
   
    </>
  )
}

export default PerfilUsuario