import NavHeader from "@/components/auth/nav-header";
import React, { ReactNode } from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <NavHeader />
      <div className="w-full  flex items-center justify-center  py-11">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
