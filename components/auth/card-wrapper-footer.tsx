"use client";
import React from "react";

const CardWrapperFooter = () => {
  return (
    <div className="text-xs text-destructive text-center mt-14">
      Your name and photo are displayed to users who invite you to a workspace
      using your email. By continuing, you acknowledge that you understand and
      agree to the <span className="text-white/70">Terms & Conditions</span> and{" "}
      <span className="text-white/70">Privacy Policy</span>
    </div>
  );
};

export default CardWrapperFooter;
