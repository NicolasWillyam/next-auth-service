import NewVerificationForm from "@/components/auth/new-erification-form";
import React from "react";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
