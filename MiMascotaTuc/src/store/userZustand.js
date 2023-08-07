import { create } from 'zustand'



export const useLogin = create((set) => ({
  // Estado inicial del store.
  isLogged: false,
  // Funcion para realizar el inicio de sesion y cambiar el estado "isLogged" a 'true'.
  login: () => set({ isLogged: true }),
  // funciion para cerrar sesion y cambiar el estado 'isLogged' a 'false'
  logout: () => set({ isLogged: false }),

  
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
  setPet:(mascotaId,user)=>((user.mascotas).find(mascota=>mascota.id===mascotaId)),

  eliminarMascota: (mascotaId) =>
    set((state) => ({
      user: {
        ...state.user,
        mascotas: state.user.mascotas.filter((mascota) => mascota.id !== mascotaId),
      },
    }))
  

  
}))