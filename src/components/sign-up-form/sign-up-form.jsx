import { useState } from "react";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={() => { }}>
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