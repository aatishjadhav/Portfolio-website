import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 pt-24"
    >
      <div className="flex flex-col p-4 justify-center max-w-lg mx-auto h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/63812acb-570c-4fcf-9f13-0480d903e4fd"
            method="POST"
            className="flex flex-col w-full md:w-3/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-purple-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold">
              Let's talk
            </button>
          </form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Contact;
