import RegisterForm from "@/components/auth/register-form";
import SuspenseFallback from "@/components/suspense-fallback";
import React, { Suspense } from "react";

const RegisterPage = () => {
  return (
    <SuspenseFallback>
      <RegisterForm />
    </SuspenseFallback>
  );
};

export default RegisterPage;
