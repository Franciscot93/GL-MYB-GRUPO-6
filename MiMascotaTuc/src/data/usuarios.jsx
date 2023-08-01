export async function obtenerUsuarios(){
    
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

    
    return resultado
   
}



export async function obtenerDatosUsuario(id){
    const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado= await respuesta.json()
   
    return resultado
}

export async function agregarUsuario(datos){
 try{
    const respuesta= await fetch(import.meta.env.VITE_API_URL,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    })
    await respuesta.json()
 }catch{console.log(error)}}

 export async function editarUsuario(id,datos){
    try{
       const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
           method: 'POST',
           body: JSON.stringify(datos),
           headers:{
               'Content-Type':'application/json'
           }
       })
       await respuesta.json()
    }catch{console.log(error)}}



    export async function eliminarCliente(id){
        try{
           const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
               method: 'DELETE'
               
           })
           await respuesta.json()
        }catch{console.log(error)}}



//MASCOTAS



 export const guardarMascotas = async(userData,agregarMascota) => {
    const usuario={
        id: userData.id,
      username: userData.username,
      telefono: userData.telefono,
      email: userData.email,
      password: userData.password,
      Imagen: "",
      mascotas: [...userData.mascotas,agregarMascota],
    }
    console.log(usuario)
   try{const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${usuario.id}`, {
      method: "PUT",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
     
    });
    await respuesta.json()
  }catch{console.log(error)}}

 
  export const agregarMascota = (datosMascota) => {
    
    if(datosMascota){

     const mascotaGuardada= datosMascota
    }
    
    
    

    return datosMascota}

    export const generarId = () => {
        const date = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
    
        return date + random;
      }