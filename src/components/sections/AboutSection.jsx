import {
  Calendar,
  Gamepad,
  Trophy
} from "lucide-react";
import { useState } from 'react';
import { LetterGlitch, SpotlightCard, StatsSection, Timeline, VideoComponent } from '../';
import gamingEvent from "../../assets/videos/gamingEvent.mp4";
import paridhiVid from "../../assets/videos/paridhiVid.mp4";
import techxtraVid from "../../assets/videos/techxtraVid.mp4";
import warVid from "../../assets/videos/warVid.mp4";
import { CodeXmlIcon, TargetIcon } from "../ui/icons";

function AboutSection() {
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
    // {
    //   title: "Orientation",
    //   description:
    //     "Gain insights and inspiration from industry experts and thought leaders during our quarterly Tech Talks. Learn firsthand about emerging trends, real-world challenges, and the stories behind groundbreaking innovations.",
    //   icon: UsersGroupIcon,
    //   frequency: "Annually",
    // },
    // {
    //   title: "Workshops",
    //   description:
    //     "Our hands-on workshops empower participants to turn ideas into reality. Dive into project development sessions, explore innovative tech solutions, and build skills that last a lifetime.",
    //   icon: BulbSvg,
    //   frequency: "Annually",
    // },
    {
      title: "TechXtra",
      description:
        "TechXtra sparks the imagination of first-year students with exclusive intra-college challenges. This annual compitition encourages experimentation, teamwork, and the joy of creating something extraordinary from scratch.",
      icon: CodeXmlIcon,
      videoSrc: techxtraVid,
    },
    // {
    //   title: "Pre-Paridhi / Pre-TechXtra Events",
    //   description:
    //     "Kickstart the excitement with our quarterly pre-events that set the stage for Paridhi and TechXtra. These sessions include mini competitions, interactive workshops, and collaborative challenges, giving participants a head start to innovate, learn, and refine their ideas before the main events.",
    //   icon: Calendar,
    //   frequency: "Quarterly",
    // },
    {
      title: "Paridhi",
      description:
        "Step into Paridhi, our flagship annual technical festival where innovation takes center stage. From thrilling competitions to hands-on workshops and dazzling tech showcases, participants experience the cutting edge of technology and creativity.",
      icon: Trophy,
      videoSrc: paridhiVid,
    },
    {
      title: "Gaming Events",
      description:
        "Quarterly gaming events that bring together students in thrilling battles of strategy, skill, and teamwork. From esports tournaments to casual gaming challenges, these events foster friendly competition, sharpen reflexes, and build a vibrant community of gamers and tech enthusiasts.",
      icon: Gamepad,
      videoSrc: gamingEvent,
    },
    {
      title: "Coding Competitions / Hackathons",
      description:
        "Immerse yourself in our quarterly coding competitions and hackathons, where every challenge sparks creativity and pushes boundaries. Collaborate with peers, tackle real-world problems, and bring your ideas to life — an arena to sharpen skills, innovate, and experience the thrill of coding at its best.",
      icon: TargetIcon,
    }, 
    {
      title: "RoboWar",
      description:
        "An intense robotics combat event where participants design and battle robots in a controlled arena. RoboWar challenges engineering skills, strategic thinking, and teamwork while delivering an electrifying competitive experience.",
      icon: TargetIcon,
      videoSrc: warVid,
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

  const openModal = (videoSrc) => {
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

          {/* Events We Conduct */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Events We Specialize In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    backgroundColor: 'var(--surface-black)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'var(--yellow-border-soft)'
                  }}
                >
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <event.icon className="h-6 w-6" style={{ color: 'var(--yellow-primary)' }} color="var(--yellow-primary)" />
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--white)' }}>
                        {event.title}
                      </h3>
                  </div>

                  {/* 🎥 Show Video Button (below title) */}
                  {event.videoSrc && (
                    <button
                      onClick={() => openModal(event.videoSrc)}
                      className="hover:cursor-pointer mb-3 text-xs sm:text-sm px-3 py-1 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm whitespace-nowrap"
                      style={{
                        color: 'var(--yellow-primary)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'var(--yellow-primary)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--yellow-border-soft)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      🎥 Show Video
                    </button>
                  )}
                  </div>

                  {/* Description */}
                  <p style={{ color: 'var(--gray-text)' }}>{event.description}</p>
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
