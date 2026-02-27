import { useState } from "react";

export default function RepetitionExercise({ name, onBack }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>

      <div className="repDisplay">{count}</div>

      <div className="buttonRow">
        <button
          className="controlButton"
          onClick={() => setCount(count + 1)}
        >
          +1 reps
        </button>

        <button
          className="controlButton"
          onClick={() => setCount(0)}
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