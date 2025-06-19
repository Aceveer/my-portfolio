"use client";

import { useEffect, useState, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "Data Analysis & ML Expert",
  "Master's Graduate in IT",
  "Gaming Enthusiast",
  "Musician and Singer",
];

const roleToImage: Record<string, string> = {
  "Full Stack Developer": "/F1.png",
  "Data Analysis & ML Expert": "/F2.png",
  "Master's Graduate in IT": "/F3.png",
  "Gaming Enthusiast": "/F4.png",
  "Musician and Singer": "/F5.png",
};

// Speeds
const TYPE_SPEED = 70;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPING = 1200;

export default function FirstSection() {
  const [index, setIndex] = useState(0); // current role index
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = roles[index];
  const currentImage = roleToImage[fullText];

  const imageRef = useRef<HTMLImageElement>(null);
const [transformStyle, setTransformStyle] = useState("");

const handleMouseMove = (e: React.MouseEvent) => {
  const card = imageRef.current;
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * -10; // vertical tilt
  const rotateY = ((x / rect.width) - 0.5) * 10;  // horizontal tilt

  setTransformStyle(
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  );
};

const handleMouseLeave = () => {
  setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
};

const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < fullText.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, TYPE_SPEED);
    } else if (!isDeleting && text.length === fullText.length) {
      // Pause before delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, DELETE_SPEED);
    } else if (isDeleting && text.length === 0) {
      // Move to next
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, fullText]);

  return (
   <section className="w-full h-screen flex flex-col md:flex-row overflow-hidden relative">

  {/* Left Text Section */}
  <div className="w-full md:w-1/2 h-full bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
    {/* Star Field */}
    <div className="star-field">
      {isClient && <div className="star-field">{generateStars()}</div>}
    </div>

    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-in-contract-bck z-10">
      Hello,
    </h1>
    <h2 className="text-xl md:text-3xl font-medium text-cyan-300 z-10">
      I'm a
      <span className="ml-2">
        {text}
        <span className="text-white blinking-cursor">|</span>
      </span>
    </h2>
  </div>

  {/* Right Image Section */}
  <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-blue-950 overflow-hidden relative">
    {/* Glow behind the image */}
    <div className="glow-behind"></div>
    {isClient && (
<div className={`image-wrapper z-10 ${isDeleting ? "slide-left-out" : "slide-left-in"}`}>
  <img
    ref={imageRef}
    src={currentImage}
    alt={fullText}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{ transform: transformStyle }}
    className="w-[80%] max-w-md rounded-xl shadow-lg transition-transform duration-200 ease-out"
  />
</div>
    )}
  </div>
</section>

  );
}


const generateStars = (count = 30) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    );
  });
};
