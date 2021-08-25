import React from 'react';
import './scss/style.scss';
import useWindowDimensions from './components/hooks/useWindowDimensions';
import NavBar from "./components/NavBar";
import MobileNavbar from './components/MobileNavbar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from './components/Experience';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { height, width } = useWindowDimensions();

  if(width > 750) {
    return (
      <div>
        <NavBar/>
        <Header/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  } else {
    return (
      <div>
        <MobileNavbar/>
        <Header/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
