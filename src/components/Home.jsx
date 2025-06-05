import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import Hero from "../assets/atish2.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full pt-12 sm:h-screen bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center h-full px-4 sm:px-12 gap-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full pt-10 sm:w-1/2">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
              <Typewriter
                words={[
                  "Front-End Developer",
                  "React Developer",
                  "JavaScript Developer",
                  "MERN Developer",
                ]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-xl">
            A web developer and JavaScript enthusiast with an intense curiosity
            about all aspects of web development area as well as the ability to
            learn new things in any area related to innovative technology,
            creating websites and applications.
          </p>
          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="w-fit text-white px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-purple-700 to-orange-600 font-bold"
            >
              Projects
              <span className="hover:rotate-90 duration-500">
                <FaArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2">
          <img
            src={Hero}
            alt="profile image"
            className="rounded-2xl mx-auto w-full max-w-md sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
