import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Languages from "./pages/Languages";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
         <Route path="/education" element={<Education/>} />
        <Route path="/certifications" element={<Certifications />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;