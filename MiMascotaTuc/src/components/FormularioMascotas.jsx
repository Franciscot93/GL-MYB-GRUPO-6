import BotonCerrarModal from "../img/cerrar.svg";

function FormularioMascotas({ animarModal, setAnimarModal, setModal }) {
  const handleCerrarNuevaMascota = () => {
    setModal(false);
    setAnimarModal(false);
  };

  return (
    <div className="modal  h-screen ">
      <div className="cerrar-modal">
        <img
          onClick={handleCerrarNuevaMascota}
          src={BotonCerrarModal}
          alt="boton para cerrar ventana modal"
        />
      </div>
      <div className={`formulario ${animarModal ? "animar" : ""}`}>
        <h2 className="mb-2 text-3xl font-bold text-slate-200 border-b-2 border-indigo-700 pb-3">
          Nueva Mascota
        </h2>

        <div className="container md:flex   md:flex-wrap content-center">
          <div className=" mb-2 mx-3">
            <label
              className="text-slate-200 text-left font-semibold text-xl"
              htmlFor="nombreMascota"
            >
              Mascota:
            </label>
            <input
              id="nombreMascota"
              type="text"
              className="mt-2 block w-full rounded-md p-3 bg-gray-50"
              placeholder="Nombre de la mascota"
              name="nombreMascota"
            />
          </div>

          <div className="mb-2  mx-3">
            <label
              className="text-slate-200 font-semibold text-xl"
              htmlFor="tipoMascota"
            >
              Tipo:
            </label>
            <input
              id="tipoMascota"
              type="text"
              className="mt-2 block w-full rounded-md  p-3 bg-gray-50"
              placeholder="¿Que clase de mascota es?"
              name="tipoMascota"
            />
          </div>

          <div className="mb-2  mx-3">
            <label
              className="text-slate-200 font-semibold text-xl"
              htmlFor="edadMascota"
            >
              Edad:
            </label>
            <input
              id="edadMascota"
              type="text"
              className="mt-2 block w-full p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="edadMascota"
            />
          </div>
          <div className="mb-2  mx-3">
            <label
              className="text-slate-200 font-semibold text-xl"
              htmlFor="pesoMascota"
            >
              Peso(kg):
            </label>
            <input
              id="pesoMascota"
              type="text"
              className="mt-2 block w-full p-3 rounded-md bg-gray-50"
              placeholder="¿Cuantos años tiene?"
              name="pesoMascota"
            />
          </div>
          <div className="mb-2 mx-3">
            <label
              className="text-slate-200 font-semibold text-xl"
              htmlFor="filesMascota"
            >
              Archivos:
            </label>
            <input
              id="filesMascota"
              type="file"
              accept="image/*, application/pdf"
              multiple
              className="mt-2 block w-full p-2 rounded-md bg-gray-50"
              name="filesMascota"
            />
          </div>
          <div className="mb-2 mx-3">
            <label
              className="text-slate-200 font-semibold text-xl"
              htmlFor="filesMascota"
            >
              Pic:
            </label>
            <input
              id="picMascota"
              type="file"
              accept="image/*, application/pdf"
              multiple
              className="mt-2 block w-full p-2 rounded-md bg-gray-50"
              name="picMascota"
            />
          </div>
          <input
            onClick={() => console.log("object")}
            className="uppercase py-4 px-2 w-full font-semibold  hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md"
            type="submit"
            value={"añadir Mascota"}
          />
        </div>
      </div>
    </div>
  );
}

export default FormularioMascotas;
