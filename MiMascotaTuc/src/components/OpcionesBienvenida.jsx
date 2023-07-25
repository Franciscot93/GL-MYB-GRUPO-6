function OpcionesBienvenida() {
  return (
    <>
      <div className="text-center  mt-10 flex flex-col md:place-content-center place-content-center md:content-center flex-wrap md:flex-wrap content-center justify-center md:justify-center box-content">
        <button className=" mt-5 md:w-1/3  w-1/3 mx-4 px-5 shadow-md bg-sky-800 uppercase font-bold py-2 hover:bg-sky-700 duration-100 text-slate-50 rounded-sm text-lg">
          iniciar sesion
        </button>
        <button className="mt-5 md:w-1/3 w-1/3 mx-4 px-5 shadow-md bg-emerald-800 uppercase font-bold py-2 hover:bg-emerald-600 duration-100 text-slate-50 rounded-sm text-lg">
          Registrate
        </button>
      </div>
    </>
  );
}

export default OpcionesBienvenida;
