import React from "react";
import "./weather-condition.css";

interface WeatherProps {
  conditionTitle: string;
  conditionScore: string;
}

const WeatherCondition = ({ conditionTitle, conditionScore }: WeatherProps) => {
  return (
    <div className="weather-condition-container">
      <p className="condition-title">{conditionTitle}</p>
      <p className="condition-score">{conditionScore}</p>
    </div>
  );
};

export default WeatherCondition;
