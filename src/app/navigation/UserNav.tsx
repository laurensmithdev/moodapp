// src/app/navigation/UserNav.tsx
import React from "react";
import Script from "next/script";
import './UserNav.css';

const UserNav: React.FC = () => {
    return (
        <div className='sidebar'>
            <a href='/dashboard'>Dashboard</a>
            <a href='/overview'>Overview</a>
            <a href='/account'>Account</a>
        </div>
    );
}

export default UserNav;
