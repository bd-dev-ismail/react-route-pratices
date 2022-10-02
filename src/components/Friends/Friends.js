import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';


const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>This is Friends components</h1>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;