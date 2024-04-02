import React from "react";
import { CiMail } from "react-icons/ci";

const handleSubmit = (e) => {
  setTimeout(() => {
    e.target.reset();
  }, 2000);
};

function Contact() {
  return (
    <div className="contact w-full flex justify-center bg-gradient-to-b from-black via-slate-900 to-slate-500 text-white">
      <div className="h-full w-full max-w-screen-lg flex flex-col mt-20 p-4 mb-1  0">
        <h1 className="text-5xl underline mb-10 ">Contact</h1>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex flex-col p-6 justify-center">
            <h2 className="sm:text-7xl text-3xl">Let's chat</h2>
            <h3 className="sm:text-5xl text-2xl">Tell me about yourself.</h3>

            {/* <h3 className="sm:text-2xl text-lg ml-2">
              Write your Experiences.
            </h3> */}
            <br />
            <div className="flex p-2 group">
              <CiMail
                size={50}
                className="group-hover:rotate-[360deg] duration-500"
              />
              <p className="ml-4 text-md">
                Say Hi! anytime at: <br />
                <a href="mailto:jalajsc@gmail.com" className="text-yellow-400">
                  jalajsc@gmail.com
                </a>
              </p>
            </div>
          </div>
          <form
            name="contact"
            onSubmit={handleSubmit}
            method="POST"
            action="https://getform.io/f/zbxdwpnb"
            className="p-6 grid grid-cols-1 gap-4"
          >
            <label className="text-2xl">Send me a message.</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="bg-transparent border-2 rounded-lg h-10 outline-none p-2"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email address"
              className="bg-transparent border-2 rounded-lg h-10 outline-none p-2"
            />
            <textarea
              name="message"
              rows={8}
              cols={50}
              required
              placeholder="Write your message here."
              className="bg-transparent border-2 rounded-lg outline-none p-2"
            ></textarea>

            <button
              type="submit"
              className="h-10 w-40 bg-cyan-800 rounded-xl hover:scale-105 hover:bg-blue-900 duration-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
