function Error({children}) {(

     return(   // Contenedor del mensaje de error centrado en el texto
      <div className="text-center  my-4 p-3 bg-red-600 font-bold text-slate-50">
        {children} {/* Renderiza el contenido de error proporcionado como hijos */}
      </div>

     )
  }
  
  export default Error




