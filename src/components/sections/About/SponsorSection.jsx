import React from 'react'
import AboutUsData from '../../../lib/data/AboutUsData';
import LogoLoop from '../../ui/animatedComponents/LogoLoop'; //logo loop component

const SponsorSection = () => {
    return (
        <>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--white)' }}>
                          Our Partners & Sponsors
                        </h2>
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
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
        </>
    )
}

export default SponsorSection
