import { createContext, useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userName, setUserName] = useState('');

  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUserEmail(result.user.email)
        setUserPhoto(result.user.photoURL);
        setUserName(result.user.displayName);
        setLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLogged(true);
        setUserPhoto(user.photoURL);
        setUserName(user.displayName);
        setUserEmail(user.email);
        console.log('Logeado correctamente');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(user.email);
        setUserEmail(user.email);
        
        updateProfile(user, {
          photoURL: "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1695000251/CursoReact/profileDefault_uffvnj.png"
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const logout = () =>{
    auth.signOut()
      .then(() =>{
        setUserEmail('');
        setUserName('');
        setUserPhoto('');
        console.log('Deslogeado correctamente');
        setLogged(false)
      })
  }

  return (
    <LoginContext.Provider value={{ logged, loginGoogle, login, register, logout, userEmail, userPhoto, userName }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogIn = () => {
  return useContext(LoginContext);
};
