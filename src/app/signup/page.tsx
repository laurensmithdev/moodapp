// src/app/signup/page.tsx
import React from "react";
import Link from "next/link";
import SignupForm from "./SignupForm";
import PublicNav from "../navigation/PublicNav";

const SignupPage: React.FC = () => {
  return (
    <div>
      <PublicNav />
      <main style={{ marginTop: '100px' }}>
        <h1></h1>
        <SignupForm />
        <div className="subtext">
          Already have an account?{" "}
          <Link legacyBehavior href="/login">
            <a>Log in</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
