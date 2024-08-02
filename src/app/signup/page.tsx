// src/app/signup/page.tsx
import React from 'react';
import Link from 'next/link';
import SignupForm from './SignupForm';

const SignupPage: React.FC = () => {
  return (
    <div>
      <div>
        <h1></h1>
        <SignupForm />
      </div>
      <div className='subtext'>Already have an account?{' '}
        <Link legacyBehavior href='/login'>
          <a>Log in</a>
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
