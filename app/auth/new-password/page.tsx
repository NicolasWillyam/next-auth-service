import React from "react";
import NewPasswordForm from "@/components/auth/new-password-form";
import SuspenseFallback from "@/components/suspense-fallback";

const NewPasswordPage = () => {
  return (
    <SuspenseFallback>
      <NewPasswordForm />
    </SuspenseFallback>
  );
};

export default NewPasswordPage;
