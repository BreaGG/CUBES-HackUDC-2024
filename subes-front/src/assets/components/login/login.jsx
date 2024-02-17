import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar solicitud de inicio de sesión a la API
        // Aquí deberías usar fetch o alguna librería para hacer la solicitud POST a tu API
        // Por simplicidad, voy a imprimir los datos del usuario en la consola
        console.log('Iniciando sesión con:', { username, password });
        onLogin({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome back to our CubeWorld</h1>
            <div>
                <label htmlFor="username">U S E R N A M E</label>
                <br />
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='input-text'
                />
            </div>
            <div>
                <label htmlFor="password">P A S S W O R D</label>
                <br />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input-text'
                />
            </div>
            <button type="submit" className='input-submit'>L O G I N</button>
            <NavLink to="/register">new here? click here to register</NavLink>
        </form>
    );
};

export default Login;
