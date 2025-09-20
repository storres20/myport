import React from "react";
import Typewriter from "typewriter-effect";
import logo from "./softdev1.jpeg";
import { useLocation, useHistory } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const history = useHistory();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      history.push({
        pathname: "/",
        state: { scrollToId: id },
      });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome!!
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm ITALO LON KAN PEREZ
          </h2>
          {/* <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Full Stack Web Developer
          </h2> */}
          <div className="mb-2 leading-relaxed md:text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Electronic Engineer",
                  "Scientific Researcher",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 3000,
              }}
            />
          </div>

          <div className="mb-6">
            <p className="text-lg text-white font-semibold mb-2">
              Web Developer | Node.js, Next.js, MongoDB
            </p>
            <p className="text-justify text-lg leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Versatile Web Developer</span> with strong expertise in <span className="text-green-400 font-medium"> fullstack development</span>, building reliable <span className="text-green-400 font-medium"> web applications</span> and <span className="text-green-400 font-medium"> real-time IoT systems</span>.
              My background in <span className="font-semibold text-white"> Electronic Engineering</span> gives me a unique ability to connect <span className="italic"> hardware</span> with <span className="text-green-400 font-medium"> scalable cloud-based solutions</span>.
            </p>
          </div>

          <p className="mb-8 leading-relaxed md:text-2xl font-bold text-green-500">
            Any idea in mind? Click on "Contact Me" to send me a message. Let's talk!
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center h-full rounded-lg"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
}
