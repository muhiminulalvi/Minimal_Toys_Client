import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);

  // user create function
  const createUser = (email, password) => {
    setSpinner(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login function
  const logIn = (email, password) => {
    setSpinner(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google auth
  const googleLogIn = (provider) => {
    setSpinner(true)
    return signInWithPopup(auth, provider)
  }

  // update user
  const updateUser = (displayName, photoURL) => {
    setSpinner(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  // logout User
  const logOut = () => {
    return signOut(auth)
  }

  // observer function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User: ", currentUser);
      setSpinner(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    spinner,
    createUser,
    logIn,
    logOut,
    googleLogIn,
    updateUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
