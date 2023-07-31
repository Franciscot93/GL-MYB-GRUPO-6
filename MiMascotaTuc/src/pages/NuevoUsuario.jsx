import { Form,useNavigate,useActionData,redirect } from "react-router-dom"
import FormularioDeRegistro from "../components/FormularioDeRegistro"
import Error from "../components/Error";
import { agregarUsuario } from "../data/usuarios";

export async function action({ request }) {
    const formDatos = await request.formData();
    const datosNuevoUsuario = Object.fromEntries(formDatos);
    
    // validacion
    const regexEmail = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    
    const regexPassword=new RegExp("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/")
    const email = formDatos.get("email");
    const password=formDatos.get("password");
    const repetirPassword=formDatos.get("repetirPassword")
  
    const errores = [];
      
      console.log(repetirPassword)

    if(!regexPassword.test(password)){
      console.log(password)
      console.log('no cumple')
    }

    if(password!==repetirPassword){
      errores.push("Las contraseñas no coinciden")
    }
    
    if(!regexEmail.test(email)){
      errores.push('El Email no es valido')
    }
    if (Object.values(datosNuevoUsuario).includes("")) {
      errores.push("Todos los campos son obligatorios");
    }
    if (Object.keys(errores).length) {
      return errores;
    }
    
    
    return datosNuevoUsuario
  }


function NuevoUsuario() {
   const navigate= useNavigate()
   const errores=useActionData()
   const datosNuevoUsuario=useActionData()
   

   const registrarUsuario=()=>
   agregarUsuario(datosNuevoUsuario)
   redirect('/usuario/login')
    return (
    <div>
        <h2 className="text-3xl text-center font-bold text-indigo-900 my-5">Formulario de registro</h2>
        <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate('/')}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
        </div>
        <Form method="post">
        
        {errores?.length ?
          errores.map((error, i) => <Error key={i}>{error}</Error>):null}
        <FormularioDeRegistro/>
        <input
            type="submit"
            className="mt-5 w-3/5 shadow bg-sky-800 uppercase font-bold py-2 hover:bg-sky-700 duration-100 text-slate-50 rounded-md text-lg"
            value={"registrar Usuario"}
          />
        </Form>
        
    </div>
  )
}

export default NuevoUsuario