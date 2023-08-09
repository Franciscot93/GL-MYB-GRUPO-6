
import {
  Form,
  useNavigate,
  useActionData, 
  useLoaderData,
} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Error from "../components/Error";
import { obtenerUsuarios } from "../data/usuarios";
import { useEffect} from "react";
import { useLogin } from "../store/userZustand";

// Cargar los usuarios para el loader inicial
export async function loader({ params }) {
  const usuario = await obtenerUsuarios();
  return usuario;
}
  // Manejar la accion de iniciar sesion

export async function action({ request }) {
  const formDatos = await request.formData();
  const datosUsuario = Object.fromEntries(formDatos) || null;
  

  // Validar el formato del correo electronico
  const email = formDatos.get("email")
  const regexEmail = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )
  const erroresDeFormulario = [];
  if(!regexEmail.test(email)){
    erroresDeFormulario.push('El Email no es valido')
  }
  if (Object.values(datosUsuario).includes("")) {
    erroresDeFormulario.push("Todos los campos son obligatorios");
  }
  if (Object.keys(erroresDeFormulario).length) {
    return erroresDeFormulario;
  }

  // Si hay datos de usuarios validos, retornarlos
  if (datosUsuario) {
    return datosUsuario
  }
  return null;
}



function Login() {

 
  // Efecto secundario para manejar el inicio de sesion  


  const { login, logout, setUser,guardarUsers } = useLogin();

  

  const navigate = useNavigate();
  const datos = useLoaderData();
  const erroresDeFormulario = useActionData();
  
  
  const usuario = useActionData();



  useEffect(() => {
    if(localStorage.getItem('email')){
      const email = localStorage.getItem('email');
      console.log(email)
      if (email) {
        const user = datos.find(
          (user) =>
            user.email ===  email
        );

        if (user) {
         login();
          setUser(user);
          console.log(user)
          navigate(`/usuario/perfilDelUsuario/${user.id}`);
 
        }
      }
    }
  }, [datos]);

  useEffect(() => {
   
    if (usuario) {

      // Buscar al usuario en la lista de usuarios usando los datos del formulario

      const user = datos.find(
        (user) =>
          user.email === usuario.email &&
          user.password === usuario.password
      );
      if (user) {
        // Si se encuentra un usuario valido, iniciar sesion y redirigir al perfil
        login();
        setUser(user);
        console.log(user)
        navigate(`/usuario/perfilDelUsuario/${user.id}`);
        window.localStorage.setItem(
          'email',user.email
        ) 
      }
    }

  }, [datos]);

  return (
    <main>
      <div className="flex mb-5 justify-end">
        {/* Boton para volver a la pagina anterior */}
        <button
          onClick={() => navigate("/")}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>
      {/* Mostrar errores de formulario si existen */}
      {erroresDeFormulario?.length
        ? erroresDeFormulario.map((error, i) => <Error key={i}>{error}</Error>)
        : null}

      {/* Formulario de inicio de sesion */}
      <Form method="post">
        <LoginForm />
        <input
          type="submit"
          className="mt-5 w-3/5 shadow bg-[#0841c5] logoTitle font-thin py-2 hover:bg-[#066aff] duration-100 text-slate-50 rounded-md text-2xl"
          value={"InGresaR"}
        />
      </Form>
    </main>
  );
  
}
export default Login;