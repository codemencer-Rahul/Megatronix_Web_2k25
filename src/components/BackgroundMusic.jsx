import { useEffect, useRef, useState } from "react";

// Import your songs
import song1 from "../../src/assets/videos/Forrest-Frank-feat-Connor-Price-UP-(CeeNaija.com).mp3";

const PLAYLIST = [
  { src: song1, title: "UP! by Forrest Frank ft Conner Price" },
];

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const [showNowPlaying, setShowNowPlaying] = useState(true);

  /* ================= AUTOPLAY HANDLING ================= */
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (!audioRef.current || started) return;

      audioRef.current.volume = 1;
      audioRef.current.muted = muted;

      try {
        await audioRef.current.play();
        setStarted(true);
      } catch {
        // Autoplay blocked – wait for interaction
      }
    };

    const startAudio = async () => {
      if (!audioRef.current || started) return;

      audioRef.current.volume = 0.15;
      audioRef.current.muted = muted;

      try {
        await audioRef.current.play();
        setStarted(true);
      } catch (err) {
        console.error("Audio play failed:", err);
      }
    };

    attemptAutoplay();
    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, [started, muted]);

  /* ================= SONG CHANGE ================= */
  const handleSongEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  useEffect(() => {
    if (!audioRef.current || !started) return;

    audioRef.current.load();
    audioRef.current.play();

    // Show "Now Playing" on new song
    setShowNowPlaying(true);

    const timer = setTimeout(() => {
      setShowNowPlaying(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentIndex, started]);

  /* ================= MUTE ================= */
  const toggleMute = () => {
    if (!audioRef.current) return;
    const newState = !muted;
    audioRef.current.muted = newState;
    setMuted(newState);
  };

  return (
    <>
      {/* Bottom-right Music UI */}
      <div className="fixed bottom-5 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Now Playing */}
        <div
         className={`
      fixed bottom-20 right-6 z-50
      px-4 py-2 rounded-lg
      bg-black/60 backdrop-blur-md
      text-white text-xs tracking-wide
      text-right
      transition-all duration-500 ease-out
      ${showNowPlaying
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"}
    `}
        >
          🎧 Now Playing
          <div className="font-semibold truncate">
            {PLAYLIST[currentIndex].title}
          </div>
        </div>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="w-12 h-12
                     flex items-center justify-center
                     rounded-full bg-black/70
                     border border-gray-500 text-white
                     backdrop-blur-md
                     hover:scale-110 transition"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} onEnded={handleSongEnd} preload="auto">
        <source src={PLAYLIST[currentIndex].src} type="audio/mpeg" />
      </audio>
    </>
  );
}
