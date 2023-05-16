import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALBk4qHbZQv8IThhTnafWJlu5nGJOayKo",
    authDomain: "swaggy-db.firebaseapp.com",
    projectId: "swaggy-db",
    storageBucket: "swaggy-db.appspot.com",
    messagingSenderId: "443182567036",
    appId: "1:443182567036:web:cedb95f4b4c31ce0dd83f9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);