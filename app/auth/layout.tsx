import NavHeader from "@/components/auth/nav-header";
import React, { ReactNode } from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen relative">
      <NavHeader />
      <div className="w-full  flex items-center justify-center py-16 pt-36 h-screen">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
