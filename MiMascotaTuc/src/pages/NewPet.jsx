import { useNavigate,useActionData, Form, redirect } from "react-router-dom"
import PetForm from "../components/PetForm"
import { useLogin } from "../store/userZustand"
import { useState} from "react"
import { generarId,guardarMascotas, obtenerDatosUsuario } from "../data/usuarios"




export async function action({request,params}){
    const formDatosMascota = await request.formData();
    const usuario= await obtenerDatosUsuario(params.perfilDelUsuarioId)
    const nombreMascota=formDatosMascota.get('mascota')
    const pesoMascota=formDatosMascota.get('peso')
    const datosMascota = Object.fromEntries(formDatosMascota);
    console.log(datosMascota.value)
    const errores=[];
    const pesoRegex = /^\d+(\.\d{1,2})?$/
    const nameRegex = /^[A-Za-z]{2,35}$/
    if(!nameRegex.test(nombreMascota.trim())){
      errores.push('El campo nombre solo puede contener letras y tiene un minimo de 4 caracteres.')
    }
    
    if(!pesoRegex.test(pesoMascota.trim())){
      errores.push('El campo nombre solo puede contener numeros y un punto(.).')
    }
    
    if (Object.keys(errores).length) {
      return errores;
    }
    datosMascota.id=generarId()
    
    guardarMascotas(usuario,datosMascota)
    
    return redirect(`/usuario/perfilDelUsuario/${params.perfilDelUsuarioId}`)
  }


function NewPet() {
    
    const errores=useActionData()
    const navigate=useNavigate()
    const {logout,user}=useLogin()
    
    
    
   
    
  const handleNuevaMascota=()=>{
    
    console.log(errores)
  }

  
  
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
  <Form method="POST" noValidate>
  <PetForm/>
  <input onClick={handleNuevaMascota} type="submit" className='uppercase  py-4 px-2 w-full mt-5 font-bold hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md'value={'añadir mascota'}/>
  </Form>



  
</section>
</main>
  )
}

export default NewPet