import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/iGEM.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Fundraise from "./pages/Fundraise.jsx";
import Rice from "./pages/Rice.jsx";
import Synergy from "./pages/Synergy.jsx"
import UnderConstruction from "./pages/UnderConstruction.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="site">
      <Navbar />
      {/* <main className="container"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iGEM" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Rice" element={<Rice />} />
          <Route path="/Synergy" element={<Synergy />} />
          <Route path="/Fundraise" element={<Fundraise />} />
          <Route path="/UnderConstruction" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </main> */} {/* comment container out of site temporarily. Restore this class if website is based on text since text needs to be wrapped in container. Or in each individual page wrap the text section in container class*/}
      <Footer />
    </div>
  );
}