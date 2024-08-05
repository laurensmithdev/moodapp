// src/app/page.tsx
import React from "react";
import Link from "next/link";
// import './globals.css';
import './page.module.css';
// import SVGComponents from "./SVGComponents";
import PublicNav from "./navigation/PublicNav";
import Background from "./Background";

const Home: React.FC = () => {
  return (
    <Background>
      <PublicNav />
      <div className='container-welcome'>
        <div className='flexbox-h5'>
          <h3>Welcome to MoodSync</h3>
        </div>
        <div className='flexbox-p'>
          <p>MoodSync is an interactive mood tracker that integrates daily mood logs, sleep patterns, and exercise data into one visual platform. With dynamic insights and easy-to-use features, it helps you understand how your mood relates to your daily activities.</p>
        </div>
        <div className='buttons-container'>
          <Link href='/login' className='topnav-btn'>Log in</Link>
          <Link href='/signup' className='topnav-btn'>Sign up</Link>
        </div>
      </div>
    </Background>
  );
};

export default Home;
