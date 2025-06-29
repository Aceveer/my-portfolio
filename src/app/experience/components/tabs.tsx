"use client";

import { Tabs } from "../../../components/ui/tabs";
import { ExpandableCardDemo } from "./jobCard";

const industryCards = [
  {
    title: "Self-Employed",
    subtitle: "Freelance Software Engineer",
    year: "May 2025 - Present",
    src: "/marsupium.png",
    ctaText: "Adelaide, Australia",
    ctaLink: "https://example.com/marsupium",
    content: () => (
      <p>
      Developed the full website for KoRa Consults, a hospitality consultancy, from planning and requirement gathering to deployment. Built the frontend using Next.js and Tailwind CSS, with animated components, responsive layouts, and SEO optimizations.

      <br /><br />
      Currently working on the Prerna Magazine archive website to preserve Punjabi literary content. Designed it as a clean, accessible blog platform with structured categorization and intuitive navigation using Markdown and dynamic routing.

    </p>
    ),
  },
  {
    title: "Marsupium (Fintech Startup)",
    subtitle: "Software Engineering Intern",
    year: "Jul 2024 - Dec 2024",
    src: "/marsupium.png",
    ctaText: "Adelaide, Australia",
    ctaLink: "https://example.com/marsupium",
    content: () => (
      <p>
        Created an internal Admin Dashboard using Next.js and Tailwind to manage real-time financial insights and user access. This was my first hands-on experience with Next.js and server-side rendering in a production app.

        <br /><br />
        Contributed to backend development using C# and Firebase, and integrated secure APIs. Also worked on push notification logic tied to an AI engine for smart alerts based on financial transaction behavior.
      </p>
    ),
  },
  {
    title: "Infinite Computer Solutions",
    subtitle: "Associate Software Engineer",
    year: "Feb 2021 – June 2023",
    src: "/infinite.png",
    ctaText: "Bangalore, India",
    ctaLink: "https://example.com/infinite",
    content: () => (
      <p>
        Worked on the Mississippi Self-Service Portal (MS SSP) for U.S. healthcare applications. Built dynamic frontend pages using React, implemented REST APIs in Spring Boot, and developed reusable components in a modular architecture.

        <br /><br />
        Focused on the PDF generation system, printing user-submitted data into government-compliant templates. Collaborated across backend and DevOps teams in Agile sprints to ensure timely delivery of high-impact features.

    </p>
    ),
  },
];

const workCards = [
  {
    title: "Rebel Sports",
    subtitle: "Sales Assistant (Part-Time)",
    year: "May 2024 – Present",
    src: "/rebel.png",
    ctaText: "Adelaide, Australia",
    ctaLink: "https://example.com/rebel",
    content: () => (
      <p>
        I work part-time at Rebel Sport where I help customers find the right gear and make sure the store runs smoothly during busy hours. I
        ’ve become confident with stock handling, assisting people with their questions, and keeping displays tidy 
        — all while making sure customers leave with a smile.
      </p>
    ),
  },
];

const volunteeringCards = [
  {
    title: "University of Adelaide",
    subtitle: "Student Volunteer – Events & Orientation",
    year: "Jan 2024 - Present",
    src: "/volunteer.png",
    ctaText: "Adelaide, Australia",
    ctaLink: "https://example.com/uofa-volunteer",
    content: () => (
      <p>
        Volunteered for student orientation and academic events. Helped new students transition smoothly into university life.
        Managed info booths, conducted tours, and assisted with event logistics.
      </p>
    ),
  },
];

const educationCards = [
  {
    title: "University of Adelaide",
    subtitle: "Master of Computing and Innovation",
    year: "July 2023 - July 2025",
    src: "/volunteer.png",
    ctaText: "Adelaide, Australia",
    ctaLink: "https://example.com/uofa-volunteer",
    content: () => (
      <p>
        Currently pursuing my Master’s degree, focused on advanced topics like software engineering, data analytics, and cloud computing. 
        The course has helped me strengthen my foundation in full-stack development, agile methodologies, and building scalable digital solutions.
        <br /><br />
        I've also actively participated in university volunteering programs and collaborated on real-world projects with peers from diverse backgrounds.
      </p>
    ),
  },
  {
    title: "PES University",
    subtitle: "Bachelor of Technology in Electronics and Communication",
    year: "August 2017 - July 2021",
    src: "/volunteer.png",
    ctaText: "Bangalore, India",
    ctaLink: "https://example.com/uofa-volunteer",
    content: () => (
      <p>
        Completed my undergraduate degree with a strong focus on electronics, signal processing, and embedded systems. 
        This is where I first discovered my passion for programming and software development, leading me to explore web and app projects alongside my coursework.
        <br /><br />
        Took part in technical events, coding clubs, and contributed to small group research initiatives, which laid the foundation for my transition into the software industry.
      </p>
    ),
  },
];


const tabs = [
  {
    title: "Industry",
    value: "industry",
    content: (
      <div className="w-full h-full p-6 md:p-10 rounded-2xl text-white text-xl md:text-3xl font-semibold bg-gradient-to-br from-[#090555] to-[#0B4D99]">
        <p className="mb-4">Industry Experience</p>
        <ExpandableCardDemo cards={industryCards} />
      </div>
    ),
  },
  {
    title: "Work",
    value: "work",
    content: (
      <div className="w-full h-full p-6 md:p-10 rounded-2xl text-white text-xl md:text-3xl font-semibold bg-gradient-to-br from-[#090555] to-[#0B4D99]">
        <p className="mb-4">Work Experience</p>
        <ExpandableCardDemo cards={workCards} />
      </div>
    ),
  },
  {
    title: "Volunteering",
    value: "volunteering",
    content: (
      <div className="w-full h-full p-6 md:p-10 rounded-2xl text-white text-xl md:text-3xl font-semibold bg-gradient-to-br from-[#090555] to-[#0B4D99]">
        <p className="mb-4">Volunteering Experience</p>
        <ExpandableCardDemo cards={volunteeringCards} />
      </div>
    ),
  },
    {
    title: "Education",
    value: "education",
    content: (
      <div className="w-full h-full p-6 md:p-10 rounded-2xl text-white text-xl md:text-3xl font-semibold bg-gradient-to-br from-[#090555] to-[#0B4D99]">
        <p className="mb-4">Education</p>
        <ExpandableCardDemo cards={educationCards} />
      </div>
    ),
  },
];


export function TabsDemo() {


  return (
    <div className="h-[35rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full text-white items-start justify-start mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}