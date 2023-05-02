// src/UserContext.js
import { createContext, useState, useEffect } from 'react';
import { account } from './appwrite';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            try {
                const currentUser = await account.get();
                setUser(currentUser);
            } catch (error) {
                setUser(null);
            }
        };
        getSession();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };