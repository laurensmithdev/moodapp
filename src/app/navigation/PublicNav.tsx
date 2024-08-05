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
        </div>
    );
};

export default PublicNav;
