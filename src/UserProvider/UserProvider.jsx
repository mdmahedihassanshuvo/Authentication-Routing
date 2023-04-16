import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../components/firebase.config';

const auth = getAuth(app)

export const userContext = createContext(null)

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const userInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }

    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;