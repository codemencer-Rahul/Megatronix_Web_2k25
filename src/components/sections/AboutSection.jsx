import {
  Gamepad,
  Trophy
} from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { LetterGlitch, SpotlightCard, StatsSection, Timeline, VideoComponent } from '../';
import gamingEvent from "../../assets/videos/gamingEvent.mp4";
import paridhiVid from "../../assets/videos/paridhiVid.mp4";
import techxtraVid from "../../assets/videos/techxtraVid.mp4";
import warVid from "../../assets/videos/warVid.mp4";

//importing all the logo from the assets folder
import FriendFm from "../../assets/images/91.9 Friends FM.jpg"
import BengalChess from "../../assets/images/Bengal Chess.jpg"
import BigBasket from "../../assets/images/Bigbasket.png"
import Bloggeradda from "../../assets/images/bloggeradda.jpeg"
import CalcuttaCacophony from "../../assets/images/Calcutta Cacophony.png"
import CollegeRivals from "../../assets/images/cllgrivals.jpeg"
import CocaCola from "../../assets/images/Coca-Cola.jpg"
import GamersGrub from "../../assets/images/gamersGrub.jpeg"
import Gfg from "../../assets/images/gfglogo.png"
import IntelSoftware from "../../assets/images/Intel Software.jpg"
import Lic from "../../assets/images/LIC-Logo.jpg"
import Microcenter from "../../assets/images/Micro Center India.png"
import CodingNinja from "../../assets/images/Coding Ninja.png"
import OhKolkata from "../../assets/images/Oh!Kolkata.jpg"
import Otaku from "../../assets/images/otaku.jpeg"
import PizzaHut from "../../assets/images/Pizza Hut.jpg"
import Popski from "../../assets/images/popski.jpeg"
import SIUK from "../../assets/images/SI-UK.jpg"
import SITICable from "../../assets/images/SITI Digital Cable Television.png"
import Tatacopper from "../../assets/images/tatacopper.jpeg"
import Tea from "../../assets/images/tea.jpeg"
import Xenon from "../../assets/images/Team Xenon.jpg"
import Tvs from "../../assets/images/TVS.png"
import WowMomo from "../../assets/images/Wow! Momo.jpg"

import { CodeXmlIcon, TargetIcon, RocketIcon } from "../ui/icons";
import LogoLoop from '../LogoLoop';

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
      title: "Gaming Events",
      description:
        "Quarterly gaming events bringing students together in thrilling battles of strategy, skill, and teamwork.",
      icon: Gamepad,
      videoSrc: gamingEvent,
    },

    {
      title: "Paridhi",
      description:
        "Our flagship annual technical festival featuring thrilling competitions, workshops, and cutting-edge tech showcases.",
      icon: Trophy,
      videoSrc: paridhiVid,
    },
    {
      title: "TechXtra",
      description:
        "An annual intra-college competition sparking imagination and experimentation among first-year students.",
      icon: CodeXmlIcon,
      videoSrc: techxtraVid,
    },
    {
      title: "RoboWar",
      description:
        "Intense robotics combat where participants design and battle robots in a controlled arena.",
      icon: RocketIcon,
      videoSrc: warVid,
    },
    {
      title: "Coding Competitions",
      description:
        "Quarterly coding competitions and hackathons where creativity meets real-world problem-solving.",
      icon: CodeXmlIcon,
    }, 
    {
      title: "Robo Race",
      description:
        "Fast-paced robotics competition focused on speed, control, and precision through challenging tracks.",
      icon: TargetIcon,
    },
    {
      title: "Robotics Workshops",
      description:
        "Hands-on workshops introducing students to fundamentals of robotics and autonomous systems.",
      icon: TargetIcon,
    }
  ];

  const logo1 = [
    {
      src: FriendFm,
      alt: "91.9 Friends FM",
    },
    {
      src: BengalChess,
      alt: "Bengal Chess",
    },
    {
      src: BigBasket,
      alt: "Big Basket",
    },
    {
      src: Bloggeradda,
      alt: "Bloggeradda",
    },
    {
      src: CalcuttaCacophony,
      alt: "Calcutta Cacophony",
    },
    {
      src: CollegeRivals,
      alt: "College Rivals",
    },
    {
      src: CocaCola,
      alt: "Coca Cola",
    },
    {
      src: GamersGrub,
      alt: "Gamers Grub",
    },
    {
      src: Gfg,
      alt: "GeeksforGeeks",
    },
    {
      src: IntelSoftware,
      alt: "Intel Software",
    },
    {
      src: Lic,
      alt: "LIC",
    },
    {
      src: Microcenter,
      alt: "Micro Center",
    }
  ];

  const logo2 = [
    {
      src: CodingNinja,
      alt: "Coding Ninjas",
    },
    {
      src: OhKolkata,
      alt: "Ohi Kolkata",
    },
    {
      src: Otaku,
      alt: "Otaku",
    },
    {
      src: PizzaHut,
      alt: "Pizza Hut",
    },
    {
      src: Popski,
      alt: "Popski",
    },
    {
      src: SIUK,
      alt: "Study in UK",
    },
    {
      src: SITICable,
      alt: "SITI Cable",
    },
    {
      src: Tatacopper,
      alt: "Tata Copper",
    },
    {
      src: Tea,
      alt: "Tea",
    },
    {
      src: Xenon,
      alt: "Xenon",
    },
    {
      src: Tvs,
      alt: "TVS",
    },
    {
      src: WowMomo,
      alt: "Wow! Momo",
    },
  ]

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
    <LetterGlitch >

      <div className=" min-h-screen pt-30">
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

          {/* Sponsors/Partners Logo Loop */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--white)' }}>
              Our Partners & Sponsors
            </h2>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={logo1}
                speed={80}
                direction="left"
                logoHeight={100}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="var(--black)"
                ariaLabel="Our partners and sponsors"
              />
              <div className="my-8"></div>
              <LogoLoop
                logos={logo2}
                speed={80}
                direction="right"
                logoHeight={100}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="var(--black)"
                ariaLabel="Our partners and sponsors"
              />
            </div>
          </div>

          {/* Events We Conduct - Bento Grid */}
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--white)' }}>
              Events We Specialize In
            </h2>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${index === 3 ? 'lg:col-span-3' : ''
                    }`}
                  style={{
                    backgroundColor: 'var(--surface-black)',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'var(--yellow-primary)',
                    boxShadow: '0 0 30px rgba(52, 160, 164, 0.3)',
                  }}
                >
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, var(--dark-black) 0%, var(--black) 100%)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))',
                          boxShadow: '0 0 20px rgba(52, 160, 164, 0.4)',
                        }}
                      >
                        <event.icon className="h-6 w-6" style={{ color: 'var(--black)' }} />
                      </div>
                      <h3 className="font-bold text-xl md:text-2xl" style={{ color: 'var(--white)' }}>
                        {event.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{
                        color: 'var(--gray-text)',
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Button */}
                    {event.videoSrc ? (
                      <button
                        onClick={() => openModal(event.videoSrc)}
                        className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))',
                          color: 'var(--black)',
                          boxShadow: '0 4px 20px rgba(52, 160, 164, 0.4)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 6px 30px rgba(52, 160, 164, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(52, 160, 164, 0.4)';
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
                    ) : (
                      <div
                          className="w-full py-3 px-6 rounded-lg font-semibold text-center"
                          style={{
                            backgroundColor: 'rgba(52, 160, 164, 0.2)',
                            color: 'var(--gray-text)',
                            border: '1px solid var(--yellow-border-soft)',
                          }}
                        >
                          Coming Soon
                      </div>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(52, 160, 164, 0.1) 0%, transparent 70%)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

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
