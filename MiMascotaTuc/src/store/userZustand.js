import { create } from 'zustand'

export const useLogin = create((set) => ({
  isLogged: false,
  login: () => set({ isLogged: true }),
  logout: () => set({ isLogged: false }),
  user:[],
  setUser:(usuario)=>set({user:usuario})
}))