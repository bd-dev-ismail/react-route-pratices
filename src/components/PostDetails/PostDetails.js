import React from 'react';
import { Link, useLoaderData,  } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { title, body, userId } = post;
    // const navigate = useNavigate();
    // const handalNaviage = ()=>{
    //     navigate(`/friend/${userId}`);
    // }
    return (
      <div>
        <h1>Here are some Details of Every each post</h1>
        <h3>Title: {title}</h3>
        <h4>Body: {body}</h4>
        <Link to={`/friend/${userId}`}>
          <button>Get The Author</button>
        </Link>
      </div>
    );
};

export default PostDetails;