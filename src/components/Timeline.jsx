import React from 'react';

function Timeline({ milestones, openModal }) {
  const timelineData = milestones.map((milestone, index) => ({
    ...milestone,
    position: index % 2 === 0 ? 'left' : 'right',
  }));

  return (
    <div className="min-h-screen py-16">
      <style>{`
        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 110%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 15%, #fff 85%, rgba(255, 255, 255, 0) 100%);
          top: -5%;
          left: 50%;
          margin-left: 3px;
          z-index: -1;
          animation: moveline 2s ease-in-out forwards;
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
            border-right: 15px solid rgba(96, 165, 250, 0.3) !important;
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

        @keyframes moveline {
          0% {
            height: 0;
          }
          100% {
            height: 110%;
          }
        }
      `}</style>
      <div className="timeline relative max-w-6xl mx-auto my-0 sm:my-12">
        
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-container py-2.5 px-12 w-1/2 relative opacity-0 animate-[movedown_1s_ease-out_forwards] z-2 ${
              item.position === "left" ? "left-0" : "left-1/2"
            }`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <div
              className={`timeline-dot absolute w-8 h-8 bg-lime-200 rounded-full shadow-[0_0_15px_3px_#00ffff] top-8 z-10 ${
                item.position === "left" 
                  ? "right-[-21px]"
                  : "-left-2.5"
              }`}
            />
            <div className="text-box p-5 sm:py-5 sm:px-7 backdrop-blur-sm bg-blue-950/80 border border-blue-400/30 relative rounded-xl">
              <h2 className="text-lg sm:text-2xl font-semibold text-blue-100">{item.event}</h2>
              <small className="mb-3 inline-block text-green-300 font-bold text-sm sm:text-md">{item.year}</small>
              <p className='text-blue-200 text-sm sm:text-base leading-relaxed'>{item.description}</p>
              {item.videoSrc && (
                <button
                  onClick={() => openModal(item.videoSrc)}
                  className="mt-4 hover:cursor-pointer text-xs sm:text-md md:text-base md:font-semibold text-green-400 border-2 border-green-400/50 px-3 py-1 rounded-lg hover:bg-green-400/20 transition-all duration-300 font-medium backdrop-blur-sm whitespace-nowrap"
                >
                  🎥 Show Video
                </button>
              )}
              <span
                className={`absolute top-7 z-10 ${
                  item.position === "left"
                    ? "timeline-arrow-left right-[-15px] border-t-15 border-t-transparent border-b-15 border-b-transparent border-l-15 border-l-blue-800/60"
                    : "timeline-arrow-right left-[-15px] border-t-15 border-t-transparent border-b-15 border-b-transparent border-r-15 border-r-blue-800/60"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline