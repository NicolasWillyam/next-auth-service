"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";

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
      <div className="text-xs text-destructive text-center mt-14">
        Your name and photo are displayed to users who invite you to a workspace
        using your email. By continuing, you acknowledge that you understand and
        agree to the <span className="text-white/70">Terms & Conditions</span>{" "}
        and <span className="text-white/70">Privacy Policy</span>
      </div>
    </div>
  );
};

export default CardWrapper;
