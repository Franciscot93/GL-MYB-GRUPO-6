import { useLocation, Form, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { editarMascota } from "../data/usuarios";
import { useLogin } from "../store/userZustand";
import Axios from "axios";

function PetForm({ mascotaParaEditar, handleGuardarMascota }) {
  const { setUser } = useLogin();
  const [selectedPic, setSelectedPic] = useState();
  const navigate = useNavigate();
  const { perfilDelUsuarioId, editarMascotaId } = useParams();
  const[files, setFiles] = useState({array:{}}|['No hay archivos'])
  const [mascota, setMascota] = useState({
    mascota: "",
    tipo: "",
    edad: "",
    peso: "",
    file: "",
    pic: '',
    patologias:''
  });

  // Estado para almacenar el ID de la mascota que se está editando
  const [mascotaIdEditando, setMascotaIdEditando] = useState(null);
  
  useEffect(() => {
    if (mascotaParaEditar) {
      setMascota(mascotaParaEditar);
      setMascotaIdEditando(mascotaParaEditar.id);
    }
  }, [mascotaParaEditar]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMascota({ ...mascota, [name]: value });
  };

  const onChangeFile=async(files)=>{
    const urls = [];
    console.log(files, typeof(files))
    if (files) {
     
      const filesArray=[...files]

       filesArray.forEach(async (pdffile) => {
      const formDataFiles = new FormData();
      formDataFiles.append("file", pdffile);
      formDataFiles.append("upload_preset", "pdfs_MiMascotaTuc");
  
      try {
        const response = await Axios.post(
          "https://api.cloudinary.com/v1_1/dqr2aiayz/image/upload",
          formDataFiles
        );
        console.log(response.data.secure_url)
        urls.push(response.data.secure_url);
      } catch (error) {
        console.error("Error al subir un archivo PDF a Cloudinary:", error);
      }
    });
  
    return urls;
    
  }}
<div className="text-xl"></div>

  //funcion de carga de Pic

  const onChangePic = async () => {
    if (selectedPic) {
      const formDataFiles = new FormData();
      formDataFiles.append("file", selectedPic);
      formDataFiles.append("upload_preset", "pic_mascotas");
      try {
     const response=  await Axios.post(
      "https://api.cloudinary.com/v1_1/dqr2aiayz/image/upload",formDataFiles
      

      )
     return response.data.url
         
      } catch (error) {
        console.error("Error al subir la imagen a Cloudinary:", error);
        return null;
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (mascotaParaEditar) {
      const pdfUrls = await onChangeFile(files);

      if (pdfUrls) {
      mascota.file=pdfUrls}

      const url =  await onChangePic()
      if(url){
        console.log(url)
        mascota.pic=url}
      await editarMascota(
        perfilDelUsuarioId,
        mascotaIdEditando,
        mascota,
        setUser
      );
      return navigate(`/usuario/perfilDelUsuario/${perfilDelUsuarioId}`);
    } else {
      
    const pdfUrls = await onChangeFile(files);

    if (pdfUrls) {
    mascota.file=pdfUrls}

      const url =  await onChangePic()

      if(url){
        console.log(url)
       mascota.pic=url}
      await handleGuardarMascota(mascota);

      return navigate(`/usuario/perfilDelUsuario/${perfilDelUsuarioId}`);
    }
  };

  const location = useLocation();
  return (
    // Contenedor principal del formulario
    <div className=" content-center w-full box-border ">
      <h2 className="mb-2 text-4xl logoTitle text-center  text-indigo-950 border-b-2 border-indigo-700 pb-3">
        {location.pathname ===
        `/usuario/perfilDelUsuario/${perfilDelUsuarioId}/editarMascota/${editarMascotaId}`
          ? "Edita Tu Mascota"
          : "Nueva Mascota"}
      </h2>
      {/* Campos de entrada para los detalles de la mascota */}
      <Form method="POST" noValidate onSubmit={(e) => handleSubmit(e)}>
      
        <div className=" mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 text-left font-semibold text-xl"
            htmlFor="mascota"
          >
            Mascota:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="mascota"
            type="text"
            className="mt-2 block w-full rounded-md p-3 bg-gray-50"
            placeholder="Nombre de la mascota"
            name="mascota"
            defaultValue={mascotaParaEditar?.mascota}
          />
        </div>
          {/*... Campo de entrada adicional para tipo */}
        <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="tipo"
          >
            Tipo:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="tipo"
            type="text"
            className="mt-2 block w-full rounded-md  p-3 bg-gray-50"
            placeholder="¿Que clase de mascota es?"
            name="tipo"
            defaultValue={mascotaParaEditar?.tipo}
          />
        </div>
        {/*... Campo de entrada adicional para edad */}
        <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="edad"
          >
            Edad:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="edad"
            type="text"
            className="mt-2 block w-full p-3 rounded-md bg-gray-50"
            placeholder="¿Cuantos años tiene?"
            name="edad"
            defaultValue={mascotaParaEditar?.edad}
          />
        </div>
        
        {/*... Campo de entrada adicional para peso */}
        <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="peso"
          >
            Peso(kg):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="peso"
            type="text"
            className="mt-2 block w-full p-3 rounded-md bg-gray-50"
            placeholder="¿Cuanto amor posee?"
            name="peso"
            defaultValue={mascotaParaEditar?.peso}
          />
        </div>
        {/*... Campo de entrada adicional para documentos */}
        <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="file"
          >
            Docs:
          </label>
          <input
            onInput={(e) => setFiles(e.target.files)}
            id="file"
            type="file"
            accept="image/*, application/pdf"
            multiple
            className="mt-2 block w-full p-2 rounded-md bg-gray-50"
            name="file"
          />
        </div>
        {/*... Campo de entrada adicional para pic de la mascota */}
        <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="pic"
          >
          
            Pic:
          </label>
          <input
            onInput={(e) => setSelectedPic(e.target.files[0])}
            id="pic"
            type="file"
            accept="image/*"
            
            className="mt-2 block w-full p-2 rounded-md bg-gray-50"
            name="pic"
          />

          </div>
        {/*... previsualizacion de la imagen de mascota */}
      { selectedPic ? <img className="aspect-square w-32" alt="Preview" height="60" src={URL.createObjectURL(selectedPic)} /> : null }
         
        

        {/*... boton envio de form */}
        <div className="mb-2 justify-center flex-col place-items-center mx-3">
          <input
            type="submit"
            className=" py-4 px-2 w-full mt-5 logoTitle hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 text-3xl rounded-md"
            value={
              location.pathname ===
              `/usuario/perfilDelUsuario/${perfilDelUsuarioId}/editarMascota/${editarMascotaId}`
                ? "Guardar cambios"
                : "Nueva Mascota"
            }
          />
        </div>
      </Form>
    </div>
  );
}

export default PetForm;


/*
  const enfermedades=['Artritis',
    'Sarna',
   'Hipotiroidismo',
    'Insuficiencia renal',
    'Enfermedad del hígado',
    'Enfermedad cardíaca',
    'Cáncer',
    'Asma',
    'Infecciones del oído',
    'Anemia']
  



 <div className="mb-2 justify-center flex-col flex text-left  place-items-center mx-3">
          {enfermedades.length > 0 ? (
            <ul className="flex-row flex">
              {enfermedades.map((enfermedad,index) => (
                <li className="text-xl flex text-slate-800" key={index}>
                <label
              className="text-indigo-950 font-semibold text-xl"
              htmlFor={enfermedad}
              />{enfermedad}
                <input 
                type="checkbox"
                name={enfermedad}
                
              /></li>
              ))}
            </ul>
          ) : (
            <h3 className="text-3xl text-slate-800 logoTitle">NO HAY MASCOTAS</h3>
          )}
          </div>

*/

