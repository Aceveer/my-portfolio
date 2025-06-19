"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlightVideos = [
  {
    src: "/videos/highlight1.mp4",
    poster: "/videos/preview1.jpg",
  },
  {
    src: "/videos/highlight2.mp4",
    poster: "/videos/preview2.jpg",
  }
];

export default function HighlightCarousel() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? highlightVideos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === highlightVideos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = highlightVideos[current];

  return (
    <div className="w-2/3 max-w-5xl bg-zinc-900 p-4 rounded-xl shadow-xl relative">
      <h3 className="text-lg font-semibold mb-2 text-white text-center">Highlight Reel</h3>

      <div className="relative">
        <video
          key={currentVideo.src}
          controls
          autoPlay
          muted
          loop
          className="w-full aspect-video rounded-lg"
        >
          <source src={currentVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left button */}
        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        {/* Right button */}
        <button
          onClick={nextVideo}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-2 text-center">
        Clip {current + 1} of {highlightVideos.length}
      </p>
    </div>
  );
}
