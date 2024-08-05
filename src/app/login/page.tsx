// src/app/login/page.tsx
import React from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import PublicNav from '../navigation/PublicNav';
import Background from '../Background'
import '../globals.css'

const LoginPage: React.FC = () => {
    return (
        <Background>
            <div className="page-container">
                <PublicNav />
                <main className="login-main">
                    <LoginForm />
                    <div className='subtext'>
                        Don't have an account?{' '}
                        <Link legacyBehavior href='/signup'>
                            <a>Sign up</a>
                        </Link>
                    </div>
                </main>
            </div>
        </Background>
    );
};

export default LoginPage;
