"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

type CardType = {
  title: string;           
  subtitle: string;        
  year: string;            
  src: string;
  ctaText: string;         
  ctaLink: string;
  content: () => React.ReactNode;
};


export function ExpandableCardDemo( { cards }: { cards: CardType[] } ) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-[#0B4D99] dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    layoutId={`button-${active.title}-${id}`}
                    className="px-4 py-3 text-sm rounded-full font-bold text-green-500"
                  >
                    {active.ctaText}
                  </motion.p>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-200 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="w-full flex flex-col gap-6">
        {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="w-full p-4 flex flex-col gap-2 justify-between hover:bg-black dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
        >
          <div className="flex flex-col gap-2 w-full">
            {/* Top Row: Company and Year */}
            <div className="flex justify-between items-center w-full">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-neutral-200 dark:text-neutral-200 md:text-3xl sm:text-base text-sm"
              >
                {card.title}
              </motion.h3>
              <span className="md:text-2xl sm:text-sm text-xs text-white dark:text-neutral-400">
                {card.year}
              </span>
            </div>

            {/* Second Row: Role and CTA Button */}
            <div className="flex justify-between items-center w-full">
              <motion.p
                layoutId={`description-${card.subtitle}-${id}`}
                className="text-green-500 dark:text-neutral-400 md:text-3xl sm:text-base text-sm"
              >
                {card.subtitle}
              </motion.p>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-0.5 sm:py-2 md:text-lg sm:text-base text-sm rounded-full font-bold bg-gray-100 cursor-pointer text-black"
              >
                {card.ctaText}
              </motion.button>
            </div>
          </div>
        </motion.div>

))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

