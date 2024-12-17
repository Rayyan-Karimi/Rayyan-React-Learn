import React, { useState } from "react";

function Greeting(props) {
  return (
    <h2>
      Welcome to React, <i>{props.name}</i>. Lets build something amazing.
    </h2>
  );
}

function App() {
  const [isOn, setIsOn] = useState(false);
  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <Greeting name="Rayyan" />
      <Greeting name="Alice" />
      <button onClick={toggleButton}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}
export default App;
