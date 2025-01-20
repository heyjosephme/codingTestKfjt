const LightButton = ({ color, isActive, onClick, label }) => {
  // Map color names to Tailwind classes
  const colorMap = {
    red: "bg-red-600",
    yellow: "bg-yellow-400",
    blue: "bg-blue-500",
  };

  return (
    <button
      onClick={onClick}
      className={`w-24 h-24 rounded-full transition-colors duration-300 ${
        isActive ? colorMap[color] : "bg-gray-400"
      }`}
      aria-label={label}
    />
  );
};

export default LightButton;
