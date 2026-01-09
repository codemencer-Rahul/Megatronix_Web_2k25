import React from "react";
import { useParams } from "react-router-dom";
import LetterGlitch from "./LetterGlitch";
import codemanthanPoster from "../assets/codemanthanPoster.jpg";
import snapsyncPoster from "../assets/snapsyncPoster.jpg";
import rebootPoster from "../assets/rebootPoster.jpg";

const DOMAIN_EVENTS = {
  robotics: [
    { name: "Robo Race", description: "Race your robots!" },
    { name: "Line Follower", description: "Follow the line challenge." },
  ],
  coding: [
    { name: "Code Marathon", description: "24hr coding challenge." },
    { name: "Bug Hunt", description: "Find and fix bugs." },
  ],
  general: [
    { name: "Quiz Bowl", description: "General knowledge quiz." },
    { name: "Debate", description: "Debate competition." },
  ],
  gaming: [
    { name: "Valorant", description: "5v5 FPS tournament." },
    { name: "FIFA", description: "Football gaming event." },
  ],
  civil: [
    { name: "Bridge Building", description: "Build the strongest bridge." },
    { name: "Surveying", description: "Land surveying challenge." },
  ],
  electrical: [
    { name: "Circuit Design", description: "Design and build circuits." },
    { name: "Electro Quiz", description: "Quiz on electrical concepts." },
  ],
};

const EVENT_IMAGES = {
  "Robo Race": rebootPoster,
  "Line Follower": rebootPoster,
  "Code Marathon": codemanthanPoster,
  "Bug Hunt": codemanthanPoster,
  "Quiz Bowl": snapsyncPoster,
  "Debate": snapsyncPoster,
  // Add more mappings as needed
};

export default function DomainEventsPage() {
  const { domain } = useParams();
  const events = DOMAIN_EVENTS[domain] || [];
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalEvent, setModalEvent] = useState(null);
  // const [form, setForm] = useState({ name: "", email: "" });

  // const openModal = (event) => {
  //   setModalEvent(event);
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  //   setModalEvent(null);
  //   setForm({ name: "", email: "" });
  // };
  // // const handleChange = (e) => {
  // //   setForm({ ...form, [e.target.name]: e.target.value });
  // // };
  // // const handleSubmit = (e) => {
  // //   e.preventDefault();
  // //   // You can add submission logic here
  // //   closeModal();
  // // };

  return (
    <LetterGlitch>
      <div className="min-h-screen pt-20 relative">
        {/* Soft background accent */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl z-0" style={{ backgroundColor: 'rgba(255, 202, 40, 0.08)' }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl z-0" style={{ backgroundColor: 'rgba(255, 202, 40, 0.08)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {events.map((ev, idx) => (
              <div
                key={ev.name}
                className="backdrop-blur-lg rounded-3xl overflow-hidden animate-fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center w-80"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  backgroundColor: 'var(--surface-black)',
                  border: '1.5px solid',
                  borderColor: 'var(--yellow-border-soft)',
                  boxShadow: '0 0 20px rgba(255, 202, 40, 0.15)',
                }}
              >
                <div className="p-8 flex flex-col items-center w-full h-full">
                  <div className="shrink-0 flex items-center justify-center w-full mb-4">
                    {EVENT_IMAGES[ev.name] ? (
                      <div className=" rounded-2xl  flex items-center justify-center p-2 w-full">
                        <img
                          src={EVENT_IMAGES[ev.name]}
                          alt={ev.name}
                          className="object-fit rounded-2xl w-60 h-full shadow-md"
                        />
                      </div>
                    ) : (
                      <div className="w-56 h-56 flex items-center justify-center rounded-2xl border-2 text-lg font-bold" style={{ backgroundColor: 'var(--surface-black)', borderColor: 'var(--yellow-border-soft)', color: 'var(--yellow-primary)' }}>
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-center items-center">
                    <div className="text-xl font-extrabold tracking-wide mb-2 text-center" style={{ color: 'var(--white)' }}>
                      {ev.name}
                    </div>
                    <div className="mb-4 text-center font-medium text-sm line-clamp-3" style={{ color: 'var(--gray-text)' }}>
                      {ev.description}
                    </div>
                    <div className="w-full flex flex-col gap-4 mt-2">
                      <button
                        className="hover:cursor-pointer w-full h-10 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300 font-bold text-sm tracking-wide backdrop-blur" style={{ background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))', color: 'var(--black)' }}
                        // onClick={() => openModal(ev)}
                      >
                        Register
                      </button>
                      <button className="hover:cursor-pointer w-full h-10 rounded-xl border-2 bg-white/10 hover:scale-105 hover:shadow-lg transition-transform duration-300 font-bold text-sm tracking-wide backdrop-blur" style={{ borderColor: 'var(--yellow-border-soft)', color: 'var(--white)' }}>
                        Rulebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Registration Modal */}
      {/* {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gradient-to-br from-[#2E8B57]/60 to-[#1a2a2a]/80 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl relative border border-green-400/40">
            <button
              className="absolute top-2 right-2 text-blue-200 hover:text-white text-xl"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-blue-100 mb-4 text-center">
              Register for {modalEvent?.name}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-400/30 text-blue-100 focus:outline-none backdrop-blur"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-400/30 text-blue-100 focus:outline-none backdrop-blur"
                required
              />
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-200"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="flex-1 h-12 rounded-2xl border-2 border-blue-400/40 bg-white/10 text-blue-100 font-semibold hover:bg-blue-400/10 hover:scale-105 hover:shadow-lg transition-transform duration-200"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </LetterGlitch>
  );
}
