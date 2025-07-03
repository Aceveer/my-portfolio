"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I designed the website, visiting cards, and letterhead for KoRa Consults. I worked closely with the founder to bring her vision to life, creating a clean and professional design. From setting up the domain to organizing the content, I supported her throughout the entire process until completion.",
      name: "Rajnit Kohli",
      designation: "KoRa Consults",
      src: "/experience/kora.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
