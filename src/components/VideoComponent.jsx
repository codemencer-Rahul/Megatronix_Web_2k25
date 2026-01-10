import { ArrowLeft } from "lucide-react";

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
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-green-400/30">
          <button
            onClick={closeModal}
            className="hover:cursor-pointer flex items-center gap-2 text-green-300 hover:text-green-400 transition text-sm sm:text-base"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Back</span>
          </button>

          <h2 className="text-green-300 text-base sm:text-lg font-semibold tracking-wide">
            Event Video
          </h2>
        </div>

        {/* Video Container */}
        <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-auto max-h-[70vh] rounded-xl border-2 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
