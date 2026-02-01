import React, { useState } from 'react'
import OrientationModal from '../../layout/OrientationSchedualModal';
import LetterGlitch from '../../ui/animatedComponents/LetterGlitch';
import EventsData from '../../../lib/data/EventsData';
import { useNavigate } from 'react-router-dom';
import { UsersGroupIcon, } from '../../ui/icons';
import { Calendar, Clock, MapPin } from "lucide-react";
import UpcomingEventsCard from './UpcomingEventsCard';


function EventSection() {
  const [modalImage, setModalImage] = useState(null);
  const [showOrientationModal, setShowOrientationModal] = useState(false);
  const navigate = useNavigate();

  //code for the status color and text
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
    <LetterGlitch>
      <div className="min-h-screen  pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Upcoming Events */}
         <UpcomingEventsCard/>

          {/* Main Events - Bento Grid , large cards for the priority events and coming soon for the others */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Flagship Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {EventsData.mainEvents.map((event, index) => {
                const getGridClasses = () => {
                  if (index === 0) return "md:col-span-4 lg:col-span-3 md:row-span-2"; // Reboot 
                  if (index === 1) return "md:col-span-2 lg:col-span-3 md:row-span-2"; // Orientation 
                  if (index === 2) return "md:col-span-2 lg:col-span-2"; // Workshop
                  if (index === 3) return "md:col-span-2 lg:col-span-2"; // Techxtra
                  if (index === 4) return "md:col-span-4 lg:col-span-2"; // Paridhi
                  return "";
                };

                const isPriority = index === 0 || index === 1; // setting priority for Reboot and Orientation

                return (
                  <div
                    key={index}
                    className={`relative backdrop-blur-sm overflow-hidden rounded-2xl animate-fade-in-up transition-all duration-300 group ${getGridClasses()} ${event.comingSoon 
                      ? "cursor-not-allowed"
                      : "hover:scale-[1.01] cursor-pointer"
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      backgroundColor: 'var(--surface-black)',
                      borderWidth: isPriority ? '2px' : '1px',
                      borderStyle: 'solid',
                      borderColor: isPriority ? 'var(--yellow-primary)' : 'var(--yellow-border-soft)',
                      boxShadow: isPriority
                        ? '0 0 30px rgba(118, 200, 147, 0.3), inset 0 0 20px rgba(118, 200, 147, 0.05)'
                        : '0 0 20px rgba(118, 200, 147, 0.1)',
                    }}
                    onClick={() =>
                      !event.comingSoon && event.key !== 'orientation' && navigate(`/event/${event.key}`)
                    }
                  >
                    {event.comingSoon && (
                      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-10 rounded-2xl">
                        <span className="text-white text-2xl md:text-3xl font-bold">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Animated border glow for priority cards */}
                    {isPriority && (
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, transparent, var(--yellow-primary), transparent)',
                          filter: 'blur(20px)',
                        }}
                      />
                    )}

                    <div className={`relative ${isPriority ? 'p-8' : 'p-6'} h-full flex flex-col`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`${isPriority ? 'p-3' : 'p-2.5'} rounded-xl shadow-lg`}
                            style={{ background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))' }}
                          >
                            <event.icon className={`${isPriority ? 'h-6 w-6' : 'h-5 w-5'}`} style={{ color: 'var(--black)' }} />
                          </div>
                          <div>
                            <h3 className={`font-bold ${isPriority ? 'text-xl md:text-3xl' : 'text-base md:text-lg'}`} style={{ color: 'var(--white)' }}>
                              {event.title}
                            </h3>
                            <span
                              className={`inline-block px-3 py-1 rounded-full ${isPriority ? 'text-sm' : 'text-xs'} font-semibold text-white ${getStatusColor(
                                event.status
                              )} mt-2`}
                            >
                              {getStatusText(event.status)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Poster - Larger for priority events */}
                      {event.poster && (index === 0 || index === 1) && (
                        <div className={`${isPriority ? 'mb-6' : 'mb-3'} relative flex justify-center items-center overflow-hidden rounded-xl group/poster`}>
                          <img
                            src={event.poster}
                            alt={`${event.title} poster`}
                            className={` ${index === 0 || index === 1 ? 'h-72 md:h-84' : 'h-64 md:h-80'
                              } object-contain cursor-pointer transition-all duration-500 group-hover/poster:scale-105 rounded-2xl`}
                            style={{
                              border: `${isPriority ? '3px' : '2px'} solid var(--yellow-primary)`,
                              boxShadow: '0 8px 30px rgba(118, 200, 147, 0.3)',
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalImage(event.poster);
                            }}
                          />
                          <div className="absolute inset-0 from-black/50 to-transparent opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      )}

                      {/* Description */}
                      <p className={`${isPriority ? 'mb-6 text-base' : 'mb-3 text-xs'} ${index === 0 ? 'line-clamp-4' : 'line-clamp-3'}`} style={{ color: 'var(--gray-text)' }}>
                        {event.description}
                      </p>

                      {/* Details Grid */}
                      <div className={`grid grid-cols-2 gap-3 ${isPriority ? 'mb-6' : 'mb-3'}`}>
                        <div className={`flex items-center space-x-2 ${isPriority ? 'text-sm' : 'text-xs'}`} style={{ color: 'var(--gray-text)' }}>
                          <Calendar className={`${isPriority ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} style={{ color: 'var(--yellow-primary)' }} />
                          <span className="truncate">{event.date}</span>
                        </div>
                        <div className={`flex items-center space-x-2 ${isPriority ? 'text-sm' : 'text-xs'}`} style={{ color: 'var(--gray-text)' }}>
                          <Clock className={`${isPriority ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} style={{ color: 'var(--yellow-primary)' }} />
                          <span className="truncate">{event.time}</span>
                        </div>
                        <div className={`flex items-center space-x-2 ${isPriority ? 'text-sm' : 'text-xs'} col-span-2`} style={{ color: 'var(--gray-text)' }}>
                          <MapPin className={`${isPriority ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} style={{ color: 'var(--yellow-primary)' }} />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className={`flex items-center space-x-2 ${isPriority ? 'text-sm' : 'text-xs'} col-span-2`} style={{ color: 'var(--gray-text)' }}>
                          <UsersGroupIcon className={`${isPriority ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} />
                          <span>{event.participants}</span>
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <div className="mt-auto">
                        <button
                          className={`w-full ${isPriority ? 'py-3 text-base' : 'py-2.5 text-sm'} rounded-xl font-bold transition-all duration-300 ${event.comingSoon
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                            }`}
                          style={{
                            background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))',
                            color: 'var(--black)'
                          }}
                          disabled={event.comingSoon}
                          onClick={(e) => {
                            if (event.key === 'orientation') {
                              e.stopPropagation();
                              setShowOrientationModal(true);
                            }
                          }}
                        >
                          {event.key === 'orientation' ? 'View Schedule' : 'Learn More'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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

        {/* Orientation Modal */}
        <OrientationModal
          isOpen={showOrientationModal}
          onClose={() => setShowOrientationModal(false)}
        />

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
