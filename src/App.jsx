import { useState } from "react";

function App() {

  const [energy, setEnergy] = useState(100);

  const [tapCount, setTapCount] = useState(0);

  const startCoding = () => {

    const totalTaps = tapCount + 1;

    setTapCount(totalTaps);

    let remainingEnergy;

    // Heavy bug attack on every 5th click
    if (totalTaps % 5 === 0) {
      remainingEnergy = energy - 15;
    }
    else {
      remainingEnergy = energy - 2;
    }

    // Prevent negative value
    if (remainingEnergy < 0) {
      remainingEnergy = 0;
    }

    setEnergy(remainingEnergy);
  };

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "120px",
        fontFamily: "Arial"
      }}
    >

      <h1>⚡ Coding Energy Simulator</h1>

      <h2>Energy Left: {energy}</h2>

      <button
        onClick={startCoding}
        disabled={energy === 0}
        style={{
          padding: "14px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          backgroundColor: energy === 0 ? "gray" : "black",
          color: "white",
          cursor: energy === 0 ? "not-allowed" : "pointer"
        }}
      >

        {
          energy === 0
            ? "💤 Burnout Detected"
            : "💻 Write Code"
        }

      </button>

      <p style={{ marginTop: "20px" }}>
        Total Coding Sessions: {tapCount}
      </p>

    </div>

  );
}

export default App;