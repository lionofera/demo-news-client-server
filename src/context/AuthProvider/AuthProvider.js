import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}  from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect ( () => {
        const unsubscribe = onAuthStateChanged(auth, (guestUser) => {
            setUser(guestUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, providerLogin, logout, createUser, signIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;