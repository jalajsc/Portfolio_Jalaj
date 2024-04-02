import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="home h-screen w-full bg-gradient-to-b from-black via-slate-900 to-gray-700 text-white"
    >
      <div className="max-w-screen-lg h-full flex md:flex-row flex-col items-center justify-center mx-auto">
        <div className="flex w-1/3 lg:hidden">
          <BsPersonFill size={300} />
        </div>
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and desgining
            software. I love to work on web application using technologies like
            React, Tailwind, Next JS and Express.
          </p>
          <Link
            smooth
            duration={1000}
            to="portfolio"
            className="cursor-pointer group flex items-center w-[140px] justify-between bg-blue-500 text-xl rounded-md p-2"
          >
            Portfolio{" "}
            <IoMdArrowDropright
              size={30}
              className="group-hover:rotate-90 duration-300"
            />
          </Link>
        </div>
        <div className="lg:w-full w-2/3 mx-auto lg:flex hidden">
          <BsPersonFill size={600} />
        </div>
      </div>
    </div>
  );
}

export default Home;
