import React from "react";
import "./temp-by-hour.css";

interface ItempByHourProps {
  hour: string;
  temp: number;
}

const TempByHour = ({ hour, temp }: ItempByHourProps) => {
  const formattedHour = hour.split(":").slice(0, 2).join(":");
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <p className="hour-text">{formattedHour}</p>
      <p className="temp-per-hour-text">{temp}°</p>
    </div>
  );
};

export default TempByHour;
