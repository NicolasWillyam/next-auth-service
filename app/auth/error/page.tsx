import ErrorCard from "@/components/auth/error-card";
import React from "react";
import SuspenseFallback from "@/components/suspense-fallback";

const AuthErrorPage = () => {
  return (
    <SuspenseFallback>
      <ErrorCard />
    </SuspenseFallback>
  );
};

export default AuthErrorPage;
