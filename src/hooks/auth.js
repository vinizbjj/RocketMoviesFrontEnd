import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ email: 'viniz.bjj@gmail.com' }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthProvider };
