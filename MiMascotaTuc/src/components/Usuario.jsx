import { useLoginZustand } from "../store/userZustand"

function Usuario() {
   const{isLoged}=useLoginZustand()
  return (
    <div className="w-full">
            <h2 className="text-xl text-center font-semibold text-slate-800">Contacto</h2>
      <div className="mx-3 relative w-100 text-left  
         shadow-md mt-3 rounded-md  p-3
         ">img</div>
      <div className="mx-3 relative w-100 text-left  
         shadow-md mt-3 rounded-md  box-border p-3">Nombre:{isLoged.username}</div>
      <div className="mx-3 relative w-100 text-left  
         shadow-md mt-3 rounded-md  box-border p-3">E-mail:{isLoged.email}</div>
      <div className="mx-3 relative w-100 text-left  
         shadow-md mt-3 rounded-md box-border p-3">Telefono:{isLoged.telefono}</div>
    </div>
  )
}

export default Usuario