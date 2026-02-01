import React from 'react'
import { X } from 'lucide-react';

const SponsorModal = ({allLogos, setShowModal}) => {
    return (
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
    )
}

export default SponsorModal
