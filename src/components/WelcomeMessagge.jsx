function WelcomeMessagge() {
  return (
    // Fragmento (<>...</>) para agrupar multiples elementos sin añadir nodos adicionales al DOM
    <>
      {/*Parrafo que describe el proposito de la App */}
      <p className="text-2xl text-slate-800 font-normal">
        Creamos esta <span className="text-[#0050f0] ">App</span> pensando en
        los miembros mas queridos de cualquier familia.
      </p>

      {/*Parrafo que explica la caracteristicas de la App */}
      <p className="text-2xl font-normal text-slate-800">
        A través de ella podras, registrar a tu mascota en tu perfil, y hacer un
        seguimiento de su historia clinica, para tener siempre una info
        actualizada de su salud <span className="text-3xl ">❤️</span>.
      </p>
    </>
  );
}

export default WelcomeMessagge;
