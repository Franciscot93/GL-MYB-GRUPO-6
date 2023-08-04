export async function obtenerUsuarios(){
    
  // Esta funcion asincronica obtiene una lista de usuarios desde la API.
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado
}

// Esta funcion asincronica obitene los datos de un usuario especifico basado en su ID.
export async function obtenerDatosUsuario(id){
    const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado= await respuesta.json()
    return resultado
}

// Esta funcion asincronica agrega un nuevo usuario a la API.
export async function agregarUsuario(datos){
 try {
    const respuesta= await fetch(import.meta.env.VITE_API_URL,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    })
    await respuesta.json()
 } catch (error) {console.log(error)}}
// Esta funcion asincronica edita los datos de un usuario existente en la API.
 export async function editarUsuario(id,datos){
    try {
       const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
           method: 'POST',
           body: JSON.stringify(datos),
           headers:{
               'Content-Type':'application/json'
           }
       })
       await respuesta.json()
    }catch (error) {console.log(error)}}


     // Esta funcion asincronica elimina un usuario de la API segun su ID.
    export async function eliminarCliente(id){
        try {
           const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
               method: 'DELETE'
           })
           await respuesta.json()
        }catch (error) {console.log(error)}}



//MASCOTAS


// Esta funcion guada una mascota para un usuario existente en la API.
 export const guardarMascotas = async(userData,agregarMascota) => {
    // Crea un nuevo objeto de usuario con la mascota agregada.
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

   try {
    // Realiza una solicitud PUT para actualizar los datos del usuario con la nueva mascota.
    const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${usuario.id}`, {
      method: "PUT",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
     
    });
    await respuesta.json()
  }catch (error) {console.log(error)}
}

 // Funcion que genera un ID unico combinando la fecha actual y un valor aleatorio.
    export const generarId = () => {
        const date = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
    
        return date + random;
      }

      // Esta funcion elimina una mascota especifica de las mascotas de un usuario en la API.
      export const eliminarMascotas = async(userData,idMascota) => {
        const mascotaEliminada=userData.mascotas.filter(mascota=> mascota.id!==idMascota)
        const usuario={
            id: userData.id,
          username: userData.username,
          telefono: userData.telefono,
          email: userData.email,
          password: userData.password,
          Imagen: "",
          mascotas: mascotaEliminada,
        }
        console.log(usuario)

       try {
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${usuario.id}`, {
          method: "PUT",
          body: JSON.stringify(usuario),
          headers: {
            "Content-Type": "application/json",
          }
        });
        await respuesta.json()
      }catch (error) {console.log(error);
      }
    }
     // Esta funcion edita los datos de una mascota especifica de las mascotas de un usuario en la API.
      export const editarMascotas = async (userData,idMascota) => {
        const mascotaEliminada=userData.mascotas.filter(mascota=> mascota.id!==idMascota)
        const usuario={
            id: userData.id,
          username: userData.username,
          telefono: userData.telefono,
          email: userData.email,
          password: userData.password,
          Imagen: "",
          mascotas: mascotaEliminada,
        }
          console.log(usuario)
       try {
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${usuario.id}`, {
          method: "PUT",
          body: JSON.stringify(usuario),
          headers: {
            "Content-Type": "application/json",
          }
         
        });
        await respuesta.json()
      }catch (error) {console.log(error)}}
    