import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useHistory, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

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
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="title-font font-medium text-white mb-4 md:mb-0 md:ml-3 text-xl"
        >
          LON KAN
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center gap-4">
          <button onClick={() => scrollToSection("projects")} className="hover:text-white">
            Past Work
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-white">
            Skills
          </button>
        </nav>

        {/* "Contact Me" now scrolls or redirects like the others */}
        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>

        {/* Privacy link stays as a route */}
        <Link
          to="/privacidad"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 md:ml-4"
        >
          Privacy
        </Link>
      </div>
    </header>
  );
}
