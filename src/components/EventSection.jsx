import React from 'react'
import { Calendar, Clock, MapPin, Users, Code, Rocket } from "lucide-react";
import {LetterGlitch } from '../components'
import { useNavigate } from 'react-router-dom';

function EventSection() {

  const upcomingEvents = [
    {
      title: "Orientation Program for 1st Year Students",
      date: "24th Nov, 2024 - 28th Nov, 2024",
      time: "3:00 PM - 5:00 PM",
      type: "Orientation",
    },
    {
      title: "Gaming Tournament organized by Krafton x Megatronix",
      date: "TBD",
      time: "TBD",
      type: "Gaming Competition",
    },
    {
      title: "Workshop on Robotics, Coding, Electrical and Civil",
      date: "15th Dec, 2024",
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
      icon: Rocket,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "completed",
      comingSoon: false,
    },

    {
      key: "orientation",
      title: "Orientation Program for 1st year Students",
      description:
        "Comprehensive orientation program for 1st year students to get familiar with club domains, activities and upcoming events",
      date: "Nov 24-28, 2024",
      location: "TBD",
      time: "3:00 PM - 5:00 PM",
      participants: "200+ Participants",
      icon: Users,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: false,
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
      icon: Code,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: false,
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
      icon: Code,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: false,
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
      icon: Rocket,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: false,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-yellow-600/70";
      case "ongoing":
        return "bg-yellow-500";
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
                  className={`relative backdrop-blur-sm overflow-hidden animate-fade-in-up transition-transform duration-200 ${
                    event.comingSoon
                      ? "cursor-not-allowed"
                      : "hover:scale-[1.02] cursor-pointer"
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
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
                      <span className="text-white text-3xl font-bold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-3 rounded-full`}
                              style={{ background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))' }}
                            >
                              <event.icon className="h-8 w-8" style={{ color: 'var(--black)' }} />
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
                            <Users className="h-4 w-4" />
                            <span>{event.participants}</span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-80">
                        <button
                          className={`w-full h-12 rounded-2xl ${
                            event.comingSoon
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
              );
            })}
          </div>

        </div>
      </div>
    </LetterGlitch>
  )
}

export default EventSection
