"use client";
import Aurora from "@/components/ui/aurora";

export default function Footer() {
  return (
<footer className="relative w-full h-[150px] bg-[#011c27] overflow-hidden text-white z-1000 rounded-2xl">
  {/* Aurora Background */}
  <div className="absolute top-0 left-0 w-full h-[75px] z-0">
    <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
  </div>

  {/* Footer Content */}
  <div className="relative z-10 h-full pt-[75px] px-6 flex items-center justify-between text-center">

    {/* Left: Name & Description */}
    <div className="text-left mb-18">
      <h2 className="text-lg font-semibold">Tanveer Akram</h2>
      <p className="text-sm text-blue-200 max-w-xs">Full Stack Developer passionate about building intuitive digital experiences.</p>
    </div>

        {/* Center: Social Icons */}
        <ul className="flex gap-4 mt-3">
          <li>
            <a href="https://www.facebook.com/tanveer.akram.679055/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tannuakram/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon text-4xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tannuakram/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in icon text-4xl"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Aceveer" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon text-4xl"></i>
            </a>
          </li>
        </ul>

    {/* Right: Contact Info */}
    <div className="text-right text-sm text-blue-300 mb-18">
      <p>Email: <a href="mailto:tanveerakram7@gmail.com" className="hover:underline">tanveerakram7@gmail.com</a></p>
      <p>Address: Adelaide, Australia</p>
    </div>
  </div>
</footer>

  );
}
