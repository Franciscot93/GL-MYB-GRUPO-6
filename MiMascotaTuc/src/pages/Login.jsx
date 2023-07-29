import {
  Form,
  useNavigate,
  useActionData,
  redirect,useLoaderData
  
} from "react-router-dom";
import FormularioLogin from "../components/FormularioLogin";
import Error from "../components/Error";
import { obtenerUsuarios } from "../data/usuarios";
import { useEffect } from "react";
import { useLoginZustand } from "../store/userZustand";


export async function loader({params}){
  console.log(params)
  const usuario=obtenerUsuarios()
  return usuario
}

export async function action({ request }) {
  const formDatos = await request.formData();
  const datosUsuario = Object.fromEntries(formDatos) ||null
  
  if(datosUsuario){
    return datosUsuario
  }

  return null
}

function Login() {
  const{ isLoged,setIsLoged}=useLoginZustand()
  const navigate = useNavigate();
  const datos=useLoaderData()
  const errores=useActionData()
  
  const usuario=useActionData()
  

  useEffect(()=>{
    if(usuario){
      const user= datos.find(user=>user.username===usuario.username&&user.password===usuario.password)
      setIsLoged(user)
      navigate(`/usuario/perfilDelUsuario`)
    }
    console.log(usuario)
  },[datos])

  return (
    <div>
      <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>

      {errores?.length
        ? errores.map((error, i) => <Error key={i}>{error}</Error>)
        : null}

      <Form method="post">
        <FormularioLogin  />
        <input
          type="submit"
          className="mt-5 w-3/5 shadow bg-emerald-800 uppercase font-bold py-2 hover:bg-emerald-600 duration-100 text-slate-50 rounded-md text-lg"
          value={"Ingresar"} 
        />
      </Form>
    </div>
  );
}

export default Login;
