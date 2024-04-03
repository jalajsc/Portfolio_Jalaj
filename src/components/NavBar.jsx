import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";

function NavBar() {
  const [sidebar, setSideBar] = useState(false);
  const [nav, setNav] = useState(false);
  const openSide = () => {
    setSideBar(!sidebar);
  };
  return (
    <div className="flex h-20 w-full px-8 justify-between bg-black top-0 fixed">
      <div
        className="flex w-[20%] items-center font-thin text-white text-5xl"
        // style={{ fontFamily: "Great Vibes, cursive" }}
      >
        <a
          href="#"
          className="after:content-[''] after:block after:w-0 after:h-[1px] after:mt-2 after:bg-white after:duration-500 hover:after:w-[100%] duration-300"
          target="_blank"
          rel="noreferrer"
        >
          Jalaj
        </a>
      </div>
      <ul className="hidden md:flex w-[500px] justify-between items-center text-xl font-thin text-gray-300">
        <li className="">
          <Link
            smooth
            duration={1000}
            to="home"
            className=" hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[150%] duration-300 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth
            duration={1000}
            to="about"
            className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[160%] duration-300 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            smooth
            duration={1000}
            to="portfolio"
            className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[140%] duration-300 cursor-pointer"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            smooth
            duration={1000}
            to="experience"
            className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[130%] duration-300 cursor-pointer"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            smooth
            duration={1000}
            to="contact"
            className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[140%] duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="flex md:hidden text-white items-center"
        onClick={openSide}
      >
        <FaBars size={40} />
      </div>
      {sidebar && (
        <div className="flex fixed w-full h-full text-white md:hidden right-0 bg-gradient-to-b from-slate-900 to-slate-700">
          <div className="flex fixed right-7 top-4" onClick={openSide}>
            <MdClose size={50} />
          </div>
          <ul className="flex flex-col items-center justify-between m-auto gap-10 text-xl">
            <li>
              <Link
                onClick={() => setSideBar(!sidebar)}
                smooth
                duration={1000}
                to="home"
                className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[160%] duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSideBar(!sidebar)}
                smooth
                duration={1000}
                to="about"
                className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[160%] duration-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSideBar(!sidebar)}
                smooth
                duration={1000}
                to="portfolio"
                className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[160%] duration-300 cursor-pointer"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSideBar(!sidebar)}
                smooth
                duration={1000}
                to="experience"
                className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[160%] duration-300 cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSideBar(!sidebar)}
                smooth
                duration={1000}
                to="contact"
                className="hover:text-white hover:text-2xl after:content-[''] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-white after:duration-500 after:-translate-x-4 hover:after:w-[160%] duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
