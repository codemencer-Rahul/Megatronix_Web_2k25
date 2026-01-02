import React from "react";
import LetterGlitch from "../components/LetterGlitch";
import FuzzyText from "../components/FuzzyText";
import Shuffle from "../components/shuffle";
import ShinyText from '../components/ShinyText';

function HomePage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
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
          transform: "translate(-50%, -60%)",
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
            fontSize: "9rem",
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}
        >
          {/* <Shuffle
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
              color: "darkred",
              fontSize: "9rem",
              display: "inline-block",
            }}
          />

          <Shuffle
            text="TRONIX"
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
              color: "darkred",
              fontSize: "9rem",
              display: "inline-block",
            }}
          /> */}


            {/* <ShinyText
              text="MegatroniX"
              speed={2}
              delay={0}
              color="#ff0033"
              shineColor="#ffffff"
              spread={100}
              direction="left"
              yoyo={true}
              pauseOnHover={false}
            /> */}

            <FuzzyText
              baseIntensity={0.21}
              hoverIntensity={0.88}
              fuzzRange={20}
              fps={45}
            >
              MEGATRONIX
            </FuzzyText>


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
