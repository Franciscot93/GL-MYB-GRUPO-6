import imgAbout from "../img/fondo.jpeg";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center space-x-0">
      <div className="flex flex-1 flex-wrap">
        <img
          className=""
          src={imgAbout}
        />
      </div>
      <div className="flex flex-1 flex-wrap justify-center">
        <h1 className="text-2xl text-center inline-block	 text-[#066aff]font-semibold">
          Quienes somos
        </h1>
        <div>
          <p>
          lorem ipsumsans, consectetur adipiscing elit loremlorem ipsumsans,
          consectetur adipiscing elit loremlorem ipsumsans, consectetur
          adipiscing elit loremlorem ipsumsans, consectetur adipiscing elit
          loremlorem ipsumsans, consectetur adipiscing elit loremlorem
          ipsumsans, consectetur adipiscing elit loremlorem ipsumsans,
          consectetur adipiscing elit loremlorem ipsumsans, consectetur
          adipiscing elit loremlorem ipsumsans, consectetur adipiscing elit
          loremlorem ipsumsans, consectetur adipiscing elit loremlorem
          ipsumsans, consectetur adipiscing elit loremlorem ipsumsans,
          consectetur adipiscing elit loremlorem ipsumsans, consectetur
          adipiscing elit loremlorem ipsumsans, consectetur adipiscing elit
          loremlorem ipsumsans, consectetur adipiscing elit loremlorem
          ipsumsans, consectetur adipiscing elit loremlorem ipsumsans,
          consectetur adipiscing elit loremlorem ipsumsans, consectetur
          adipiscing elit loremlorem ipsumsans, consectetur adipiscing elit
          loremlorem ipsumsans, consectetur adipiscing elit loremlorem
          ipsumsans, consectetur adipiscing elit loremlorem ipsumsans,
          consectetur adipiscing elit loremlorem ipsumsans, consectetur
          adipiscing elit lorem
          </p>
        </div>
      </div>
    </div>
  );
}
