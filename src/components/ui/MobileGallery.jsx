import React, { useState, useCallback } from 'react';
import './MobileGallery.css';
import Lightbox from './Lightbox';
import { loadingPhrases } from '../../lib/data/loadingPhrases';

const createThumb = (url, width = 200) => {
  try {
    if (!url.includes('/upload/')) return url;
    return url.replace('/upload/', `/upload/c_scale,w_${width}/`);
  } catch (e) {
    return url;
  }
};

const ImageTile = ({ src, index, onOpen }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const thumb = createThumb(src, 200);
  const phrase = failed ? 'Pixel lost in transit.' : loadingPhrases[index % loadingPhrases.length];

  // fallback placeholder SVG data URI
  const createPlaceholder = (w = 800, h = 450, text = 'Image unavailable') => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><rect fill='%230b0b0b' width='100%' height='100%'/><text x='50%' y='50%' fill='%23b8c1c8' font-size='20' font-family='Arial,Helvetica,sans-serif' dominant-baseline='middle' text-anchor='middle'>${text}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFailed(true);
      setLoaded(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="mobile-gallery-item">
      <div className={`mobile-thumb ${loaded || failed ? 'hidden' : 'visible'}`} style={{ backgroundImage: `url(${thumb})` }} />

      <div className={`mobile-loading-overlay ${loaded ? 'hidden' : 'visible'}`}>
        <div className={`mobile-loading-text ${failed ? 'failed' : ''}`}>{phrase}</div>
      </div>

      <img
        src={failed ? createPlaceholder() : src}
        alt={`Gallery ${index + 1}`}
        loading="lazy"
        className={`mobile-gallery-img ${loaded ? 'loaded' : 'loading'}`}
        onLoad={() => { clearTimeout(timeoutRef.current); setLoaded(true); }}
        onError={() => { clearTimeout(timeoutRef.current); setFailed(true); setLoaded(true); }}
        onClick={() => onOpen(index)}
      />
    </div>
  );
};

const MobileGallery = ({ items = [], maxItems = 12 }) => {
  // ensure unique images only
  const uniqueItems = Array.from(new Set(items));
  const displayItems = uniqueItems.slice(0, maxItems);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = useCallback((i) => {
    setStartIndex(i);
    setLightboxOpen(true);
  }, []);

  return (
    <>
      <div className="mobile-gallery">
        {displayItems.map((src, i) => (
          <ImageTile key={src} src={src} index={i} onOpen={openLightbox} />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox images={displayItems} startIndex={startIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
};

export default MobileGallery;
