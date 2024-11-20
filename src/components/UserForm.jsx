import React, { useState } from "react";
import { addUser, updateUser } from "../services/userService";

const UserForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    department: user?.department || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        await updateUser(user.id, formData);
        alert("User updated successfully.");
      } else {
        await addUser(formData);
        alert("User added successfully.");
      }
      onClose();
    } catch (error) {
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="user-form">
      <h2>{user ? "Edit User" : "Add New User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
