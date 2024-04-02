import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import resume from "../assets/Jalaj Resume (revised).pdf";
function SidebarLinks() {
  const list = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/jalaj-singh-a19099221/",
      style: "rounded-t-lg",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={40} />
        </>
      ),
      href: "https://github.com/jalajsc",
    },
    {
      id: 3,
      child: (
        <>
          Email <MdOutlineEmail size={40} />
        </>
      ),
      href: "mailto:jalajsc@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <ImProfile size={40} />
        </>
      ),
      href: resume,
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Twitter(X)
          <BsTwitterX size={40} />
        </>
      ),
      href: "https://twitter.com/JALAJsc",
      style: "rounded-b-lg",
    },
  ];

  const displayList = () => {
    return list.map(({ id, child, href, download, style }) => (
      <li
        key={id}
        className={
          "w-[170px] h-18 p-2 flex items-center ml-[-120px] hover:ml-[-10px] hover:rounded-lg duration-300 bg-gray-400 " +
          " " +
          style +
          ""
        }
      >
        <a
          href={href}
          className="w-full flex justify-between text-black text-[26px]"
          download={download}
          target="_blank"
          rel="noreferrer"
        >
          {child}
        </a>
      </li>
    ));
  };

  return (
    <div className="hidden sm:flex flex-col fixed top-[30%] left-0">
      <ul>{displayList()}</ul>
    </div>
  );
}

export default SidebarLinks;
