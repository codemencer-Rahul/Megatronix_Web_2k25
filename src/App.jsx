import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";
import { lazy } from "react";

const TeamPage = lazy(() => import("./pages/TeamPage"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event/*" element={<EventPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
