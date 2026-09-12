import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export function AuthProvider({ children }) {



    const [isAuthenticated, setIsAuthenticated] = useState(false)

    console.log(isAuthenticated, 'novo')

    useEffect(() => {

        const tokenNavigate = localStorage.getItem('token')

        if (tokenNavigate) {

            setIsAuthenticated(true)

        } else {

            setIsAuthenticated(false)

        }


    }, [])

    function loggedIn() {

        setIsAuthenticated(true)

    }

    function loggedOut() {

        
        
        localStorage.removeItem('token')
        setIsAuthenticated(false)

    }



    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                loggedIn,
                loggedOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}