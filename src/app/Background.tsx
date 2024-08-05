import React, { ReactNode } from "react";
import './globals.css'

interface BackgroundProps {
    children: ReactNode;
  }

  const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
      <div className="background">
        {children}
      </div>
    );
  };

export default Background;
