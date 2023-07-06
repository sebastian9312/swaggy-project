import { useState } from "react";

// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

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
            // const response = await createAuthUserWithEmailAndPassword(email, password);
            // await createUserDocumentFromAuth(response.user, { displayName })

        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input required type="text" onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input required type="email" onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input required type="password" onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;