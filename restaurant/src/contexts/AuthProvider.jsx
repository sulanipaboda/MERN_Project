import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create an account
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      
    }

    //sign up with Gmail account
    const signUpWithGmail = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //login using email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut = () => {
        signOut(auth);
    }

    //update profile 
    const updateUserProfile = (name, photoURL) => {
        return updateUserProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    //check signed in user
    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
              setLoading(false)
            } else {
              
            }
          });
          return () => {
            return unsubscribe();
          }
    }, [])

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
