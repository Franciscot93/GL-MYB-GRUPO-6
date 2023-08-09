import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import imgHamster from "../img/hamster_gif.gif";
import imgDog from "../img/max_gif.gif";
import { useEffect } from "react";
import { obtenerUsuarios } from "../data/usuarios";
import { useLogin } from "../store/userZustand";



function Layout() {
  const location = useLocation();
  const {login,user,setUser}=useLogin()
  const datos=obtenerUsuarios()
  

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await obtenerUsuarios();
        if (localStorage.getItem("email")) {
          const email = localStorage.getItem("email");
          if (email) {
            const user = datos.find((user) => user.email === email);
            if (user) {
              login();
              setUser(user);
              console.log(user);
              navigate(`/usuario/perfilDelUsuario/${user.id}`);
            }
          }
        }
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    obtenerDatos();
  }, []);


  return (

    

    <div className=" md:flex flex flex-col max-w-full min-h-screen bg-[#edf7ff] ">
      {/* Barra de navegacion */}
      <NavBar/>

      {/* Panel lateral */}
      <aside
        className="mx-10 relative w-100 text-center  
         shadow-md  rounded-md  py-5"
      >
        {/* Titulo del sitio*/}
        <h1 className=" logoTitle text-6xl text-slate-800">
          Mi Mascota TuC
        </h1>   
        {/*Subtitulo con el nombre del grupo */}

        <h2 className="text-3xl mt-5 text-slate-800 font-medium "><img className="inline-flex" src={imgHamster} alt="" /> 
         GL-MYB-<span className="text-[#0050f0] ">Grupo 6 </span><img src={imgDog} className="inline-flex"/>
        </h2>
      </aside>

      {/* Contenido principal */}
      <main className="w-100  mt-5">
        <div
          className=" mx-10 relative w-100 text-center  
         shadow-md mt-2 rounded-md  py-5"
        >

          {/* Outlet para renderizar las rutas secundarias */}
            <Outlet/>
            

        </div>
      </main>


      {/* Pie de pagina */}
      <footer><Footer/></footer>

    </div>
  );
}

export default Layout;
