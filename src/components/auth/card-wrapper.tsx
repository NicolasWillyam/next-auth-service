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
    <div className="w-[400px] mb-10">
      <Card className="shadow-xl bg-secondary border border-white/10 rounded-[20px] text-white">
        <CardHeader className="pt-10 pb-5">
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent className="px-10">{children}</CardContent>
        {/* {showSocial && (
            <CardFooter>
            <Social />
            </CardFooter>
        )} */}
        <CardFooter className="pb-8">
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
      <CardWrapperFooter />
    </div>
  );
};

export default CardWrapper;
