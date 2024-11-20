import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../services/userService";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import "./styles/userList.css"; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      alert("Failed to fetch users.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
        alert("User deleted successfully.");
      } catch (error) {
        alert("Failed to delete user.");
      }
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    fetchUsers();
  };

  return (
    <div className="user-list-container">
      <header className="user-list-header">
        <h1>User Management</h1>
        <button className="btn-add-user" onClick={handleAddNew}>
          + Add User
        </button>
      </header>
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {isFormOpen && (
        <UserForm user={editingUser} onClose={handleFormClose} />
      )}
    </div>
  );
};

export default UserList;
