import { useLogin } from "../store/userZustand"
import { eliminarMascotas } from "../data/usuarios"
import { redirect, useNavigate,Link} from "react-router-dom"


function Pet({pet}) {
  // Obteniendo el usuario actual desde el estado global
  const {user}=useLogin()
  // Iniciar la funcion de navegacion
  const navigate=useNavigate()
  // Manejo de la eliminacion de una mascota
  const handleEliminar=()=>{
    // Mostrar un cuadro de confirmacion antes de eliminar
    const confirmar= confirm('Deseas eliminar esta Mascota?')
    if(confirmar){
      // Llamar a la funcion para eliminar mascotas
      eliminarMascotas(user,pet.id)

      // Redirigir a la pagina de perfil del usuario despues de eliminar
      redirect (`/usuario/perfilDelUsuario/${user.id}`)
      return null
    }
    
  }

  return (
    // Seccion que muestra la informacion de la mascota
   <section className="w-full flex flex-wrap container place-content-center">
    <div className=" mx-2 my-5 px-5 py-5 w-full rounded-xl bg-transparent shadow-md">
      {/* Nombre de la mascota */}
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{pet.mascota}</span>
        </p>
        {/* Tipo de mascota */}
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Tipo: {""}
          <span className="font-normal normal-case">{pet.tipo}</span>
        </p>  
        {/* Edad de la mascota */}      
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Edad: {""}
          <span className="font-normal normal-case">{pet.edad}</span>
        </p>
        {/* Peso de la mascota */}
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Peso: {""}
          <span className="font-normal normal-case">{pet.peso}</span>
        </p>
        
        {/*Boton para editar y eliminar la mascota  */}
        <div className="flex flex-wrap content-center container place-items-center place-content-center sm:flex-col md:flex-col justify-between mt-10 ">
          {/* Enlace para editar la mascota */}
          <Link to={`/usuario/perfilDelUsuario/${user.id}/editarMascota/${pet.id}`}><button  className="transition-colors w-full shadow-md py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white rounded-md m-1 text-center" type="button">
            Editar Mascota
          </button></Link>
          
          {/*Boton para eliminar la mascota */}
          <button onClick={handleEliminar} className="transition-colors w-full shadow-md py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white rounded-md m-1  text-center" type="button">
            Eliminar Mascota
          </button>
        </div>

      </div>
      </section>

  )
}

export default Pet



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