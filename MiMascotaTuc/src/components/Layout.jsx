import {Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";


function Layout() {
  const location=useLocation()
  return (
    <div className="md:flex flex flex-col max-w-full min-h-screen ">
      <aside
        className="mx-10 relative w-100 text-center  
         shadow-md mt-10 rounded-md  py-5"
      >
        
        <h1 className="font-semibold text-6xl text-slate-800">
          🐶Mi Mascota Tuc😼
        </h1>
        <h2 className="text-3xl mt-5 text-slate-800 font-medium">
          GL-MYB-<span className="text-indigo-600">grupo 6 </span>
        </h2>
      </aside>
      <main className="w-100  mt-10 ">
        <div
          className="mx-10 relative w-100 text-center  
         shadow-md mt-10 rounded-md  py-5"
        >
            <Outlet/>
            
        </div>

        
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default Layout;
