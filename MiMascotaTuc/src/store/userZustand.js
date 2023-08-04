import { create } from 'zustand'

// Crea un store de Zustand para administrar el estado relacionado con el inicio de sesion de usuarios.
export const useLogin = create((set) => ({
  // Estado inicial del store.
  isLogged: false,
  // Funcion para realizar el inicio de sesion y cambiar el estado "isLogged" a 'true'.
  login: () => set({ isLogged: true }),
  // funciion para cerrar sesion y cambiar el estado 'isLogged' a 'false'
  logout: () => set({ isLogged: false }),
  // Almacena los datos del usuario.
  user:[],

  // Funcion para actualzar los datos del usuario en el estado del store.
  setUser:(usuario)=>set({user:usuario}),
  
}))