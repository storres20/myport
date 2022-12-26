import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";
import Skills from "./components/Skills";
//import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      {/* Scroll button for going back to TOP page */}
      <ScrollButton />
    </main>
  );
}

export default App;
