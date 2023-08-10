import { useState } from "react";
import { useLogin } from "../store/userZustand";
import { editarUsuarioImagen } from "../data/usuarios";
import { Image } from "cloudinary-react";
import Axios from "axios";
function User() {
  // Obtener el usuario actual desde el estado global
  const { user, setUser } = useLogin();
  const [selectedPic, setSelectedPic] = useState();

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

  const handleFotoPerfil = async (e) => {
    e.preventDefault();
    if (selectedPic) {
      const foto = await onChangePic();
      editarUsuarioImagen(user.id, foto, setUser);
    }
  };

  return (
    // Contenedor principal de la informacion del usuario
    <section className="w-full">
      {/* Titulo de la seccion de contacto */}
      <h2 className="text-4xl text-center logoTitle text-[#066aff]">
        Contacto
      </h2>
      {/*Seccuib del nombre del usuario */}
      <div
        className="mx-3 relative w-100 h-1/2 text-center flex justify-center aspect-square  text-[#066aff]
         shadow-md mt-3 rounded-md  "
      >
        <Image
          className="aspect-square"
          cloudName="dqr2aiayz"
          publicId={user?.Imagen}
        />
      </div>

      <aside className="conteiner h-1/2">
        <div className="mb-2 justify-center flex-col flex  place-items-center mx-3">
          <label
            className="text-indigo-950 font-semibold text-xl"
            htmlFor="imagenDePerfil"
          >
            Foto de perfil:
          </label>
          <input
            onInput={(e) => setSelectedPic(e.target.files[0])}
            id="imagenDePerfil"
            type="file"
            accept="image/*"
            className="mt-2 block w-full p-2 rounded-md bg-slate-50"
            name="imagenDePerfil"
          />
          <button
            onClick={(e) => handleFotoPerfil(e)}
            type="button"
            className="inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs  leading-normal logoTitle text-[#066aff] transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Seleccionar imagen
          </button>
        </div>

        {/*Seccuib del nombre del usuario */}
        <div
          className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-[#066aff] box-border p-3"
        >
          Nombre:{" "}
          <span className="text-slate-800 font-semibold">{user.username}</span>
        </div>
        {/* Seccion del correo electronico del usuario */}
        <div
          className="mx-3 relative font-semibold text-[#066aff] w-100 text-left  


         shadow-md mt-3 rounded-md  box-border p-3"
        >
          E-mail:{" "}
          <span className="text-slate-800 font-semibold">{user.email}</span>
        </div>
        {/*Seccion del telefono del usuario */}
        <div
          className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-[#066aff] box-border p-3"
        >
          Telefono:{" "}
          <span className="text-slate-800 font-semibold">{user.telefono}</span>
        </div>
      </aside>
    </section>
  );
}

export default User;
