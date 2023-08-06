import { useLogin } from "../store/userZustand"
import { eliminarMascotas } from "../data/usuarios"
import { redirect, useNavigate,Link} from "react-router-dom"
import {Image} from 'cloudinary-react'
 
function Pet({pet}) {
  console.log(pet)
  // Obteniendo el usuario actual desde el estado global
  const {user,setUser, eliminarMascota}=useLogin()
  // Iniciar la funcion de navegacion
  const navigate=useNavigate()
  // Manejo de la eliminacion de una mascota
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
{/*Boton para editar y eliminar la mascota  */}
    <div className="flex flex-wrap content-center container place-items-center place-content-center  md:justify-between mt-4 mb-1 box-border ">
          <Link to={`/usuario/perfilDelUsuario/${user.id}/editarMascota/${pet.id}`} className="flex  flex-wrap transition-colors logoTitle m-auto text-2xl text-center text-indigo-600 hover:text-indigo-700">Editar</Link>
          <Link onClick={handleEliminar} className="flex transition-colors flex-wrap m-auto logoTitle   text-red-600 hover:text-red-700 text-2xl text-center">Eliminar
          </Link>
        </div>
  </div>
  )
}

export default Pet
