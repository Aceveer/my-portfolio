import { ThreeDCardDemo } from '@/components/ui/thirdSectionCardComponent';
import React from 'react';

const projects = [
  {
    title: "SceneIt Movie Platform",
    desc: "A full-stack movie discovery and discussion platform.",
    image: "/projects/SCENEIT.png",
    link: "https://github.com/Aceveer/SceneIt-Movie-Platform",
    techStack: "Next.js, FastAPI, MySQL, Tailwind",
  },
  {
    title: "Grocery Recommendation System",
    desc: "Using content-based filtering and Apriori algorithm",
    image: "/projects/grocery.png",
    link: "https://github.com/Aceveer/MBD-S1-2024/tree/main/Assignment%203",
    techStack: "Python, Scikit",
  },
];

const ThirdSection = () => {
  return (
    <div style={{
        background: 'linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(11, 77, 153, 1) 100%)'
      }}
      >
      <h2 className='text-center text-3xl font-bold'>Project Highlights</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4">
        {projects.map((project, index) => (
          <ThreeDCardDemo
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            link={project.link}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
