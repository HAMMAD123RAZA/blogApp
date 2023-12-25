import React from "react";
import { Link } from "react-router-dom";

const Post = ({ _id,title, content, summary, cover, createdAt, author }) => {
  const fn=async()=>{
    const res=await fetch(`http://localhost:4000/del${_id}`,{
    method:"DELETE",
    headers:{
      'Content-Type':'application/json'
    }
    })
  }
  return (
    <>
      <div className="post">
        <Link to={`/post/${_id}`}>
          <div className="image">
            <img src={"http://localhost:4000/" + cover} alt="Post Cover" />
          </div>
        </Link>

        <div className="texts"> 
        <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            {author ? (
              <a href="" className="author">
                {author.username}
              </a>
            ) : (
              <span className="author">Unknown Author</span>
            )}
            <time>{createdAt}</time>
          </p>
          <button onClick={fn}>delete</button>
          <p>{summary}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
