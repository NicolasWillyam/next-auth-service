import React from "react";
import { Card, CardHeader } from "../ui/card";
import Header from "./header";
import BackButton from "./back-button";
import CardWrapper from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center text-white"></div>
    </CardWrapper>
  );
};

export default ErrorCard;
