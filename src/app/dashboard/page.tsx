// src/app/dashboard/page.tsx

import React from "react";
import Background from "../Background";
import PublicNav from "../navigation/PublicNav";
import UserNav from "../navigation/UserNav";
import MoodLog from "./MoodLog";

const Dashboard: React.FC = () => {
    return (
        <Background>
            <PublicNav />
            <UserNav />
            <h1>Dashboard</h1>
            <MoodLog />
        </Background>
    );
};

export default Dashboard;
