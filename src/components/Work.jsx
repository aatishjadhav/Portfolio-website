import React from "react";
import portfolio from "../assets/projects/portfolio.png";
import todo from "../assets/projects/todo.png";
import anvaya1 from "../assets/projects/mp2.png";
import buynest from "../assets/projects/mp1.png";
import workasana from "../assets/projects/tasklane.png";
import chat from "../assets/projects/chat.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: buynest,
      demoLink: "https://buynest-frontend-olive.vercel.app/",
      codeLink: "https://github.com/aatishjadhav/BuyNest",
    },
    {
      id: 2,
      image: anvaya1,
      demoLink: "https://anvaya-frontend-peach.vercel.app/",
      codeLink: "https://github.com/aatishjadhav/Anvaya-CRM",
    },
    {
      id: 3,
      image: workasana,
      demoLink: "https://workasana-frontend-pink.vercel.app/",
      codeLink: "https://github.com/aatishjadhav/Workasana",
    },
    {
      id: 4,
      image: chat,
      demoLink: "https://chatrix-nine.vercel.app/",
      codeLink: "https://github.com/aatishjadhav/Chatrix",
    },

    {
      id: 4,
      image: portfolio,
      demoLink: "https://atishs-portfolio.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/Portfolio-website",
    },
    {
      id: 5,
      image: todo,
      demoLink: "https://todos-priority.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/Todo-CRUD-Vanilla-JS",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full sm:h-screen md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 py-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 py-10 sm:px-0 sm:mb-24">
          {projects.map(({ id, image, demoLink, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  {/* <img
                    src={image}
                    alt="project-images"
                    className="rounded-md duration-200 hover:scale-105"
                  /> */}
                  <img
                    src={image}
                    alt="project screenshot"
                    className="rounded-md duration-200 hover:scale-105 w-full h-48 object-cover"
                  />
                </a>

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    {" "}
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
