import {
  useLocation,
  Form,
  useParams,
  useNavigate,
  redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { editarMascota, generarFecha, generarId } from "../data/usuarios";
import { useLogin } from "../store/userZustand";
import Axios from "axios";
import gatoError from "../img/cat-error.png";

function PetForm({ mascotaParaEditar, handleGuardarMascota }) {
  const { setUser } = useLogin();
  const [selectedPic, setSelectedPic] = useState();
  const navigate = useNavigate();
  const { perfilDelUsuarioId, editarMascotaId } = useParams();
  const [files, setFiles] = useState({ array: {} } | ["No hay archivos"]);
  const [mascota, setMascota] = useState({
    mascota: "",
    tipo: "",
    edad: "",
    peso: "",
    file: { array: {} },
    pic: "",
  });
  const [campoAlertas, setCampoAlertas] = useState({
    mascota: false,
    tipo: false,
    edad: false,
    peso: false,
  });

  const [erroresForm, setErroresForm] = useState(false);
  useEffect(() => {
    if (mascotaParaEditar) {
      const alertas = { ...campoAlertas };
      alertas.mascota = "";
      alertas.tipo = "";
      alertas.edad = "";
      alertas.peso = "";

      setCampoAlertas(alertas);
    }
  }, [mascotaParaEditar]);

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

  const onChangeFile = async (files) => {
    const urls = [];
    if (files) {
      const filesArray = [...files];

      const uploadFiles = filesArray.map(async (pdffile) => {
        const formDataFiles = new FormData();
        formDataFiles.append("file", pdffile);
        formDataFiles.append("upload_preset", "pdfs_MiMascotaTuc");

        try {
          const response = await Axios.post(
            "https://api.cloudinary.com/v1_1/dqr2aiayz/image/upload",
            formDataFiles
          );

          urls.push({
            fecha: generarFecha(),
            documento: response.data.secure_url,
            id: generarId(),
          });
        } catch (error) {
          console.error("Error al subir un archivo PDF a Cloudinary:", error);
        }
      });
      await Promise.all(uploadFiles);
    }
    return urls;
  };

  //funcion de carga de Pic

  const onChangePic = async () => {
    if (selectedPic) {
      const formDataFiles = new FormData();
      formDataFiles.append("file", selectedPic);
      formDataFiles.append("upload_preset", "pic_mascotas");
      try {
        const response = await Axios.post(
          "https://api.cloudinary.com/v1_1/dqr2aiayz/image/upload?f_auto=webp",
          formDataFiles
        );
        return response.data.url;
      } catch (error) {
        console.error("Error al subir la imagen a Cloudinary:", error);
        return null;
      }
    }

    return null;
  };

  const validarCampo = (e) => {
    const { name, value } = e.target;
    const alertas = { ...campoAlertas };

    switch (name) {
      case "mascota":
        const mascotaRegex = /^[A-Za-z]{2,15}$/;
        alertas.mascota = mascotaRegex.test(value.trim())
          ? ""
          : "No parece un nombre... 🤔Solo Letras (2-15)";

        break;
      case "tipo":
        const tipoRegex = /^[A-Za-z]{2,15}$/;
        alertas.tipo = tipoRegex.test(value.trim())
          ? ""
          : "De verdad es una mascota?🤔 Solo Letras (2-15) ";
        break;
      case "edad":
        const edadRegex = /^[0-9]{1,2}$/;
        alertas.edad = edadRegex.test(Number(value.trim()))
          ? ""
          : "Si existe debe tener una edad, en valores numericos y de uno o dos digitos";
        break;
      case "peso":
        const pesoRegex = /^[0-9]{1,5}$/;
        alertas.peso = pesoRegex.test(Number(value.trim()))
          ? ""
          : "Es un peso extraño, en valores numericos y de uno a 5 digitos.";
        break;
      default:
        break;
    }
    setCampoAlertas(alertas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mascotaParaEditar) {
      if (Object.values(campoAlertas).some((alerta) => alerta !== "")) {
        setErroresForm(true);
        return;
      }
      setErroresForm(false);
      const pdfUrls = await onChangeFile(files);

      if (pdfUrls.length > 0) {
        await Promise.all(pdfUrls.map((url) => url));

        if (mascota.file.length > 0) {
          mascota.file = mascota.file.concat(pdfUrls);
        } else {
          mascota.file = pdfUrls;
        }
      }

      const url = await onChangePic();
      if (url) {
        mascota.pic = url;
      }
      await editarMascota(
        perfilDelUsuarioId,
        mascotaIdEditando,
        mascota,
        setUser
      );
      return navigate(`/usuario/perfilDelUsuario/${perfilDelUsuarioId}`);
    } else {
      if (Object.values(campoAlertas).some((alerta) => alerta !== "")) {
        setErroresForm(true);
        return;
      }
      setErroresForm(false);
      const pdfUrls = await onChangeFile(files);

      if (pdfUrls.length > 0) {
        await Promise.all(pdfUrls.map((url) => url));

        mascota.file = pdfUrls;
      }

      const url = await onChangePic();

      if (url) {
        mascota.pic = url;
      }
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
        <div className="my-2 box-border justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 text-left font-semibold text-xl"
            htmlFor="mascota"
          >
            Mascota:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onKeyUp={(e) => validarCampo(e)}
            id="mascota"
            type="text"
            className=" block w-full rounded-md p-3 bg-gray-50"
            placeholder="Nombre de la mascota"
            name="mascota"
            defaultValue={mascotaParaEditar?.mascota}
          />
          {campoAlertas.mascota ? (
            <div className="font-semibold text-red-600 h-[1.5em]">
              {campoAlertas.mascota}
            </div>
          ) : (
            <div className="h-[1.5em]"> </div>
          )}
        </div>

        {/*... Campo de entrada adicional para tipo */}
        <div className=" my-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="tipo"
          >
            Tipo:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onKeyUp={(e) => validarCampo(e)}
            id="tipo"
            type="text"
            className="block w-full rounded-md  p-3 bg-gray-50"
            placeholder="¿Que clase de mascota es?"
            name="tipo"
            defaultValue={mascotaParaEditar?.tipo}
          />
          {campoAlertas.tipo ? (
            <div className=" font-semibold text-red-600 h-[1.5em]">
              {campoAlertas.tipo}
            </div>
          ) : (
            <div className="h-[1.5em]"> </div>
          )}
        </div>

        {/*... Campo de entrada adicional para edad */}
        <div className="my-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="edad"
          >
            Edad:
          </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyUp={(e) => validarCampo(e)}
            id="edad"
            type="text"
            className="mb-5 block w-full p-3 rounded-md bg-gray-50"
            placeholder="¿Cuantos años tiene?"
            name="edad"
            defaultValue={mascotaParaEditar?.edad}
          />
          {campoAlertas.edad ? (
            <div className=" font-semibold text-red-600 h-[1.5em]">
              {campoAlertas.edad}
            </div>
          ) : (
            <div className="h-[1.5em]"> </div>
          )}
        </div>

        {/*... Campo de entrada adicional para peso */}
        <div className="my-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="peso"
          >
            Peso(kg):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onKeyUp={(e) => validarCampo(e)}
            id="peso"
            type="text"
            className="mb-5 block w-full p-3 rounded-md bg-gray-50"
            placeholder="¿Cuanto amor posee?"
            name="peso"
            defaultValue={mascotaParaEditar?.peso}
          />
          {campoAlertas.peso ? (
            <div className=" font-semibold text-red-600 h-[1.5em]">
              {campoAlertas.peso}
            </div>
          ) : (
            <div className="h-[1.5em]"> </div>
          )}
        </div>

        {/*... Campo de entrada adicional para documentos */}
        <div className="my-2 justify-center flex-col flex  place-items-center mx-3">
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
        <div className=" my-2 justify-center flex-col flex  place-items-center mx-3">
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
        {selectedPic ? (
          <img
            className="aspect-square w-32"
            alt="Preview"
            height="60"
            src={URL.createObjectURL(selectedPic)}
          />
        ) : null}

        {/*... boton envio de form */}
        <div className="mb-2  justify-center flex-col place-items-center mx-3">
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
        {Object.values(campoAlertas).some((alerta) => alerta !== "") &&
        erroresForm ? (
          <div className="flex h-[2em] justify-center font-semibold text-red-600">
            🚨 Los campos de Mascota, tipo,edad y peso son necesarios.
            <img src={gatoError} />
          </div>
        ) : (
          <div className="h-[1.5em]"></div>
        )}
      </Form>
    </div>
  );
}

export default PetForm;
