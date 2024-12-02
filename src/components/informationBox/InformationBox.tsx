import useWeatherStore from "../../store/useWeatherStore";
import Loader from "../loader/Loader";
import TempByHour from "../tempByHour/TempByHour";
import Temperature from "../temperature/Temperature";
import WeatherCondition from "../weatherConditions/WeatherCondition";
import "./information-box.css";

const InformationBox = () => {
  const { data, error, isLoading } = useWeatherStore();
  const formattedDate = data
    ? new Date(data.current.last_updated).toLocaleDateString("en-GB")
    : "";
  const formattedHour =
    data?.current.last_updated.split(" ")[1].split(":")[0] + ":00";

  return (
    <div
      className={`box-container ${
        (!data && !isLoading && !error) || error ? "centered" : ""
      }`}
    >
      {isLoading && <Loader />}
      {error && <p className="no-data">{error}</p>}
      {!data && !error && !isLoading && (
        <p className="no-data">enter a city name and check for the weather</p>
      )}
      {data && !error && !isLoading && (
        <>
          <div className="location-time-container">
            <p className="city-text">{data.location.name}</p>
            <p className="country-text" style={{ marginBottom: "10px" }}>
              {data.location.country}
            </p>

            <p className="current-date-text">
              {formattedDate} at {formattedHour}
            </p>
          </div>

          <div className="temp-and-description-container">
            <Temperature celsius={Math.floor(data.current.temp_c)} />
            <p className="temp-description-text">
              {data.current.condition.text}
            </p>
          </div>

          <div className="weather-conditions-container">
            <WeatherCondition
              conditionTitle="precipitation"
              conditionScore={data.current.precip_mm.toString() + "mm"}
            />
            <WeatherCondition
              conditionTitle="humidity"
              conditionScore={data.current.humidity.toString() + "%"}
            />
            <WeatherCondition
              conditionTitle="wind"
              conditionScore={data.current.wind_kph.toString() + "km/h"}
            />
          </div>

          <div className="hourly-temp-container">
            {data.forecast.map((item) => (
              <TempByHour key={item.time} hour={item.time} temp={item.temp_c} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default InformationBox;
