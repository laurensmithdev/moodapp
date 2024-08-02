// src/app/signup/page.tsx
import React from 'react';
import SignupForm from './SignupForm';

const SignupPage: React.FC = () => {
  return (
    <div>
      <div className='topnav'>
        <nav>
          <ul>
            <li>
              <a className='topnav-btn' href='/'>Home</a>
              <a className='topnav-btn' href='/login'>Login</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h1></h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
