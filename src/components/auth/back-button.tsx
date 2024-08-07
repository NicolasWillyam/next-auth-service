import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className="mx-auto text-xs text-destructive hover:text-link hover:underline underline-offset-2 font-normal"
    >
      {label}
    </Link>
  );
};

export default BackButton;
