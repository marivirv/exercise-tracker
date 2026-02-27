import { useState } from "react";
import "./App.css";

import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const EXERCISES = [
  { id: 1, name: "Push Ups", type: "repetition" },
  { id: 2, name: "Running", type: "duration" },
  { id: 3, name: "Plank", type: "duration" },
  { id: 4, name: "Delt Flys", type: "repetition" }
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleBack = () => {
    setSelectedExercise(null);
  };

  let screen = (
    <div>
      <h1>Exercise Tracker</h1>
      <p>Choose an exercise:</p>

      {EXERCISES.map((ex) => (
        <button
          key={ex.id}
          onClick={() => setSelectedExercise(ex)}
          className="exerciseButton"
        >
          {ex.name}
        </button>
      ))}
    </div>
  );

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = (
        <RepetitionExercise
          name={selectedExercise.name}
          onBack={handleBack}
        />
      );
    } else {
      screen = (
        <DurationExercise
          name={selectedExercise.name}
          onBack={handleBack}
        />
      );
    }
  }

  return <div className="appContainer">{screen}</div>;
}
