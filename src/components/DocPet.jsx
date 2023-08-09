function DocPet({ archivoPet }) {
  return (
    <div className="w-full px-2 m-2 ">
      <div key={archivoPet.id}>
        <p>Fecha: {archivoPet.fecha}</p>
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
