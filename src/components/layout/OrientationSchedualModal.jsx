import React from 'react';
import { X, Calendar } from 'lucide-react';

const OrientationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const schedule = [
    {
      date: "02/02/26 (Monday)",
      branches: "CSE-A, AIML-A, IT"
    },
    {
      date: "03/02/26 (Tuesday)",
      branches: "CSE-C, AIDS, IOT, CSE-D, CSIT"
    },
    {
      date: "04/02/26 (Wednesday)",
      branches: "ECE, EE, AIML-B, ECS"
    },
    {
      date: "05/02/26 (Thursday)",
      branches: "CSE-B, CYS, CSBS, CSE(DS)"
    },
    {
      date: "06/02/26 (Friday)",
      branches: "BCA, BBA, CE, ME"
    }
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-24"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full rounded-2xl overflow-hidden z-[10000]"
        style={{
          backgroundColor: 'var(--surface-black)',
          border: '2px solid var(--yellow-primary)',
          boxShadow: '0 0 60px rgba(52, 160, 164, 0.6)',
          animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="px-6 py-5 border-b"
          style={{
            background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))',
            borderColor: 'var(--yellow-primary)'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6" style={{ color: 'var(--black)' }} />
              <h2 className="text-2xl font-bold font-orbitron" style={{ color: 'var(--black)' }}>
                Orientation Schedule
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-all duration-200 hover:bg-black/10"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" style={{ color: 'var(--black)' }} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--dark-black)',
                  border: '1px solid var(--yellow-border-soft)',
                  boxShadow: '0 4px 15px rgba(52, 160, 164, 0.1)'
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div
                    className="font-bold text-base sm:text-lg shrink-0"
                    style={{ color: 'var(--yellow-primary)' }}
                  >
                    {item.date}
                  </div>
                  <div
                    className="hidden sm:block w-px h-8 shrink-0"
                    style={{ backgroundColor: 'var(--yellow-border-soft)' }}
                  />
                  <div
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: 'var(--white)' }}
                  >
                    {item.branches}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div
            className="mt-6 p-4 rounded-lg text-center text-sm"
            style={{
              backgroundColor: 'var(--yellow-border-soft)',
              color: 'var(--white)'
            }}
          >
            <p className="font-semibold">
              📍 Venue: JC Bose Auditorium (BSH Seminar Hall), MSIT
            </p>
            <p className="mt-1" style={{ color: 'var(--gray-text)' }}>
              Time: 3:00 PM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-hover))',
              color: 'var(--black)',
              boxShadow: '0 4px 15px rgba(52, 160, 164, 0.3)'
            }}
          >
            Got it!
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OrientationModal;
