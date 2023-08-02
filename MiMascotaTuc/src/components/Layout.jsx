import {Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import imgHamster from "../img/hamster_gif.gif"
import imgDog from "../img/max_gif.gif"

function Layout() {
  const location=useLocation()
  return (
    
    <div className="md:flex flex flex-col max-w-full min-h-screen ">
      <NavBar/>
      <aside
        className="mx-10 relative w-100 text-center  
         shadow-md  rounded-md  py-5"
      >
        
        <h1 className=" logoTitle text-6xl text-slate-800">
          🐶Mi Mascota TuC😼
        </h1>
        
        <h2 className="text-3xl mt-5 text-slate-800 font-medium "><img className="inline-flex" src={imgHamster} alt="" /> 
         GL-MYB-<span className="text-indigo-600 ">Grupo 6 </span><img src={imgDog} className="inline-flex"/>
        </h2>
      </aside>
      <main className="w-100  mt-5">
        <div
          className="mx-10 relative w-100 text-center  
         shadow-md mt-2 rounded-md  py-5"
        >
            <Outlet/>
            
        </div>

        
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default Layout;
