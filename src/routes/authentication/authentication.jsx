// import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

// const SignIn = () => {
//     const logGoogleUser = async () => {
//         const { user } = await signInWithGooglePopup();

//         await createUserDocumentFromAuth(user);
//     };

//     return (
//         <div>
//             <h1>Sign in Component</h1>
//             <button onClick={logGoogleUser}>Sign up with google</button>
//             <SignUpForm />
//         </div>
//     );
// };

// export default SignIn;

const Authentication = () => {
    return (
        <div>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;


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

