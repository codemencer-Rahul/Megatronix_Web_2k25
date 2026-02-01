import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { lazy } from "react";
import GalleryPage from "./pages/GalleryPage";
// import OrientationModal from "./components/OrientationModal";
// import BackgroundMusic from "./components/BackgroundMusic";

const TeamPage = lazy(() => import("./pages/TeamPage"));

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* <BackgroundMusic /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event/*" element={<EventPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isHomePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
