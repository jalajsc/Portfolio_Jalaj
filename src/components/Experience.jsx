import React from "react";
import Cpp from "../assets/logos/cpp.png";
import Python from "../assets/logos/python.png";
import Javascript from "../assets/logos/javascript.png";
import Reactjs from "../assets/logos/react.png";
import Nodejs from "../assets/logos/nodejs.png";
import Github from "../assets/logos/github.png";
import Tailwind from "../assets/logos/tailwind.png";
import Express from "../assets/logos/express.png";
import MongoDB from "../assets/logos/mongodb.png";
import Redux from "../assets/logos/redux.png";

function Experience() {
  const technology_list = [
    {
      id: 1,
      name: "C++",
      src: Cpp,
      style: "shadow-blue-600",
    },
    {
      id: 2,
      name: "Python",
      src: Python,
      style: "shadow-lime-600",
    },
    {
      id: 3,
      name: "JavaScript",
      src: Javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      name: "ReactJs",
      src: Reactjs,
      style: "shadow-blue-500",
    },
    {
      id: 5,
      name: "NodeJs",
      src: Nodejs,
      style: "shadow-green-500",
    },
    {
      id: 6,
      name: "Github",
      src: Github,
      style: "shadow-gray-700",
    },
    {
      id: 7,
      name: "Tailwind",
      src: Tailwind,
      style: "shadow-blue-500",
    },
    {
      id: 8,
      name: "Express",
      src: Express,
      style: "shadow-zinc-500",
    },
    {
      id: 9,
      name: "MongoDB",
      src: MongoDB,
      style: "shadow-lime-700",
    },
    {
      id: 10,
      name: "Redux",
      src: Redux,
      style: "shadow-purple-700",
    },
  ];

  return (
    <div className="experience w-full bg-gradient-to-b from-slate-700 via-slate-900 to-black text-white flex justify-center">
      <div className="h-full w-full max-w-screen-lg flex flex-col mt-20 p-4">
        <h1 className="text-5xl underline">Experience</h1>
        <h3 className="text">Technologies that I worked with.</h3>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-10 gap-20">
          {technology_list.map(({ id, name, src, style }) => (
            <div
              key={id}
              className={
                "hover:scale-[110%] duration-300 shadow-xl" + " " + style
              }
            >
              <div className=" flex items-center justify-center ">
                <img src={src} alt="tech-image" className="w-36" />
              </div>
              <h1 className="flex items-center justify-center p-6">{name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
