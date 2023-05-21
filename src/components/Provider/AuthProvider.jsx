import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase_config';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const goggleProvider = new GoogleAuthProvider()

    const [loadding,setLoadding] = useState(true)
    const [user, setUser] = useState(null)

    const createUser =(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn =(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser =(name,photo)=>{
        updateProfile(auth.currentUser,{
           displayName:name,photoURL:photo
       })
       .then(()=>{
           console.log('profile is update')
       })
       .catch(err=>{
           console.log(err.message)
       })
   }

    const logOut =()=>{
        setLoadding(true)
        return signOut(auth)
    }

    const signInWithGoogle =()=>{
        signInWithPopup(auth,goggleProvider)
        .then(result=>{
            console.log(result)
        })
        .catch(er=>{
            console.log(er.message)
        })
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoadding(false)
        })

        return unsubcribe
    },[])

const authInfo ={
user,
loadding,
createUser,
logIn,
logOut,
signInWithGoogle,
updateUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;