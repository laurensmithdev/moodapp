// src/app/login/page.tsx
import React from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import PublicNav from '../navigation/PublicNav';

const LoginPage: React.FC = () => {
    return (
        <div>
            <PublicNav />
            <main style={{ marginTop: '100px'}}>
                <h1></h1>
                <LoginForm />
                <div className='subtext'>Don't have an account?{' '}
                    <Link legacyBehavior href='/signup'>
                        <a>Sign up</a>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
