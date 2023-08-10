import React from "react";
import WelcomeMessagge from "../components/WelcomeMessagge";
import WelcomeOptions from "../components/WelcomeOptions";
import { useLoaderData } from "react-router-dom";

function Root() {
  // Cargar datos utilizando el "Loader" (si es necesario)

  const usuario = useLoaderData();
  return (
    <>
      {/*  Compoente de mensaje de Bienvenida*/}
      <WelcomeMessagge />
      {/* Componente de opciones de bienvenida */}
      <WelcomeOptions />
    </>
  );
}

export default Root;
