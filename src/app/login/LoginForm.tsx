// app/login/LoginForm.tsx
import React from 'react';

const LoginForm: React.FC = () => {
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
            <button type='submit'>Login</button>
        </form>
    );
};

export default LoginForm;
