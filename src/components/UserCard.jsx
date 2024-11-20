import React from "react";

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Department: {user.department || "N/A"}</p>
      <div className="actions">
        <button className="btn-edit" onClick={() => onEdit(user)}>Edit</button>
        <button className="btn-delete" onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
