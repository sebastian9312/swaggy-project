import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALBk4qHbZQv8IThhTnafWJlu5nGJOayKo",
    authDomain: "swaggy-db.firebaseapp.com",
    projectId: "swaggy-db",
    storageBucket: "swaggy-db.appspot.com",
    messagingSenderId: "443182567036",
    appId: "1:443182567036:web:cedb95f4b4c31ce0dd83f9"
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Google

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// getting data from auth to db

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
        } catch (e) {
            console.log(e.message);
        };
    };

    return userDocRef;
};

// EMAIL AND PASSWORD

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

// Signing OUT

export const signOutUser = async () => await signOut(auth);


// Auth LISTENER

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);






// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// const asyncRedirect = async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//         await createUserDocumentFromAuth(response.user);
//     };
// };
// useEffect(() => {
//     asyncRedirect();
// }, []);

// <button onClick={signInWithGoogleRedirect}>Sign up with google R</button>
// import { getRedirectResult } from "firebase/auth";







