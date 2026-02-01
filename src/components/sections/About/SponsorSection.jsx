import React, { useState } from 'react'
import AboutUsData from '../../../lib/data/AboutUsData';
import LogoLoop from '../../ui/animatedComponents/LogoLoop'; //logo loop component
import SponsorModal from './SponsorModal';

const SponsorSection = () => {
  const [showModal, setShowModal] = useState(false);
  const allLogos = [...AboutUsData.logo1, ...AboutUsData.logo2];

    return (
        <>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--white)' }}>
                          Our Partners & Sponsors
                        </h2>

        {/* Desktop View - Logo Loop */}
        <div className="hidden md:block" style={{ position: 'relative', overflow: 'hidden' }}>
                          <LogoLoop
                            logos={AboutUsData.logo1}
            speed={80}
                            direction="left"
            logoHeight={100}
            gap={60}
                            fadeOut
                            fadeOutColor="var(--black)"
                            ariaLabel="Our partners and sponsors"
                          />
                          <div className="my-8"></div>
                          <LogoLoop
                            logos={AboutUsData.logo2}
            speed={80}
                            direction="right"
            logoHeight={100}
            gap={60}
                            fadeOut
                            fadeOutColor="var(--black)"
                            ariaLabel="Our partners and sponsors"
                          />
                        </div>

        {/* Mobile View - Static Logos with Button */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8 flex-wrap">
            {allLogos.slice(10, 13).map((logo, index) => (
              <div key={index} className="w-24 h-24 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 rounded-lg font-medium transition-all"
            style={{
              backgroundColor: 'var(--yellow-primary)',
              color: 'var(--dark-black)',
              border: '1px solid var(--yellow-primary)'
            }}
          >
            View All Partners
          </button>
        </div>

        {/* Sponsor modal only for Mobile */}
        {showModal && (
          <SponsorModal allLogos={allLogos} setShowModal={setShowModal} />
        )}
        </>
    )
}

export default SponsorSection
