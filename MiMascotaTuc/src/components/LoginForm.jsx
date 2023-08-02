function LoginForm() {
  return (
    <div>
        <h2 className="text-4xl logoTitle text-indigo-900 my-3 text-center">Ingresa Tu DaTos</h2>
        <div className=" mb-4 mx-3">
                <label
                    className="text-indigo-900 font-semibold text-xl"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    
                    id="email"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del usuario"
                    name="email"
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

export default LoginForm