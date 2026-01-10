import React from "react";
import LetterGlitch from "../components/LetterGlitch";
import FuzzyText from "../components/FuzzyText";
import Shuffle from "../components/shuffle";
import ShinyText from '../components/ShinyText';

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={false}
        smooth={true}
      />
      {/* centered column: Shuffle row and button underneath */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center gap-4 sm:gap-5 z-2 text-white px-4"
      >
        <div
          className="flex items-baseline text-[35px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-normal tracking-wide 
          font-['Bring_Race'] scale-y-[2] sm:scale-y-[1.2] -skew-x-3"
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

          {/* <FuzzyText
            baseIntensity={0.21}
            hoverIntensity={0.88}
            fuzzRange={20}
            fps={45}
            fontSize={"7.2rem"}
            fontWeight={400}
            style={{ transform: "scaleY(1.2) skewX(-3deg)"}}
          >
          </FuzzyText> */}
            MEGATRONIX
        </div>

        {/* Two buttons inline under MEGATRONIX text */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-10 md:gap-16 lg:gap-20 translate-y-14 sm:translate-y-12">
          <button
            type="button"
            className="group relative overflow-hidden bg-black/80 text-emerald-400 uppercase px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 tracking-widest text-xs sm:text-sm md:text-base border border-emerald-400 rounded-tl-3xl rounded-br-3xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:text-emerald-300 hover:scale-96 hover:cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-emerald-500/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 after:absolute after:inset-[1px] after:bg-black/60 after:-z-10"
            // style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse rounded-full"></span>
              Register
              <span className="text-emerald-500/70 text-[10px] inline">&lt;/&gt;</span>
            </span>
          </button>

          <button
            type="button"
            className="group relative overflow-hidden bg-black/80 text-red-500 uppercase px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 tracking-widest text-xs sm:text-sm md:text-base border border-red-500 rounded-tr-3xl rounded-bl-3xl transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:text-red-400 hover:scale-96 hover:cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 after:absolute after:inset-[1px] after:bg-black/60 after:-z-10"
            // style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 bg-red-500 animate-pulse rounded-full"></span>
              About Us
              <span className="text-red-500/70 text-[10px] inline">[ ]</span>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
