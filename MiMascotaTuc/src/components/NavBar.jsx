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
    <section className="border-opacity-25">
      <div className=" w-full  flex bg-gradient-to-r from-[#48b0ff] to-[#0d3c9b] flex-wrap  flex-row justify-between">
        <div className=" relative  box-border hover:animate-bounce ">
          <a className="flex  bg-opacity-90 title-font items-center text-gray-900 mb-2">
            <img
              className=" delay-150 hover:cursor-pointer h-3/5  duration-500"
              src={logo}
            />
          </a>
        </div>

        <div className=" flex flex-wrap  m-auto items-center text-base justify-center">
          <Link to={"/inicio"} className="mr-5 decoration-slate-200 text-white hover:text-[#83cdff]">Inicio</Link>
          <Link to={""} className="mr-5 text-white hover:text-[#83cdff]">Perfil</Link>
          <Link to={""} className="mr-5 text-white hover:text-[#83cdff]">Mascotas</Link>
          <Link to={""} className="mr-5 text-white hover:text-[#83cdff]">Nosotros</Link>
        </div>
        <div className="justify-center flex m-auto flex-wrap items-center content-center">
        <Link to={""} className="mr-5">
            <button value="MiCuenta" onClick={cambiarValor} className="inline-flex rounded items-center  bg-yellow-500 border-0 py-1 px-3 mt-4">
              {valueButton}
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default NavBar;
