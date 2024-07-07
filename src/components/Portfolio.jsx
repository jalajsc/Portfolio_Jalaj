import React from "react";
import project1 from "../assets/Portfolio_Images/Plant_disease_detection.png";
import project2 from "../assets/Portfolio_Images/Rubik's_cube_colver.png";
import project3 from "../assets/Portfolio_Images/speech_to_sign.png";
import project4 from "../assets/Portfolio_Images/Quiz_App_React.jpeg";
import project5 from "../assets/Portfolio_Images/Todos_React.jpeg";

const projects = [
  {
    id: 1,
    src: project1,
    repo: "https://github.com/jalajsc/Plant-Leaf-Disease-Detection-Project",
    link: "#",
  },
  {
    id: 2,
    src: project2,
    repo: "https://github.com/jalajsc/Rubik-s-Cube-Solver-",
    link: "#",
  },
  {
    id: 3,
    src: project3,
    repo: "https://github.com/jalajsc/Audio-to-SignLanguage-Converter",
    link: "#",
  },
  {
    id: 4,
    src: project4,
    repo: "https://github.com/jalajsc/SpriteEra_QuizApp",
    link: "https://spritequizapp.netlify.app/",
  },
  {
    id: 5,
    src: project5,
    repo: "https://github.com/jalajsc/Todos-List",
    link: "#",
  },
];

function Portfolio() {
  return (
    <div className="portfolio w-full flex items-center justify-center bg-gradient-to-b from-black via-slate-900 to-slate-700 text-white">
      <div className="max-w-screen-lg w-full h-full px-4 flex flex-col justify-center mt-20">
        <h1 className="text-5xl underline">Portfolio</h1>
        <h3>Check out some of my work.</h3>
        <div className="flex "></div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mt-10">
          {projects.map(({ id, src, repo, link }) => (
            <div key={id} className=" shadow-xl shadow-black rounded-lg">
              <img
                src={src}
                alt="project"
                className="hover:scale-[110%] duration-300 rounded-t-lg"
              />
              <div className="h-20 flex justify-center items-center">
                <a
                  href={link}
                  target="_blank"
                  className="w-1/2 justify-center flex"
                >
                  Link
                </a>
                <a
                  href={repo}
                  target="_blank"
                  className="w-1/2 justify-center flex"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
