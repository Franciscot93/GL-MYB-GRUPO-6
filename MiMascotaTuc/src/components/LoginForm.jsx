function LoginForm() {
  return (
    <div>
        <h2 className="text-4xl logoTitle text-[#066aff] my-3 text-center">Ingresa Tu DaTos</h2>
        <div className=" mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    
                    id="email"
                    type="text"
                    className="mt-2 border-2 border-[#c8c8c8] block w-full p-3 bg-gray-50"
                    placeholder="E-mail del usuario"
                    name="email"
                    defaultValue={null}
                />
            </div>
            <div className="mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="password"
                >Contraseña:</label>
                <input 
                    
                    id="password"
                    type="password"
                    className="mt-2 block w-full border-2 border-[#c8c8c8] p-3 bg-gray-50"
                    placeholder="Contraseña del usuario"
                    name="password"
                    defaultValue={null}
                />
            </div>
        
    </div>
  )
}

export default LoginForm