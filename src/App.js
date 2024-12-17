import React from "react";

function App() {
  const users = [
    { id: 1, name: "Ray", age: 25 },
    { id: 2, name: "Lee", age: 24 },
    { id: 3, name: "Jas", age: 23 },
    { id: 4, name: "Oly", age: 22 },
    { id: 5, name: "Cas", age: 21 },
  ];

  return (
    <div>
      <h1>Rendering a List of Objectives</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old.
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
