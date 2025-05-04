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
                strings: ['Expert in NEXT JS, NODE JS', 'Software Developer', 'Electronic Engineer','Mechatronics Master’s Student'],
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
              Software Developer | NEXT.js | Electronic Engineer | Mechatronics Master’s Student
            </p>
            <p className="text-justify text-lg leading-relaxed text-gray-300">
              I’m a <span className="font-semibold text-white">Software Developer</span> with expertise in 
              <span className="text-green-400 font-medium"> NEXT.js</span>, 
              <span className="text-green-400 font-medium"> Node.js</span>, and full-stack web technologies. 
              With a background as an <span className="font-semibold text-white">Electronic Engineer</span> and 
              over <span className="font-semibold">7 years</span> of professional experience in hospital environments — 
              especially in <span className="italic">health technology management</span> — 
              I’ve recently immersed myself in the development of web and IoT systems that have real-world impact. 
              I’m currently pursuing a Master’s in Mechatronics Engineering at PUCP, expanding into 
              <span className="italic"> Robotics, Artificial Intelligence, and Computer Vision</span> with a strong interest in 
              applications for <span className="italic">healthcare</span> and <span className="italic">agriculture</span>.
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
