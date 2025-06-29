"use client";
import Aurora from "@/components/ui/aurora";
import { MdEmail, MdLocationOn } from "react-icons/md"

export default function Footer() {
  return (
  <footer className="relative w-full bg-[#011c27] overflow-hidden text-white z-1000 rounded-2xl pb-6">
    {/* Aurora Background */}
    <div className="absolute top-0 left-0 w-full h-[75px] z-0">
      <Aurora
        colorStops={["#020024", "#090979", "#0B4D99"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>

    {/* Footer Content */}
    <div className="relative z-10 w-full pt-8 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 text-center md:text-left">
      
      {/* Left: Name & Description */}
      <div className="w-full md:w-1/3 text-left md:text-left">
        <h2 className="font-semibold mb-1">About Me</h2>
        <p className="text-white max-w-xs text-sm">
          I'm Tanveer Akram, a full stack developer passionate about building intuitive and engaging digital experiences.
        </p>
      </div>

          {/* Social Media Icons */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            <li>
              <a
                href="https://www.facebook.com/tanveer.akram.679055/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <i className="fab fa-facebook-f icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tannuakram/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="fab fa-instagram icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tannuakram/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin-in icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Aceveer"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <i className="fab fa-github icon" />
              </a>
            </li>
          </ul>
        </div>

      {/* Right: Contact Info */}
      <div className="w-full md:w-1/3 text-sm text-white space-y-2 text-right md:text-right">
        <h2 className="font-semibold mb-1">Contact</h2>
        <p className="flex items-center justify-end gap-2">
          <MdEmail className="text-lg" />
          <a
            href="mailto:tanveerakramandrew@gmail.com"
            className="hover:underline text-sm"
          >
            tanveerakramandrew@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-end gap-2 text-sm">
          <MdLocationOn className="text-xl" />
          Adelaide, Australia
        </p>
      </div>
    </div>

  </footer>
  );
}
