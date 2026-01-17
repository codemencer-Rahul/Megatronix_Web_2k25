import { useState } from "react";

const HoverText = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  };

  const handleLeave = () => {
    setHovering(false);
  };

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        flex items-baseline
        text-[35px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]
        font-normal tracking-wide font-['Bring_Race']
        scale-y-[2] sm:scale-y-[1.2] -skew-x-3
        bg-clip-text text-transparent
        cursor-pointer
        transition-all
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
