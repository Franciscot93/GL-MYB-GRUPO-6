import logo from "../img/Logo2.png";
import { Link, NavLink, redirect } from "react-router-dom";
import {useState} from "react";
import { useLogin } from "../store/userZustand";
function NavBar() {
  const{isLogged,user,logout,pet}=useLogin()
  const [valueButton,setValueButton] = useState('Iniciar Sesion')
  
  return (
    // Seccion de la barra de navegacion
    <section className="border-opacity-25">
      {/* Contenedor principal de la barra de navegacion */}
      <div className=" w-full flex bg-gradient-to-r from-[#48b0ff] to-[#0d3c9b] flex-wrap  md:flex-row justify-between">
        {/*Logo */}
        <div className=" relative  md:w-1/3 box-border hover:animate-bounce m-auto ">
          {/*Enlace al inicio con el logo */}

          <a className=" bg-opacity-90 flex-wrap flex title-font items-center text-gray-900 mb-2">
            <img
              className=" delay-150 hover:cursor-pointer h-3/5  duration-500"
              src={logo}
            />
          </a>
        </div>
        {/* Enlace de navegacion*/}
        <div className="w-full md:w-1/3 flex-1 flex m-auto items-center text-base justify-center">
         {/* Enlace a la pagina de Inicio */}
          <NavLink to={isLogged? `/usuario/perfilDelUsuario/${user.id}/Home`:'/'} className={({ isActive}) => isActive ? "border-solid border-2 rounded-md p-1 border-[#83cdff] mr-5 text-white hover:text-[#83cdff]" :  "mr-5 text-white hover:text-[#83cdff]"}>Home</NavLink>
          {/* Enlace al perfil del usuario */}
          <NavLink to={isLogged?`/usuario/perfilDelUsuario/${user.id}`:'/usuario/login'} className={({ isActive}) => isActive ? "border-solid border-2 rounded-md p-1 border-[#83cdff] mr-5 text-white hover:text-[#83cdff]" :  "mr-5 text-white hover:text-[#83cdff]"}>{isLogged?'Perfil':'Login'}</NavLink>
          {/*Enlace a la pagina de Mascotas */}
          <NavLink to={isLogged?`/usuario/perfilDelUsuario/${user.id}/DetailPet/`:null} className={({ isActive}) => isActive ? "border-solid border-2 rounded-md p-1 border-[#83cdff] mr-5 text-white hover:text-[#83cdff]" :  "mr-5 text-white hover:text-[#83cdff]"}>Mascotas</NavLink>
          {/*Enlace a la pagina de Mascotas */}
          <NavLink to={"/about"} className={({ isActive}) => isActive ? "border-solid border-2 rounded-md p-1 border-[#83cdff] mr-5 text-white hover:text-[#83cdff]" :  "mr-5 text-white hover:text-[#83cdff]"}>Nosotros</NavLink>
        </div>
        {/*Boton de inicio de seccion y registro */}
        <div className="flex w-full place-content-center md:flex-col :m-auto flex-1  md:w-1/3 flex-wrap items-center content-center">
         {/*Seccion de Bienvenida */}
        {isLogged? (<div className='my-2 flex-1 shadow-sm flex justify-center content-center items-center mx-3 '>
      <h3 className='text-xl text-center text-[#066aff]font-semibold'>Bienvenido/a <span className='text-[#EAEAEA]'>{user.username}</span></h3>
    </div>): null}
          {/*Boton para iniciar sesion */} <div className="flex  justify-center items-center content-center flex-1 m-auto">
            <Link to={"/usuario/login"} onClick={isLogged? (logout()): null} className={isLogged?"inline-flex rounded-lg items-center font-medium hover:bg-[#EF9F9F] transition-colors duration-300 bg-red-600 border-0 py-1 px-3 ":" rounded-lg items-center duration-300 hover:bg-yellow-600 font-medium bg-yellow-500 border-0 py-1 px-3 m-1"}>
              {isLogged?'Cerrar Sesion': 'Iniciar Sesion'}
            </Link>
          </div>
          </div>
      </div>
    </section>
  );
}

export default NavBar;
