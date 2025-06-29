"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AiOutlineHome  } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { VscRepoForked } from "react-icons/vsc";
import { GiGamepad } from "react-icons/gi";

export function Header() {
  const links = [
    {
      title: "Home",
      icon: (
        <AiOutlineHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Experience",
      icon: (
        <MdWorkOutline  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: "Projects",
      icon: (
        <VscRepoForked className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Hobbies",
      icon: (
        <GiGamepad className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/hobbies",
    },
  ];
  return (
<header
  data-aos="fade-down"
  data-aos-duration="1000"
  className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
>
  <div className="flex justify-center py-4 pointer-events-auto">
    <FloatingDock
      items={links}
    />
  </div>
</header>

  );
}
