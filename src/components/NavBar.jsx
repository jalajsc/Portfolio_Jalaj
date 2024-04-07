import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import resume from "../assets/Jalaj Resume (revised).pdf";

function NavBar() {
  const SocialMediaLink = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jalaj-singh-a19099221/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jalajsc",
    },
    {
      id: 3,
      child: (
        <>
          <MdOutlineEmail size={30} />
        </>
      ),
      href: "mailto:jalajsc@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <BsTwitterX size={30} />
        </>
      ),
      href: "https://twitter.com/JALAJsc",
    },
  ];

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
        <div className="flex flex-col fixed w-full h-full text-white md:hidden right-0 bg-gradient-to-b from-slate-900 to-slate-700">
          <div className="flex fixed right-7 top-4" onClick={openSide}>
            <MdClose size={50} />
          </div>
          <ul className="flex flex-col items-center justify-between m-auto mt-24 gap-10 text-xl">
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
          <ul className="flex mx-auto mb-20 gap-4">
            {SocialMediaLink.map(({ id, child, href, download }) => (
              <li
                key={id}
                className="text-white border-2 bg-slate-700 border-gray-600 rounded-full shadow-lg shadow-black p-3"
              >
                <a
                  href={href}
                  className="w-full flex justify-between text-white text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
