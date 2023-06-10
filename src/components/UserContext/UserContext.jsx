import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const UsersAuthentication = createContext(null);
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const newCreateUsers = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const UserSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userProfileUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loginUser => {
            setUser(loginUser)


            if (loginUser) {
                axios.post('http://localhost:5000/jwtprotect', {
                    email: loginUser?.email
                })
                    .then(data => {
                        setLoading(false);
                        localStorage.setItem('emagraphy-access', data.data.token)
                    })
                    .catch(error => { console.log(error.message) })
            }
            else {
                localStorage.removeItem('emagraphy-access')
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        newCreateUsers,
        UserSignIn,
        userProfileUpdate,
        logOut,
        googleLogin
    }


    return (
        <UsersAuthentication.Provider value={userInfo}>
            {children}
        </UsersAuthentication.Provider>
    )

};

export default UserContext;
