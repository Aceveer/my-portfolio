"use client";
import { useEffect, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnimatedCircularProgress = ({ level }: { level: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let start: number | null = null;
    const duration = 500; // 0.5 seconds

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressRatio = Math.min(elapsed / duration, 1);
      setProgress(progressRatio * level);
      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [level]);

  return (
    <div className="w-[60px] h-[60px]">
      <CircularProgressbar
        value={progress}
        text={`${Math.round(progress)}%`}
        styles={buildStyles({
          pathColor: "#4ade80",
          trailColor: "#2d2d2d",
          textColor: "#ffffff",
          textSize: "28px",
          strokeLinecap: "round",
          pathTransition: "none", // disable internal transitions
        })}
      />
    </div>
  );
};

export default AnimatedCircularProgress;
