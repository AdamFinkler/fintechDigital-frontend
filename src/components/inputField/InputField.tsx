import { KeyboardEvent, useRef, useState } from "react";
import useWeatherStore from "../../store/useWeatherStore";
import "./input-field.css";

const Inputfield = () => {
  const cityRef = useRef<HTMLInputElement>(null);
  const [emptyInputError, setEmptyInputError] = useState<boolean>(false);
  const [lastInputValue, setLastInputValue] = useState<string>("");
  const { fetchData } = useWeatherStore();
  const { error } = useWeatherStore();
  const handleOnClick = () => {
    if (!cityRef.current?.value.trim()) {
      setEmptyInputError(true);
      return;
    }
    if (lastInputValue !== cityRef.current.value) {
      fetchData(cityRef.current.value);
      setLastInputValue(cityRef.current.value);
    }
    setEmptyInputError(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="input-field-container-wrapper">
      <div className="input-field-container">
        <input type="text" ref={cityRef} onKeyDown={onKeyDown} id="city-name" />

        <button onClick={handleOnClick}>Check</button>
      </div>
      {emptyInputError && (
        <p className="input-message">this feild can not be left empty </p>
      )}
      {error && !emptyInputError && (
        <p className="input-message">please enter a valid city name</p>
      )}
    </div>
  );
};

export default Inputfield;
