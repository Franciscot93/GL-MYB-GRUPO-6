import logo from "../img/Logo2.png";

import { Link } from "react-router-dom";
import {useState} from "react";

function NavBar() {

  const [valueButton,setValueButton] = useState('Iniciar Sesion')
  const cambiarValor=()=>{
    if(valueButton=="Iniciar Sesion "){
      setValueButton('Mi Cuenta')
    }else{
      setValueButton('Iniciar Sesion')
    }
    
  };
  return (
    // Seccion de la barra de navegacion
    <section className="border-opacity-25">

      {/* Contenedor principal de la barra de navegacion */}
      <div className=" w-full  flex bg-gradient-to-r from-[#48b0ff] to-[#0d3c9b] flex-wrap  flex-row justify-between">
        {/*Logo */}
        <div className=" relative  box-border hover:animate-bounce ">
          {/*Enlace al inicio con el logo */}

          <a className="flex  bg-opacity-90 title-font items-center text-gray-900 mb-2">
            <img
              className=" delay-150 hover:cursor-pointer h-3/5  duration-500"
              src={logo}
            />
          </a>
        </div>
        {/* Enlace de navegacion*/}
        <div className=" flex flex-wrap  m-auto items-center text-base justify-center">

         {/* Enlace a la pagina de Inicio */}
          <Link to={"/Home"} className="mr-5 decoration-slate-200 text-white hover:text-[#83cdff]">Home</Link>
          {/* Enlace al perfil del usuario */}
          <Link to={""} className="mr-5 text-white hover:text-[#83cdff]">Perfil</Link>
          {/*Enlace a la pagina de Mascotas */}
          Link to={""} className="mr-5 text-white hover:text-[#83cdff]">Mascotas</Link>
          {/*Enlace a la pagina de Mascotas */}
          <Link to={""} className="mr-5 text-white hover:text-[#83cdff]">Nosotros</Link>

        </div>

        {/*Boton de inicio de seccion y registro */}
        <div className="justify-center flex m-auto flex-wrap items-center content-center">

          {/*Boton para iniciar sesion */}
          <Link to={"/usuario/login"} className="mr-5">
            <button value="MiCuenta" onClick={cambiarValor} className="inline-flex rounded-full items-center  bg-yellow-500 border-0 py-1 px-3 mt-4">
              {valueButton}
            </button>
          </Link>
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
