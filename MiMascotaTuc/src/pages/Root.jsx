import React from 'react'
import WelcomeMessagge from '../components/WelcomeMessagge'
import WelcomeOptions from '../components/WelcomeOptions'
import { useLoaderData } from 'react-router-dom'




function Root() {

  const usuario=useLoaderData()
  return (
    <>
    <WelcomeMessagge/>
    <WelcomeOptions/>
    
    </>
  )
}

export default Root