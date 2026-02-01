import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";
import { loadingPhrases } from "../../../lib/data/loadingPhrases";
import Lightbox from './Lightbox';

const GridMotion = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  const [loadedMap, setLoadedMap] = useState(() => Array(totalItems).fill(false));

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  const [failureMap, setFailureMap] = useState(() => Array(totalItems).fill(false));

  // Lightbox state for click-to-view behavior
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // build unique image array for lightbox (only valid image URLs)
  const displayItems = Array.from(
    new Set(
      combinedItems.filter((c) => typeof c === 'string' && (c.startsWith('http') || c.startsWith('data:')))
    )
  );

  const openLightbox = (content) => {
    const idx = displayItems.indexOf(content);
    if (idx >= 0) {
      setStartIndex(idx);
      setLightboxOpen(true);
    }
  };

  // Prefetch images and mark as loaded when they finish / timeout on failure
  useEffect(() => {
    let mounted = true;
    const loaders = [];

    combinedItems.forEach((content, idx) => {
      if (typeof content === 'string' && (content.startsWith('http') || content.startsWith('data:'))) {
        // If already loaded in state, skip
        if (loadedMap[idx] || failureMap[idx]) return;

        const img = new Image();
        let timeoutId = null;

        const markLoaded = () => {
          if (!mounted) return;
          setLoadedMap(prev => {
            const copy = prev.slice();
            copy[idx] = true;
            return copy;
          });
        };

        const markFailed = () => {
          if (!mounted) return;
          setFailureMap(prev => {
            const copy = prev.slice();
            copy[idx] = true;
            return copy;
          });
          setLoadedMap(prev => {
            const copy = prev.slice();
            copy[idx] = true;
            return copy;
          });
        };

        const onLoad = () => {
          clearTimeout(timeoutId);
          markLoaded();
        };

        const onError = () => {
          clearTimeout(timeoutId);
          markFailed();
        };

        // Set a network timeout (8s)
        timeoutId = setTimeout(() => {
          onError();
        }, 8000);

        img.addEventListener('load', onLoad);
        img.addEventListener('error', onError);
        img.src = content;

        loaders.push({ img, onLoad, onError, timeoutId });

      } else {
        // mark non-image content as loaded
        setLoadedMap(prev => {
          const copy = prev.slice();
          copy[idx] = true;
          return copy;
        });
      }
    });

    return () => {
      mounted = false;
      loaders.forEach(({ img, onLoad, onError, timeoutId }) => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onError);
        if (timeoutId) clearTimeout(timeoutId);
      });
    };
  }, [combinedItems, failureMap, loadedMap]);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                const isImage = typeof content === "string" && (content.startsWith("http") || content.startsWith("data:"));
                return (
                  <div key={itemIndex} className="row__item">
                    <div
                      className="row__item-inner"
                      style={{ backgroundColor: "#111", cursor: isImage ? 'pointer' : 'default' }}
                      role={isImage ? 'button' : undefined}
                      tabIndex={isImage ? 0 : undefined}
                      onClick={() => isImage && openLightbox(content)}
                      onKeyDown={(e) => isImage && e.key === 'Enter' && openLightbox(content)}
                    >
                      {isImage ? (
                        <>
                          <div
                            className="row__item-img"
                            style={{
                              backgroundImage: `url(${content})`,
                            }}
                          />
                          {!loadedMap[rowIndex * 7 + itemIndex] && (
                            <div className="grid-loading-overlay">
                              <div className="grid-loading-text">{loadingPhrases[(rowIndex * 7 + itemIndex) % loadingPhrases.length]}</div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <Lightbox images={displayItems} startIndex={startIndex} onClose={() => setLightboxOpen(false)} />
        )}
        <div className="fullview" />
      </section>
    </div>
  );
};

export default GridMotion;
