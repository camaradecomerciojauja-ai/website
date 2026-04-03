import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);

    const getUser = async () => {
        try {
            const userData = localStorage.getItem('adminAuth');
            setUser(JSON.parse(userData));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const contextValue = {
        user
    }

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);