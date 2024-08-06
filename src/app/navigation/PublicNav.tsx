// src/app/navigation/PublicNav.tsx
import React from "react";
import Link from "next/link";
import './PublicNav.css';

const PublicNav: React.FC = () => {
    return (
        <div className='publicnav'>
            <Link href='/' className='publicnav-title'>
                MoodSync
            </Link>
        </div>
    );
};

export default PublicNav;
