// src/app/login/page.tsx
import React from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
    return (
        <div>
            <h1></h1>
            <LoginForm />
            <div className='subtext'>Don't have an account?{' '}
                <Link legacyBehavior href='/signup'>
                    <a>Sign up</a>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
