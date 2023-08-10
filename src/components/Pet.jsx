import { useLogin } from "../store/userZustand";
import { eliminarMascotas } from "../data/usuarios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Image } from "cloudinary-react";
import { useRef } from "react";

function Pet({ pet }) {
  const petRef = useRef(null);

  const handleMouseEnter = () => {
    if (petRef.current) {
      petRef.current.classList.add("hover:shadow-2xl");
    }
  };

  const handleMouseLeave = () => {
    if (petRef.current) {
      petRef.current.classList.remove("hover:shadow-2xl");
    }
  };

  // Obteniendo el usuario actual desde el estado global
  const { user, setUser, eliminarMascota, setPet } = useLogin();
  // Iniciar la funcion de navegacion
  const navigate = useNavigate();
  // Manejo de la eliminacion de una mascota
  const handleEliminar = () => {
    eliminarMascotas(user, pet.id, setUser, eliminarMascota);
  };
  const locacion = useLocation();
  return (
    <div
      ref={petRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="md:flex hover:scale-105 duration-500 lg:max-w-full lg:max-h-[18rem] mt-4 rounded-lg bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-1 box-content"
    >
      <div className="relative flex w-full md:w-1/3  overflow-hidden md:flex  aspect-square justify-center content-center place-content-center place-items-center align-middle text-cent bg-no-repeat">
        <Image
          cloudName="dqr2aiayz"
          className="md:min-w-full"
          publicId={pet.pic}
        />
      </div>
      <div className=" text-left w-full md:w-2/3 ml-1 flex shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-md flex-row flex-wrap">
        <div className="flex-1 ml-2 box-border w-4/5">
          <p className="font-semibold  mb-1 hover:scale-105 text-gray-700 uppercase">
            Nombre: {""}
            <span className="logoTitle tracking-wider font-thin text-2xl">
              {pet.mascota}
            </span>
          </p>
          <p className=" mb-1 hover:scale-105 font-semibold text-gray-700 uppercase">
            Tipo: {""}
            <span className="logoTitle tracking-wider text-2xl font-thin">
              {pet.tipo}
            </span>
          </p>
          <p className="font-semibold mb-1 hover:scale-105 text-gray-700 uppercase">
            Edad: {""}
            <span className=" text-lg">{pet.edad}</span>
          </p>
          <p className="font-semibold mb-1 hover:scale-105 text-gray-700 uppercase">
            Peso: {""}
            <span className=" text-lg">{pet.peso}</span>
          </p>
        </div>
        <div className="content-center flex sm:w-1/5 place-items-center justify-center place-content-center">
          <p className="font-semibold mb-1  text-gray-700 uppercase">
            Docs: {""}
            <span className=" text-3xl hover:scale-105 ">
              <Link
                onClick={() => setPet(pet)}
                to={`/usuario/perfilDelUsuario/${user.id}/detailPet/${pet.id}`}
                className=" text-3xl hover:scale-105 "
              >
                📁
              </Link>
            </span>
          </p>
        </div>
        <div className="flex flex-wrap content-center container place-items-center place-content-center  md:justify-between mt-4 mb-1 box-border ">
          <Link
            to={`/usuario/perfilDelUsuario/${user.id}/editarMascota/${pet.id}`}
            className="flex  flex-wrap transition-colors logoTitle m-auto text-2xl text-center text-[#221AB7] hover:text-indigo-900"
          >
            Editar
          </Link>
          <Link
            onClick={handleEliminar}
            className="flex transition-colors flex-wrap m-auto logoTitle   text-red-600 hover:text-red-900 text-2xl text-center"
          >
            Eliminar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pet;
