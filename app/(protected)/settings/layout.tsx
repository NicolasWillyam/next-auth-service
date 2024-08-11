import React from "react";
import NavBar from "./_components/nav-bar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-y-10 justify-center">
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
