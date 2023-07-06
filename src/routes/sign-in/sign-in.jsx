import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();

        createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>Sign in Component</h1>
            <button onClick={logGoogleUser}>Sign up with google</button>
            {/* <SignUpForm /> */}
        </div>
    );
};

export default SignIn;
