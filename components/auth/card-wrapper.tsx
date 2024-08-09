"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";
import CardWrapperFooter from "./card-wrapper-footer";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div className="w-[320px] mb-10">
      <Card className="p-0 grid grid-cols-1 gap-4 ">
        <CardHeader className="p-0">
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent className="p-0 mt-4">{children}</CardContent>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </Card>
      {showSocial && <CardWrapperFooter />}
    </div>
  );
};

export default CardWrapper;
