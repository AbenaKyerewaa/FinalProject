import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";
import Media from "./pages/Media";
import Resources from "./pages/Resources";
import Hymnal from "./pages/Hymnal";
import Constitution from "./pages/Constitution";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/ministries" element={<Ministries />} />
       <Route path="/events" element={<Events />} />
       <Route path="/media" element={<Media />} />
       <Route path="/resources" element={<Resources />} />
       <Route path="/resources/hymnal" element={<Hymnal />} />
       <Route path="/resources/constitution" element={<Constitution />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/sermons" element={<Sermons />} />
      </Routes>

      <CTASection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
