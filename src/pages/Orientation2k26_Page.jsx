import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModalImage from '../components/layout/ModalImage';
import LetterGlitch from '../components/ui/animatedComponents/LetterGlitch';
import { orientationImages } from '../lib/data/orientationImages';
import { loadingPhrases } from '../lib/data/loadingPhrases';

function Orientation2k26_Page() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedMap, setLoadedMap] = useState(() => Array(orientationImages.length).fill(false));

  const getGridClass = (span) => {
    switch (span) {
      case 'big':
        return 'md:col-span-2 md:row-span-2';
      case 'row':
        return 'md:col-span-2';
      case 'col':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  // Preload images and track loading state
  useEffect(() => {
    let mounted = true;
    const loaders = [];

    orientationImages.forEach((image, idx) => {
      if (loadedMap[idx]) return;

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
      img.src = image.src;

      loaders.push({ img, onLoad, onError, timeoutId });
    });

    return () => {
      mounted = false;
      loaders.forEach(({ img, onLoad, onError, timeoutId }) => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onError);
        if (timeoutId) clearTimeout(timeoutId);
      });
    };
  }, [loadedMap]);

  return (
    <LetterGlitch>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.9 }
            50% { transform: scale(1.03); opacity: 1 }
            100% { transform: scale(1); opacity: 0.9 }
          }
        `}
      </style>
      <div className="min-h-screen relative pt-30 pb-16 px-4 sm:px-8 lg:px-16">
        {/* Header Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--white) mb-4">
          Orientation <span className="text-(--yellow-primary)">2K26</span>
        </h1>
        <p className="text-(--gray-text) text-lg sm:text-xl max-w-2xl mx-auto">
          Capturing the memorable moments of our freshers' journey into MEGA
        </p>
        <div className="h-1 w-32 bg-linear-to-r from-(--yellow-primary) to-(--yellow-hover) mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {orientationImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={`group relative overflow-hidden rounded-xl cursor-pointer ${getGridClass(image.span)}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(image.src)}
            style={{
              border: '1.5px solid rgba(52, 160, 164, 0.4)',
              background: 'var(--surface-black)',
              willChange: 'transform',
              boxShadow: '0 0 35px rgba(52, 160, 164, 0.35), 0 0 60px rgba(52, 160, 164, 0.2), inset 0 0 20px rgba(52, 160, 164, 0.08)',
            }}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-(--yellow-primary) opacity-40 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-(--yellow-primary) opacity-40 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-(--yellow-primary) opacity-40 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-(--yellow-primary) opacity-40 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>

            {/* Image */}
            <img
              src={image.src}
              alt={`Orientation moment ${image.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              style={{ willChange: 'transform' }}
            />

            {/* Loading Overlay */}
            {!loadedMap[index] && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}>
                <div style={{
                  background: 'rgba(3, 7, 18, 0.7)',
                  color: '#9ff0c7',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '14px',
                  animation: 'pulse 1.6s ease-in-out infinite'
                }}>
                  {loadingPhrases[index % loadingPhrases.length]}
                </div>
              </div>
            )}

            {/* Combined Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-200"
            ></div>

            {/* Border Glow on Hover */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              style={{
                boxShadow: '0 0 50px rgba(52, 160, 164, 0.6), 0 0 80px rgba(52, 160, 164, 0.35), inset 0 0 30px rgba(52, 160, 164, 0.2)',
                border: '1.5px solid rgba(52, 160, 164, 0.7)',
              }}
            ></div>

            {/* Image Number Badge */}
            <div
              className="absolute top-3 left-3 px-2.5 py-1 text-xs font-mono font-bold text-(--black) opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
              }}
            >
              #{String(image.id).padStart(2, '0')}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View Note */}
      <motion.p
        className="text-center text-(--gray-muted) text-sm mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Click on any image to view in full size
      </motion.p>
  {/* Modal for Full-Size View */}
        {selectedImage && (
          <ModalImage
            modalImage={selectedImage}
            setModalImage={setSelectedImage}
          />
        )}
      </div>
    </LetterGlitch>
  );
}

export default Orientation2k26_Page;
