"use client";

import React, { use } from "react";

import { currentUser } from "@/lib/auth";

import UserInfo from "@/components/user/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import SuspenseFallback from "@/components/suspense-fallback";

const ServerPage = () => {
  const user = useCurrentUser();

  return <UserInfo label={"Client Side"} user={user} />;
};

export default ServerPage;
