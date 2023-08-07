import { Form,useNavigate,useActionData,redirect } from "react-router-dom"
import RegisterForm from "../components/RegisterForm"
import Error from "../components/Error";
import { agregarUsuario,obtenerUsuarios } from "../data/usuarios";

// Funcion de accion para manejar el registro de un nuevo usuario
export async function action({ request }) {
    // Obtener datos del formularioutilizando FormDate
    const formDatos = await request.formData();
    const datosNuevoUsuario = Object.fromEntries(formDatos);
 

    const username=formDatos.get("username")

    const email = formDatos.get("email");
    const password=formDatos.get("password");
    const repetirPassword=formDatos.get("repetirPassword")
    const telefono = formDatos.get("telefono");

    const usuarios = await obtenerUsuarios();
    const emailDuplicado = usuarios.some((usuario) => usuario.email === datosNuevoUsuario.email);

    const errores = [];
    
    // validacion
    

    const usernameRegex = /^[A-Za-z]{3,30}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&.]{8,12}$/
                          
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,15}$/;

    
      
    if (emailDuplicado) {
      errores.push("El email ya está registrado. Por favor, ingrese otro email.");
    }
    if(!phoneRegex.test(telefono)){
      errores.push('Error! Ingrese solo numeros (9 a 15 digitos)')
    }
    if(!usernameRegex.test(username)){

      errores.push('El campo nombre solo puede contener letras y tiene un minimo de 4 caracteres.')
    }
    // Validar contraseña
    if(!passwordRegex.test(password)){
      console.log(password)
      errores.push('La contraseña debe tener al menos: 1 mayuscula, 1 minuscula, 1 caracter especial "#$.@", y debe tener de 8 a 16 caracteres')
    }
    // Validar coincidencia de contraseñas
    if(password!==repetirPassword){
      console.log(repetirPassword)
      errores.push("Las contraseñas no coinciden")
    }
  
  
    if (!emailRegex.test(email)) {
      errores.push("El email no es válido");
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
        <h2 className="text-4xl text-center logoTitle text-[#066aff] my-5">Formulario de registro</h2>
         
        {/* Formulario de registro */}
        <Form noValidate method="post">

        
        {/* Mostrar errores si existen */}
        {errores?.length ?
          errores.map((error, i) => <Error key={i}>{error}</Error>):null}

          {/* Componente RegisterForm para mostrar campos de registro */}
        <RegisterForm  />

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