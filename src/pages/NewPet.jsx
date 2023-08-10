import { useNavigate } from "react-router-dom";
import PetForm from "../components/PetForm";
import { useLogin } from "../store/userZustand";
import { guardarMascotas } from "../data/usuarios";

function NewPet() {
  const navigate = useNavigate();

  const { user, setUser } = useLogin();

  const handleGuardarMascota = async (mascota) => {
    await guardarMascotas(user.id, mascota, setUser);
  };

  return (
    <main className="content-center place-content-center">
      <div className="flex mb-5 justify-between">
        {/* Boton para volver a la pagina anterior  */}
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          Volver
        </button>
      </div>

      {/* Seccion de formulario para agregar nueva mascota */}
      <section className="shadow-md place-content-center content-center place-items-center flex flex-wrap my-2 mx-3 py-5">
        <PetForm handleGuardarMascota={handleGuardarMascota} />
      </section>
    </main>
  );
}

export default NewPet;
