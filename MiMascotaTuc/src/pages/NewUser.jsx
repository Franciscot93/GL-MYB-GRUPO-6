import { Form,useNavigate,useActionData,redirect } from "react-router-dom"
import RegisterForm from "../components/RegisterForm"
import Error from "../components/Error";
import { agregarUsuario } from "../data/usuarios";

// Funcion de accion para manejar el registro de un nuevo usuario
export async function action({ request }) {
    // Obtener datos del formularioutilizando FormDate
    const formDatos = await request.formData();
    const datosNuevoUsuario = Object.fromEntries(formDatos);
    
    // validacion 
    // Expresiones regulares para validar campos
    const regexEmail = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    ); /* Expresión regular para validar correo electrónico */;

    const numberRegex = /^[0-9]{9,15}$/  /* Expresion regular para validar numero de telefono */
    const nameRegex = /^[A-Za-z]{4,35}$/ /* expresion regular para validar nombre de usuario*/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,16}$/ /* expresion regular para validar contraseña */

      /* Obtener valores de los campos del formulario */
    const username=formDatos.get("username") 
    const email = formDatos.get("email");
    const password=formDatos.get("password");
    const repetirPassword=formDatos.get("repetirPassword")
    const telefono = formDatos.get("telefono");

      /* Validaciones de campos y generacion de mensaje de error*/
    const errores = [];
      
      console.log(repetirPassword)

    // Validar numero de telefono  
    if(!numberRegex.test(telefono)){
      errores.push('Error! Ingrese solo numeros (9 a 15 digitos)')
    }
    // Validar nombre de usuario
    if(!nameRegex.test(username)){
      errores.push('El campo nombre solo puede contener letras y tiene un minimo de 4 caracteres.')
    }
    // Validar contraseña
    if(!passwordRegex.test(password)){
      errores.push('La contraseña debe tener al menos: 1 mayuscula, 1 minuscula, 1 caracter especial "#$.@", y debe tener de 8 a 16 caracteres')
    }
    // Validar coincidencia de contraseñas
    if(password!==repetirPassword){
      errores.push("Las contraseñas no coinciden")
    }
    // Validar formato de correo electronico
    if(!regexEmail.test(email)){
      errores.push('El Email no es valido')
    }
    // Validar que no haya campos vacios
    if (Object.values(datosNuevoUsuario).includes("")) {
      errores.push("Todos los campos son obligatorios");
    }
    // si hay errores, retornarlos
    if (Object.keys(errores).length) {
      return errores;
    }
    
    // Agregar el nuevo usuario a la base de datos y redirigir a la pagina de inicio de sesion
    agregarUsuario(datosNuevoUsuario)
   return redirect('/usuario/login')
    
  }


function NewUser() {
  // Utilizar el hook useNavigate para la navegacion
   const navigate= useNavigate()

   // Obtener  datos y errores del proceso de registro usando useActionData
   const errores=useActionData()
   const datosNuevoUsuario=useActionData()
   

  
   
    return (
    <div>
      {/* Boton para volver a la pagina de inicio*/}
        <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate('/')}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
        </div>

        {/* Encabezado del formulario*/}
        <h2 className="text-4xl text-center logoTitle text-indigo-900 my-5">Formulario de registro</h2>
        
        {/* Formulario de registro */}
        <Form method="post">
        
        {/* Mostrar errores si existen */}
        {errores?.length ?
          errores.map((error, i) => <Error key={i}>{error}</Error>):null}
        
        {/* Componente RegisterForm para mostrar campos de registro */}
        <RegisterForm/>

        {/* Boton de envio del formulario */}
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