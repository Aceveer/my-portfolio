"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1000"
      className="top-6 left-4 right-4 z-50 mt-2"
    >
      <div
        className="w-full rounded-full px-8 py-4 bg-gradient-to-b from-[#020024] via-[#090979] to-[#000729] border border-[#11191e] backdrop-blur-md flex justify-evenly gap-10 shadow-md group relative"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white text-lg font-medium hover-underline scale-in-center hover:text-sky-400"
          >
            {item.name}
          </Link>
        ))}

        <div
          id="cursor-star"
          className="hidden md:block absolute w-4 h-4 bg-white rounded-full opacity-0 pointer-events-none blur-sm transition-transform duration-300 ease-out"
        />
      </div>
    </header>
  );
}
