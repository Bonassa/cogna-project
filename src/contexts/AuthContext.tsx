
import { createContext, useState, useEffect } from "react";
import { auth, firestore } from '../services/firebaseConnection';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  AuthError,
  signOut as signOutFromFirebase,
  UserCredential,
  createUserWithEmailAndPassword
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
  signInWithEmail: (data : SignInData) => Promise<void | AuthError>;
  signUpWithEmail: (data : SignUpData) => Promise<void | AuthError>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

type UserType = {
  uid: string;
  name: string;
  email: string;
  avatarUrl: string;
}

type SignInData = {
  email: string;
  password: string;
}

type SignUpData = {
  name: string;
  email: string;
  password: string;
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

    signInWithPopup(auth, provider)
    .then( async (result) => {
      const uid = result.user.uid;
      const docUserRef = doc(firestore, 'users', uid);
      const userProfile = await getDoc(docUserRef);
      
      let userInfos : UserType = {
        uid: result.user.uid,
        name: result.user.displayName as string,
        email: result.user.email as string,
        avatarUrl: result.user.photoURL as string
      }

      if(userProfile.exists() === false){
        await setDoc(doc(firestore, `users/${uid}`), userInfos)
      }

      storageUser(uid);
      setUser(userInfos);
    })
    .catch((error) => console.log(error))
  }

  async function signInWithEmail({ email, password } : SignInData): Promise<void | AuthError>{
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then( async (value : UserCredential) => {
      const uid = value.user.uid;
      const docUserRef = doc(firestore, 'users', uid);
      const userProfile = await getDoc(docUserRef);

      let data: UserType = {
        uid: uid,
        name: userProfile.data()?.name,
        email: userProfile.data()?.email,
        avatarUrl: userProfile.data()?.avatarUrl,
      }
      
      storageUser(uid);
      setUser(data);
    })
    .catch((error: AuthError) => {
      throw new Error(error.code);
    })
    .finally(() => {
      setLoadingAuth(false);
    })
  }

  async function signUpWithEmail({ email, name, password } : SignUpData): Promise<void | AuthError>{
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
    .then( async (value) => {
      const uid = value.user.uid;

      let data: UserType = {
        uid: uid,
        email: email,
        name: name,
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/cogna-project.appspot.com/o/images%2Fdefault%2Favatar.png?alt=media&token=f2e9f626-06f7-43c3-be6b-04116be7e74b'
      }

      await setDoc(doc(firestore, `users/${uid}`), data)
      .then(() => {
        storageUser(uid);
        setUser(data);
      })
    })
    .catch((error : AuthError) => {
      throw new Error(error.code);
    })
    .finally(() => {
      setLoadingAuth(false);
    })
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
        signInWithEmail,
        signUpWithEmail,
        signOut
      }} 
    >
      { children }
    </AuthContext.Provider>
  )
}