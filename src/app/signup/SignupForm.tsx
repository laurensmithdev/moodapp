// src/app/signup/SignupForm.tsx
import React from "react";

const SignupForm: React.FC = () => {
    return (
        <form>
            <label>
                Email:
                <input type='email' name='email' required />
            </label>
            <label>
                Password:
                <input type='password' name='password' required />
            </label>
            <button type='submit'>Signup</button>
        </form>
    );
};

export default SignupForm;
