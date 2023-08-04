import { useLogin } from "../store/userZustand"

function User() {
   // Obtener el usuario actual desde el estado global
   const{user}=useLogin()
  return (
   // Contenedor principal de la informacion del usuario
    <div className="w-full">
      {/* Titulo de la seccion de contacto */}
            <h2 className="text-2xl text-center logoTitle text-slate-800">Contacto</h2>
            {/*Seccion de la imagen (!falta la imagen aqui) */}
      <div className="mx-3 relative w-100 text-left  
         shadow-md mt-3 rounded-md  p-3
         ">img {/*Falta la etiqueta de la imagen y su atributo src! */}
         </div>
         {/*Seccuib del nombre del usuario */}
      <div className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-indigo-800 box-border p-3">Nombre: <span className="text-slate-800 font-semibold">{user.username}</span></div>

         {/* Seccion del correo electronico del usuario */}
      <div className="mx-3 relative font-semibold text-indigo-800 w-100 text-left  
         shadow-md mt-3 rounded-md  box-border p-3">E-mail: <span className="text-slate-800 font-semibold">{user.email}</span></div>
         {/*Seccion del telefono del usuario */}
      <div className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-indigo-800 box-border p-3">Telefono: <span className="text-slate-800 font-semibold">{user.telefono}</span></div>
    </div>
  )
}

export default User