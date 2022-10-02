import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';
const Friend = ({friend}) => {
    console.log(friend);
    const { name, phone, email, username, id } = friend;
    return (
      <div className="friend-card">
        <h1>Name: {name}</h1>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>
          UserName: <Link to={`/friend/${id}`}>{username}</Link>
        </p>
      </div>
    );
};

export default Friend;