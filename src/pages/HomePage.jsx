import React from "react";
import { Link } from "react-router-dom";
import HoverText from "../components/HoverText";
import Hyperspeed from "../components/Hyperspeed";
import { hyperspeedPresets } from "../components/HyperSpeedPresets";
import LetterGlitch from "../components/animations/LetterGlitch";
import megaLogo from "../assets/images/megaLogo.png";
import ScrollVelocity from "../../src/components/ScrollVelocity";

function HomePage() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Mobile: LetterGlitch, Desktop: Hyperspeed */}
      <div className="fixed inset-0 w-full h-full block sm:hidden">
        <LetterGlitch />
      </div>
      <div className="fixed inset-0 w-full h-full scale-100 origin-center hidden sm:block">
        <Hyperspeed effectOptions={hyperspeedPresets.megatronix} />
      </div>
      {/* centered column: Shuffle row and button underneath */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] sm:-translate-y-1/3 flex flex-col items-center gap-4 sm:gap-5 z-20 text-white px-2 sm:px-4 w-full max-w-[95vw] overflow-visible">

        {/* Mobile: Logo + Highlighted Text, Desktop: HoverText */}
        <div className="flex flex-col items-center gap-4 sm:hidden">
          <img src={megaLogo} alt="Megatronix Logo" className="w-60 h-60 object-contain" />

          {/* Highlighted Subtitle */}
          <div className="relative flex justify-center w-full px-2">
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
              className="px-3 py-2.5 text-lg uppercase tracking-[0.15em] font-semibold text-center relative z-10"
              style={{
                color: "var(--white)"
              }}
            >
              The Official Technical Club of MSIT
            </div>
          </div>
        </div>

        {/* for the desktop */}
        <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-3">
          <HoverText />

          {/* Highlighted Subtitle for Desktop */}
          <div className="relative flex justify-center w-full px-4">
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
              className="px-5 md:px-7 py-3 text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.15em] sm:tracking-[0.25em] font-semibold text-center relative z-10"
              style={{
                color: "var(--white)"
              }}
            >
              The Official Technical Club of MSIT
            </div>
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
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--yellow-hover)";
              e.currentTarget.style.borderColor = "var(--yellow-hover)";
              e.currentTarget.style.boxShadow =
                "0 0 28px var(--yellow-shadow-strong)";
            }} t
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--white)";
              e.currentTarget.style.borderColor = "var(--gray-text)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              <span
                className="w-1.5 h-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: "var(--gray-text)" }}
              ></span>
              Register
            </span>
          </Link>

          {/* ABOUT US BUTTON */}
          <Link
            to="/about"
            className="group relative overflow-hidden uppercase px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 tracking-widest text-xs sm:text-sm md:text-base rounded-tl-3xl rounded-br-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:cursor-pointer before:absolute before: inset-0 before:from-transparent before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 after:absolute after:-z-10 inline-block"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "var(--white)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--gray-text)",
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
              e.currentTarget.style.boxShadow = "none";
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

      {/* ScrollVelocity at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-black/25 backdrop-blur-sm py-2">
        <ScrollVelocity
          texts={['02/02/26 (Monday): CSE-A, AIML-A, IT • 03/02/26 (Tuesday): CSE-C, AIDS, IOT, CSE-D + CSIT', '04/02/26 (Wednesday): ECE, EE, AIML-B, ECS • 05 /02 / 26(Thursday): CSE-B, CYS, CSBS, CSE(DS) • 06/02/26 (Friday): BCA, BBA, CE, ME']}
          velocity={50}
          className="italic font-bold text-(--gray-text)"
        />
      </div>
    </div>
  );
}

export default HomePage;
