import { useEffect, useState } from "react";
import UserCard from "Usercard";
import usersData from "../public/users.json";
import "./app.css";
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  profilePicture: string;
};
function App() {

  function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
  
    useEffect(() => {
      setUsers(usersData);


  return (
    <div>
      <h1>User Information</h1>
      <UserCard />
    </div>
  );
}

export default App;