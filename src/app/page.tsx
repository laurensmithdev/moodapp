// src/app/page.tsx
import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>

  );
};

export default Home;
