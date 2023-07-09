import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth, signIn } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
// import SignUpForm from "../../components/sign-up-form/sign-up-form";

const defaultFormFields = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signIn(email, password);
            alert("You're Loged In !!!");
        } catch (error) {
            console.log(error.message);
        };
    };



    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h2>Already have an account?</h2>
            <span>Sign In with your Email and Password</span>
            <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
            <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
            <Button buttonType="google" onClick={logGoogleUser}>Sign up with google</Button>
            <Button onClick={handleSubmit}>Sign in</Button>
        </div>
    );
};

export default SignInForm;