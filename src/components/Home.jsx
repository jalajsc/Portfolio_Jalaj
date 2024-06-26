import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-scroll";
import { FaFileDownload } from "react-icons/fa";
import image from "../assets/Jalaj.png";

function Home() {
  return (
    <div
      name="home"
      className="home h-screen w-full bg-gradient-to-b from-black via-slate-900 to-gray-700 text-white"
    >
      <div className="max-w-screen-lg h-full flex md:flex-row flex-col items-center justify-center mx-auto p-4">
        <div className="flex lg:hidden w-1/2">
          <img src={image} alt="Profile Picture of Jalaj Singh" className="" />
          {/* <BsPersonFill size={300} /> */}
        </div>
        <div className=" flex flex-col justify-center ">
          <h2 className="text-4xl md:text-6xl  lg:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and desgining
            software. I love to work on web application using technologies like
            React, Tailwind, Next JS and Express.
          </p>
          <div className="flex sm:flex-col justify-between">
            <Link
              smooth
              duration={1000}
              to="portfolio"
              className="cursor-pointer group flex items-center w-[140px] justify-between bg-blue-700 text-xl rounded-md mt-4 p-2 hover:scale-105 duration-300"
            >
              Portfolio{" "}
              <IoMdArrowDropright
                size={30}
                className="group-hover:rotate-90 duration-300"
              />
            </Link>
            <a
              href="../assets/Jalaj Resume (revised).pdf"
              className="group flex justify-between text-white text-xl bg-green-700 w-[140px] p-2 rounded-lg mt-4 hover:scale-105 duration-300"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              Resume{" "}
              <FaFileDownload
                size={30}
                className="group-hover:scale-75 duration-300"
              />
            </a>
          </div>
        </div>
        <div className="lg:w-full w-2/3 mx-auto lg:flex hidden">
          <img
            src={image}
            alt="Profile Picture of Jalaj Singh"
            className="w-[400px]"
          />
          {/* <BsPersonFill size={600} /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
