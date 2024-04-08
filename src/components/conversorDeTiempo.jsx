import React, { useState } from "react";
import "./conversorDeTiempo.css";

const ConversorDeTiempo = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState(false);

  const handleHour = (value) => {
    setHour(value);
    setMinutes(value * 60);
    setSeconds(value * 3600);
  };

  const handleMinutes = (value) => {
    setHour(value / 60);
    setMinutes(value);
    setSeconds(value * 60);
  };

  const handleSeconds = (value) => {
    setHour(value / 3600);
    setMinutes(value / 60);
    setSeconds(value);
  };

  const handleMode = () => {
    setMode(!mode);
  };

  const containerStyle = {
    backgroundColor: mode ? "#e9e9e9" : "#242424",
    color: mode ? "#242424" : "#F2FDFF",
    transition: "background-color 0.5s ease",
  };

  return (
    <div
      className={`container ${mode ? "container-transition" : ""}`}
      style={{ ...containerStyle }}
    >
      <button
        style={{
          color: mode ? "black" : "#F2FDFF",
          backgroundColor: mode ? "white" : "#1a1a1a",
          border: mode ? "1px solid black" : "1px solid #F2FDFF",
        }}
        onClick={handleMode}
      >
        {mode ? "Dia" : "Noche"}
      </button>
      <h2>Conversor de Tiempo</h2>
      <section className="time">
        <label>Horas</label>
        <input
          type="number"
          className="input"
          value={hour}
          onChange={({ target }) => handleHour(target.value)}
        />
      </section>
      <section className="time">
        <label>Minutos</label>
        <input
          type="number"
          className="input"
          value={minutes}
          onChange={({ target }) => handleMinutes(target.value)}
        />
      </section>
      <section className="time">
        <label>Segundos</label>
        <input
          type="number"
          className="input"
          value={seconds}
          onChange={({ target }) => handleSeconds(target.value)}
        />
      </section>
    </div>
  );
};

export default ConversorDeTiempo;
