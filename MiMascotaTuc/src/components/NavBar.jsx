import logo from "../img/Logo2.png";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    // Seccion de la barra de navegacion
    <section className="border-opacity-25">
      {/* Contenedor principal de la barra de navegacion */}
      <div className=" w-full  flex bg-slate-700  flex-wrap  flex-row justify-between">
        {/*Logo */}
        <div className="  bg-slate-700 relative  box-border">
          {/*Enlace al inicio con el logo */}
          <a className="flex  bg-opacity-90 title-font items-center text-gray-900 mb-2">
            <img
              className=" delay-150 hover:cursor-pointer hover:animate-bounce h-3/5  duration-500"
              src={logo}
            />
          </a>
        </div>
        {/* Enlace de navegacion*/}
        <div className=" flex flex-wrap  m-auto items-center text-base justify-center">
         {/* Enlace a la pagina de Inicio */}
          <Link to={"/Home"} className="text-blue mr-5 rounded-md ">Home</Link>
          {/* Enlace al perfil del usuario */}
          <Link to={""} className="text-blue mr-5 rounded-md ">Perfil</Link>
          {/*Enlace a la pagina de Mascotas */}
          <Link to={""} className="text-blue mr-5 rounded-md ">Mascotas</Link>
        </div>

        {/*Boton de inicio de seccion y registro */}
        <div className="justify-center flex m-auto flex-wrap items-center content-center">
          {/*Boton para iniciar sesion */}
          <button className="rounded-full mr-4 inline-flex items-center  bg-yellow-500 border-0 py-1 px-3 mt-4">
            Iniciar Sesion
          </button>
         {/* Boton para registrar un nuevo usuario */}
          <button className="rounded-full inline-flex items-center  bg-yellow-500 border-0 py-1 px-3 mt-4">
            Registrar usuario
          </button>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
