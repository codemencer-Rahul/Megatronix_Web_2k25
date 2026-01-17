import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startAudio = () => {
      if (!started) {
        audioRef.current.volume = 0.4;
        audioRef.current.play();
        setStarted(true);
      }
    };

    window.addEventListener("click", startAudio, { once: true });
    return () => window.removeEventListener("click", startAudio);
  }, [started]);

  const toggleMute = () => {
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button onClick={toggleMute} style={{ position: "fixed", bottom: 20, right: 20 }}>
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  );
}
