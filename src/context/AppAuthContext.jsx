import { createContext, useContext } from "react";


const AppAuthContext = createContext()

const AppAuthContextProvider = ({ children }) => {
    return (
        <AppAuthContext.Provider value="hello">
            {children}
        </AppAuthContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppAuthContext)
}

export { AppAuthContext, AppAuthContextProvider }