import React, { use } from "react";

import { currentUser } from "@/lib/auth";

import UserInfo from "@/components/user/user-info";

const ServerPage = async () => {
  const user = await currentUser();

  return <UserInfo label={"Client Side"} user={user} />;
};

export default ServerPage;
