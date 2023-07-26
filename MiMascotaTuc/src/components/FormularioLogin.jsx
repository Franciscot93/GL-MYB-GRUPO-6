function FormularioLogin() {
  return (
    <div>
        <h2 className="text-3xl font-bold text-indigo-900 my-3 text-center">Ingresa tus datos</h2>
        <div className=" mb-4 mx-3">
                <label
                    className="text-indigo-900 font-semibold text-xl"
                    htmlFor="nombreUsuario"
                >Nombre:</label>
                <input 
                    id="nombreUsuario"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del usuario"
                    name="nombreUsuario"
                    defaultValue={null}
                />
            </div>
            <div className="mb-4 mx-3">
                <label
                    className="text-indigo-900 font-semibold text-xl"
                    htmlFor="password"
                >Contraseña:</label>
                <input 
                    id="password"
                    type="password"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Contraseña del usuario"
                    name="password"
                    defaultValue={null}
                />
            </div>
        
    </div>
  )
}

export default FormularioLogin