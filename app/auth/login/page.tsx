import LoginForm from "@/components/auth/login-form";
import SuspenseFallback from "@/components/suspense-fallback";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <SuspenseFallback>
      <LoginForm />
    </SuspenseFallback>
  );
};

export default LoginPage;
