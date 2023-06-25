import { createContext, useState } from "react";

export const BottomNavigationContext = createContext();

export const BottomNavigationProvider = ({ children }) => {
    const [navigationValue, setNavigationValue] = useState("");
    return (
        <BottomNavigationContext.Provider
            value={{ navigationValue, setNavigationValue }}
        >
            {children}
        </BottomNavigationContext.Provider>
    );
};
