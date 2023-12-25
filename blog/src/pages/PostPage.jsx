import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then(res => {
      res.json().then(postInfo => {
        setPost(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) {
    return <div>Loading...😉</div>; 
  }

  return (
    <>
      <div className='post-page'>
        <h1>{postInfo.title}</h1>
        <time>{postInfo.createdAt}</time>
        
        <div className="image">
          <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </div>

        <div className='content' dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>

      </div>
    </>
  );
};

export default PostPage;
