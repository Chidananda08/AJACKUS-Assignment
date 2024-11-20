import React from "react";
import UserList from "./components/UserList";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>User Management App</h1>
      <UserList />
    </div>
  );
};

export default App;
