import React from "react";
import { Card, CardHeader } from "../ui/card";
import Header from "./header";
import BackButton from "./back-button";
import CardWrapper from "./card-wrapper";
import { Button } from "../ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel=""
    >
      <div className="flex items-center w-full justify-end ">
        <Button
          size="sm"
          variant="link"
          asChild
          className="px-0 text-destructive text-xs hover:text-link flex gap-2"
        >
          <Link href="/auth/reset">
            <FaArrowLeftLong size={10} /> Back to login
          </Link>
        </Button>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
