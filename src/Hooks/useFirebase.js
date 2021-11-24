import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "./../Components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const signInWIthGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .then((error) => setError(error.message));
  };
  return { user, error, setUser, signInWIthGoogle };
};

export default useFirebase;
