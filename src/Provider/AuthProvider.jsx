import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);

const [loadng, setLoading] = useState(true);

const creatUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

useEffect(() => {
    const unSubcribe =onAuthStateChanged(auth, creatUser =>{
        console.log('user in the auth state changed', creatUser);
    setUser(creatUser);
    setLoading(false);
    });
return () =>{
    unSubcribe();
}
}, [])

    const authInfo = {
        user,
        loadng,
        creatUser, 
        signIn,
        logOut
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;