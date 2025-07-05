"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlightVideos = [
  {
    src: "https://www.youtube.com/watch?v=5nk0ea9c5Ns",
    poster: "/videos/preview1.jpg",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/watch?v=Xbp0H5QcNw8",
    poster: "/videos/preview2.jpg",
    type: "youtube",
  },
    {
    src: "https://www.youtube.com/watch?v=spDlWxi4l9M",
    poster: "/videos/preview2.jpg",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/watch?v=98u_hm3aaiA",
    poster: "/videos/preview2.jpg",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/watch?v=Abc9lZLSkNc",
    poster: "/videos/preview2.jpg",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/watch?v=OnPj1pHSEBs",
    poster: "/videos/preview2.jpg",
    type: "youtube",
  }
];

// Convert YouTube watch URL to embed URL
const getYouTubeEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

export default function HighlightCarousel() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? highlightVideos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === highlightVideos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = highlightVideos[current];
  const embedUrl =
    currentVideo.type === "youtube" ? getYouTubeEmbedUrl(currentVideo.src) : "";

  return (
    <div className="w-full sm:w-2/3 max-w-5xl bg-zinc-900 p-4 rounded-xl shadow-xl relative">
      <h3 className="text-lg font-semibold mb-2 text-white text-center">Highlight Reel</h3>

      <div className="relative aspect-video w-full rounded-lg overflow-hidden">
        {currentVideo.type === "youtube" ? (
          <iframe
            src={embedUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        ) : (
          <video
            key={currentVideo.src}
            controls
            autoPlay
            muted
            loop
            poster={currentVideo.poster}
            className="w-full h-full rounded-lg"
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

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
