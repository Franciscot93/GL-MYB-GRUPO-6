import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../store/userZustand";
import Pet from "../components/Pet";
import imagenFile from "../img/filelogo.png";
import DocPet from "../components/DocPet";

export default function PetDetail() {
  const [archivoPet, setArchivoPet] = useState({});
  const navigate = useNavigate();

  const { pet } = useLogin();
  const [mostrarArchivo, setMostrarArchivo] = useState(false);

  const mostrarDocumentacion = (e, file) => {
    e.preventDefault(e);
    setMostrarArchivo(true);
    setArchivoPet(file);
  };

  return (
    <main>
      <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>
      <div className="shadow-md flex flex-wrap my-2 mx-3  py-5">
        <aside className="flex flex-wrap w-full justify-center md:w-2/5 lg:w-2/5 mt-5 ">
          <h2 className="text-4xl text-[#066aff] text-center w-full logoTitle">
            Mascota
          </h2>
          <Pet pet={pet} />
          <h2 className="text-3xl my-3 text-[#066aff] text-center w-full logoTitle">
            Documentacion de Seguimiento
          </h2>
          <div className=" md:flex w-full lg:max-w-full lg:max-h-[18rem] mt-3 rounded-lg bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-1 box-border">
            <ul className=" w-full flex items-center flex-col p-1 overflow-scroll overflow-x-hidden">
              {pet.file.length > 0 ? (
                pet.file?.map((file) => (
                  <li key={file.id}>
                    {" "}
                    <div
                      key={file.id}
                      className="text-md my-2 font-semibold flex flex-row"
                    >
                      Fecha:{file.fecha}{" "}
                      <Link onClick={(e) => mostrarDocumentacion(e, file)}>
                        <img src={imagenFile} />
                      </Link>{" "}
                    </div>
                  </li>
                ))
              ) : (
                <h2 className="text-2xl text-slate-800 w-full animate-pulse text-center logoTitle">
                  No se registran Archivos en tu Mascota
                </h2>
              )}
            </ul>
          </div>
        </aside>
        <aside className="flex  justify-center flex-wrap w-full box-border md:w-3/5 lg:w-3/5 mt-5">
          <div className="h-fit">
            <h2 className="text-4xl relative text-[#066aff] p-1 text-center w-full logoTitle">
              Documentos Peludos
            </h2>
          </div>
          <div className="flex w-full flex-wrap">
            {mostrarArchivo ? (
              <DocPet archivoPet={archivoPet} />
            ) : (
              <h2 className="text-2xl text-slate-800 w-full animate-pulse text-center logoTitle">
                No seleccionaste un archivo de tu Mascota
              </h2>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
