
function Pet({pet}) {
  console.log(pet)
  return (
   <section className="w-full flex flex-wrap container place-content-center">
    <div className=" mx-5 my-5 px-5 py-5 w-full rounded-xl bg-transparent shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{pet.mascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Tipo: {""}
          <span className="font-normal normal-case">{pet.tipo}</span>
        </p>        
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Edad: {""}
          <span className="font-normal normal-case">{pet.edad}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Peso: {""}
          <span className="font-normal normal-case">{pet.peso}</span>
        </p>
        

        <div className="flex flex-wrap content-center container place-items-center place-content-center sm:flex-col md:flex-col justify-between mt-10 ">
          <button  className="transition-colors w-full shadow-md py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white rounded-sm m-1 text-center" type="button">
            Editar Mascota
          </button>

          <button  className="transition-colors w-full shadow-md py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white rounded-sm m-1  text-center" type="button">
            Eliminar Mascota
          </button>
        </div>

      </div>
      </section>

  )
}

export default Pet