// app/login/LoginForm.tsx

'use client';

import React, { useState } from 'react';
import './login.css'

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('Login successful');

        setEmail('');
        setPassword('');
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='title'>Welcome Back</div>
            <div className='subtitle'>Please log into your account</div>
            <div className='input-container ic1'>
                <input id='email' className='email-input' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className='input-container ic2'>
                <input id='password' className='password-input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type='submit' className='submit'>Submit</button>
        </form>

    );
};

export default LoginForm;
