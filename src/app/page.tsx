// src/app/page.tsx

import React from "react";
import Link from "next/link";
import './globals.css';
import styles from './page.module.css';
import PublicNav from "./navigation/PublicNav";
import Background from "./Background";

const Home: React.FC = () => {
  return (
    <Background>
      <PublicNav />
      <div className={styles.container_welcome}>
        <div className={styles.flexbox_h5}>
          <h3>Welcome to MoodSync</h3>
        </div>
        <div className={styles.flexbox_p}>
          <p>MoodSync is an interactive mood tracker that integrates daily mood logs, sleep patterns, and exercise data into one visual platform. With dynamic insights and easy-to-use features, it helps you understand how your mood relates to your daily activities.</p>
        </div>
        <div className='buttons-container'>
          <Link href='/login' className='publicnav-btn'>Log in</Link>
          <Link href='/signup' className='publicnav-btn'>Sign up</Link>
          <Link href='/dashboard' className='publicnav-btn'>Dashboard</Link>
        </div>
      </div>
    </Background>
  );
};

export default Home;
