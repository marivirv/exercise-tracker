import { useEffect, useState } from "react";

function formatTime(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

export default function RunningExercise({ name, onBack }) {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => setIsRunning((prev) => !prev);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps((prev) => [...prev, formatTime(seconds)]);
  };

  return (
    <div>
      <button onClick={onBack}>← Back</button>

      <h1>{name}</h1>

      <h2 style={{ fontSize: "48px", margin: "12px 0" }}>
        {formatTime(seconds)}
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>

        <button onClick={handleLap} disabled={!isRunning}>
          Lap
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>

      <h3>Laps</h3>

      {laps.length === 0 ? (
        <p style={{ opacity: 0.7 }}>No laps yet. Start and press “Lap”.</p>
      ) : (
        <ol>
          {laps.map((lapTime, index) => (
            <li key={`${lapTime}-${index}`}>{lapTime}</li>
          ))}
        </ol>
      )}
    </div>
  );
}