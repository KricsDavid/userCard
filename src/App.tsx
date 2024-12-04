import { useEffect, useState } from "react";
import UserCard from "./UserCard"; // Ensure the import path is correct
import usersData from "../public/users.json"; // Adjust the path if necessary
import "./app.css";

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  profilePicture: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setUsers(usersData);
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-list">
        {users
          .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(user => (
            <User Card key={user.id} user={user} />
          ))}
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default App;