import logo from '../img/logo.png'
function NavBar() {
  return (
    <section>
  
    <div class=" w-full  flex bg-slate-700 flex-wrap p-5 flex-row justify-between">
    
    <div className='p-8 absolute top-0 left-0   bg-slate-700 rounded-full'><a class="flex  title-font font-medium items-center text-gray-900 mb-4"><img className='hover:animate-spin' src={logo} />
    </a>
    </div>
 
  <div className='items-center ml-36 justify-center'><h2 className='text-4xl logoTitle text-slate-100'>Mi Mascota Tuc</h2></div>
     <div class=" ml-36 flex flex-wrap items-center text-base justify-center">
       <a class="mr-5">First Link</a>
       <a class="mr-5">Second Link</a>
       <a class="mr-5">Third Link</a>
       <a class="mr-5">Fourth Link</a>
     </div>
     <button class="inline-flex items-center ml-36 bg-yellow-500 border-0 py-1 px-3 mt-4">Click Me</button>
</div>
</section>
  )
}

export default NavBar