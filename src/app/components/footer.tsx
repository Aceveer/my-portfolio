"use client";

export default function Footer() {
  return (
    <footer className="relative w-full h-[150px] bg-[#011c27] overflow-hidden text-black flex flex-col items-center justify-center z-1000">
      {/* Footer Content */}
      <div className="z-10 relative text-center">
        <h2 className="text-4xl font-bold mb-2">Tanveer Akram</h2>
        <p className="text-base text-blue-200">Full Stack Developer • Tech Hobbyist</p>
        <p className="text-sm text-blue-300 mt-1">Made with 💙 using Next.js & Tailwind CSS</p>
      </div>

      {/* Animated Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </footer>
  );
}
