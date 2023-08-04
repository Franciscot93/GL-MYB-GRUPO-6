

export async function obtenerUsuarios() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();

  return resultado;
}

export async function obtenerDatosUsuario(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();

  return resultado;
}

export async function agregarUsuario(datos) {
  const nuevoUsuario=datos

  nuevoUsuario.mascotas=[]
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(nuevoUsuario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch {
    console.log(error);
  }
}

export async function editarUsuario(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    await respuesta.json();
  } catch {
    console.log(error);
  }
}

export const generarId = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return date + random;
};

//MASCOTAS

export const guardarMascotas = async (usuarioId, datosMascota,setUser) => {
  const mascotaNueva = {
    id: generarId(),
    ...datosMascota,
  };

  try {
    const usuarioResponse = await fetch(
      `${import.meta.env.VITE_API_URL}/${usuarioId}`
    );
    const usuario = await usuarioResponse.json();

    // Crear una copia superficial del objeto usuario sin los datos circulares
    const usuarioSinReferenciasCirculares = {
      id: usuario.id,
      username: usuario.username,
      telefono: usuario.telefono,
      email: usuario.email,
      password: usuario.password,
      Imagen: usuario.Imagen,
      mascotas: [...usuario.mascotas],
    };

    const usuarioActualizado = {
      ...usuarioSinReferenciasCirculares,
      mascotas: [...usuarioSinReferenciasCirculares.mascotas, mascotaNueva],
    };

    const respuesta = await fetch(
      `${import.meta.env.VITE_API_URL}/${usuarioId}`,
      {
        method: "PUT",
        body: JSON.stringify(usuarioActualizado),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!respuesta.ok) {
      console.log("Error al guardar mascota:", respuesta.status);
    }
    setUser(usuarioActualizado)
  } catch (error) {
    console.log("Error en la comunicación con el servidor:", error);
  }
}




export const eliminarMascotas = async (userData, idMascota,setUser, eliminarMascota) => {
  
  const usuarioResponse = await fetch(`${import.meta.env.VITE_API_URL}/${userData.id}`);
  const usuario = await usuarioResponse.json();

  const mascotasRestantes = usuario.mascotas.filter(
    (mascota) => mascota.id !== idMascota
  );

  const usuarioActualizado = {
    ...usuario,
    mascotas: mascotasRestantes,
  };

  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_API_URL}/${userData.id}`,
      {
        method: "PUT",
        body: JSON.stringify(usuarioActualizado),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!respuesta.ok) {
      console.log("Error al eliminar mascota:", respuesta.status);
      return;
    }

    setUser(usuarioActualizado);
  } catch (error) {
    console.log("Error en la comunicación con el servidor:", error);
  }
};

// POR HACER
export const editarMascotas = async (userData, idMascota) => {
  const mascotaEliminada = userData.mascotas.filter(
    (mascota) => mascota.id !== idMascota
  );
  const usuario = {
    id: userData.id,
    username: userData.username,
    telefono: userData.telefono,
    email: userData.email,
    password: userData.password,
    Imagen: "",
    mascotas: mascotaEliminada,
  };

  console.log(usuario);
  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_API_URL}/${usuario.id}`,
      {
        method: "PUT",
        body: JSON.stringify(usuario),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await respuesta.json();
  } catch {
    console.log(error);
  }
};
