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
                strings: ['Expert in NEXT JS, NODE JS', 'Completely immersed in remote software development for the last few months', 'I have been working remotely and asynchronously with people in different time zones, and have built many projects'],
                autoStart: true,
                loop: true,
                delay: 1,
                deleteSpeed: 1,
                pauseFor: 3000
              }}
            />
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
