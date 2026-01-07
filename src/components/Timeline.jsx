import React, { useEffect, useRef, useState } from 'react';

function Timeline({ milestones, openModal }) {
  const timelineData = milestones.map((milestone, index) => ({
    ...milestone,
    position: index % 2 === 0 ? 'left' : 'right',
  }));

  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen py-16">
      <style>{`
        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 0%;
          background: linear-gradient(to bottom, rgba(255, 202, 40, 0) 0%, var(--yellow-primary) 15%, var(--yellow-primary) 85%, rgba(255, 202, 40, 0) 100%);
          top: -5%;
          left: 50%;
          margin-left: 3px;
          z-index: -1;
          animation: moveline 3s ease-in-out forwards;
        }

        @media screen and (max-width: 718px) {
          .timeline::after {
            left: 31px;
          }
          
          .timeline-container {
            width: 100%;
            padding-left: 80px;
            padding-right: 25px;
            left: 0 !important;
          }
          
          .timeline-dot {
            left: 21px !important;
            right: auto !important;
          }
          
          .timeline-arrow-left,
          .timeline-arrow-right {
            left: -15px !important;
            right: auto !important;
            border-left: 0 !important;
            border-right: 15px solid var(--yellow-border-soft) !important;
          }
          
          .text-box p {
            font-size: 13px;
          }
          
          .text-box small {
            margin-bottom: 10px;
          }
        }

        @keyframes movedown {
          0% {
            opacity: 1;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes moveline {
          0% {
            height: 0;
          }
          100% {
            height: 110%;
          }
        }

        .card-visible-left {
          animation: slideInLeft 0.8s ease-out forwards !important;
        }

        .card-visible-right {
          animation: slideInRight 0.8s ease-out forwards !important;
        }
      `}</style>
      <div className="timeline relative max-w-6xl mx-auto my-0 sm:my-12">
        
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`timeline-container py-2.5 px-12 w-1/2 relative opacity-0 z-2 ${
              item.position === "left" ? "left-0" : "left-1/2"
            } ${visibleCards.includes(index) ? (item.position === "left" ? "card-visible-left" : "card-visible-right") : ""}`}
          >
            <div
              className={`timeline-dot absolute w-8 h-8 rounded-full top-8 z-10 ${
                item.position === "left" 
                  ? "right-[-21px]"
                  : "-left-2.5"
              }`}
              style={{
                backgroundColor: 'var(--yellow-primary)',
                boxShadow: '0 0 15px 3px var(--yellow-shadow-strong)'
              }}
            />
            <div className="text-box p-5 sm:py-5 sm:px-7 backdrop-blur-sm relative rounded-xl"
              style={{
                backgroundColor: 'var(--surface-black)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--yellow-border-soft)'
              }}>
              <h2 className="text-lg sm:text-2xl font-semibold" style={{ color: 'var(--white)' }}>{item.event}</h2>
              <small className="mb-3 inline-block font-bold text-sm sm:text-md" style={{ color: 'var(--yellow-primary)' }}>{item.year}</small>
              <p className='text-sm sm:text-base leading-relaxed' style={{ color: 'var(--gray-text)' }}>{item.description}</p>
              {item.videoSrc && (
                <button
                  onClick={() => openModal(item.videoSrc)}
                  className="mt-4 hover:cursor-pointer text-xs sm:text-md md:text-base md:font-semibold px-3 py-1 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm whitespace-nowrap"
                  style={{
                    color: 'var(--yellow-primary)',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'var(--yellow-primary)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--yellow-border-soft)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  🎥 Show Video
                </button>
              )}
              <span
                className={`absolute top-7 z-10 ${
                  item.position === "left"
                    ? "timeline-arrow-left right-[-15px] border-t-15 border-t-transparent border-b-15 border-b-transparent border-l-15"
                    : "timeline-arrow-right left-[-15px] border-t-15 border-t-transparent border-b-15 border-b-transparent border-r-15"
                }`}
                style={{
                  borderLeftColor: item.position === "left" ? 'var(--yellow-border-soft)' : 'transparent',
                  borderRightColor: item.position === "right" ? 'var(--yellow-border-soft)' : 'transparent'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline