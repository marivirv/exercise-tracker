import { useState } from "react";

export default function RepetitionExercise({ name, onBack }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="controlButton backButton" onClick={onBack}>
        Back
      </button>

      <h2>{name}</h2>

      <div className="repDisplay">{count}</div>

      <div className="buttonRow">
        <button className="controlButton" onClick={() => setCount((c) => c + 1)}>
          +1 reps
        </button>

        <button className="controlButton" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}