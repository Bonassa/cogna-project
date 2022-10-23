
import { createContext, useState, useEffect } from "react";
import { auth, firestore } from '../services/firebaseConnection';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  User, 
  AuthError,
  signOut as signOutFromFirebase
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

interface AuthContextProps {
  isAuthenticated: boolean;
  user: UserType | null;
  loading: boolean;
  loadingAuth: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

type UserType = {
  uid: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children } : AuthProviderProps){
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

  useEffect(() => {
    async function loadUser(){
      const userFromStorage = localStorage.getItem('USER_UID');

      if(userFromStorage){
        const docUserRef = doc(firestore, 'users', userFromStorage);
        const userProfile = await getDoc(docUserRef);

        if(userProfile.exists()){
          let data : UserType = {
            uid: userProfile.data().uid,
            name: userProfile.data().name,
            email: userProfile.data().email,
            avatarUrl: userProfile.data().avatarUrl
          }

          setUser(data);
        } else {
          localStorage.removeItem('USER_UID');
          setUser(null);
        }
      }
    }

    loadUser().finally(() => setLoading(false));
  }, [])

  async function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    setLoadingAuth(true);

    signInWithPopup(auth, provider)
    .then( async (result) => {
      const uid = result.user.uid;
      const docUserRef = doc(firestore, 'users', uid);
      const userProfile = await getDoc(docUserRef);
      
      let userInfos : UserType = {
        uid: result.user.uid,
        name: result.user.displayName as string,
        email: result.user.email as string,
        avatarUrl: result.user.photoURL
      }

      if(userProfile.exists() === false){
        await setDoc(doc(firestore, `users/${uid}`), userInfos)
      }

      storageUser(uid);
      setUser(userInfos);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoadingAuth(false))
  }

  async function signOut(){
    await signOutFromFirebase(auth)
    .then(() => {
      localStorage.removeItem('USER_UID');
      setUser(null);
    })
  } 

  function storageUser(uid : string){
    localStorage.setItem('USER_UID', uid);
  }

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated: !!user,
        user,
        loading,
        loadingAuth,
        signInWithGoogle,
        signOut
      }} 
    >
      { children }
    </AuthContext.Provider>
  )
}