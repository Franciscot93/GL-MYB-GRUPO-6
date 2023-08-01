

function PetForm() {
 

  return (
    <div className="conteiner content-center w-full h-screen ">
      
      
        <h2 className="mb-2 text-3xl text-center font-bold text-indigo-950 border-b-2 border-indigo-700 pb-3">
          Nueva Mascota
        </h2>
        
        
          <div className=" mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 text-left font-semibold text-xl"
              htmlFor="mascota"
            >
              Mascota:
            </label>
            <input
              id="mascota"
              type="text"
              className="mt-2 block w-3/6 rounded-md p-3 bg-gray-50"
              placeholder="Nombre de la mascota"
              name="mascota"
            />
          </div>

          <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 font-semibold text-xl"
              htmlFor="tipo"
            >
              Tipo:
            </label>
            <input
              id="tipo"
              type="text"
              className="mt-2 block w-3/6 rounded-md  p-3 bg-gray-50"
              placeholder="¿Que clase de mascota es?"
              name="tipo"
            />
          </div>

          <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 font-semibold text-xl"
              htmlFor="edad"
            >
              Edad:
            </label>
            <input
              id="edad"
              type="text"
              className="mt-2 block w-3/6 p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="edad"
            />
          </div>
          <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 font-semibold text-xl"
              htmlFor="peso"
            >
              Peso(kg):
            </label>
            <input
              id="peso"
              type="text"
              className="mt-2 block w-3/6 p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="peso"
            />
          </div>
          <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 font-semibold text-xl"
              htmlFor="files"
            >
              Archivos:
            </label>
            <input
              id="files"
              type="file"
              accept="image/*, application/pdf"
              multiple
              className="mt-2 block w-3/6 p-2 rounded-md bg-gray-50"
              name="files"
            />
          </div>
          <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 font-semibold text-xl"
              htmlFor="pic"
            >
              Pic:
            </label>
            <input
              id="pic"
              type="file"
              accept="image/*, application/pdf"
              multiple
              className="mt-2 block w-3/6 p-2 rounded-md bg-gray-50"
              name="pic"
            />
          </div>
        
        </div>

       

    
  );
}

export default PetForm;
