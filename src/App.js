import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ray", age: 25 },
    { id: 2, name: "Lee", age: 24 },
    { id: 3, name: "Jas", age: 23 },
    { id: 4, name: "Oly", age: 22 },
    { id: 5, name: "Cas", age: 21 },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div>
      <h1>Styled List of Objectives rendered..</h1>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id} style={listItemStyle}>
            <span>
              {user.name} is {user.age} years old.
            </span>
            <button onClick={() => handleDelete(user.id)}>Delete user</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function App() {
//   const names = ["Rayyan", "Jasper", "Olly", "Zack"];

//   return (
//     <div>
//       <h1>List Rendering in React</h1>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };
//   return (
//     <div>
//       <h1>Conditional Rendering in React</h1>
//       {isLoggedIn ? (
//         <div>
//           <h2>Welcome</h2>
//           <button onClick={toggleLogin}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Please login</h2>
//           <button onClick={toggleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// }
export default App;
