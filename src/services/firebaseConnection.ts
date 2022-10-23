
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhaktHLYVKSXQyFnQQHffKPbbGA6NV0AM",
  authDomain: "cogna-project.firebaseapp.com",
  projectId: "cogna-project",
  storageBucket: "cogna-project.appspot.com",
  messagingSenderId: "432996727849",
  appId: "1:432996727849:web:e64143b5d02f721c40f038"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);