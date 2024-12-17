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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User List</h1>

      {/* Form Section */}
      <form
        onSubmit={handleAddUser}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span
            className={`text-sm px-2 ${
              newName.length > 20 ? "text-red-500" : "text-blue-500"
            }`}
          >
            {newName.length}/20 characters
          </span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-2"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            placeholder="Enter age"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add User
        </button>
      </form>

      {/* User List Section */}
      <ul className="w-full max-w-md space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
          >
            <span>
              <strong>{user.name}</strong>, {user.age} years old
            </span>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-600 transition"
            >
              Delete
            </button>
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
