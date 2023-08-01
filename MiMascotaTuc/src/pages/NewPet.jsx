import { useNavigate,useActionData, Form, redirect } from "react-router-dom"
import PetForm from "../components/PetForm"
import { useLogin } from "../store/userZustand"
import { useState} from "react"
import { agregarMascota,generarId,guardarMascotas, obtenerDatosUsuario } from "../data/usuarios"




export async function action({request,params}){
    const formDatosMascota = await request.formData();
    
    const datosMascota = Object.fromEntries(formDatosMascota);
    
    const usuario= await obtenerDatosUsuario(params.perfilDelUsuarioId)
    console.log()
    console.log(datosMascota)
    
    datosMascota.id=generarId()
    
    guardarMascotas(usuario,datosMascota)
    
    
    
    
    
    return redirect(`/usuario/perfilDelUsuario/${params.perfilDelUsuarioId}`)
  }


function NewPet() {
    
    const datosMascota=useActionData()
    const navigate=useNavigate()
    const {logout,user}=useLogin()
    
    
    
   
    
  const handleNuevaMascota=()=>{
    
    console.log(datosMascota)
  }

  
  /*  const [userData, setUserData] = useState({
      id: user.id,
      username: user.username,
      telefono: user.telefono,
      email: user.email,
      password: user.password,
      Imagen: "",
      mascotas: [],
    }||null)


    const agregarMascota = () => {
      setUserData((prevUserData) => ({
        ...prevUserData,
        mascotas: [...prevUserData.mascotas, datosMascota],
      }));
    };
    const guardarMascotas = async() => {
     try{const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        }
       
      });
      await respuesta.json()
    }catch{console.log(error)}}

    const handleNuevaMascota=(e)=>{
      e.preventDefault()
      agregarMascota()
      console.log(userData)
      console.log(datosMascota)
      guardarMascotas()
      navigate(-1)
    }
    */
    
  return (
    <div className="content-center place-content-center">
            
    <div className="flex mb-5 justify-between">
    <button
      onClick={() => navigate(-1)}
      className="bg-sky-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
    >
      Volver
    </button>
    <button
      onClick={() => logout()}
      className="bg-red-700 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-red-500 duration-200"
    >
      Cerrar sesion
    </button>
  </div>

<section className='shadow-md  content-center place-items-center flex flex-wrap my-2 mx-3 py-5'>
  <Form method="POST" noValidate>
  <PetForm/>
  <input onClick={handleNuevaMascota} type="submit" className='uppercase  py-4 px-2  font-bold hover:bg-teal-500 hover:cursor-pointer bg-teal-600 text-slate-200 rounded-md'value={'añadir mascota'}/>
  </Form>



  
</section>
</div>
  )
}

export default NewPet