// src/components/About.js

import React from 'react'
import Typewriter from 'typewriter-effect'
//import logo from './coding.png'
import logo from './softdev1.jpeg'

export default function About() {
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
                strings: ['Software Developer', 'Electronic Engineer', 'Scientific Researcher', 'Mechatronics Master’s Student'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 3000
              }}
            />
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-white font-semibold mb-2">
              Software Developer | Scientific Researcher | Mechatronics Master’s Student
            </p>
            <p className="text-justify text-lg leading-relaxed text-gray-300">
              A <span className="font-semibold text-white">multi-skilled Electronic Engineer</span> and 
              <span className="font-semibold text-white"> Software Developer</span> with over 
              <span className="font-semibold"> 7 years</span> of experience in 
              <span className="italic"> health technology management</span> in hospitals. In recent years, 
              I’ve focused on building 
              <span className="text-green-400 font-medium"> IoT systems</span> and 
              <span className="text-green-400 font-medium"> web applications</span> that address real-world challenges in 
              <span className="italic"> healthcare</span>, 
              <span className="italic"> agriculture</span>, and 
              <span className="italic"> automation</span>.
              <br /><br />
              Currently pursuing a Master’s degree in 
              <span className="font-semibold text-white"> Mechatronics Engineering</span> at PUCP, where I’m expanding my expertise in 
              <span className="italic"> Robotics</span>, 
              <span className="italic"> Artificial Intelligence (AI)</span>, and 
              <span className="italic"> Computer Vision</span> for applied research. I design, prototype, and validate 
              <span className="text-green-400 font-medium"> embedded systems</span> that connect hardware and software 
              for impactful field applications.
            </p>
          </div>

          
          <p className="mb-8 leading-relaxed md:text-2xl font-bold text-green-500">
            Any idea in mind? Click on "Contact Me" to send me a message. Let's talk!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
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
