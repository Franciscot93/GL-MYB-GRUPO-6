import PetForm from "../components/PetForm"
import { Form, useNavigate,useLocation, useLoaderData } from "react-router-dom"
import { obtenerDatosUsuario } from "../data/usuarios"

// Cargar los datos de la mascota para editar
export async function loader({ params }) {
    const { perfilDelUsuarioId, editarMascotaId } = params ;

      // Obtener datos del usuario
    const usuario = await obtenerDatosUsuario(perfilDelUsuarioId)
    
    // Encontrar la mascota a editar segun su ID
    const mascotaParaEditar = await usuario.mascotas.find(
      ({ ...mascota }) => mascota.id === editarMascotaId);
    
    return mascotaParaEditar;

}
  // Funcion de accion para la edicion (actualmente no realiza ninguna accion)
export async function action(){
    return null;
}


function EditPet() {
  // Utilizar useLocation para obtener la ubicacion actual
    const location = useLocation()

    // Cargar los datos de la mascota para editar
    const mascotaParaEditar = useLoaderData()

    // Utilizar useNavigate para la navegacion
    const navigate = useNavigate()


  return (
    <main className="content-center place-content-center">
      <div className="flex mb-5 justify-between">
    {/*Boton para volver a la pagina anterior */}
    <button
      onClick={() => navigate(-1)}
      className="bg-sky-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
    >
      VOLVER
    </button>

    {/*Boton para cerrar sesion (falta definicion de logut) */}
    <button onClick={() => logout()}
      className="bg-red-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-red-500 duration-200">
        Cerrar sesion
    </button>
  </div>


<section className='shadow-md place-content-center content-center place-items-center flex flex-wrap my-2 mx-3 py-5'>
  <Form method="POST" noValidate>

    {/* Utiliza el formulario de la mascota con los datos para editar */}
  <PetForm mascotaParaEditar = {mascotaParaEditar}/>
  <input  type="submit" className='uppercase  py-4 px-2 w-full mt-5 font-bold hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md'value={'añadir mascota'}/>
  </Form>
</section>
</main>
  );
}

export default EditPet