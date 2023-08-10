import PetForm from "../components/PetForm";
import {
  Form,
  useNavigate,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import { obtenerDatosUsuario } from "../data/usuarios";

export async function loader({ params }) {
  const { perfilDelUsuarioId, editarMascotaId } = params;
  const usuario = await obtenerDatosUsuario(perfilDelUsuarioId);
  const mascotaParaEditar = await usuario.mascotas.find(
    ({ ...mascota }) => mascota.id === editarMascotaId
  );

  return mascotaParaEditar;

}
export async function action() {

  
  return null;
}

function EditPet() {


  const location = useLocation();
  const mascotaParaEditar = useLoaderData()||null;
  const navigate = useNavigate();
  return (
    <main className="content-center place-content-center">
      <div className="flex mb-5 justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          Volver
        </button>
      </div>

      <section className="shadow-md place-content-center content-center place-items-center flex flex-wrap my-2 mx-3 py-5">
        
          <PetForm mascotaParaEditar={mascotaParaEditar} />
          
        
      </section>
    </main>

  );
}

export default EditPet;
