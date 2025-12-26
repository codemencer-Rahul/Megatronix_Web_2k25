import React from "react";
import LetterGlitch from "../components/LetterGlitch";
import Shuffle from "../components/shuffle";

function HomePage() {
  return (
    <div style={{ position: "relative", minHeight: 200 }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      {/* centered column: Shuffle row and button underneath */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          zIndex: 9999,
          color: "white",
        }}
      >
        <div
          style={{
            lineHeight: 1,
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <Shuffle
            text="MEGA"
            shuffleDirection="right"
            duration={2}
            animationMode="evenodd"
            shuffleTimes={1}
            // ease="power3.out"
            ease="back.out(1.1)"
            stagger={1}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={false}
            respectReducedMotion={true}
            className="shuffle-overlay"
            style={{
              color: "limegreen",
              fontSize: "9rem",
              display: "inline-block",
            }}
          />

          <Shuffle
            text="TRONIX"
            shuffleDirection="right"
            duration={0.5}
            animationMode="evenodd"
            shuffleTimes={4}
            ease="back.out(1.7)"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={false}
            respectReducedMotion={true}
            className="shuffle-overlay"
            style={{
              color: "white",
              fontSize: "7rem",
              display: "inline-block",
            }}
          />
        </div>

        {/* Two buttons inline under MEGATRONIX text */}
        <div style={{ display: "flex", gap: "3rem", marginTop: 8 }}>
          <button
            type="button"
            className="btn-25 relative overflow-hidden bg-black text-white font-black uppercase px-12 py-3 tracking-wide"
          >
            <span className="relative transition-transform duration-200 ease-in-out">
              Register
            </span>
          </button>

          <button
            type="button"
            className="btn-25 relative overflow-hidden bg-black text-white font-black uppercase px-12 py-3 tracking-wide"
          >
            <span className="relative transition-transform duration-200 ease-in-out">
              About Us
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
