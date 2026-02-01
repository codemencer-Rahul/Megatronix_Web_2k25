import React, { useState, useEffect } from 'react'
import LetterGlitch from '../components/ui/animatedComponents/LetterGlitch';
import TeamSection from '../components/sections/TeamSection';

function TeamPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content immediately, defer LetterGlitch initialization
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    // Immediate lightweight loading state
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: 'var(--black)' }}
      >
        <div className="text-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
            style={{ color: 'var(--yellow-primary)' }}
          />
          <p className="mt-4 text-lg" style={{ color: 'var(--yellow-primary)' }}>Loading Team...</p>
        </div>
      </div>
    );
  }

  return (
    <LetterGlitch glitchSpeed={150} smooth={false}>
      <TeamSection />
    </LetterGlitch>
  )
}

export default TeamPage
