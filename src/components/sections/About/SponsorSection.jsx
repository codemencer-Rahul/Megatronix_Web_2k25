import React, { useState } from 'react'
import { X } from 'lucide-react';
import AboutUsData from '../../../lib/data/AboutUsData';
import LogoLoop from '../../ui/animatedComponents/LogoLoop'; //logo loop component

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

        {/* Modal for Mobile */}
        {showModal && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-24"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(12px)' }}
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative bg-[var(--surface-black)] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              style={{ border: '2px solid var(--yellow-primary)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[var(--dark-black)] transition-colors"
              >
                <X className="w-6 h-6" color="var(--yellow-primary)" />
              </button>

              {/* All Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
                {allLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 rounded-lg"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        </>
    )
}

export default SponsorSection
