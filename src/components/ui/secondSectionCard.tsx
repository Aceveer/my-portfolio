import React, { ReactNode  } from 'react';
import SpotlightCard from './SpotlightCard';
import AnimatedCircularProgress from './animationCircularProgress';


interface SecondSectionCardProps {
  icon: ReactNode;
  title: string;
  level: number;
  experience: number;
  projects: number;
  spotlightColor?: string;
}

const SecondSectionCard: React.FC<SecondSectionCardProps> = ({
  icon,
  title,
  level,
  experience,
  projects,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  return (
    <SpotlightCard spotlightColor={spotlightColor}>
      {/* Header: Image + Title */}
    <div className="flex items-center gap-4">
        <div className="text-4xl text-green-400">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Skill Level Gauge + Info */}
      <div className="flex items-center justify-between">
        <div className="relative w-16 h-16">
          <AnimatedCircularProgress level={level} />
        </div>

        <div className="text-right text-sm text-white space-y-1">
          <p className="font-medium">Experience: {experience} yrs</p>
          <p className="text-gray-400">Projects: {projects}</p>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default SecondSectionCard;
