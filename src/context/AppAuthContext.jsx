import { createContext, useContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const AppAuthContext = createContext()

const AppAuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(false)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    // google signin
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

 // logout function
 const logOut = () => {
    return signOut(auth);
  };

    // observe auth state change
  useEffect(() => {
    // setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

    return (
        <AppAuthContext.Provider value={{
            signWithGoogle,
            logOut,
            user,
            loading
        }}>
            {children}
        </AppAuthContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppAuthContext)
}

export { AppAuthContext, AppAuthContextProvider }