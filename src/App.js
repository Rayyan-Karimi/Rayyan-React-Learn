import React, { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h1>Conditional Rendering in React</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome</h2>
          <button onClick={toggleLogin}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button onClick={toggleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
export default App;