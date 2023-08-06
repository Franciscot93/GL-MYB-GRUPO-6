import { useLogin } from "../store/userZustand"
import { eliminarMascotas } from "../data/usuarios"
import { redirect, useNavigate,Link} from "react-router-dom"
import {Image} from 'cloudinary-react'






function Pet({pet}) {
  console.log(pet)
  const {user,setUser, eliminarMascota}=useLogin()
  const navigate=useNavigate()
  
  const handleEliminar=()=>{
    eliminarMascotas(user,pet.id,setUser, eliminarMascota)
  }

  return (
    <div
    className="block lg:max-w-[18rem] rounded-lg bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    <div className="relative overflow-hidden flex bg-cover justify-center content-center place-content-center place-items-center align-middle text-cent bg-no-repeat">
    <Image cloudName='dqr2aiayz' publicId={pet.pic}/>
    </div>
    <div className="px-2 text-left">
      <p className="font-semibold mb-1  text-gray-700 uppercase">
      Nombre: {""}
          <span className="logoTitle tracking-wider normal-case text-xl">{pet.mascota}</span>
      </p>
      <p className=" mb-1  font-semibold text-gray-700 uppercase">
          Tipo: {""}
          <span className="logoTitle tracking-wider text-xl normal-case">{pet.tipo}</span>
        </p>        
        <p className="font-semibold mb-1  text-gray-700 uppercase">
          Edad: {""}
          <span className=" text-lg">{pet.edad}</span>
        </p>
        <p className="font-semibold mb-1  text-gray-700 uppercase">
          Peso: {""}
          <span className=" text-lg">{pet.peso}</span>
        </p>
    </div>
    <div className="flex flex-wrap content-center container place-items-center place-content-center  md:justify-between mt-4 mb-1 box-border ">
          <Link to={`/usuario/perfilDelUsuario/${user.id}/editarMascota/${pet.id}`} className="flex  flex-wrap transition-colors logoTitle m-auto text-2xl text-center text-indigo-600 hover:text-indigo-700">Editar</Link>
          <Link onClick={handleEliminar} className="flex transition-colors flex-wrap m-auto logoTitle   text-red-600 hover:text-red-700 text-2xl text-center">Eliminar
          </Link>
        </div>
  </div>
  )
}

export default Pet
/*
<section className="w-full flex flex-wrap container place-content-center">
    <div className=" mx-2 my-5 px-5 py-5 w-full rounded-xl bg-transparent shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{pet.mascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Tipo: {""}
          <span className="font-normal normal-case">{pet.tipo}</span>
        </p>        
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Edad: {""}
          <span className="font-normal normal-case">{pet.edad}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Peso: {""}
          <span className="font-normal normal-case">{pet.peso}</span>
        </p>
        <Image cloudName='dqr2aiayz' publicId={pet.pic}/>

        <div className="flex flex-wrap content-center container place-items-center place-content-center  md:justify-between mt-10 box-border ">
          <Link to={`/usuario/perfilDelUsuario/${user.id}/editarMascota/${pet.id}`} className="w-1/3 flex flex-wrap m-auto"><button  className="transition-colors logoTitle w-full shadow-md py-2 px-10 text-2xl bg-indigo-600 hover:bg-indigo-700  text-white rounded-md m-1 text-center" type="button">
            Editar Mascota
          </button></Link>
          <Link className="w-1/3 flex flex-wrap m-auto">
          <button onClick={handleEliminar} className="transition-colors logoTitle shadow-md py-2 w-full px-10 bg-red-600 hover:bg-red-700  text-white rounded-md m-1  text-2xl text-center" type="button">
            Eliminar Mascota
          </button></Link>
        </div>

      </div>
      </section>*/


/* <div
  class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt="" />
  <div class="flex flex-col justify-start p-6">
    <h5
      class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
      Card title
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="text-xs text-neutral-500 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
</div> */