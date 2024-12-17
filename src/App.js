import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ray", age: 25 },
    { id: 2, name: "Lee", age: 24 },
    { id: 3, name: "Jas", age: 23 },
    { id: 4, name: "Oly", age: 22 },
    { id: 5, name: "Cas", age: 21 },
  ]);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (newName.trim() === "" || newAge.trim() === "") {
      alert("Please provide both name and age");
      return;
    }
    if (newName.length > 20) {
      alert("Name cannot exceed 20 chars.");
      return;
    }
    const age = parseInt(newAge);
    if (age < 1 || age > 120) {
      alert("Please enter valid age (1-120).");
      return;
    }
    const newUser = {
      id: users.length + 1,
      name: newName,
      age: age,
    };
    setUsers([...users, newUser]);
    setNewName("");
    setNewAge("");
  };

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      <h1>React Forms: Add new User</h1>
      {/* Form section */}
      <form onSubmit={handleAddUser} style={{ marginBottom: "20px" }}>
        <div>
          <input
            type="text"
            placeholder="Enter name.."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <span>{newName.length}/20 characters</span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            type="number"
            placeholder="Enter age.."
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />
        </div>
        <button type="submit" style={{ padding: "5px 10px" }}>
          Add User
        </button>
      </form>
      {/* User list section */}
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
