import { useState } from "react";

const HoverText = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="
     flex items-baseline justify-center
  text-[35px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]
  font-normal
  tracking-normal
  bg-clip-text text-transparent
  cursor-pointer
  transition-all duration-300 ease-out
  whitespace-nowrap
  px-4 sm:px-6 md:px-8
  w-full
      "
      style={{
        fontFamily: "'Bring Race', 'Arial Black', sans-serif",
        backgroundImage: `radial-gradient(
          circle at ${pos.x}% ${pos.y}%,
          #b8f3d8 0%,
          #76c893 35%,
          #5fa878 60%
        )`,
        transition: "background-image 1s ease-out",
      }}
    >
      MEGATRONIX
    </div>
  );
};

export default HoverText;
