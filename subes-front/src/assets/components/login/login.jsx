import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../usercontext/userContext';

const Login = () => {
    const { setUsername } = useUser();
    const [username, setUsernameInput] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            setUsername(username);
            setLoginMessage(`Welcome back ${username}`);
        } else {
            setLoginMessage('Please enter username and password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome back to our CubeWorld</h1>
            <div>
                <label htmlFor="username">USERNAME</label>
                <br />
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className='input-text'
                />
            </div>
            <div>
                <label htmlFor="password">PASSWORD</label>
                <br />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input-text'
                />
            </div>
            <button type="submit" className='input-submit'>LOGIN</button>
            <NavLink to="/register">New here? Click here to register</NavLink>
            <p>{loginMessage}</p>
        </form>
    );
};

export default Login;
