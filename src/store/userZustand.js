import { create } from 'zustand'


// Crea un store de Zustand para administrar el estado relacionado con el inicio de sesion de usuarios.

export const useLogin = create((set) => ({
  // Estado inicial del store.
  isLogged: false,
  // Funcion para realizar el inicio de sesion y cambiar el estado "isLogged" a 'true'.
  login: () => set({ isLogged: true }),
  // funciion para cerrar sesion y cambiar el estado 'isLogged' a 'false'
  logout: () => (function cerrarSesion(){
    localStorage.removeItem("email")
    set({ isLogged: false })
  }),


  
  user:{
    id: '',
    username: '',
    telefono: '',
    email: '',
    password: '',
    Imagen: '',
    mascotas: [],
  },

  setUser:(usuario)=>set({user:usuario}),

  pet:{},
  setPet:(mascota)=>set({pet:mascota}),


  eliminarMascota: (mascotaId) =>
    set((state) => ({
      user: {
        ...state.user,
        mascotas: state.user.mascotas.filter((mascota) => mascota.id !== mascotaId),
      },
    }))
  

  
}))