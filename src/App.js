import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";
import Skills from "./components/Skills";
import Privacy from "./components/Privacy";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacidad" component={Privacy} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
