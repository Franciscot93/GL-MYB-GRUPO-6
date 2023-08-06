import logo from "../img/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../store/userZustand";

function NavBar() {

  const navigate = useNavigate()
  const logout = useLogin()
  const cambiarValor=()=>{
    if(window.localStorage.getItem('email')){
      window.localStorage.removeItem('email')
      navigate("/usuario/login");
      logout
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
        <Link to={"/usuario/login"} className="mr-5">
            <button value="MiCuenta" onClick={cambiarValor} className={(!window.localStorage.getItem('email'))?"inline-flex rounded items-center  bg-yellow-500 border-0 py-1 px-3 mt-4":"inline-flex rounded items-center  bg-red-600 hover:bg-red-500 border-0 py-1 px-3 mt-4"}>
              {(window.localStorage.getItem('email'))?"Cerrar sesion":"Iniciar sesion"}
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default NavBar;
