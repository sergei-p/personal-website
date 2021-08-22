import './scss/style.scss';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from './components/Experience';
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Experience/>
      {/*<Projects/>
      <Contact/>
      <Footer/> */}
    </div>
    
    
  );
}

export default App;
