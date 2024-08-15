import React from "react";
import NavBar from "./_components/nav-bar";

import { Toaster } from "@/components/ui/sonner";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-y-10 justify-center">
      <NavBar />

      <Toaster />
      {children}
    </div>
  );
};

export default ProtectedLayout;
