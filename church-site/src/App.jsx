import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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
import MinistryDetail from "./pages/MinistryDetail";

// ✅ NEW PAGES
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// 👇 THIS CONTROLS WHAT SHOWS
function Layout() {
  const location = useLocation();

  // Pages where Navbar/Footer should be hidden
  const hideLayout = ["/login", "/signup", "/dashboard"].includes(location.pathname);

  return (
    <>
      {/* SHOW ONLY ON PUBLIC PAGES */}
      {!hideLayout && <Navbar />}

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/ministries/:slug" element={<MinistryDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<Media />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/hymnal" element={<Hymnal />} />
        <Route path="/resources/constitution" element={<Constitution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* SHOW ONLY ON PUBLIC PAGES */}
      {!hideLayout && <CTASection />}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;