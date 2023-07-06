import React, { createContext, useState } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [firstTimeUser, setFirstTimeUser] = useState(true);
    const [authenticated, setAuthenticated] = useState(true);

    useLayoutEffect(() => {
        checkFirstTimeUser();
    }, []);

    async function checkFirstTimeUser() {
        try {
            const result = await AsyncStorage.getItem("firstTimeUser");
            if (result !== null) {
                setFirstTimeUser(false);
            } else {
                setFirstTimeUser(true);
                await AsyncStorage.setItem("firstTimeUser", JSON.stringify(false));
            }
            console.warn(result, '==result');
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <AuthContext.Provider value={{firstTimeUser, authenticated}}>
      {children}
    </AuthContext.Provider>
  )
}
