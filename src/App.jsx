import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";
import { lazy } from "react";
import BackgroundMusic from "./components/BackgroundMusic";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./context/AuthContext";

const TeamPage = lazy(() => import("./pages/TeamPage"));

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BackgroundMusic />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event/*" element={<EventPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
