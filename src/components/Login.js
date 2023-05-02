// src/components/Login.js
import { useState, useContext, } from 'react';
import { useNavigate } from "react-router-dom";
import { account } from '../appwrite';
import { UserContext } from '../UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const session = await account.createEmailSession(email, password);
            const currentUser = await account.get();
            setUser(currentUser);
            alert('Booyah! Login successful!');
            navigate('/');
        } catch (error) {
            alert('Aw, snap. Login failed. Give it another whirl.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;