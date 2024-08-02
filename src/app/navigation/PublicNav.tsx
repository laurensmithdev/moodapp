// src/app/navigation/PublicNav.tsx
import React from "react";
import Link from "next/link";
import './PublicNav.css';

const PublicNav: React.FC = () => {
    return (
        <div className='topnav'>
            <Link href='/' className='topnav-title'>
                MoodSync
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/login' className='topnav-btn'>
                            Log in
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup' className='topnav-btn'>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PublicNav;
