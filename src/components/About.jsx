// src/components/About.js

import React from 'react'
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
          <p className="mb-2 leading-relaxed md:text-2xl">
            Expert in REACT JS, Ruby On Rails, and more.
          </p>
          <p className="mb-8 leading-relaxed md:text-2xl">
            Completely immersed in remote software development for the last few months, I have been working remotely and asynchronously with people in different time zones, and have built many projects.
          </p>
          <p className="mb-8 leading-relaxed md:text-2xl">
            Any idea in mind? Click on "Work With Me" to send me a message. Let's talk!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
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
            className="object-cover object-center rounded h-full rounded-lg"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
}
