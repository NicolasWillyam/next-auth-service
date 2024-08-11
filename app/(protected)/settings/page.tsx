"use client";
import React from "react";
import { auth } from "../../../auth";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    // logout(); // Client action
    signOut(); // Server action
  };

  return <div></div>;
};

export default SettingsPage;
