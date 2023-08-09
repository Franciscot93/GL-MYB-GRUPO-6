function LoginForm() {
  return (
    <div>
        {/* Titulo del formulario*/}
        <h2 className="text-4xl logoTitle  text-[#066aff] my-3 text-center">Ingresa Tus DaTos</h2>
        {/* Campo de entrada de correo electronico*/}
        <div className=" mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="email">E-mail:</label>

                <input 
                    id="email"
                    type="text"
                    className="mt-2 border-2 border-[#c8c8c8] block w-full p-3 bg-gray-50"
                    placeholder="Ingese Su email@example.com"
                    name="email"
                    defaultValue={null}
                />
            </div>

            {/*Campo de entrada de contraña */}
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