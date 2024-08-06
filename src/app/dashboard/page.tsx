// src/app/dashboard/page.tsx

import React from "react";
import Background from "../Background";
import PublicNav from "../navigation/PublicNav";
import UserNav from "../navigation/UserNav";

const Dashboard: React.FC = () => {
    return (
        <Background>
            <PublicNav />
            <UserNav />
        </Background>
    );
};

export default Dashboard;
