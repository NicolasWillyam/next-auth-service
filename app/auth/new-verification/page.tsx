import NewVerificationForm from "@/components/auth/new-verification-form";
import SuspenseFallback from "@/components/suspense-fallback";
import React from "react";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <SuspenseFallback>
      <NewVerificationForm />
    </SuspenseFallback>
  );
};

export default NewVerificationPage;
