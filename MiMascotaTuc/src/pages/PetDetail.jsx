import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLogin } from '../store/userZustand'

export default function PetDetail() {
  const navigate=useNavigate()
  const params=useParams()
  const{user,logout}=useLogin()
  console.log( params)
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
      

        <div className='bg-slate-900 hover:bg-red-700 transition-colors duration-500 rounded-lg bg-opacity-70 h-2/4 w-2/4'><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d270855.5378832847!2d-65.38893438069496!3d-26.878962790335002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sveterinarias%20tucuman!5e0!3m2!1ses-419!2sar!4v1691035540871!5m2!1ses-419!2sar"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className='bg-indigo-600 rounded-lg w-2/4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero consequuntur a quis magni quibusdam alias, vel similique consectetur, sunt deleniti ratione corrupti quaerat eum facilis porro accusantium obcaecati minus!</p></div>
    </div>

    </>
  )
}