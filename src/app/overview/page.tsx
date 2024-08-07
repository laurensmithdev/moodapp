// src/app/overview/page.tsx

import React from 'react';
import Background from '../Background';
import PublicNav from '../navigation/PublicNav';
import UserNav from '../navigation/UserNav';

const UserOverview: React.FC = () => {
    return (
        <Background>
            <PublicNav />
            <UserNav />
            <h1>Overview</h1>
        </Background>
    );
};

export default UserOverview;
