import logo from "../src/assets/logo.png";
import "./App.css";
import InformationBox from "./components/informationBox/InformationBox";
import Inputfield from "./components/inputField/InputField";
import useWeatherStore from "./store/useWeatherStore";
function App() {
  const { data, error, isLoading, fetchData } = useWeatherStore();
  const formattedDate = data
    ? new Date(data.current.last_updated).toLocaleDateString("en-GB")
    : "";

  return (
    <div className="App">
      <div className="left-container">
        <div className="image-container">
          <img src={logo} alt="company-logo" />
        </div>
        <div className="left-content-container">
          <p className="instructions">
            Use our weather app to see the weather around the world
          </p>
          <label className="city-name" htmlFor="city-name">
            City name
          </label>
          <Inputfield />
        </div>
        <div className="bottom-left-container">
          <div className="lat-lon-container">
            <p className="bottom-left-text">
              {data && !error
                ? `latitude ${data?.location.lat.toFixed(2)}`
                : "adam"}
            </p>
            <p className="bottom-left-text">
              {data && !error
                ? `longtitude ${data?.location.lon.toFixed(2)}`
                : "finkler"}
            </p>
          </div>

          <p className="bottom-left-text">
            {data?.current?.last_updated && !error
              ? `accurate to ${formattedDate} at ${
                  data.current.last_updated.split(" ")[1]
                }`
              : "0547253391"}
          </p>
        </div>
      </div>
      <div className="right-container">
        <InformationBox />
      </div>
    </div>
  );
}

export default App;
