import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Users, Code, Rocket, X } from "lucide-react";
import { LetterGlitch } from '../animations'
import { useNavigate } from 'react-router-dom';
import { CodeXmlIcon, RocketIcon, UsersGroupIcon, UsersIcon } from '../ui/icons';
import rebootPoster from "../../assets/images/rebootPoster.jpg";
import orientationPoster from "../../assets/images/orientationPoster.jpeg";

function EventSection() {
  const [modalImage, setModalImage] = useState(null);

  const upcomingEvents = [
    {
      title: "Orientation Program for 1st Year Students",
      date: "2nd Feb, 2026 - 6th Feb, 2026",
      time: "3:00 PM - 5:00 PM",
      type: "Orientation",
    },
    {
      title: "Workshop on Robotics, Coding, Electrical and Civil",
      date: "TBD",
      time: "3:00 PM - 5:00 PM",
      type: "Wokrshop",
    },
    {
      title: "Techxtra",
      date: "TBD",
      time: "10:00 AM - 5:00 PM",
      type: "Flagship Event",
    },
    {
      title: "Paridhi",
      date: "TBD",
      time: "10:00 AM - 5:00 PM",
      type: "Flagship Event",
    },
  ];

  const mainEvents = [
    {
      key: "reboot",
      title: "Reboot 2025",
      description:
        "REBOOT 2K25 marks a new era for Megatronix — a dynamic online event built to reset, reimagine, and recharge the tech spirit. Designed to connect innovators, creators, and visionaries, it offers thrilling challenges, global collaboration, and limitless opportunities to showcase talent. Get ready to push boundaries, unlock creativity, and experience the future of innovation—because this is where the reboot begins.",
      date: "July 6 - 12, 2025",
      location: "Online",
      time: "NA",
      participants: "200+ Participants",
      icon: RocketIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "completed",
      comingSoon: false,
      poster: rebootPoster,
    },

    {
      key: "orientation",
      title: "Orientation Program for 1st year Students",
      description:
        "Comprehensive orientation program for 1st year students of MSIT to get familiar with club domains, activities and upcoming events",
      date: "Feb 2nd-6th, 2026",
      location: "JC Bose Auditorium ( BSH Seminar Hall ), MSIT",
      time: "3:00 PM - 5:00 PM",
      participants: "100+ Participants",
      icon: UsersIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "ongoing",
      comingSoon: false,
      poster: orientationPoster,
    },
    {
      key: "workshop",
      title: "Workshops for 1st year Students",
      description:
        "Comprehensive workshop series covering latest technologies including AIML, Electronics, Web Development, Robotics and more",
      date: "15th Dec, 2025",
      location: "MSIT Campus",
      time: "3:00 PM - 5:00 PM",
      participants: "50 per session",
      icon: CodeXmlIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: true,
      poster: null,
    },
    {
      key: "techxtra",
      title: "Intra College Tech Fest ( Techxtra )",
      description:
        "Techxtra is Megatronix’s flagship intra-college tech fest celebrating innovation through thrilling competitions in robotics, electrical, civil and coding domains.",
      date: "TBD",
      location: "MSIT Campus",
      time: "10:00 AM - 5:00 PM",
      participants: "200+ Participants",
      icon: CodeXmlIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: true,
      poster: null,
    },
    {
      key: "paridhi",
      title: "Paridhi",
      description:
        "Our flagship annual tech festival featuring cutting-edge technology showcases, competitions, and workshops",
      date: "TBD",
      location: "MSIT Campus",
      time: "10:00 AM - 5:00 PM",
      participants: "500+ Expected",
      icon: RocketIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: true,
      poster: null,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-yellow-600/70";
      case "ongoing":
        return "bg-yellow-800";
      case "completed":
        return "bg-green-500/40";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "upcoming":
        return "Upcoming";
      case "ongoing":
        return "Ongoing";
      case "completed":
        return "Completed Successfully";
      default:
        return "TBD";
    }
  };

  const navigate = useNavigate();

  return (
    <LetterGlitch>
      <div className="min-h-screen  pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 animate-fade-in-up hover:shadow-2xl"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    backgroundColor: 'var(--surface-black)',
                    border: '1.5px solid',
                    borderColor: 'var(--yellow-border-soft)',
                    boxShadow: '0 0 20px rgba(255, 202, 40, 0.1), inset 0 0 20px rgba(255, 202, 40, 0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Animated gradient accent */}
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 from-transparent via-yellow-primary to-transparent group-hover:h-1 transition-all duration-500"
                    style={{ background: 'linear-gradient(to right, transparent, var(--yellow-primary), transparent)' }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 group-hover:scale-105"
                        style={{
                          color: 'var(--black)',
                          background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))',
                        }}
                      >
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold mb-4 leading-snug transition-colors duration-300" style={{ color: 'var(--white)' }}>
                      {event.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--yellow-border-soft)' }}>
                          <Calendar className="h-4 w-4" style={{ color: 'var(--yellow-primary)' }} />
                        </div>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--yellow-border-soft)' }}>
                          <Clock className="h-4 w-4" style={{ color: 'var(--yellow-primary)' }} />
                        </div>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Events */}
          <div className="space-y-12 mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Events
            </h2>
            {mainEvents.map((event, index) => {
              return (
                <div
                  key={index}
                  className={`relative backdrop-blur-sm overflow-hidden animate-fade-in-up transition-transform duration-200 ${event.comingSoon
                    ? "cursor-not-allowed"
                    : "hover:scale-[1.02]"
                    }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    backgroundColor: 'var(--surface-black)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'var(--yellow-border-soft)'
                  }}
                  onClick={() =>
                    !event.comingSoon && navigate(`/event/${event.key}`)
                  }
                >
                  {event.comingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                      <span className="text-white text-3xl font-bold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Poster - appears on right for even index, left for odd index */}
                      {event.poster && (
                        <div className="lg:w-96 flex items-center">
                          <img
                            src={event.poster}
                            alt={`${event.title} poster`}
                            className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                            style={{
                              border: '2px solid var(--yellow-border-soft)',
                              boxShadow: '0 4px 20px rgba(118, 200, 147, 0.2)'
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalImage(event.poster);
                            }}
                          />
                        </div>
                      )}

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-3 rounded-full`}
                              style={{ background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))' }}
                            >
                              <event.icon className="h-8 w-8" style={{ color: 'var(--black)' }} color="var(--black)" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold" style={{ color: 'var(--white)' }}>
                                {event.title}
                              </h2>
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                                  event.status
                                )} mt-1`}
                              >
                                {getStatusText(event.status)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="mb-6" style={{ color: 'var(--gray-text)' }}>
                          {event.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2" style={{ color: 'var(--gray-text)' }}>
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2" style={{ color: 'var(--gray-text)' }}>
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2" style={{ color: 'var(--gray-text)' }}>
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2" style={{ color: 'var(--gray-text)' }}>
                            <UsersGroupIcon className="h-4 w-4" />
                            <span>{event.participants}</span>
                          </div>
                        </div>

                        {/* Learn More button at bottom */}
                        <div className="mt-auto">
                          <button
                            className={`w-full h-12 rounded-2xl hover:cursor-pointer ${event.comingSoon
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:scale-105"
                              } transition-transform duration-300`}
                            style={{ background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))', color: 'var(--black)', fontWeight: 'bold' }}
                            disabled={event.comingSoon}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Image Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              animation: 'fadeIn 0.3s ease-out'
            }}
            onClick={() => setModalImage(null)}
          >
            {/* Modal Image */}
            <div
              className="max-w-3xl max-h-[70vh]"
              style={{
                animation: 'zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <img
                src={modalImage}
                alt="Event poster"
                className="w-full h-full object-contain rounded-lg"
                style={{
                  border: '3px solid var(--yellow-primary)',
                  boxShadow: '0 0 40px rgba(118, 200, 147, 0.4)'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </LetterGlitch>
  )
}

export default EventSection
