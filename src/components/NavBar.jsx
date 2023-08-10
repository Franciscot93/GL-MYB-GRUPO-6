import { Link, NavLink, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLogin } from "../store/userZustand";
import logo from "../img/Logo2.png";
function NavBar() {
  const { isLogged, user, logout, pet } = useLogin();
  const [valueButton, setValueButton] = useState("Iniciar Sesion");
  const [navMobile, setNavMobile] = useState(false);
  // Manejo del menu movil
  const handleNav = () => {
    if (navMobile) {
      setNavMobile(false);
    } else {
      setNavMobile(true);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // 768px is the md breakpoint in Tailwind CSS
        setNavMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div onClick={handleNav} className="sm:hidden m-auto ">
          <button className={`relative ${navMobile ? "group" : "group-only:"}`}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
        {navMobile && (
          <div className="block w-full  bg-slate-900">
            <ul>
              <li>
                <div className="sm:flex w-full  place-content-center md:flex-col m-auto flex-1  md:w-1/3 flex-wrap items-center content-center">
                  {/*Seccion de Bienvenida */}
                  {isLogged ? (
                    <div className="my-2 flex-1 shadow-sm flex justify-center content-center items-center mx-3 ">
                      <h3 className="text-xl text-center text-[#066aff] font-semibold">
                        Bienvenido/a{" "}
                        <span className="text-[#EAEAEA]">{user.username}</span>
                      </h3>
                    </div>
                  ) : null}
                  {/*Boton para iniciar sesion */}{" "}
                  <div className="flex  justify-center items-center content-center flex-1 m-auto">
                    <Link
                      to={"/usuario/login"}
                      onClick={isLogged ? logout : null}
                      className={
                        isLogged
                          ? "inline-flex rounded-lg items-center font-medium hover:bg-[#EF9F9F] transition-colors duration-300 bg-red-600 border-0 py-1 px-3 "
                          : " rounded-lg items-center duration-300 hover:bg-yellow-600 font-medium bg-yellow-500 border-0 py-1 px-3 m-1"
                      }
                    >
                      {isLogged ? "Cerrar Sesion" : "Iniciar Sesion"}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="ml-2 mb-2">
                <NavLink
                  to={
                    isLogged ? `/usuario/perfilDelUsuario/${user.id}/home` : "/"
                  }
                  className={"mr-5 text-white hover:text-[#83cdff]"}
                >
                  Home
                </NavLink>
              </li>
              <li className="ml-2 mb-2">
                {!isLogged && (
                  <NavLink
                    to={"/usuario/nuevo"}
                    className={"mr-5 text-white hover:text-[#83cdff]"}
                  >
                    Registrarse
                  </NavLink>
                )}
              </li>
              <li className="ml-2 mb-2">
                {isLogged && (
                  <NavLink
                    to={`/usuario/perfilDelUsuario/${user.id}`}
                    className={"mr-5 text-white hover:text-[#83cdff]"}
                  >
                    Perfil
                  </NavLink>
                )}
              </li>
              <li className="ml-2 mb-2"></li>
              <li className="ml-2 mb-2">
                <NavLink
                  to={"/about"}
                  className={"mr-5 text-white hover:text-[#83cdff]"}
                >
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* Enlace de navegacion*/}
        <div className="w-full hidden md:w-1/3 flex-1 sm:flex m-auto items-center text-base justify-center">
          {/* Enlace a la pagina de Inicio */}
          <NavLink
            to={isLogged ? `/usuario/perfilDelUsuario/${user.id}/Home` : "/"}
            className={"mr-5 text-white hover:text-[#83cdff]"}
          >
            Home
          </NavLink>
          {/* Enlace al perfil del usuario */}
          {isLogged && (
            <NavLink
              to={`/usuario/perfilDelUsuario/${user.id}`}
              className={"mr-5 text-white hover:text-[#83cdff]"}
            >
              Perfil
            </NavLink>
          )}
          {/*Enlace a la pagina de Mascotas */}

          {!isLogged && (
            <NavLink
              to={"/usuario/nuevo"}
              className={"mr-5 text-white hover:text-[#83cdff]"}
            >
              Registrarse
            </NavLink>
          )}
          {/*Enlace a la pagina de Mascotas */}
          <NavLink
            to={"/about"}
            className={"mr-5 text-white hover:text-[#83cdff]"}
          >
            Nosotros
          </NavLink>
        </div>
        {/*Boton de inicio de seccion y registro */}
        <div className="sm:flex w-full hidden  place-content-center md:flex-col :m-auto flex-1  md:w-1/3 flex-wrap items-center content-center">
          {/*Seccion de Bienvenida */}
          {isLogged ? (
            <div className="my-2 flex-1 shadow-sm flex justify-center content-center items-center mx-3 ">
              <h3 className="text-xl text-center text-[#066aff]font-semibold">
                Bienvenido/a{" "}
                <span className="text-[#EAEAEA]">{user.username}</span>
              </h3>
            </div>
          ) : null}
          {/*Boton para iniciar sesion */}{" "}
          <div className="flex  justify-center items-center content-center flex-1 m-auto">
            <Link
              to={"/usuario/login"}
              onClick={isLogged ? logout() : null}
              className={
                isLogged
                  ? "inline-flex rounded-lg items-center font-medium hover:bg-[#EF9F9F] transition-colors duration-300 bg-red-600 border-0 py-1 px-3 "
                  : " rounded-lg items-center duration-300 hover:bg-yellow-600 font-medium bg-yellow-500 border-0 py-1 px-3 m-1"
              }
            >
              {isLogged ? "Cerrar Sesion" : "Iniciar Sesion"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
