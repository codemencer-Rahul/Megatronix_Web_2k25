import {
  Calendar,
  Gamepad,
  Trophy
} from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { LetterGlitch, SpotlightCard, StatsSection, Timeline, VideoComponent } from '../';
import gamingEvent from "../../assets/videos/gamingEvent.mp4";
import paridhiVid from "../../assets/videos/paridhiVid.mp4";
import techxtraVid from "../../assets/videos/techxtraVid.mp4";
import warVid from "../../assets/videos/warVid.mp4";
import { CodeXmlIcon, TargetIcon, RocketIcon } from "../ui/icons";

function AboutSection() {
  const embeddedVideoRef = useRef(null);
  const milestones = [
    {
      year: "2009",
      event: "Megatronix Founded",
      description:
        "In 2009, Megatronix was born as the official technical club of MSIT — a hub for curiosity, innovation, and creativity. What began as a small team with a vision soon became a space where students could explore, experiment, and bring ideas to life.",
    },
    {
      year: "2012",
      event: "First Paridhi",
      description:
        "In 2012, we organized our very first flagship event, Paridhi. It was more than just an event; it marked the beginning of a tradition—a platform where talent could shine and the spirit of innovation could take center stage. Over time, Paridhi grew to become one of Eastern India’s largest technical festivals, uniting creativity, competition, and cutting-edge ideas on a grand stage.",
    },
    {
      year: "2024",
      event: "First 15kg Robo War",
      description:
        "Fast forward to 2024, we witnessed the thrill of our inaugural 15kg Robo War competition. Students engineered, strategized, and battled, turning creativity into action. The event became a testament to the skills and determination nurtured within our community over the years.",
    },
    {
      year: "2025",
      event: "First App Launch",
      description:
        "In 2025, we embraced the digital era by launching our very first official app for Paridhi. This app streamlined event management and registrations, making it easier for participants to engage while showcasing our commitment to innovation and seamless experiences.",
    },
    {
      year: "2025",
      event: "Organized MegaExpo for the first time",
      description:
        "The same year marked the debut of MegaExpo, a grand platform where ideas transformed into impact. From technological innovations to social solutions, young innovators from multiple institutions and diverse backgrounds pitched their bold concepts to panels of startup founders, industry experts, and mentors, igniting collaboration and inspiration across the campus.",
    },
    {
      year: "2025",
      event: "Organized Proto-X for the first time",
      description:
        "Proto-X made its first appearance as an inter-college event, welcoming innovators beyond just college students from diverse backgrounds. Participants built and showcased hardware and software prototypes, transforming ideas into tangible solutions. Guided by experts, the event became a hands-on journey of learning and discovery.",
    },
    {
      year: "2026",
      event: "14 Years Strong",
      description:
        "By 2026, Megatronix marked 14 unforgettable years of dreams, dedication, and determination. From the first spark of an idea to shared moments of pride, our journey has been driven by passion, creativity, and a deep sense of belonging. Each milestone brought us closer as a family, inspiring generations and leaving a legacy of growth and endless possibilities.",
    },
  ];

  const events = [
    {
      title: "RoboWar",
      description:
        "An intense robotics combat event where participants design and battle robots in a controlled arena. RoboWar challenges engineering skills, strategic thinking, and teamwork while delivering an electrifying competitive experience.",
      icon: RocketIcon,
      videoSrc: warVid,
    },
    {
      title: "Paridhi",
      description:
        "Step into Paridhi, our flagship annual technical festival where innovation takes center stage. From thrilling competitions to hands-on workshops and dazzling tech showcases, participants experience the cutting edge of technology and creativity.",
      icon: Trophy,
      videoSrc: paridhiVid,
    },
    {
      title: "TechXtra",
      description:
        "TechXtra sparks the imagination of first-year students with exclusive intra-college challenges. This annual compitition encourages experimentation, teamwork, and the joy of creating something extraordinary from scratch.",
      icon: CodeXmlIcon,
      videoSrc: techxtraVid,
    },
    {
      title: "Gaming Events",
      description:
        "Quarterly gaming events that bring together students in thrilling battles of strategy, skill, and teamwork. From esports tournaments to casual gaming challenges, these events foster friendly competition, sharpen reflexes, and build a vibrant community of gamers and tech enthusiasts.",
      icon: Gamepad,
      videoSrc: gamingEvent,
    },
    {
      title: "Coding Competitions and Hackathons",
      description:
        "Immerse yourself in our quarterly coding competitions and hackathons, where every challenge sparks creativity and pushes boundaries. Collaborate with peers, tackle real-world problems, and bring your ideas to life — an arena to sharpen skills, innovate, and experience the thrill of coding at its best.",
      icon: CodeXmlIcon,
    }, 
    {
      title: "Robo Race",
      description:
        "A fast-paced robotics competition focused on speed, control, and precision. Participants race their robots through challenging tracks and obstacles, testing mechanical design, programming accuracy, and problem-solving skills.",
      icon: TargetIcon,
    }

  ];

  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  // Mute embedded video when background music plays or modal opens
  useEffect(() => {
    const handleAudioPlay = () => {
      if (embeddedVideoRef.current) {
        embeddedVideoRef.current.muted = true;
      }
      // Mute all carousel videos when background music plays
      videoRefs.current.forEach(video => {
        if (video) video.muted = true;
      });
    };

    // Listen for any audio element playing (background music)
    document.addEventListener('play', handleAudioPlay, true);

    return () => {
      document.removeEventListener('play', handleAudioPlay, true);
    };
  }, []);

  const handleCarouselChange = (index) => {
    // Pause all videos except the current one
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const openModal = (videoSrc) => {
    // Mute embedded video when opening modal
    if (embeddedVideoRef.current) {
      embeddedVideoRef.current.muted = true;
    }
    setActiveVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveVideo(null);
  };


  return (
    <LetterGlitch>
      <div className="min-h-screen pt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-8">
            <SpotlightCard className="backdrop-blur-sm rounded-xl p-6"
              style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--yellow-border-soft)' }}
              spotlightColor="var(--yellow-shadow)" >
              <div className="flex items-center space-x-2 mb-4">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--yellow-primary)' }}>
                  Our Mission
                </h2>
              </div>
              <p style={{ color: 'var(--gray-text)' }}>
                To foster technical excellence and innovation among students by
                providing platforms for learning, collaboration, and skill
                development in emerging technologies. We aim to bridge the gap
                between academic knowledge and industry requirements.
              </p>
            </SpotlightCard>

            <SpotlightCard className="backdrop-blur-sm rounded-xl p-6"
              style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--yellow-border-soft)' }}
              spotlightColor="var(--yellow-shadow)" >
              <div className="flex items-center space-x-2 mb-4">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--yellow-primary)' }}>
                  Our Vision
                </h2>
              </div>
              <p style={{ color: 'var(--gray-text)' }}>
                To be the leading technical community that nurtures future
                technology leaders and innovators. We envision creating a
                ecosystem where creativity meets technology to solve real-world
                problems and drive positive change in society.
              </p>
            </SpotlightCard>
          </div>

          {/* History Timeline */}
          <div className="my-8">
            <h2 className="text-4xl font-extrabold text-center" style={{ color: 'var(--white)' }}>
              Our Journey
            </h2>
            <Timeline milestones={milestones} openModal={openModal} />
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <StatsSection />
          </div>

          {/* Events We Conduct - Carousel */}
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-12">
              Events We Specialize In
            </h2>
            <div className="relative">
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={false}
                interval={5000}
                transitionTime={500}
                swipeable={true}
                emulateTouch={true}
                centerMode={false}
                className="events-carousel"
                onChange={handleCarouselChange}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: 'var(--yellow-primary)',
                        boxShadow: '0 4px 20px rgba(118, 200, 147, 0.6)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--yellow-hover)';
                        e.currentTarget.style.boxShadow = '0 6px 30px rgba(118, 200, 147, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--yellow-primary)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(118, 200, 147, 0.6)';
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--black)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: 'var(--yellow-primary)',
                        boxShadow: '0 4px 20px rgba(118, 200, 147, 0.6)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--yellow-hover)';
                        e.currentTarget.style.boxShadow = '0 6px 30px rgba(118, 200, 147, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--yellow-primary)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(118, 200, 147, 0.6)';
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--black)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  )
                }
              >
              {events.map((event, index) => (
                <div
                  key={index}
                  className="px-4 pb-8"
                >
                  <div
                    className="backdrop-blur-sm rounded-2xl transition-all duration-300 mx-auto max-w-3xl"
                    style={{
                      backgroundColor: 'var(--surface-black)',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'var(--yellow-primary)',
                      boxShadow: '0 0 30px rgba(118, 200, 147, 0.3), inset 0 0 20px rgba(118, 200, 147, 0.05)',
                      minHeight: '550px',
                    }}
                  >
                    <div className="relative p-4 sm:p-6 h-full flex flex-col">
                      {/* Header Section */}
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <div
                          className="p-3 rounded-xl shadow-lg"
                          style={{ background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))' }}
                        >
                          <event.icon className="h-6 w-6" style={{ color: 'var(--black)' }} />
                        </div>
                        <h3 className="font-bold text-2xl md:text-3xl" style={{ color: 'var(--white)' }}>
                          {event.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-base mb-6 text-center max-w-2xl mx-auto line-clamp-3" style={{ color: 'var(--gray-text)' }}>
                        {event.description}
                      </p>

                      {/* Video Display */}
                      {event.videoSrc && (
                        <div className="rounded-xl overflow-hidden " style={{ border: '3px solid var(--yellow-primary)', minHeight: '400px', maxHeight: '450px' }}>
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={event.videoSrc}
                            loop
                            muted
                            playsInline
                            controls
                            controlsList="nodownload"
                            className="w-full h-full object-contain"
                            style={{ display: 'block', backgroundColor: 'var(--black)' }}
                          />
                        </div>
                      )}

                      {!event.videoSrc && (
                        <div
                          className="rounded-xl flex items-center justify-center "
                          style={{ 
                            border: '3px solid var(--yellow-primary)',
                            minHeight: '400px',
                            backgroundColor: 'var(--yellow-border-soft)'
                          }}
                        >
                          <p className="text-xl font-bold" style={{ color: 'var(--gray-text)' }}>
                            Coming Soon
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              </Carousel>
            </div>
          </div>

          <style jsx>{`
            .events-carousel .control-arrow {
              background: var(--yellow-primary) !important;
              opacity: 1 !important;
              border-radius: 50% !important;
              width: 60px !important;
              height: 60px !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              z-index: 2 !important;
              box-shadow: 0 4px 20px rgba(118, 200, 147, 0.6) !important;
            }

            .events-carousel .control-arrow:hover {
              opacity: 1 !important;
              background: var(--yellow-hover) !important;
              box-shadow: 0 6px 30px rgba(118, 200, 147, 0.8) !important;
            }

            .events-carousel .control-arrow::before {
              border-color: var(--black) !important;
              border-width: 4px 4px 0 0 !important;
            }

            .events-carousel .control-prev {
              left: 15px !important;
            }

            .events-carousel .control-next {
              right: 15px !important;
            }

            .events-carousel .control-dots {
              margin-bottom: 10px !important;
            }

            .events-carousel .dot {
              background: var(--gray-text) !important;
              box-shadow: none !important;
              width: 12px !important;
              height: 12px !important;
              opacity: 0.5 !important;
            }

            .events-carousel .dot.selected {
              background: var(--yellow-primary) !important;
              opacity: 1 !important;
            }
          `}</style>

        </div>

        {/* Video Modal */}
        {showModal && (
          <VideoComponent videoSrc={activeVideo} closeModal={closeModal} />
        )}
      </div>
    </LetterGlitch>
  );
}

export default AboutSection;
