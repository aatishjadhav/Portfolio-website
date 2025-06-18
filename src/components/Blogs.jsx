import React from "react";
import blog1 from "../assets/closures.png";
import blog2 from "../assets/hoc.png";

const Blogs = () => {
  const projects = [
    {
      id: 1,
      image: blog1,
      demoLink:
        "https://medium.com/@atishjadhav835/closures-in-javascript-a0d38f24b91f",
    },
    {
      id: 2,
      image: blog2,
      demoLink:
        "https://medium.com/@atishjadhav835/higher-order-components-hocs-in-javascript-b36063920949",
    },
  ];

  return (
    <div
      name="Blogs"
      className="w-full sm:h-screen h-auto bg-gradient-to-b from-black to-gray-800 p-4 pt-24 text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blogs
          </p>
          <p className="py-6">Check out some of my Blogs right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 mb-6">
          {projects.map(({ id, image, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt="Blog-images"
                  className="rounded-md duration-200 hover:scale-105 w-full object-cover"
                />
              </a>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Open
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
