/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

   //    Google
  const googleProvider = new GoogleAuthProvider()

   // Google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

   //   sing up 
   const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   } 
     
       // UpdateProfile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName : name, photoURL: photo
        })
    }

  //    sing in user

  const signIn = (email, password) => {  
    return signInWithEmailAndPassword(auth, email, password)
    
  }

   
     //  logout  
     const logOut = () => {
        return signOut(auth)
     } 


    //   using observer current user
    useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
     })
     return () => {
        unSubscribe()
     }
    },[])
 
//   console.log(user)




    const authInfo = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading,
        handleUpdateProfile,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;