import React, { useState } from "react";
import { Calendar, Clock, MapPin, Trophy, Handshake } from "lucide-react";
import { UsersGroupIcon } from "../../ui/icons";
import escaladePoster from "../../../assets/images/escaladePoster.jpeg";
import collegeRivalPoster from "../../../assets/images/clgRivalsPoster.jpeg";
import { collaborativeEventsVideos } from "../../../lib/data/collaborativeEventsVideos";
import ModalImage from "../../layout/ModalImage";
import VideoDisplayModal from "../../layout/VideoDisplayModal";

const collaborativeEvents = [
  {
    id: 1,
    title: "Escalade 14.0",
    description:
      "Megatronix collaborated with IIT Guwahati for this mega tech fest featuring robotics, coding competitions, and innovation workshops.",
    date: "July 27, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "College Premises",
    participants: "100+ Participants",
    status: "completed",
    collaborative: "IIT Guwahati",
    poster: escaladePoster,
    videoSrc: collaborativeEventsVideos.escalade,
  },
  {
    id: 2,
    title: "College Rivals",
    description:
      "Megatronix hosted India's premier collegiate esports tournament featuring BGMI, Valorant, and FIFA with professional mentorship and exciting prizes.",
    date: "November 18, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "College Premises",
    participants: "300+ Participants",
    status: "completed",
    collaborative: "College Rivals",
    poster: collegeRivalPoster,
    videoSrc: collaborativeEventsVideos.collegeRivals,
  },
];

function CollaborativeEvents() {
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  //open modal for the video
  const openModal = (videoSrc) => {
    setActiveVideo(videoSrc);
    setShowModal(true);
  };

  //close modal for the video
  const closeModal = () => {
    setShowModal(false);
    setActiveVideo(null);
  };

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

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Collaborative & Exclusive Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collaborativeEvents.map((event) => (
          <div
            key={event.id}
            className="relative backdrop-blur-sm overflow-hidden rounded-2xl animate-fade-in-up transition-all duration-300 group hover:scale-[1.01] cursor-pointer"
            style={{
              backgroundColor: "rgba(10, 15, 25, 0.95)",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "var(--yellow-primary)",
              boxShadow:
                "0 0 30px rgba(118, 200, 147, 0.3), inset 0 0 20px rgba(118, 200, 147, 0.05)",
            }}
          >
            {/* Animated border glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(45deg, transparent, var(--yellow-primary), transparent)",
                filter: "blur(20px)",
              }}
            />

            <div className="relative p-8 h-full flex flex-col">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                  <div
                    className="p-3 rounded-xl shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))",
                    }}
                  >
                    <Trophy
                      className="h-6 w-6"
                      style={{ color: "var(--black)" }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                      <h3
                        className="font-bold text-xl md:text-2xl"
                        style={{ color: "var(--white)" }}
                      >
                        {event.title}
                      </h3>
                      {event.collaborative && (
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                          <Handshake
                            className="h-3 w-3"
                            style={{ color: "var(--yellow-primary)" }}
                          />
                          <span
                            className="text-xs whitespace-nowrap"
                            style={{ color: "var(--yellow-primary)" }}
                          >
                            {event.id === 2
                              ? "Powered by"
                              : "In collaboration with"}{" "}
                            {event.collaborative}
                          </span>
                        </div>
                      )}
                    </div>
                    <span
                      className={`hidden sm:inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(
                        event.status,
                      )} mt-2`}
                    >
                      {getStatusText(event.status)}
                    </span>
                  </div>
                </div>
                {/* Status badge for mobile only */}
                <div className="sm:hidden md:pl-1 lg:pl-3.5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(
                      event.status,
                    )}`}
                  >
                    {getStatusText(event.status)}
                  </span>
                </div>
              </div>

              {/* Poster */}
              {event.poster && (
                <div className="mb-6 relative flex justify-center items-center overflow-hidden rounded-xl group/poster">
                  <img
                    src={event.poster}
                    alt={`${event.title} poster`}
                    className="h-60 md:h-84 object-contain cursor-pointer transition-all duration-500 group-hover/poster:scale-105 rounded-2xl"
                    style={{
                      border: "3px solid var(--yellow-primary)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImage(event.poster);
                    }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              )}

              {/* Description */}
              <p
                className="mb-6 text-base line-clamp-4"
                style={{ color: "var(--gray-text)" }}
              >
                {event.description}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div
                  className="flex items-center space-x-2 text-sm"
                  style={{ color: "var(--gray-text)" }}
                >
                  <Calendar
                    className="h-4 w-4"
                    style={{ color: "var(--yellow-primary)" }}
                  />
                  <span className="truncate">{event.date}</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm"
                  style={{ color: "var(--gray-text)" }}
                >
                  <Clock
                    className="h-4 w-4"
                    style={{ color: "var(--yellow-primary)" }}
                  />
                  <span className="truncate">{event.time}</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm col-span-2"
                  style={{ color: "var(--gray-text)" }}
                >
                  <MapPin
                    className="h-4 w-4"
                    style={{ color: "var(--yellow-primary)" }}
                  />
                  <span className="truncate">{event.location}</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm col-span-2"
                  style={{ color: "var(--gray-text)" }}
                >
                  <UsersGroupIcon className="h-4 w-4" color="#34a0a4" />
                  <span>{event.participants}</span>
                </div>
              </div>

              {/* Watch Video Button */}
              {event.videoSrc && (
                <div className="mt-auto">
                  <button
                    className="w-full py-3 flex items-center justify-center gap-2 text-base rounded-xl font-bold transition-all duration-300 hover:scale-105
                    cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))",
                      color: "var(--black)",
                      boxShadow: "0 4px 20px rgba(52, 160, 164, 0.4)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(event.videoSrc);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 6px 30px rgba(52, 160, 164, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow
                        "0 4px 20px rgba(52, 160, 164, 0.4)";
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Video
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <ModalImage setModalImage={setModalImage} modalImage={modalImage} />
      )}

      {/* Video Modal */}
      {showModal && (
        <VideoDisplayModal videoSrc={activeVideo} closeModal={closeModal} />
      )}
    </div>
  );
}

export default CollaborativeEvents;
