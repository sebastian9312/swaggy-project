import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        // console.log(response.user.displayName);
        // console.log(response.user.email);

        createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>Sign in Component</h1>
            <button onClick={logGoogleUser}>Sign up with google</button>
        </div>
    );
};

export default SignIn;