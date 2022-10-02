import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    const {name, phone, email, } = friend;
    return (
        <div>
            <h1>Friend Details Page</h1>
            <h2>Every Think You need to know about this person</h2>
            <h3>Name: {name}</h3>
            <p>Call Now: {phone}</p>
            <p>Send Mail: {email}</p>
        </div>
    );
};

export default FriendsDetails;