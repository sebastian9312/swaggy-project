import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

//

provider.setCustomParameters({
    prompt: "select_account"
});

//

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid)

    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { uid, displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                createAt,
                uid,
                displayName,
                email,
                ...additionalInformation
            })
        } catch (error) {
            console.log(`Problem, error is: ${error}`);
        };
    };

    return userDocRef;

    // console.log(userSnapshot.exists());
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};





