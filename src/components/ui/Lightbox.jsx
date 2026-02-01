import React, { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ images = [], startIndex = 0, onClose }) => {
  const [index, setIndex] = React.useState(startIndex);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  const goNext = () => setIndex((i) => Math.min(i + 1, images.length - 1));
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
        <button className="lightbox-prev" onClick={goPrev} aria-label="Previous">‹</button>
        <img src={images[index]} alt={`Gallery ${index + 1}`} className="lightbox-image" />
        <button className="lightbox-next" onClick={goNext} aria-label="Next">›</button>
        <div className="lightbox-counter">{index + 1} / {images.length}</div>
      </div>
    </div>
  );
};

export default Lightbox;
