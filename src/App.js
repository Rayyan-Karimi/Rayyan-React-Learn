import { useState } from "react";
import ButtonChild from "./ButtonChild";

// Props - parent 2 child comms
function Greeting(props) {
  return (
    <h2>
      Welcome to React, <i>{props.name}</i>. Lets build something amazing.
    </h2>
  );
}

function App() {
  // State
  const [isOn, setIsOn] = useState(false);
  const toggleButton = () => {
    setIsOn(!isOn);
  };

  // Event handling
  const handleClick = () => {
    alert("Button was clicked.");
  };

  const [message, setMessage] = useState(""); // state to store the message
  const handleMessage = (msg) => {
    // update teh state wth message from child.
    setMessage(msg);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <Greeting name="Rayyan" />
      <Greeting name="Alice" />
      { /* pass a calback fuction to the child */ }
      <ButtonChild onButtonClick={handleMessage} />
      { /* display the message from the child */}
      <p>{message}</p>
      <button onClick={toggleButton}>{isOn ? "ON" : "OFF"}</button>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
export default App;
