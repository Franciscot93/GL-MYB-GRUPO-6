import { useLocation } from "react-router-dom";


function PetForm({mascotaParaEditar}) {
 
 const location=useLocation()
  return (
    <div className="conteiner content-center w-full box-border h-screen ">
      
      
        <h2 className="mb-2 text-4xl logoTitle text-center  text-indigo-950 border-b-2 border-indigo-700 pb-3">
         {location.pathname==='/usuario/perfilDelUsuario/:perfilDelUsuarioId/editarMascota/:editarMascotaId'? 'Edita Tu Mascota': 'Nueva Mascota'}
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
              className="mt-2 block w-full rounded-md p-3 bg-gray-50"
              placeholder="Nombre de la mascota"
              name="mascota"
              value={mascotaParaEditar?.mascota}
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
              className="mt-2 block w-full rounded-md  p-3 bg-gray-50"
              placeholder="¿Que clase de mascota es?"
              name="tipo"
              value={mascotaParaEditar?.tipo}
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
              className="mt-2 block w-full p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="edad"
              value={mascotaParaEditar?.edad}
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
              className="mt-2 block w-full p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="peso"
              value={mascotaParaEditar?.peso}
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
              className="mt-2 block w-full p-2 rounded-md bg-gray-50"
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
              className="mt-2 block w-full p-2 rounded-md bg-gray-50"
              name="pic"
            />
          </div>
        
        </div>

       

    
  );
}

export default PetForm;
