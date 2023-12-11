import React from "react";
import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className="container mx-auto flex flex-col items-center px-5 py-5
    lg:flex-row"
    >
      <div className="lg:w-1/2">
        <h1
          className="font-roboto text-3xl text-center font-bold text-secondary 
        md:text-5xl lg:text-left lg:max-w-[540px] lg:text-4xl xl:text-5xl"
        >
          Read the most interesting articles
        </h1>
        <p
          className="text-thirdary mt-4 text-center
         md:text-xl lg:text-left lg:text-base xl:text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div
          className="flex flex-col gap-y-2.5 mt-10 relative
        lg:mt-6 xl:mt-10"
        >
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              className="placeholder:font-bold font-semibold text-secondary placeholder:text-[#959EAD]
               rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]
               md:py-4"
              placeholder="Search article"
            />
          </div>
          <button
            className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 hover:opacity-80
          md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
          >
            Search
          </button>
        </div>
        <div
          className="flex mt-4 flex-col 
         lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 lg:items-start"
        >
          <span
            className="text-dark-light font-semibold italic whitespace-nowrap
          lg:mt-4 lg:text-sm xl:text-base"
          >
            Popular Tags :
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 hidden lg:block">
        <img
          src={images.hero}
          alt={images.hero}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
