import { createContext, useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            setAuth(true);
        }
    });
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
