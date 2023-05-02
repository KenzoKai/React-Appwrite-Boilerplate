// src/components/Register.js
import { useState } from 'react';
import { account } from '../appwrite';
import { sendErrorToDiscord } from '../errorHandler';
import {ID} from "appwrite";


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await account.create(ID.unique(), email, password, name);
            alert('Registration successful!');
            await account.createEmailSession(email, password);
        } catch (error) {
            alert('Registration failed. Please try again.');
            sendErrorToDiscord(error.message)
        }
    };

    return (
            <div>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
    );
};

export default Register;