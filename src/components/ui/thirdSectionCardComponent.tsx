"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ThreeDCardProps {
  title: string;
  desc: string;
  image: string;
  link: string;
  techStack: string;
}

export function ThreeDCardDemo({
  title,
  desc,
  image,
  link,
  techStack,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#0a0a0a] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-md h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <div className="flex flex-row">
          <CardItem translateZ="50" className="w-full mt-4">
              <p className="text-sm text-gray-400 mt-4">Tech Stack: {techStack}</p>
          </CardItem>
          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              View Project →
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
