
function RegisterForm({usuario}) {
  return (
    <div className="container">
    <div className=" mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="username"
                >Nombre:</label>
                <input 
                    id="username"
                    type="text"
                    className="mt-2 block w-full border-2 border-[#c8c8c8] p-3 bg-gray-50"
                    placeholder="Nombre del usuario"
                    name="username"
                    defaultValue={usuario?.nombreUsuario}
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
                    defaultValue={usuario?.password}
                />
            </div>
            <div className="mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="repetirPassword"
                >Repetir Contraseña:</label>
                <input 
                    id="repetirPassword"
                    type="password"
                    className="mt-2 block w-full p-3 border-2 border-[#c8c8c8] bg-gray-50"
                    placeholder="Repite la contraseña"
                    name="repetirPassword"
                    defaultValue={usuario?.password}
                />
            </div>

            <div className="mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 border-2 border-[#c8c8c8] bg-gray-50"
                    placeholder="Email del usuario"
                    name="email"
                    defaultValue={usuario?.email}
                />
            </div>

            <div className="mb-4 mx-3">
                <label
                    className="text-[#066aff] font-semibold text-xl"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full border-2 border-[#c8c8c8]   p-3 bg-gray-50"
                    placeholder="Teléfono del usuario"
                    name="telefono"
                    defaultValue={usuario?.telefono}
                />
            </div>

            
    </div>
  )
}

export default RegisterForm