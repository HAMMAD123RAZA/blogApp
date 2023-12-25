import { useContext, useState } from 'react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { set } from 'mongoose'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect,setRedirect]=useState(false)
  const {userInfo,setUserInfo}=useContext(UserContext)

const fn=async(e)=>{
    e.preventDefault()
    const res=await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username,
            password
        }),
        credentials:'include'
    })
    if(res.status===200){
      res.json().then(userInfo=>{
        setUserInfo(userInfo)
      })
      setRedirect(true)
  }
  else{
    alert("wrong creadentials")
  }
}

    if(redirect){
      return <Navigate to={'/'}/>
    }

  return (
    <>
<form action="" className='login' onSubmit={fn} > 
    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}   />
    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}   /> 

    <button type='submit'>Login</button>

</form>
    </>
  )
}

export default Login
