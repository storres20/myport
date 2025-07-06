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
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Full Stack Web Developer
          </h2>
          <div className="mb-2 leading-relaxed md:text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Electronic Engineer",
                  "Scientific Researcher",
                  "Mechatronics Master’s Student",
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
              Software Developer | Computer Science, AI, Machine Learning, Python
            </p>
            <p className="text-justify text-lg leading-relaxed text-gray-300">
              A <span className="font-semibold text-white">versatile and impact-driven Software Developer </span> 
              with a solid foundation in <span className="font-semibold text-white">Electronic Engineering </span> 
              and over <span className="font-semibold">7 years</span> of experience managing 
              <span className="italic"> health technologies</span> in hospitals. My work bridges 
              <span className="italic"> real-world problem-solving</span> with 
              <span className="text-green-400 font-medium"> software innovation</span>, focusing on 
              <span className="text-green-400 font-medium"> IoT systems</span>, 
              <span className="text-green-400 font-medium"> AI applications</span>, and 
              <span className="text-green-400 font-medium"> web platforms</span> for 
              <span className="italic"> healthcare</span>, 
              <span className="italic"> agriculture</span>, and 
              <span className="italic"> automation</span>.
              <br /><br />
              Currently advancing my skills through a 
              <span className="font-semibold text-white"> Master’s in Mechatronics Engineering</span> at PUCP, 
              specializing in 
              <span className="italic"> Artificial Intelligence</span>, 
              <span className="italic"> Computer Vision</span>, and 
              <span className="italic"> Robotics</span>. I design and validate 
              <span className="text-green-400 font-medium"> embedded systems</span> that integrate 
              <span className="italic"> hardware and cloud-based software</span>, and I'm now expanding into 
              <span className="text-green-400 font-medium"> formal Computer Science</span> with a strong focus on 
              <span className="italic"> backend development</span>, 
              <span className="italic"> Python</span>, and 
              <span className="italic"> machine learning</span>.
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
