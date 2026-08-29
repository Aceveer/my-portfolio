import React from "react";

/**
 * Shared page + section heading rhythm.
 * Keeps type scale consistent across Experience / Projects / Hobbies
 * instead of every page reaching for its own `text-5xl`.
 */

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-28 pb-10 text-center">
      {eyebrow && (
        <p className="hero-rise font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">
          {eyebrow}
        </p>
      )}
      <h1
        className="hero-rise mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        style={{ animationDelay: "0.1s" }}
      >
        {title}
      </h1>
      {intro && (
        <p
          className="hero-rise mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300/85"
          style={{ animationDelay: "0.2s" }}
        >
          {intro}
        </p>
      )}
    </header>
  );
}

export function SectionHeading({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-bold text-white text-center ${className}`}
    >
      {title}
    </h2>
  );
}
