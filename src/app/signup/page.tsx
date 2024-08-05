// src/app/signup/page.tsx
import React from "react";
import Link from "next/link";
import SignupForm from "./SignupForm";
import PublicNav from "../navigation/PublicNav";
import Background from "../Background";
import '../globals.css'

const SignupPage: React.FC = () => {
  return (
    <Background>
      <div className="page-container">
        <PublicNav />
        <main className="signup-main">
          <SignupForm />
          <div className="subtext">
            Already have an account?{" "}
            <Link legacyBehavior href="/login">
              <a>Log in</a>
            </Link>
          </div>
        </main>
      </div>
    </Background>
  );
};

export default SignupPage;
