import { Form,useNavigate,useActionData,redirect } from "react-router-dom"
import RegisterForm from "../components/RegisterForm"
import Error from "../components/Error";
import { agregarUsuario } from "../data/usuarios";

export async function action({ request }) {
    const formDatos = await request.formData();
    const datosNuevoUsuario = Object.fromEntries(formDatos);
    
    // validacion
    const regexEmail = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    const numberRegex = /^[0-9]{9,15}$/
    const nameRegex = /^[A-Za-z]{4,35}$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,16}$/
    const username=formDatos.get("username")
    const email = formDatos.get("email");
    const password=formDatos.get("password");
    const repetirPassword=formDatos.get("repetirPassword")
    const telefono = formDatos.get("telefono");
    const errores = [];
      
      console.log(repetirPassword)

    if(!numberRegex.test(telefono)){
      errores.push('Error! Ingrese solo numeros (9 a 15 digitos)')
    }
    if(!nameRegex.test(username)){
      errores.push('El campo nombre solo puede contener letras y tiene un minimo de 4 caracteres.')
    }

    if(!passwordRegex.test(password)){
      errores.push('La contraseña debe tener al menos: 1 mayuscula, 1 minuscula, 1 caracter especial "#$.@", y debe tener de 8 a 16 caracteres')
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
    
    agregarUsuario(datosNuevoUsuario)
   return redirect('/usuario/login')
    
  }


function NewUser() {
   const navigate= useNavigate()
   const errores=useActionData()
   const datosNuevoUsuario=useActionData()
   

  
   
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
        <h2 className="text-4xl text-center logoTitle text-[#066aff] my-5">Formulario de registro</h2>
        
        <Form method="post">
        
        {errores?.length ?
          errores.map((error, i) => <Error key={i}>{error}</Error>):null}
        <RegisterForm/>
        <input
            type="submit"
            className="mt-5 w-3/5 shadow bg-sky-800 uppercase font-bold py-2 hover:bg-sky-700 duration-100 text-slate-50 rounded-md text-lg"
            value={"registrar Usuario"}
          />
        </Form>
        
    </div>
  )
}

export default NewUser