// src/app/page.tsx
import React from "react";
import Link from "next/link";
import './globals.css'

const Home: React.FC = () => {
  return (
    <div>
      <div className='topnav'>
        <nav>
          <ul>
            <li>
              <a className='topnav-btn' href='/login'>Login</a>
              <a className='topnav-btn' href='/signup'>Signup</a>
            </li>
          </ul>
        </nav>
      </div>

      <h1 className="homepage">Mood App</h1>

    </div>

  );
};

export default Home;
