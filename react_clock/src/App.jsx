import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock timeZone="Europe/London" />
      <Clock timeZone="Europe/Paris" />
      <Timer startTime={420} />
      <Timer startTime={180} />
      <Timer startTime={60} />
    </div>
  );
}

export default App;
