import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full sm:h-screen bg-gradient-to-b py-[15%] from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" sm:mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        {/* <p className="text-xl mt-20">
          I'm{" "}
          <span className="text-orange-400 text-1xl">frontend Developer</span>{" "}
          from Maharashtra, India, I build apps with a focus on{" "}
          <span className="text-orange-400 text-1xl">
            React, Redux, JavaScript
          </span>{" "}
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. A Software Engineer, who loves to solve problems.
        </p> */}
        <p className="text-xl mt-20">
          I'm{" "}
          <span className="text-orange-400 text-1xl">
            {" "}
            Front-End Developer{" "}
          </span>
          based in Maharashtra, India, passionate about building high-performing
          and responsive web applications with a strong focus on{" "}
          <span className="text-orange-400 text-1xl">
            React, Redux, and JavaScript.
          </span>
          I enjoy transforming complex challenges into simple, elegant, and
          intuitive user experiences.
        </p>
        <br />
        <p className="text-xl">
          With hands-on experience in crafting visually appealing and
          user-centric interfaces, I blend my technical skills with a keen
          interest in UI/UX design. My goal is to create applications that are
          not only functional but also delightful to use. I thrive in
          collaborative environments, where I actively contribute ideas, value
          clear communication, and prioritize teamwork to meet project goals
          within deadlines. I'm always eager to learn, take on new challenges,
          and grow beyond my comfort zone as a software engineer who truly
          enjoys solving problems.
        </p>
      </div>
    </div>
  );
};

export default About;
