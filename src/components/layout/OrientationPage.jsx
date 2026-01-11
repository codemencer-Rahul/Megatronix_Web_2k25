import React, { useState } from "react";
import { LetterGlitch } from "../animations";
import forklifter from "../../assets/images/forklifter.JPG";
import homeautomation from "../../assets/images/homeautomation.png";
import pothole from "../../assets/images/pothole.png";
import trussbridge from "../../assets/images/trussbridge.png";
import windcharging from "../../assets/images/windcharging.JPG";
import edgeandobstacle from "../../assets/images/edgeandobstacle.jpg";
import airhockey from "../../assets/images/airhockey.JPG";
import hydraulic from "../../assets/images/hydraulic.jpg";

const projectsByYear = {
  2022: [
    {
      name: "Truss Bridge",
      description:
        "A mechanical model demonstrating the structural efficiency and load distribution of truss bridges.",
      image: trussbridge,
    },
  ],
  2023: [
    {
      name: "Pothole Filling Bot",
      description:
        "An automated robot designed to detect and fill potholes, enhancing road safety and maintenance efficiency.",
      image: pothole,
    },
  ],
  2024: [
    {
      name: "Forklifter",
      description:
        "An automated forklift prototype for precise material handling using sensors and robotics.",
      image: forklifter,
    },
    {
      name: "Home Automation",
      description:
        "An IoT-based system enabling remote control of home appliances for convenience and energy efficiency.",
      image: homeautomation,
    },
    {
      name: "Edge and Obstacle Detection and Avoidance Bot",
      description:
        "A smart robot equipped with sensors to detect edges and obstacles, ensuring safe autonomous navigation.",
      image: edgeandobstacle,
    },
  ],
  2025: [
    {
      name: "Wind Energy Demonstration",
      description:
        "A renewable energy project showcasing how wind power can be harnessed to generate electricity.",
      image: windcharging,
    },
    {
      name: "Air Hockey",
      description:
        "An interactive air hockey system powered by embedded electronics and sensors for responsive gameplay.",
      image: airhockey,
    },
    {
      name: "Hydraulic Bot",
      description:
        "A hydraulically controlled robotic system showcasing fluid mechanics and precise motion control.",
      image: hydraulic,
    },
  ],
};

const yearList = Object.keys(projectsByYear).sort((a, b) => b - a);

export default function OrientationPage() {
  const [selectedYear, setSelectedYear] = useState(yearList[0]);
  const projects = projectsByYear[selectedYear] || [];

  return (
    <LetterGlitch>
      <div className="min-h-screen pt-20 relative">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl z-0" style={{ backgroundColor: 'rgba(255, 202, 40, 0.08)' }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl z-0" style={{ backgroundColor: 'rgba(255, 202, 40, 0.08)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center gap-4 mb-12">
            {yearList.map((year) => (
              <button
                key={year}
                className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 border-2 ${selectedYear === year
                    ? "text-black scale-105"
                    : "hover:cursor-pointer"
                  }`}
                style={{
                  background: selectedYear === year ? 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))' : 'transparent',
                  borderColor: selectedYear === year ? 'var(--yellow-primary)' : 'var(--yellow-border-soft)',
                  color: selectedYear === year ? 'var(--black)' : 'var(--white)'
                }}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 && (
              <div className="text-center col-span-full" style={{ color: 'var(--gray-text)' }}>
                No projects for this year.
              </div>
            )}
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className="backdrop-blur-lg rounded-3xl overflow-hidden animate-fade-in-up hover:scale-105 transition-all duration-300 flex flex-col items-center"
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
                    {project.image ? (
                      <div className=" rounded-2xl flex items-center justify-center p-2 w-full">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="object-cover rounded-2xl w-full h-50 shadow-md"
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
                      {project.name}
                    </div>
                    <div className="mb-4 text-center font-medium text-base leading-relaxed px-2" style={{ color: 'var(--gray-text)' }}>
                      {project.description}
                    </div>
                    <div className="w-full my-2" style={{ borderTop: '1px solid var(--yellow-border-soft)' }}></div>
                    <div className="text-xs mb-2 text-center" style={{ color: 'var(--yellow-primary)' }}>
                      Year: {selectedYear}
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
