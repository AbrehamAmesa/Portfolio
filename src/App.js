import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import General from "./components/General";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-section py-5 bg-dark text-light">
      <Header />
      <About />
      <General />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
