import React from "react";
import { LetterGlitch } from "../components";
import { Link } from "react-router-dom";
import HoverText from "../components/HoverText";

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={true}
        smooth={true}
      />
      {/* centered column: Shuffle row and button underneath */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center gap-4 sm:gap-5 z-2 text-white px-4">
        {/* <div
          className="flex items-baseline text-[35px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]
    font-normal tracking-wide font-['Bring_Race']
    scale-y-[2] sm:scale-y-[1.2] -skew-x-3
    bg-clip-text text-transparent"
          style={{
            backgroundImage: `radial-gradient(
      circle at center,
      var(--yellow-hover),
      var(--yellow-primary),
      var(--yellow-soft)
    )`,
          }}
        >
          MEGATRONIX
        </div> */}

        {/* main megatronix text */}
        <HoverText />

        {/* Highlighted Subtitle */}
        <div className="relative mb-3 sm:mb-4 flex justify-center">
          {/* Glow shield */}
          <div
            className="absolute inset-0 -z-20 rounded-2xl blur-2xl opacity-80"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(0,0,0,0.75) 100%)",
            }}
          />

          {/* Dark isolation layer */}
          <div
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 60%, transparent 100%)",
            }}
          />

          {/* Text */}
          <div
            className="px-5 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg uppercase tracking-[0.45em] font-mono text-center"
            style={{
              color: "var(--yellow-primary)",
              textShadow: `
        0 0 8px rgba(212,175,55,0.6),
        0 0 18px rgba(212,175,55,0.45),
        0 0 28px rgba(212,175,55,0.25)
      `,
            }}
          >
            The Official Technical Club of MSIT
          </div>
        </div>
        {/* Two buttons inline under MEGATRONIX text */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-6 md:gap-10 lg:gap-12 translate-y-14 sm:translate-y-12">
          {/* REGISTER BUTTON */}
          <Link
            to="/event"
            className="group relative overflow-hidden uppercase px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 tracking-widest text-xs sm:text-sm md:text-base rounded-tl-3xl rounded-br-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:cursor-pointer before:absolute before: inset-0 before:from-transparent before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 after:absolute after:-z-10 inline-block"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "var(--white)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--gray-text)",
              boxShadow: "0 0 20px rgba(209, 213, 219, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--yellow-hover)";
              e.currentTarget.style.borderColor = "var(--yellow-hover)";
              e.currentTarget.style.boxShadow =
                "0 0 28px var(--yellow-shadow-strong)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--white)";
              e.currentTarget.style.borderColor = "var(--gray-text)";
              e.currentTarget.style.boxShadow = "0 0 20px var(--yellow-shadow)";
            }}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 animate-pulse rounded-full" style={{ backgroundColor: 'var(--gray-text)' }}></span>
              Register
            </span>
          </Link>

          {/* ABOUT US BUTTON */}
          <Link
            to="/about"
            className="group relative overflow-hidden uppercase px-4 sm:px-6 py-2.5 tracking-widest text-[10px] sm:text-sm md:text-base rounded-tr-3xl rounded-bl-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer before:absolute before:inset-0 before:from-transparent before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 after:absolute after:-z-10"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "var(--white)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--gray-text)",
              boxShadow: "0 0 20px rgba(209, 213, 219, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--yellow-primary)";
              e.currentTarget.style.borderColor = "var(--yellow-primary)";
              e.currentTarget.style.boxShadow = "0 0 28px var(--yellow-shadow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--white)";
              e.currentTarget.style.borderColor = "var(--gray-text)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(209, 213, 219, 0.2)";
            }}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              <span
                className="w-1.5 h-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: "var(--gray-text)" }}
              ></span>
              About Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
