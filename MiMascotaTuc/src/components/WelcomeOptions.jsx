import { Link } from "react-router-dom";

function WelcomeOptions() {
  return (
    // Fragmento (<>...</>) para agrupar multiples elementos sin añadir nodos adicionales al DOM
    <>
        {/* Contenedor principal de opcion de bienvenida */}
      <div className="text-center  mt-10 flex flex-col md:place-content-center place-content-center md:content-center flex-wrap md:flex-wrap content-center justify-center md:justify-center box-content">
          {/* Enlace para iniciar sesion */}
        <Link to={`/usuario/login`} className=" mt-5 logoTitle md:w-1/3  w-1/3 mx-4 px-5 shadow-md bg-sky-800  py-2 hover:bg-sky-700 duration-100 text-slate-50 rounded-sm text-2xl">
          IniCiar SesiOn
        </Link>
          {/*Enlace para registrar */}
        <Link to={`/usuario/nuevo`} className="mt-5 logoTitle md:w-1/3 w-1/3 mx-4 px-5 shadow-md bg-emerald-800   py-2 hover:bg-emerald-600 duration-100 text-slate-50 rounded-sm text-2xl">
          RegisTrate
        </Link>
      </div>
    </>
  );
}

export default WelcomeOptions;
