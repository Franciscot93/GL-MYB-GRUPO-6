import { Link } from "react-router-dom";
import { useEffect } from "react";
import {  useNavigate} from "react-router-dom";
function WelcomeOptions() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('email')){
    loginRedirect();}
  },[])

  const loginRedirect = () =>{
   return  navigate("/usuario/login")
  };
  return (
    <>
      <div className="text-center  mt-10 flex flex-col md:place-content-center place-content-center md:content-center flex-wrap md:flex-wrap content-center justify-center md:justify-center box-content">
        <Link to={`/usuario/login`} className=" mt-5 logoTitle md:w-1/3  w-1/3 mx-4 px-5 shadow-md bg-[#0841c5]  py-2 hover:bg-[#066aff]  duration-100 text-slate-50 rounded-sm text-2xl">
          IniCiar SesiOn
        </Link>
        <Link to={`/usuario/nuevo`} className="mt-5 logoTitle md:w-1/3 w-1/3 mx-4 px-5 shadow-md    bg-[#0841c5]  py-2 hover:bg-[#066aff] duration-100 text-slate-50 rounded-sm text-2xl">
          RegisTrate
        </Link>
      </div>
    </>
  );
}

export default WelcomeOptions;
