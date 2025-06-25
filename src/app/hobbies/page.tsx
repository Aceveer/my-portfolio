"use client";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import ValorantTab from "@/app/hobbies/valorant"
import ChessTab from "./lichess";
import Sports from "./sports";
import Music from "./music";

const tabs = [
  "Valorant",
  "Chess",
  "Sports",
  "Music",
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
              <Sports />
            </Tab.Panel>
            <Tab.Panel>
              <Music />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}