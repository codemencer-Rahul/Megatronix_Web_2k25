import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
