import React, { useState, useCallback } from 'react';
import './MobileGallery.css';
import Lightbox from './Lightbox';

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
  const thumb = createThumb(src, 200);

  return (
    <div className="mobile-gallery-item">
      <div className={`mobile-thumb ${loaded ? 'hidden' : 'visible'}`} style={{ backgroundImage: `url(${thumb})` }} />
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        loading="lazy"
        className={`mobile-gallery-img ${loaded ? 'loaded' : 'loading'}`}
        onLoad={() => setLoaded(true)}
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
