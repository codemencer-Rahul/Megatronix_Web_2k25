import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LetterGlitch from "./LetterGlitch";
import codemanthanPoster from "../assets/codemanthanPoster.jpg";
import snapsyncPoster from "../assets/snapsyncPoster.jpg";
import rebootPoster from "../assets/rebootPoster.jpg";

const DOMAINS = [
  {
    key: "robotics",
    label: "Robotics",
    description:
      "Dive into the world of intelligent machines, automation, and hands-on engineering challenges.",
    image: rebootPoster,
  },
  {
    key: "coding",
    label: "Coding",
    description:
      "Sharpen your programming skills with algorithmic challenges, hackathons, and software innovation.",
    image: codemanthanPoster,
  },
  {
    key: "general",
    label: "General",
    description:
      "Test your knowledge and wit in quizzes, debates, and a variety of fun, brainy competitions.",
    image: snapsyncPoster,
  },
  {
    key: "gaming",
    label: "Gaming",
    description:
      "Compete in popular e-sports and casual games. Strategy, reflexes, and teamwork win the day!",
    image: null,
  },
  {
    key: "civil",
    label: "Civil",
    description:
      "Explore the world of structures, bridges, and real-world engineering with practical challenges.",
    image: null,
  },
  {
    key: "electrical",
    label: "Electrical",
    description:
      "Tackle circuits, electronics, and power systems in events that spark your curiosity.",
    image: null,
  },
];

export default function DomainPage() {
  const { mainEvent } = useParams();
  const navigate = useNavigate();

  if (mainEvent === "reboot") {
    return (
      <LetterGlitch>
        <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-12" >
            Reboot Event Winners
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* SnapSync Card */}
            <div className="backdrop-blur-lg rounded-3xl overflow-hidden animate-fade-in-up hover:scale-105 transition-all duration-300 flex flex-col items-center w-80 p-8 min-h-112"
              style={{
                backgroundColor: 'var(--surface-black)',
                border: '1.5px solid',
                borderColor: 'var(--yellow-border-soft)',
                boxShadow: '0 0 20px rgba(255, 202, 40, 0.15)',
              }}>
              <img
                src={snapsyncPoster}
                alt="SnapSync"
                className="object-fit w-full h-60  rounded-2xl  mb-4"
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--yellow-primary)' }}>
                SnapSync
              </h3>
              <div className="font-semibold mb-2" style={{ color: 'var(--gray-text)' }}>Winners:</div>
              <ul className="list-disc list-inside text-lg" style={{ color: 'var(--white)' }}>
                <li>Shuvojit Banik</li>
                <li>Tapobrata Roy</li>
              </ul>
            </div>
            {/* CodeManthan Card */}
            <div className="backdrop-blur-lg rounded-3xl overflow-hidden animate-fade-in-up hover:scale-105 transition-all duration-300 flex flex-col items-center w-80 p-8 min-h-112"
              style={{
                backgroundColor: 'var(--surface-black)',
                border: '1.5px solid',
                borderColor: 'var(--yellow-border-soft)',
                boxShadow: '0 0 20px rgba(255, 202, 40, 0.15)',
              }}>
              <img
                src={codemanthanPoster}
                alt="CodeManthan"
                className="object-fit w-full h-60 rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--yellow-primary)' }}>
                CodeManthan
              </h3>
              <div className="font-semibold mb-2" style={{ color: 'var(--gray-text)' }}>Winners:</div>
              <ul className="list-disc list-inside text-lg" style={{ color: 'var(--white)' }}>
                <li>Parul Priya</li>
              </ul>
            </div>
          </div>
        </div>
      </LetterGlitch>
    );
  }

  return (
    <LetterGlitch>
      <div className="min-h-screen pt-20 relative">
        {/* Soft background accent */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl z-0" style={{ backgroundColor: 'rgba(255, 202, 40, 0.08)' }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl z-0" style={{ backgroundColor: 'rgba(255, 202, 40, 0.08)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOMAINS.map((domain, index) => (
              <div
                key={domain.key}
                className={`backdrop-blur-lg rounded-3xl overflow-hidden animate-fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: 'var(--surface-black)',
                  border: '1.5px solid',
                  borderColor: 'var(--yellow-border-soft)',
                  boxShadow: '0 0 20px rgba(255, 202, 40, 0.15)',
                }}
                onClick={() => navigate(`/event/${mainEvent}/${domain.key}`)}
              >
                <div className="p-8 flex flex-col items-center w-full h-full">
                  <div className="shrink-0 flex items-center justify-center w-full mb-4">
                    {domain.image ? (
                      <div className=" rounded-2xl flex items-center justify-center ">
                        <img
                          src={domain.image}
                          alt={domain.label}
                          className="rounded-2xl object-fit w-full h-60 "
                        />
                      </div>
                    ) : (
                      <div className="w-56 h-56 flex items-center justify-center bg-blue-900/30 rounded-2xl border-2 border-blue-400/30 text-blue-300 text-lg font-bold">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-center items-center">
                    <div className="flex items-center space-x-3 mb-3">
                      {/* <div className="p-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 shadow">
                        <domain.icon className="h-7 w-7 text-white" />
                      </div> */}
                      <h2 className="text-xl font-extrabold tracking-wide" style={{ color: 'var(--white)' }}>
                        {domain.label}
                      </h2>
                      {/* <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor()} ml-2 shadow-sm`}
                      >
                        {getStatusText()}
                      </span> */}
                    </div>
                    <p className="mb-3 text-sm text-center font-medium line-clamp-2" style={{ color: 'var(--gray-text)' }}>
                      {domain.description}
                    </p>
                    <div className="w-full">
                      {/* <h3 className="font-semibold text-blue-200 mb-2 text-base text-center uppercase tracking-wide">
                        Domain Highlights
                      </h3> */}
                      {/* <ul className="space-y-1 mb-4">
                        {DOMAIN_HIGHLIGHTS[domain.key].map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 justify-center"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-green-300" />
                            <span className="text-xs text-blue-200 font-semibold">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul> */}
                      <button className="w-full h-10 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300 font-bold text-sm tracking-wide backdrop-blur" style={{ background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))', color: 'var(--black)' }}>
                        View Domain
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LetterGlitch>
  );
}
