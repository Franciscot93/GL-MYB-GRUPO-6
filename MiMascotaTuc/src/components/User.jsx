import { useLogin } from "../store/userZustand"

function User() {
   const{user}=useLogin()
  return (
    <div className="w-full">
            <h2 className="text-2xl text-center logoTitle text-[#066aff]">Contacto</h2>
      <div className="mx-3 relative w-100 text-left  text-[#066aff]
         shadow-md mt-3 rounded-md  p-3 
         ">img</div>
      <div className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-[#066aff] box-border p-3">Nombre: <span className="text-slate-800 font-semibold">{user.username}</span></div>
      <div className="mx-3 relative font-semibold text-[#066aff] w-100 text-left  
         shadow-md mt-3 rounded-md  box-border p-3">E-mail: <span className="text-slate-800 font-semibold">{user.email}</span></div>
      <div className="mx-3 relative w-100 text-left  font-semibold
         shadow-md mt-3 rounded-md text-[#066aff] box-border p-3">Telefono: <span className="text-slate-800 font-semibold">{user.telefono}</span></div>
    </div>
  )
}

export default User