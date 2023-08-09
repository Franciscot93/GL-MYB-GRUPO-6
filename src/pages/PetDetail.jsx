import React from 'react'
import { useNavigate, useParams,useLocation,Link } from 'react-router-dom'
import { useLogin } from '../store/userZustand'
import Pet from '../components/Pet'
import imagenFile from "../img/filelogo.png"


export default function PetDetail() {
  const navigate=useNavigate()
  const {detailPetId}=useParams()
  const{user,logout,pet}=useLogin()
  

  const locacion= useLocation()
  return (

    <main>
    <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>
    <div className='shadow-md flex flex-wrap my-2 mx-3  py-5'>
    <aside className="flex flex-wrap w-full justify-center md:w-2/5 lg:w-2/5 mt-5 ">
    <h2 className='text-4xl text-[#066aff] text-center w-full logoTitle'>Mascota</h2>
    <Pet pet={pet}/>
        </aside>
    <aside className='flex  justify-center flex-wrap w-full box-border md:w-3/5 lg:3/5 mt-5'>
      <h2 className='text-4xl text-[#066aff] text-center w-full logoTitle'>Documentacion de Seguimiento</h2>
      <div className=' flex w-full   justify-center place-content-center  relative p-1'>
      
      <ul className='w-full flex items-center flex-col p-1 overflow-scroll'>
          {pet.file.length>0 ? pet.file?.map(file => (  
                <li key={file.id}> <div key={file.id} className='text-md my-2 font-semibold flex flex-row'>Fecha:{file.fecha} <Link target='_blank' to={file.documento} ><img src={imagenFile}/></Link> </div></li>
               )): <h2 className='text-2xl text-slate-800 w-full animate-pulse text-center logoTitle' >No se registran Archivos en tu Mascota</h2>}
      </ul>
      </div>
    </aside>
          
    </div>

    </main>
  )
}
