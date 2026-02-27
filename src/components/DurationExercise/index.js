import { useState, useEffect, useRef } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function DurationExercise({ name, onBack }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div>
      <h2>{name}</h2>

      <div className="timerDisplay">
        {pad(minutes)}:{pad(secs)}
      </div>

      <div className="buttonRow">
        {!running ? (
          <button
            className="controlButton"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        ) : (
          <button
            className="controlButton"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        )}

        <button
          className="controlButton"
          onClick={() => {
            setRunning(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>

      <button
        className="controlButton backButton"
        onClick={onBack}
        style={{ marginTop: "20px" }}
      >
        Back
      </button>
    </div>
  );
}