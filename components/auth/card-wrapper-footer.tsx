"use client";
import React from "react";

const CardWrapperFooter = () => {
  return (
    <div className="text-xs font-light text-destructive text-center mt-14">
      Your name and photo are displayed to users who invite you to a workspace
      using your email. By continuing, you acknowledge that you understand and
      agree to the{" "}
      <span className="text-black/70 font-normal underline underline-offset-2">
        Terms & Conditions
      </span>{" "}
      and{" "}
      <span className="text-black/70 font-normal underline underline-offset-2">
        Privacy Policy
      </span>
    </div>
  );
};

export default CardWrapperFooter;
