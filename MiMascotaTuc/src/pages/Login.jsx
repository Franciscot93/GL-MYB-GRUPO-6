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

export async function loader({ params }) {
  const usuario = await obtenerUsuarios();
  return usuario;
}

export async function action({ request }) {
  const formDatos = await request.formData();
  const datosUsuario = Object.fromEntries(formDatos) || null;
  
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
  
  if (datosUsuario) {
    return datosUsuario

  }

  return null;
}

function Login() {
  const { login, logout, setUser,guardarUsers } = useLogin();
  const navigate = useNavigate();
  const datos = useLoaderData();
  const erroresDeFormulario = useActionData();
  

  const usuario = useActionData();
 
  useEffect(() => {
    if (usuario) {
      
      const user = datos.find(
        (user) =>
          user.email === usuario.email &&
          user.password === usuario.password
      );
      if (user) {
        
        login();
        setUser(user);
        navigate(`/usuario/perfilDelUsuario/${user.id}`);
      }
      
    }
  }, [datos]);

  return (
    <main>
      <div className="flex mb-5 justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>

      {erroresDeFormulario?.length
        ? erroresDeFormulario.map((error, i) => <Error key={i}>{error}</Error>)
        : null}
      
      <Form method="post">
        <LoginForm />
        <input
          type="submit"
          className="mt-5 w-3/5 shadow bg-emerald-800 logoTitle font-thin py-2 hover:bg-emerald-600 duration-100 text-slate-50 rounded-md text-2xl"
          value={"InGresaR"}
        />
      </Form>
    </main>
  );
}

export default Login;
