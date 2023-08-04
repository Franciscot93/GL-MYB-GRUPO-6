import { useNavigate,useActionData, Form, redirect } from "react-router-dom"
import PetForm from "../components/PetForm"
import { useLogin } from "../store/userZustand"
import { useState} from "react"
import { generarId,guardarMascotas, obtenerDatosUsuario } from "../data/usuarios"




export async function action({ request, params }) {
  const formDatosMascota = await request.formData();  
  const datosMascota = Object.fromEntries(formDatosMascota);
  

 
return redirect(`/usuario/perfilDelUsuario/${params.perfilDelUsuarioId}`)
}

function NewPet() {
  const navigate = useNavigate();
  const errores = useActionData();
  const { logout, user,setUser } = useLogin();

  const handleGuardarMascota = async (mascota) => {
    console.log(mascota)
    await guardarMascotas(user.id, mascota, setUser);}

    
   
  return (
    <main className="content-center place-content-center">
            
    <div className="flex mb-5 justify-between">
    <button
      onClick={() => navigate(-1)}
      className="bg-sky-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
    >
      Volver
    </button>
    <button
      onClick={() => logout()}
      className="bg-red-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-red-500 duration-200"
    >
      Cerrar sesion
    </button>
  </div>

<section className='shadow-md place-content-center content-center place-items-center flex flex-wrap my-2 mx-3 py-5'>
  
  <PetForm handleGuardarMascota={ handleGuardarMascota} />
  
  



  
</section>
</main>
  )
}

export default NewPet