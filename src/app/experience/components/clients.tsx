"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I designed the website, visiting cards, and letterhead",
      name: "Rajnit Kohli",
      designation: "KoRa Consults",
      src: "/kora.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
