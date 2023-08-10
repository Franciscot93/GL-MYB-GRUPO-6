import logo from "../img/LogoFooter.png"
// import twitter from "../img/tw.png"
// import facebook from "../img/fb.png"
// import instagram from "../img/ig.png"

function Footer() {
  return (

    // Contenedor principal del pie de pagina
      <div className="gap-1 justify-between flex-row relative flex-wrap items-center py-2 mt-10 bg-[#0e265d] flex  ">
        {/* Seccion del logotipo */}
        <section className="text-slate-100 w-1/3 flex-wrap m-auto flex-1  text-sm mx-3 rounded-md ">
         
          {/*Logo del pie de pagina */}
          <img  src={logo} alt="" />
          </section>

        {/*Seccion de texto */}
        <section className="text-slate-100 w-1/3 flex-1 flex-wrap m-auto content-center place-content-center place-items-center  justify-center text-center text-sm mx-3 rounded-md">
          {/*Contenido de texto*/}
          © 2023 MiMascotaTuc. Todos los derechos no reservados.
</section>
        {/* Seccion de redes sociales con logos */}
        <section className="   text-slate-100 w-1/3 flex flex-row m-auto flex-wrap gap-3 flex-1 text-sm mx-3 justify-end text-center rounded-md ">
          {/*Seccion de redes Sociales*/}


          <img className=" w-8 h-8" src={twitter} alt="twitter"/>
          <img className=" w-8 h-8" src={facebook} alt="facebook"/>
          <img className=" w-8 h-8" src={instagram} alt="instagram"/>


          {/*Contenido de redes sociales */}
          </section>

    </div>
  )
}

export default Footer