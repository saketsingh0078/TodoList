import React, { useState, useEffect } from "react";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-8 h-8 bg-orange-300 rounded-full fixed opacity-50"
      style={{ top: position.y - 16, left: position.x - 16 }}
    ></div>
  );
};

export default Circle;
