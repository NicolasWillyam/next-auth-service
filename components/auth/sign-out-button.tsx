"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/login" });
    router.push("/auth/login"); // Redirect to login page after sign-out
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
