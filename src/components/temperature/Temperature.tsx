import "./temperature.css";

interface TemperatureProps {
  celsius: number;
}

const Temperature = ({ celsius }: TemperatureProps) => {
  return (
    <div className="temp-circle-container">
      <span className="current-temp-text">
        {celsius}
        <div className="circle" />
      </span>
    </div>
  );
};

export default Temperature;
