// src/app/navigation/UserNav.tsx
import React from "react";
import Link from "next/link";
import './UserNav.css';

const UserNav: React.FC = () => {
    return (
        <div className='sidebar'>
            <a className='dashboard' href='/dashboard'>Home</a>
            <a className='overview' href='/overview'>Overview</a>
            <a className='account' href='/account'>Account</a>
        </div>
    )
}

export default UserNav;
