import { create } from 'zustand'

export const useLogin = create((set) => ({
  isLogged: false,
  login: () => set({ isLogged: true }),
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

  eliminarMascota: (mascotaId) =>
    set((state) => ({
      user: {
        ...state.user,
        mascotas: state.user.mascotas.filter((mascota) => mascota.id !== mascotaId),
      },
    }))
  

  
}))