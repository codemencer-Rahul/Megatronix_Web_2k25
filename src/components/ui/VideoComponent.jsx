import { ArrowLeft } from "lucide-react";
import { ArrowBigLeftDashIcon } from "./icons";

const VideoComponent = ({ videoSrc, closeModal }) => {
  if (!videoSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 md:p-8"
      onClick={closeModal} // close when clicking outside
    >
      <div
        className="relative rounded-2xl shadow-xl w-full max-w-6xl h-auto md:h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // prevent close on inner click
      >
        {/* Top Bar with Back Button */}
        <div className="flex items-center justify-between p-4 sm:p-5" style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'var(--yellow-border-soft)' }}>
          <button
            onClick={closeModal}
            className="hover:cursor-pointer flex items-center gap-2 transition text-sm sm:text-base"
            style={{ color: 'var(--yellow-primary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--yellow-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--yellow-primary)'}
          >
            <ArrowBigLeftDashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Back</span>
          </button>

          <h2 className="text-base sm:text-lg font-semibold tracking-wide" style={{ color: 'var(--yellow-primary)' }}>
            Event Video
          </h2>
        </div>

        {/* Video Container */}
        <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-auto max-h-[70vh] rounded-xl object-contain"
            style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'var(--yellow-primary)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
