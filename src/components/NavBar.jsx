import logo from '../img/logo.png'
function NavBar() {
  return (
    <section>
  
    <div className=" w-full  flex bg-slate-700 flex-wrap p-5 flex-row justify-between">
    
    <div className='p-8 absolute top-0 left-0   bg-slate-700 rounded-full'><a className="flex  title-font font-medium items-center text-gray-900 mb-4"><img className='hover:animate-spin' src={logo} />
    </a>
    </div>
 
  <div className='items-center ml-36 justify-center'><h2 className='text-4xl logoTitle text-slate-100'>Mi Mascota Tuc</h2></div>
     <div className=" ml-36 flex flex-wrap items-center text-base justify-center">
       <a href='#' className="mr-5">Inicio</a>
       <a href='#'  className="mr-5">Third Link</a>
       <a href='#'  className="mr-5">Fourth Link</a>
     </div>
     <button className="inline-flex items-center ml-36 bg-yellow-500 border-0 py-1 px-3 mt-4">Click Me</button>
</div>
</section>
  )
}

export default NavBar