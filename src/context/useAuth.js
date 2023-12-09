import { createContext, useState, useEffect, useContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { app, auth } from '../config/firebase'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log("Auth", currentUser)
           setUser(currentUser)
       })
        return () => {
            unsubscribe()
        }
    }, [])

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, userSignup, userLogIn, logOut }} displayName="Auth">
            {children}
        </AuthContext.Provider>
    )
}