import React, { useRef, useEffect, useState } from "react";
import GridMotion from "../ui/GridMotion";
import MobileGallery from "../ui/MobileGallery";
import galleryImages, { getGridItems } from "../../lib/data/galleryImages";

const GallerySection = () => {
  const items = getGridItems(28);

  // Mobile wrapper ref and state to dynamically reserve footer space and show a scroll indicator
  const mobileWrapperRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(140);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const wrapper = mobileWrapperRef.current;

    const updateLayout = () => {
      // measure header/nav so content does not sit under it
      const headerEl = document.querySelector('header');
      const navH = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 0;
      if (wrapper) {
        wrapper.style.paddingTop = `${navH + 8}px`;
        wrapper.style.setProperty('--nav-height', `${navH}px`);
        // remove any max-height or bottom padding so gallery shrink-wraps to content
        wrapper.style.maxHeight = 'none';
        wrapper.style.paddingBottom = '0px';
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  return (
    <section id="gallery" className="sm:min-h-screen">
      {/* Desktop and up: GridMotion */}
      <div className="hidden sm:block h-full">
        <GridMotion items={items} gradientColor="rgba(0,0,0,0.8)" />
      </div>

      {/* Small screens: Mobile optimized gallery (replaces MagicBento) */}
      <div className="block sm:hidden">
        <div
          ref={mobileWrapperRef}
          className="mobile-bento-wrapper"
          style={{
            maxHeight: `calc(100vh - ${footerHeight}px - var(--nav-height, 0px))`,
            overflowY: 'auto',
            paddingBottom: `${footerHeight + 8}px`,
            paddingTop: 'calc(var(--nav-height, 0px) + 8px)',
            position: 'relative'
          }}
        >
          <MobileGallery items={galleryImages} maxItems={galleryImages.length} />

          <div className={`mobile-scroll-indicator ${showIndicator ? 'visible' : ''}`} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
