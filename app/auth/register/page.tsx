import RegisterForm from "@/components/auth/register-form";
import React, { Suspense } from "react";

const RegisterPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
