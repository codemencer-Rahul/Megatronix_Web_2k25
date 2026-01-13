import React, { useState, useCallback } from 'react';
import { User } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GmailIcon } from './icons';

// Moved styles outside component to avoid recreating on every render
const cardStyles = {
  background: 'linear-gradient(to bottom right, var(--black), var(--surface-black), var(--dark-black))',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'var(--yellow-primary)',
  boxShadow: '0 0 6px var(--yellow-shadow)',
  backdropFilter: 'blur(4px)'
};

const imageContainerStyles = {
  background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), var(--dark-black))',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'var(--yellow-border-soft)'
};

const infoSectionStyles = {
  background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), var(--dark-black))'
};

const glowStyles = {
  background: 'var(--yellow-primary)',
  opacity: 0.12,
  filter: 'blur(8px)',
};

const yearStyles = {
  color: 'var(--yellow-primary)'
};

const nameStyles = {
  color: 'var(--yellow-hover)'
};

const iconDefaultStyles = {
  color: 'var(--yellow-primary)'
};

export default function ProfileCard({ name, year, imageUrl, email, linkedin, github }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Memoize event handlers
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback((e) => {
    setImageError(true);
    e.target.style.display = 'none';
    const yellowPrimary = getComputedStyle(document.documentElement)
      .getPropertyValue('--yellow-primary')
      .trim();
    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="${yellowPrimary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg></div>`;
  }, []);

  const getIconStyle = useCallback((iconName) => {
    return hoveredIcon === iconName
      ? { color: 'var(--yellow-hover)' }
      : iconDefaultStyles;
  }, [hoveredIcon]);

  return (
    <div className="relative w-[280px] h-[380px]">
      {/* Simplified single glow layer */}
      <div className="absolute -inset-2 rounded-2xl" style={glowStyles}></div>

      {/* Inner card */}
      <div className="relative rounded-2xl overflow-hidden h-full" style={cardStyles}>
        {/* Image section */}
        <div
          className="relative h-[260px] overflow-hidden flex items-center justify-center"
          style={imageContainerStyles}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-center"
              loading="lazy" // CRITICAL: Add lazy loading
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
            />
          ) : (
            <User className="h-16 w-16" style={iconDefaultStyles} />
          )}
        </div>

        {/* Info section */}
        <div className="relative h-[120px]" style={infoSectionStyles}>
          {/* Angled line */}
          <svg className="absolute top-0 left-0 w-full" height="40" viewBox="0 0 280 40" preserveAspectRatio="none">
            <line x1="110" y1="7" x2="280" y2="7" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="75" y1="33" x2="110" y2="7" stroke="var(--yellow-hover)" strokeWidth="1" opacity="0.45" />
            <line x1="0" y1="33" x2="75" y2="33" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="0" y1="40" x2="280" y2="40" stroke="var(--yellow-soft)" strokeWidth="1" opacity="0.35" />
          </svg>

          {/* Icons */}
          <div className="absolute top-[13px] left-[110px] right-4 flex items-center justify-around px-2">
            <a
              href={`mailto:${email}`}
              className="transition-all hover:scale-110 flex items-center"
              style={getIconStyle('gmail')}
              onMouseEnter={() => setHoveredIcon('gmail')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <GmailIcon className="h-5 w-5" fill="var(--yellow-primary)" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110 flex items-center"
              style={getIconStyle('linkedin')}
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <LinkedinIcon className="h-5 w-5" fill="var(--yellow-primary)" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110 flex items-center"
              style={getIconStyle('github')}
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <GithubIcon className="h-5 w-5" fill="var(--yellow-primary)" />
            </a>
          </div>

          {/* Text */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-medium mb-1 tracking-wider uppercase" style={yearStyles}>
              {year}
            </p>
            <h2 className="text-lg font-bold tracking-wide" style={nameStyles}>
              {name}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
