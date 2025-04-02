import React from "react";
import Card from "./ui/Card";
import image from "../assets/E-Shop.png";
import image2 from "../assets/flashcard.png";
import ReusableCodeSection from "./reusableCodeSection";
import image1 from "../assets/hrms.png";
import image3 from "../assets/khambee.png";
import image4 from "../assets/tpp.png";

function Portfolio() {
  const recentProject = [
    {
      img: image1,
      title: "HRMS",
      desc: "A HRMS app where user can add employees and manage them.",
      link: `https://hrms.leanplatformtechnologies.com/`,
      tools: [
        { id: 1, name: "React" },
        { id: 2, name: "Redux" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "schadcn-ui" },
        { id: 5, name: "React-Router" },
      ],
    },
    {
      img: image3,
      title: "Khambee",
      desc: "A website builder app and course selling app.",
      link: `https://khambee.com/`,
      tools: [
        { id: 1, name: "React" },
        { id: 2, name: "Redux" },
        { id: 3, name: "Tailwind" },
        { id: 5, name: "React-Router" },
        { id: 6, name: "material-ui" },
      ],
    },
    {
      img: image4,
      title: "TPP",
      desc: "Education app for produc management.",
      link: `https://theproductplatform.in/`,
      tools: [
        { id: 1, name: "React" },
        { id: 2, name: "Redux" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "firebase" },
        { id: 5, name: "React-Router" },
      ],
    },
  ];

  return (
    <div className="w-5/6 md:4/5 m-auto md:pt-10 md:pl-8 md:pb-8 pt-8">
      <h3 className="text-lg font-bold text-blue-600/100">Portfolio</h3>
      <h4 className=" text-xl font-extrabold text-slate-800 md:mb-6 mb-10">
        Each project is a unique piece of development
      </h4>
      {recentProject.map((project, index) => (
        <Card key={index} revarse={index % 2 === 0}>
          <div className="w-full   h-80   md:h-72 md:w-[55%] relative overflow-hidden rounded-md shadow-md self-center shadow-gray-300 ">
            <a href={project.link} target="blank">
              <img
                className="w-full  h-[25rem] object-cover absolute top-0 left-0 transition-all duration-[3s] hover:translate-y-[-20%] md:hover:translate-y-[-30%]  "
                src={project.img}
              />
            </a>
          </div>
          <div className="self-center w-[90%]  text-center md:w-[45%]">
            <h4 className="font-bold text-lg pb-3  md:pb-6">{project.name}</h4>
            <p className=" font-normal text-gray-600">{project.desc}</p>
            <div className="pt-6 flex flex-wrap gap-3 justify-center font-semibold">
              {project.tools.map((tool) => (
                <span
                  key={tool.id}
                  className="inline-block px-2 py-1 shadow-md shadow-gray-400 self-center "
                >
                  {tool.name}
                </span>
              ))}
            </div>
            <ReusableCodeSection demoLInk={project.link} />
          </div>
        </Card>
      ))}

      <Card revarse={true}>
        <div className="w-full  h-80   md:h-72 md:w-[55%] relative overflow-hidden rounded-md shadow-md self-center shadow-gray-300 ">
          <a
            href="https://bespoke-florentine-38215f.netlify.app/"
            target="blank"
          >
            <img
              className="w-full  h-[25rem] object-fit absolute top-0 left-0 transition-all duration-[3s] hover:translate-y-[-20%] md:hover:translate-y-[-30%]  "
              src={image2}
            />
          </a>
        </div>
        <div className="self-center w-[90%]  text-center md:w-[45%]">
          <h4 className="font-bold text-lg pb-3  md:pb-6">Flashcard App</h4>
          <p className=" font-normal text-gray-600">
            A Flashcard app where user can create groups and cards .
          </p>
          <div className="pt-6 flex flex-wrap gap-3 justify-center font-semibold">
            <span className="inline-block px-2 py-1 shadow-md shadow-gray-400 self-center ">
              React
            </span>
            <span className="inline-block px-2 py-1 shadow-md shadow-gray-400 self-center ">
              Redux
            </span>
            <span className="inline-block px-2 py-1 shadow-md shadow-gray-400 self-center ">
              React-Router
            </span>
          </div>
          <ReusableCodeSection
            demoLInk={`https://bespoke-florentine-38215f.netlify.app/`}
            codeLink={`https://github.com/Amitava-Roy/flashcard`}
          />
        </div>
      </Card>
    </div>
  );
}

export default Portfolio;
