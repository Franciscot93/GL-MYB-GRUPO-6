import {create } from 'zustand'



export const useLoginZustand = create((set, _get) => ({
    isLoged:[],
    setIsLoged: (usuario) => {
      
        
      set({isLoged: usuario})
    },
  }));