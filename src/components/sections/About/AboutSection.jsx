import { useState } from 'react';
import LetterGlitch from '../../ui/animatedComponents/LetterGlitch';
import SpotlightCard from '../../ui/animatedComponents/SpotlightCard';
import Timeline from './HistoryTimeline';
import VideoDisplayModal from '../../layout/VideoDisplayModal';
import AboutUsData from '../../../lib/data/AboutUsData';
import SponsorSection from './SponsorSection';
import StatsSection from './StatsSection';

function AboutSection() {
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


  return (
    <LetterGlitch >

      <div className=" min-h-screen pt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Mission & Vision card (with spotlight card)*/}
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
            <Timeline milestones={AboutUsData.milestones} openModal={openModal} />
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <StatsSection />
          </div>

          {/* Sponsors/Partners Logo Loop */}
          <div className="mb-20">
            <SponsorSection />
          </div>

          {/* Events We specialized in - Bento Grid */}
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--white)' }}>
              Events We Specialize In
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AboutUsData.events.map((event, index) => (
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

                    {/* Watch video or coming soon button*/}
                    {event.videoSrc ? (
                      <button
                        onClick={() => openModal(event.videoSrc)}
                        className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:cursor-pointer"
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
          <VideoDisplayModal videoSrc={activeVideo} closeModal={closeModal} />
        )}
      </div>
    </LetterGlitch>
  );
}

export default AboutSection;
