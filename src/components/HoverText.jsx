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
     flex items-baseline
  text-[35px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]
  font-normal font-['Bring_Race']
  tracking-normal
  bg-clip-text text-transparent
  cursor-pointer
  transition-all duration-300 ease-out
      "
      style={{
        backgroundImage: `radial-gradient(
          circle at ${pos.x}% ${pos.y}%,
          var(--yellow-hover) 0%,
          var(--yellow-primary) 55%,
          var(--yellow-soft) 80%
        )`,
        transition: "background-image 1s ease-out",
      }}
    >
      MEGATRONIX
    </div>
  );
};

export default HoverText;
