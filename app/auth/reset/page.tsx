import React from "react";
import ResetForm from "@/components/auth/reset-form";
import SuspenseFallback from "@/components/suspense-fallback";

const ResetPage = () => {
  return (
    <SuspenseFallback>
      <ResetForm />
    </SuspenseFallback>
  );
};

export default ResetPage;
