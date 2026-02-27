import { useEffect, useRef, useState } from "react";

function pad2(n) {
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
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <button className="controlButton backButton" onClick={onBack}>
        Back
      </button>

      <h2>{name}</h2>

      <div className="timerDisplay">
        {pad2(minutes)}:{pad2(secs)}
      </div>

      <div className="buttonRow">
        {!running ? (
          <button className="controlButton" onClick={() => setRunning(true)}>
            Start
          </button>
        ) : (
          <button className="controlButton" onClick={() => setRunning(false)}>
            Stop
          </button>
        )}

        <button className="controlButton" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}