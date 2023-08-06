import { Navigate } from 'react-router-dom'
import { useLogin } from '../store/userZustand'

export const ProtectedRoute = ({ children }) => {
  const { isLogged } = useLogin()
  return isLogged ? children : <Navigate to="/" replace={true} />
}