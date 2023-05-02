// src/components/Logout.js
import { useContext } from 'react';
import { account } from '../appwrite';
import { UserContext } from '../UserContext';

const Logout = () => {
    const { setUser } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
            alert('Peace out! Logout successful!');
        } catch (error) {
            alert('Dang, logout failed. Give it another go.');
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;