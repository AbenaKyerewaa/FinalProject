import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import MinistryDetail from "./pages/MinistryDetail";

// ✅ NEW PAGES
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import UserDashboard from "./pages/dashboards/UserDashboard";
import NewUser from "./pages/dashboards/NewUser";

// 👇 THIS CONTROLS WHAT SHOWS
function Layout() {
  const location = useLocation();

  // Pages where Navbar/Footer should be hidden
  const hideLayout = ["/login", "/signup", "/setup", "/dashboard/admin", "/dashboard/user"].includes(location.pathname);

   // Pages where CTA should be hidden
  const hideCTA = ["/contact", ].includes(location.pathname);

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/setup" element={<NewUser />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
      </Routes>

      {/* SHOW ONLY ON PUBLIC PAGES */}
     {location.pathname !== "/contact" && !hideLayout && <CTASection />}
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