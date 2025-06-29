"use client";

import React, { JSX, useEffect, useRef, useState } from 'react';
import { Tab } from '@headlessui/react';
import SecondSectionCard from '@/components/ui/secondSectionCard';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaServer, FaJava, FaGitAlt, FaGithub, FaDocker} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine  } from "react-icons/ri";
import { SiNodedotjs, SiExpress, SiPython, SiSpringboot, SiDotnet, SiFastapi, SiMysql, SiPostgresql, SiMongodb, SiFirebase,  SiJavascript, SiTypescript, SiDart, SiCplusplus, SiC, SiInsomnia, SiPostman, SiVercel, SiJira, SiSlack, SiAmazonwebservices, SiScikitlearn, SiTensorflow, SiPytorch, SiPandas, SiNumpy   } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscAzureDevops } from "react-icons/vsc";



const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "Machine Learning",
  "Tools",
];



// Individual skill panel components
const FrontendSkills = () => (
  <>
  <SecondSectionCard icon={<FaHtml5/>} title="HTML" level={90} experience={4} projects={10} spotlightColor="#f06529"/>
  <SecondSectionCard icon={<FaCss3Alt/>} title="CSS" level={85} experience={4} projects={10} spotlightColor="#2965f1"/>
  <SecondSectionCard icon={<FaJs/>} title="JavaScript" level={85} experience={4} projects={10} spotlightColor="#f0db4f"/>
  <SecondSectionCard icon={<FaReact/>} title="React.js" level={80} experience={3} projects={9} spotlightColor="#61dbfb"/>
  <SecondSectionCard icon={<RiNextjsLine/>} title="Next.js" level={80} experience={2} projects={6} spotlightColor="#FFFFFF"/>
  <SecondSectionCard icon={<FaVuejs/>} title="Vue.js" level={60} experience={1} projects={1} spotlightColor="#2da968"/>
  <SecondSectionCard icon={<RiTailwindCssLine/>} title="Tailwind" level={80} experience={3} projects={6} spotlightColor="#78cac3"/> 
  </>
);

const BackendSkills = () => (
  <>
  <SecondSectionCard icon={<SiNodedotjs/>} title="Node.js" level={85} experience={2} projects={3} spotlightColor="#8cc84b"/>
  <SecondSectionCard icon={<SiExpress/>} title="Express.js" level={80} experience={2} projects={1} spotlightColor="#303030"/>
  <SecondSectionCard icon={<SiSpringboot/>} title="Spring Boot" level={70} experience={2} projects={1} spotlightColor="#6DB33F"/>
  <SecondSectionCard icon={<SiDotnet/>} title=".NET" level={60} experience={1} projects={1} spotlightColor="#512BD4"/>
  <SecondSectionCard icon={<SiFastapi/>} title="FastAPI" level={85} experience={1} projects={1} spotlightColor="#009688"/>
  <SecondSectionCard icon={<FaServer/>} title="REST API" level={90} experience={4} projects={10} spotlightColor="#F06543"/>
  </>
);

const DatabaseSkills = () => (
    <>
    <SecondSectionCard icon={<SiMysql/>} title="MySQL" level={80} experience={4} projects={4} spotlightColor="#00758F" />
    <SecondSectionCard icon={<SiFirebase/>} title="Firebase" level={75} experience={1} projects={1} spotlightColor="#FFCA28" />
    <SecondSectionCard icon={<SiPostgresql/>} title="PostgreSQL" level={75} experience={1} projects={1} spotlightColor="#336791" />
    <SecondSectionCard icon={<SiMongodb/>} title="MongoDB" level={65} experience={1} projects={1} spotlightColor="#47A248" />
  </>
);

const ProgrammingSkills = () => (
    <>
    <SecondSectionCard icon={<SiPython />} title="Python" level={95} experience={4} projects={2} spotlightColor="#3776AB" />
    <SecondSectionCard icon={<SiJavascript />} title="JavaScript" level={90} experience={4} projects={10} spotlightColor="#F7DF1E" />
    <SecondSectionCard icon={<FaJava  />} title="Java" level={75} experience={2} projects={2} spotlightColor="#007396" />
    <SecondSectionCard icon={<SiTypescript />} title="TypeScript" level={80} experience={2} projects={6} spotlightColor="#3178C6" />
    <SecondSectionCard icon={<SiDart />} title="Dart" level={65} experience={1} projects={1} spotlightColor="#0175C2" />
    <SecondSectionCard icon={<SiCplusplus />} title="C++" level={60} experience={1} projects={0} spotlightColor="#00599C" />
    <SecondSectionCard icon={<SiC />} title="C" level={60} experience={1} projects={0} spotlightColor="#A8B9CC" />
  </>
);

const ToolsSkills = () => (
  <>
    <SecondSectionCard icon={<BiLogoVisualStudio />} title="VS Code" level={90} experience={4} projects={10} spotlightColor="#007ACC" />
    <SecondSectionCard icon={<FaGitAlt  />} title="Git" level={90} experience={4} projects={10} spotlightColor="#F05032" />
    <SecondSectionCard icon={<FaGithub />} title="GitHub" level={90} experience={4} projects={10} spotlightColor="#000000" />
    <SecondSectionCard icon={<FaDocker />} title="Docker" level={70} experience={2} projects={2} spotlightColor="#2496ED" />
    <SecondSectionCard icon={<SiInsomnia />} title="Insomnia" level={90} experience={3} projects={6} spotlightColor="#4000BF" />
    <SecondSectionCard icon={<SiPostman />} title="Postman" level={85} experience={3} projects={6} spotlightColor="#FF6C37" />
    <SecondSectionCard icon={<SiVercel />} title="Vercel" level={85} experience={2} projects={7} spotlightColor="#000000" />
    <SecondSectionCard icon={<SiJira />} title="Jira" level={75} experience={1} projects={1} spotlightColor="#0052CC" />
    <SecondSectionCard icon={<SiSlack />} title="Slack" level={80} experience={1} projects={1} spotlightColor="#4A154B" />
    <SecondSectionCard icon={<VscAzureDevops />} title="Azure" level={65} experience={2} projects={2} spotlightColor="#0078D4" />
    <SecondSectionCard icon={<SiAmazonwebservices />} title="AWS" level={70} experience={1} projects={0} spotlightColor="#FF9900" />
  </>
);

const MachineLearningSkills = () => (
  <>
    <SecondSectionCard icon={<SiPython />} title="Python" level={95} experience={4} projects={2} spotlightColor="#3776AB" />
    <SecondSectionCard icon={<SiScikitlearn />} title="Scikit-learn" level={80} experience={3} projects={1} spotlightColor="#F7931E" />
    <SecondSectionCard icon={<SiTensorflow />} title="TensorFlow" level={60} experience={2} projects={0} spotlightColor="#FF6F00" />
    <SecondSectionCard icon={<SiPytorch />} title="PyTorch" level={60} experience={2} projects={0} spotlightColor="#EE4C2C" />
    <SecondSectionCard icon={<SiPandas />} title="Pandas" level={85} experience={3} projects={1} spotlightColor="#150458" />
    <SecondSectionCard icon={<SiNumpy />} title="NumPy" level={80} experience={3} projects={1} spotlightColor="#013243" />
  </>
);

const skillPanels: Record<string, JSX.Element> = {
  Frontend: <FrontendSkills />,
  Backend: <BackendSkills />,
  Database: <DatabaseSkills />,
  Programming: <ProgrammingSkills />,
  Tools: <ToolsSkills />,
  "Machine Learning": <MachineLearningSkills />,
};

const SecondSection = () => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}
    style={{
        background: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(11, 77, 153, 1) 100%)'
      }}
      className={`w-full py-12 px-6 text-white transition-opacity duration-700${
        isVisible ? "fade-in-top" : "opacity-0"
      }`}>
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

      <Tab.Group>
        <Tab.List className="flex flex-wrap justify-center gap-4 mb-8">
          {skillCategories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition ${
                  selected ? "bg-green-500 text-black" : "bg-gray-800 text-white hover:bg-green-600"
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {skillCategories.map((category) => (
            <Tab.Panel key={category}>
              <div className="bg-[#1a1a1a] rounded-xl p-6 mx-4 border border-green-600">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skillPanels[category]}
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default SecondSection;
