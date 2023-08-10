import { Navigate } from "react-router-dom";
import { useLogin } from "../store/userZustand";

// Componente de ruta protegida
export const ProtectedRoute = ({ children }) => {
  // Obtener el estado de inicio de sesion del usuario desde el almacenamiento
  const { isLogged } = useLogin();

  // Si el usuario está registrado (inició sesión), mostrar los hijos (contenido protegido)
  // Si el usuario no está registrado, redirigir al inicio de sesión (Login) con el uso de Navigate
  return isLogged ? children : <Navigate to="/" replace={true} />;
};
