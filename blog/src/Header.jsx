import { set } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
const {setUserInfo,userInfo}=useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) =>
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      })
    );
  }, []);


  function logout(){
    fetch("http://localhost:4000/logout", {
      credentials:'include',
      method:'POST'
    })
  }

  const username=userInfo?.username;
  return (
    <>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          {username && (
            <>
              <Link to="/create">create new post</Link>
              <a href="" onClick={logout}>logout</a>
            </>
          )}

          {!username && (
            <>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
