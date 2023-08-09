function DocPet({ archivoPet }) {
  return (
    <div className="w-full px-2 m-2 ">
      <div className="flex flex-col  justify-center content-center place-items-center" key={archivoPet.id}>
        <p className="font-semibold text-slate-900 relative text-xl text-center p-1 w-full">Fecha: {archivoPet.fecha}</p>
        <iframe
          className="aspect-auto rounded-md w-full h-screen"
          src={archivoPet.documento}
          title={`PDF ${archivoPet.documento}`}
        ></iframe>
      </div>
    </div>
  );
}

export default DocPet;
