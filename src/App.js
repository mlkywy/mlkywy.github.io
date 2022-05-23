import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Header />;
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
