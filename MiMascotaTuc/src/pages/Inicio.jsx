import React from 'react'
import MensajeBienvenida from '../components/MensajeBienvenida'
import OpcionesBienvenida from '../components/OpcionesBienvenida'
import { useLoaderData } from 'react-router-dom'




function Inicio() {

  const usuarios=useLoaderData()
  return (
    <>
    <MensajeBienvenida/>
    <OpcionesBienvenida/>
    
    </>
  )
}

export default Inicio