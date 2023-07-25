import Footer from "./Footer";

function Layout() {
  return (
    <div className="md:flex flex flex-col max-w-full min-h-screen ">
      <aside
        className="mx-10 relative w-100 text-center  
        e shadow-md mt-10 rounded-md  py-5"
      >
        {" "}
        <h1 className="font-semibold text-6xl text-slate-800">
          🐶Mi Mascota Tuc😼{" "}
        </h1>
        <h2 className="text-3xl mt-5 text-slate-800 font-medium">
          GL-MYB-<span className="text-indigo-600">grupo 6 </span>
        </h2>
      </aside>
      <main className="w-100  mt-10 ">
        <div
          className="mx-10 relative w-100 text-center  
        e shadow-md mt-10 rounded-md  py-5"
        >
          <p className="text-2xl text-slate-800 font-normal">
            Creamos esta <span className="text-indigo-500">App</span> pensando
            en los miembros mas queridos de cualquier familia.
          </p>
          <p className="text-2xl font-normal text-slate-800">
            A través de ella podras, registrar a tu mascota en tu perfil, y
            hacer un seguimiento de su historia clinica, para tener siempre una
            info actualizada de su salud <span className="text-3xl">❤️</span>.
          </p>

        </div>

        <div className="text-center mt-10 flex flex-col place-content-center content-center justify-center"><button className=" mt-5 w-fit mx-4 px-5 shadow bg-sky-800 uppercase font-bold py-2 hover:bg-sky-700 duration-100 text-slate-50 rounded-sm text-lg">iniciar sesion</button>
        <button className="mt-5 w-fit mx-4 px-5 shadow bg-emerald-800 uppercase font-bold py-2 hover:bg-emerald-600 duration-100 text-slate-50 rounded-sm text-lg">Registrate</button>
        </div>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default Layout;
