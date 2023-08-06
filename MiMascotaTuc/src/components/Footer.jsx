import logo from "../img/logoFooter.png"

function Footer() {
  return (
    <div className="gap-1 justify-between relative items-center py-2 mt-10 bg-[#0e265d] flex  ">
        <section className="text-slate-100 flex-1  text-sm mx-3 rounded-md "><div></div><img src={logo} alt="" /></section>
        <section className="text-slate-100 flex-1 content-center place-content-center place-items-center  justify-center text-center text-sm mx-3 rounded-md">texto</section>
        <section className="text-slate-100 flex-1 text-sm mx-3 justify-center text-center rounded-md ">REDES</section>
    </div>
  )
}

export default Footer