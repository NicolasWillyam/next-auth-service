"use client";

import { Span } from "next/dist/trace";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const route = useRouter();
  const onClick = () => {
    route.push("/auth/login");
  };

  if (mode == "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
