import { useLocation,Form, useParams,redirect, useNavigate} from "react-router-dom";
import { useState } from "react";
import { guardarMascotas } from "../data/usuarios";


function PetForm({mascotaParaEditar, handleGuardarMascota}) {
  const navigate=useNavigate()
  const{perfilDelUsuarioId}=useParams()
  const [mascota, setMascota] = useState({
    mascota: "",
    tipo: "",
    edad: "",
    peso: "",
    file:'',
    pic:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMascota({ ...mascota, [name]: value });
   
  };
  const handleSubmit = (event) => {
    console.log(mascota)
    event.preventDefault();
    handleGuardarMascota(mascota);

    return navigate(`/usuario/perfilDelUsuario/${perfilDelUsuarioId}`)
  };

  
 const location=useLocation()
  return (
    <div className="conteiner content-center w-full box-border h-screen ">
      
      
        <h2 className="mb-2 text-4xl logoTitle text-center  text-indigo-950 border-b-2 border-indigo-700 pb-3">
         {location.pathname==='/usuario/perfilDelUsuario/:perfilDelUsuarioId/editarMascota/:editarMascotaId'? 'Edita Tu Mascota': 'Nueva Mascota'}
        </h2>
        
        <Form method="POST" noValidate onSubmit={(e)=>handleSubmit(e)}>
          <div className=" mb-2 justify-center flex-col flex  place-items-center mx-3">
            <label
              className="text-indigo-950 text-left font-semibold text-xl"
              htmlFor="mascota"
            >
              Mascota:
            </label>
            <input
              onChange={(e)=>handleChange(e)}
              id="mascota"
              type="text"
              className="mt-2 block w-full rounded-md p-3 bg-gray-50"
              placeholder="Nombre de la mascota"
              name="mascota"
              defaultValue={mascotaParaEditar?.mascota}
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
              onChange={(e)=>handleChange(e)}
              id="tipo"
              type="text"
              className="mt-2 block w-full rounded-md  p-3 bg-gray-50"
              placeholder="¿Que clase de mascota es?"
              name="tipo"
              defaultValue={mascotaParaEditar?.tipo}
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
            
              onChange={(e)=>handleChange(e)}
              id="edad"
              type="text"
              className="mt-2 block w-full p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="edad"
              defaultValue={mascotaParaEditar?.edad}
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
              onChange={(e)=>handleChange(e)}
              id="peso"
              type="text"
              className="mt-2 block w-full p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="peso"
              defaultValue={mascotaParaEditar?.peso}
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
              onChange={(e)=>handleChange(e)}
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
              onChange={(e)=>handleChange(e)}
              id="pic"
              type="file"
              accept="image/*, application/pdf"
              multiple
              className="mt-2 block w-full p-2 rounded-md bg-gray-50"
              name="pic"
            />
          </div>
          <input  type="submit" className=' py-4 px-2 w-full mt-5 logoTitle hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 text-2xl rounded-md'value={'Agregar Mascota'}/>
          </Form>
        </div>

       

    
  );
}

export default PetForm;
