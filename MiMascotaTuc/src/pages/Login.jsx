import { Form,useNavigate ,useActionData,redirect} from "react-router-dom"
import FormularioLogin from "../components/FormularioLogin"
import Error from "../components/Error";

export async function action({ request }) {
    const formDatos = await request.formData();
    const datosUsuario = Object.fromEntries(formDatos);
    
    const errores = []

    if (Object.values(datosUsuario).includes("")) {
        errores.push("Ocurrio un error! Revisa tus datos");
      }
    
    if(Object.keys(errores).length){
        return errores
    }
   
  
  
   
  // validacion
   
    
    console.log(datosUsuario)
    return redirect('/usuario/perfilDelUsuario')
  }


function Login() {
   const navigate= useNavigate()
   const errores=useActionData()
  return (
    <div>
        <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate('/')}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
        </div>

        {errores?.length ?
          errores.map((error, i) => <Error key={i}>{error}</Error>):null}

    <Form method="post" >
    <FormularioLogin/>
    <input
            type="submit"
            className="mt-5 w-3/5 shadow bg-emerald-800 uppercase font-bold py-2 hover:bg-emerald-600 duration-100 text-slate-50 rounded-md text-lg"
            value={"Ingresar"}
          />
    </Form>
    </div>
  )
}

export default Login