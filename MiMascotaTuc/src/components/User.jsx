import { useLogin } from "../store/userZustand"

function User() {
   // Obtener el usuario actual desde el estado global
   const{user}=useLogin()
  return (
   // Contenedor principal de la informacion del usuario
    <div className="w-full">

        {/* Titulo de la seccion de contacto */}
            <h2 className="text-4xl text-center logoTitle text-[#066aff]">Contacto</h2>
      {/*Seccuib del nombre del usuario */}
      <div className="mx-3 relative w-100 text-left  text-[#066aff]
         shadow-md mt-3 rounded-md  p-3 ">img</div>
      {/*Seccuib del nombre del usuario */}
      <div className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-[#066aff] box-border p-3">Nombre: <span className="text-slate-800 font-semibold">{user.username}</span></div>
  {/* Seccion del correo electronico del usuario */}      
<div className="mx-3 relative font-semibold text-[#066aff] w-100 text-left  

         shadow-md mt-3 rounded-md  box-border p-3">E-mail: <span className="text-slate-800 font-semibold">{user.email}</span></div>
         {/*Seccion del telefono del usuario */}
      <div className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-[#066aff] box-border p-3">Telefono: <span className="text-slate-800 font-semibold">{user.telefono}</span></div>
    </div>
  )
}

export default User