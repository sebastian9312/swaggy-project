import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password do not match");
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create account. Emial already in use");
            }
            console.log(error.message);
        }
    };

    return (
        <div>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;