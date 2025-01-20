import { useState } from "react";
import { Card } from "@/components/ui/card";
import LightButton from "./LightButton";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("blue");

  const lights = [
    { color: "red", label: "赤信号" },
    { color: "yellow", label: "黄信号" },
    { color: "blue", label: "青信号" },
  ];

  return (
    <Card className="bg-gray-800 p-8">
      <div className="flex space-x-8">
        {lights.map((light) => (
          <LightButton
            key={light.color}
            color={light.color}
            isActive={activeLight === light.color}
            onClick={() => setActiveLight(light.color)}
            label={light.label}
          />
        ))}
      </div>
    </Card>
  );
};

export default TrafficLight;
