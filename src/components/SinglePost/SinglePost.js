import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css';
const SinglePost = ({post}) => {
    const {title, body, id} = post;
    const navigate = useNavigate();
    const handalNavigate = ()=>{
        navigate(`/post/${id}`);
    }
    return (
      <div className="post-card">
        <h1>Title: {title}</h1>
        <p>Body: {body}</p>
        <Link to={`/post/${id}`}>Visit {id}</Link>
        <Link to={`/post/${id}`}>
          <button>Show Details</button>
        </Link>
        <button onClick={handalNavigate}>Show Handal details</button>
      </div>
    );
};

export default SinglePost;