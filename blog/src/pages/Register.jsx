import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const fn = async (e) => {

        e.preventDefault();
        
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }) // Use the declared variables here
        });
    }

    return (
        <>
            <form action="" className='register' onSubmit={fn}>
                <input type="text" placeholder='username' value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                <input type="password" placeholder='password' value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button type='submit'>register</button>
            </form>
        </>
    );
}

export default Register;
