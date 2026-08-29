"use client";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import ValorantTab from "@/app/hobbies/valorant";
import ChessTab from "./lichess";
import Sports from "./sports";
import Music from "./music";
import { PageHeader } from "@/components/ui/pageHeader";

const tabs = ["Valorant", "Chess", "Sports", "Music"];

export default function HobbiesPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "var(--gradient-brand)" }}
    >
      <PageHeader
        eyebrow="Outside the editor"
        title="Hobbies and Interests"
        intro="Live stats from the games I play, plus the sports and music I keep coming back to."
      />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-cyan-400/20 bg-[#04061e]/70 p-4 sm:p-6 shadow-2xl shadow-cyan-500/5">
          <Tab.Group>
            <Tab.List className="mb-6 flex gap-2 rounded-xl bg-white/5 p-2">
              {tabs.map((tab) => (
                <Tab key={tab} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={clsx(
                        "w-full rounded-lg py-2 text-sm font-medium leading-5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                        selected
                          ? "bg-cyan-400 text-[#04061e] shadow"
                          : "text-cyan-100/80 hover:bg-cyan-400/15 hover:text-white"
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
      </div>
    </main>
  );
}
