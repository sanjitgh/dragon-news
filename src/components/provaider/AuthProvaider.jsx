import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext();
import { auth } from "../firebase/firebase.init";

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   user create
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // stay data setup
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   user logout
  const logOut = () => {
    return signOut(auth);
  };

  // passing the data or value
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvaider;
