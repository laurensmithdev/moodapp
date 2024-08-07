// src/app/account/page.tsx

import React from "react";
import Background from "../Background";
import PublicNav from "../navigation/PublicNav";
import UserNav from "../navigation/UserNav";

const UserAccount: React.FC = () => {
    return (
        <Background>
            <PublicNav />
            <UserNav />
            <h1>Account</h1>
        </Background>
    );
};

export default UserAccount;
