import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLogin } from '../store/userZustand'

import { Image } from 'cloudinary-react'


export default function PetDetail() {
  const navigate=useNavigate()
  const {DetailPetId}=useParams()
  const{user,logout,pet}=useLogin()
  
  
  
  console.log(pet)

  return (

    <>
    <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>
    <div className='w-full h-screen flex flex-row flex-wrap'>
      

        <div className='bg-slate-900 hover:bg-red-700 transition-colors duration-500 rounded-lg bg-opacity-70  w-2/4'><div className="relative overflow-hidden flex bg-cover aspect-square justify-center content-center place-content-center place-items-center align-middle text-cent bg-no-repeat">
    <Image  cloudName='dqr2aiayz'/>
    </div></div>
        <div className='bg-indigo-600 rounded-lg w-2/4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero consequuntur a quis magni quibusdam alias, vel similique consectetur, sunt deleniti ratione corrupti quaerat eum facilis porro accusantium obcaecati minus!</p></div>
    </div>

    </>
  )
}
