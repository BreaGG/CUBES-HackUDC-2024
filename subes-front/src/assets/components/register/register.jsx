import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../usercontext/userContext';

const RegisterForm = () => {
    const { setUsername } = useUser();
    const [username, setUsernameState] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users', {
                username,
                password,
                email
            });
            console.log('Respuesta de la API:', response.data);
            setUsername(username);
            setRegistered(true);
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <div>
            {registered ? (
                <p>¡Registrado correctamente!</p>
            ) : (
                <form>
                    <h1>Welcome back to our CubeWorld</h1>
                    <div>
                        <label>USERNAME</label>
                        <br />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsernameState(e.target.value)}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='input-text'
                        />
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='input-text'
                        />
                    </div>
                    <button type="button" onClick={handleRegister} className='input-submit'>
                        REGISTER
                    </button>
                </form>
            )}
        </div>
    );
};

export default RegisterForm;
