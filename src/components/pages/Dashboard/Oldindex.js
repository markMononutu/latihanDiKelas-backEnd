import React, { useState, useEffect } from "react";
import Card from "../../molecules/Card";
import NavBar from "../../molecules/NavBar";
import Axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch("https://reqres.in/api/users")
    //   .then((res) => res.json())
    //   .then((json) => setUsers(json.data));
    //Axios
    Axios.get("http://localhost:3004/users").then((res) => setUsers(res.data));
  }, []);
  console.log(users);
  return (
    <div className="container">
      <NavBar />
      <h3>Dashboard</h3>
      <hr />
      <div className="row align-items-start">
        {users.map((item) => (
          <Card
            avatar={item.avatar}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
