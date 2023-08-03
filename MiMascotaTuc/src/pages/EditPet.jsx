import PetForm from "../components/PetForm"
import { Form, useNavigate,useLocation, useLoaderData } from "react-router-dom"
import { obtenerDatosUsuario } from "../data/usuarios"

export async function loader({params}){
    const {perfilDelUsuarioId,editarMascotaId}=params
    const usuario=await obtenerDatosUsuario(perfilDelUsuarioId)
    const mascotaParaEditar= await (usuario.mascotas).find(({...mascota})=>mascota.id===editarMascotaId)
    
    return mascotaParaEditar
}
export async function action(){
    return null
}


function EditPet() {
    const location=useLocation()
    const mascotaParaEditar=useLoaderData()
    const navigate=useNavigate()
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
  <PetForm mascotaParaEditar={mascotaParaEditar}/>
  <input  type="submit" className='uppercase  py-4 px-2 w-full mt-5 font-bold hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md'value={'añadir mascota'}/>
  </Form>



  
</section>
</main>
  )
}

export default EditPet