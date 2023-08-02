import logo from "../img/Logo2.png";
function NavBar() {
  return (
    <section className="border-opacity-25">
      <div className=" w-full  flex bg-slate-700  flex-wrap  flex-row justify-between">
        <div className="  bg-slate-700 relative  box-border">
          <a className="flex  bg-opacity-90 title-font items-center text-gray-900 mb-2">
            <img
              className=" delay-150 hover:cursor-pointer hover:animate-bounce h-3/5  duration-500"
              src={logo}
            />
          </a>
        </div>

        <div className=" flex flex-wrap  m-auto items-center text-base justify-center">
          <a className="mr-5">First Link</a>
          <a className="mr-5">Second Link</a>
          <a className="mr-5">Third Link</a>
          <a className="mr-5">Fourth Link</a>
        </div>
        <div className="justify-center flex m-auto flex-wrap items-center content-center">
          <button className="inline-flex items-center  bg-yellow-500 border-0 py-1 px-3 mt-4">
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
