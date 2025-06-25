import "./gradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  // animationSpeed = 12,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `4s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content font-bold mt-2" style={gradientStyle}>{children}</div>
    </div>
  );
}
