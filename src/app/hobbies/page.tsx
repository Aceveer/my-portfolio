"use client";

import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import clsx from "clsx";
import ValorantTab from "@/app/hobbies/valorant"
import ChessTab from "./lichess";

const tabs = [
  "Valorant",
  "Chess",
  "Cricket",
  "Basketball",
  "Guitar",
];

export default function HobbiesPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-[#0e0e0e] text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Hobbies and Interests
      </h1>

      <div className="max-w-full mx-auto bg-[#111827] p-6 rounded-2xl shadow-lg border border-cyan-800">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-[#1f2937] p-2 mb-6">
            {tabs.map((tab) => (
              <Tab key={tab} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      "w-full py-2 text-sm font-medium leading-5 rounded-lg",
                      selected
                        ? "bg-cyan-500 text-black shadow"
                        : "text-cyan-200 hover:bg-cyan-700/20 hover:text-white"
                    )}
                  >
                    {tab}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <ValorantTab />
            </Tab.Panel>
            <Tab.Panel>
              <ChessTab />
            </Tab.Panel>
            <Tab.Panel>
              <CricketTab />
            </Tab.Panel>
            <Tab.Panel>
              <BasketballTab />
            </Tab.Panel>
            <Tab.Panel>
              <GuitarTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}

// Each Tab Component Below

function CricketTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cricket & IPL 2024</h2>
      <p>
        Built an IPL 2024 dashboard showing player, match, and team analysis.
      </p>
      <a
        href="https://youriplsite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 underline"
      >
        View IPL 2024 Project →
      </a>
    </div>
  );
}

function BasketballTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Basketball</h2>
      <p>
        I follow the NBA and occasionally play recreational basketball. More
        about my fav teams and matches soon.
      </p>
    </div>
  );
}

function GuitarTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Guitar & Keyboard</h2>
      <p>
        I enjoy playing guitar and keyboard in my free time. Covers, riffs, and
        jam sessions are on the way.
      </p>
    </div>
  );
}
