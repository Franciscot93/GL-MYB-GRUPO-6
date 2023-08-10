import React from "react";
import { Link } from "react-router-dom";
import Veterinarylookout from "../components/Veterinarylookout";
import { useState } from "react";

function Root() {
  const [url, setUrl] = useState();

  const handleButtonClick = async (url) => {
    setUrl(url);
  };

  return (
    <div>
      <div className="flex  relative justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-sky-900 px-3 font-bold uppercase py-1 rounded-md text-slate-50 hover:bg-indigo-600 duration-200"
        >
          VOLVER
        </button>
      </div>
      <main className="flex">
        <section className="shadow-md w-full relative flex flex-wrap m-10  py-1">
          <div className=" w-full gap-5 md:w-1/2 flex flex-wrap flex-col justify-center place-content-center content-center">
            <div className="flex  justify-center w-full">
              <Link
                onClick={() =>
                  handleButtonClick("https://goo.gl/maps/jPjKWrLYbgspakMu6")
                }
                className=" px-6 py-2 logoTitle text-3xl bg-teal-500 hover:bg-teal-600 text-white rounded-md transition duration-300 ease-in-out shadow-md"
              >
                Veterinarias YB
              </Link>
            </div>

            <div className="flex  justify-center w-full">
              <Link
                onClick={() =>
                  handleButtonClick(
                    "https://www.google.com/maps/search/veterinarias+san+miguel+de+tucuman/@-26.8171,-65.2072765,13z?entry=ttu"
                  )
                }
                className=" px-6 py-2 logoTitle text-3xl bg-orange-500 hover:bg-orange-600 text-white rounded-md transition duration-300 ease-in-out shadow-md"
              >
                Veterinarias SM
              </Link>
            </div>
          </div>
          <aside className="flex  justify-center flex-wrap w-full box-border md:w-1/2 lg:w-1/2 mt-5">
            <div className="h-fit">
              <h2 className="text-4xl relative text-[#066aff] p-1 text-center w-full logoTitle">
                Veterinarias cercanas
              </h2>
            </div>
            <div className="flex w-full p-5 flex-wrap">
              <Veterinarylookout url={url} />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default Root;
