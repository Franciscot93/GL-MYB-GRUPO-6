import logo from "../img/LogoFooter.png"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"
import meta from "../img/meta.png"

function Footer() {
  return (
    // Contenedor principal del pie de pagina
    <div className="gap-1 justify-between relative items-center py-2 mt-10 bg-indigo-950 flex  ">
        {/* Seccion del logotipo */}
        <section className="text-slate-100 flex-1  text-sm mx-3 rounded-md ">
          {/*Div de relleno */}
          <div></div>
          {/*Logo del pie de pagina */}
          <img src={logo} alt="" />
          </section>

        {/*Seccion de texto */}
        <section className="text-slate-100 flex-1 content-center place-content-center place-items-center  justify-center text-center text-sm mx-3 rounded-md">
          {/*Contenido de texto*/}
          © 2023 MascotasApp. Todos los derechos reservados.
</section>
        {/* Seccion de redes sociales con logos*/}
        <section className="   text-slate-100 flex-1 text-sm mx-3 justify-center text-center rounded-md ">
          {/*Seccion de redes Sociales*/}
          <img className="bg-[url('../img/twitter.png')] w-24 h-24" src={twitter} alt=""/>
          <img className="bg-[url('../img/facebook.png')] w-24 h-24" src={facebook} alt=""/>
          <img className="bg-[url('../img/meta.png')] w-24 h-24" src={meta} alt=""/>
          {/*Contenido de redes sociales */}
          </section>
    </div>
  )
}

export default Footer