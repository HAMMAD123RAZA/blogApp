import React, { useEffect, useState } from 'react';
import Post from '../Post';

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
};

export default IndexPage;
